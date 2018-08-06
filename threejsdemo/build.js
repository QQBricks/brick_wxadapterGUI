
/**
 * 打包脚本
 */

//配置，只需要修改这里就好了

let config = {
    gameId:3004,                    //游戏id
    fileList:['main.js','images','entry.js','canvas.js','config.json']   //需要拷贝的文件列表
}



let gameId = config.gameId+"";
let fs = require('fs');

function copyFile(src, dist){
    fs.createReadStream(src).pipe(fs.createWriteStream(dist));
}
function copyDir(src, dist, callback) {
    fs.access(dist, function(err){
        if(err){
            // 目录不存在时创建目录
            fs.mkdirSync(dist);
        }
        _copy(null, src, dist);
    });

    function _copy(err, src, dist) {
        if(err){
            callback(err);
        } else {
            fs.readdir(src, function(err, paths) {
                if(err){
                    callback(err)
                } else {
                    paths.forEach(function(path) {
                        var _src = src + '/' +path;
                        var _dist = dist + '/' +path;
                        fs.stat(_src, function(err, stat) {
                            if(err){
                                callback(err);
                            } else {
                                // 判断是文件还是目录
                                if(stat.isFile()) {
                                    fs.writeFileSync(_dist, fs.readFileSync(_src));
                                } else if(stat.isDirectory()) {
                                    // 当是目录是，递归复制
                                    copyDir(_src, _dist, callback)
                                }
                            }
                        })
                    })
                }
            })
        }
    }
}

function rmDir(path) {
    var files = [];
    if(fs.existsSync(path)) {
        files = fs.readdirSync(path);
        files.forEach(function(file, index) {
            var curPath = path + "/" + file;
            if(fs.statSync(curPath).isDirectory()) { // recurse
                rmDir(curPath);
            } else {
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
};


//新建目录
if(fs.existsSync(gameId)){

   rmDir(gameId);
}
fs.mkdirSync(gameId,'0777');

let desFolder = gameId+"/";

if(config.fileList){
    config.fileList.forEach(function (val,index) {
        if(fs.existsSync(val)){
            if(fs.lstatSync(val).isDirectory()){
                copyDir(val,desFolder+val);
            }else {
                copyFile(val,desFolder+val)
            }
        }


    })
}

//推送到游戏
let cmd = `adb shell rm -rf /sdcard/tencent/mobileqq/.apollo/game/${gameId};adb push ${gameId} /sdcard/tencent/mobileqq/.apollo/game`

let process = require('child_process');

process.exec(cmd,function (error, stdout, stderr) {
    if(!error){
        console.log("Copy file to /sdcard/tencent/mobileqq/.apollo/game/"+gameId);
       rmDir(gameId);
    }else {
        console.log("Copy filed for "+error+" "+stdout);
    }

})
