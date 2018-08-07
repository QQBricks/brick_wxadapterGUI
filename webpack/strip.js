var exec = require("child_process").exec
exec('sed -i ".bak" -e "s/\\"use strict\\"//g" dist/entry.js')
exec('sed -i ".bak" -e "s/__proto__.__proto__/__proto__.__proto__.__proto__/g" dist/entry.js')
