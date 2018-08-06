
window.generateGetter=function(name) {
	switch (name)
	{
	case "mask":
		return function anonymous() { return this.data.mask.value; }
	case "otherMatrix":
		return function anonymous() { return this.data.otherMatrix.value; }
	case "uAlpha":
		return function anonymous() { return this.data.uAlpha.value; }

	case "projectionMatrix":	return function anonymous( ) {return this.data.projectionMatrix.value;}
	case "uSamplers":	return function anonymous( ) {return this.data.uSamplers.value;}
	case "translationMatrix":	return function anonymous( ) {return this.data.translationMatrix.value;}
	case "projectionMatrix":	return function anonymous( ) {return this.data.projectionMatrix.value;}
	case "alpha":	return function anonymous( ) {return this.data.alpha.value;}
	case "tint":	return function anonymous( ) {return this.data.tint.value;}
	case "projectionMatrix":	return function anonymous( ) {return this.data.projectionMatrix.value;}
	case "translationMatrix":	return function anonymous( ) {return this.data.translationMatrix.value;}
	case "uTransform":	return function anonymous( ) {return this.data.uTransform.value;}
	case "uColor":	return function anonymous( ) {return this.data.uColor.value;}
	case "uMapCoord":	return function anonymous( ) {return this.data.uMapCoord.value;}
	case "uClampFrame":	return function anonymous( ) {return this.data.uClampFrame.value;}
	case "uClampOffset":	return function anonymous( ) {return this.data.uClampOffset.value;}
	case "uSampler":	return function anonymous( ) {return this.data.uSampler.value;}
	case "projectionMatrix":	return function anonymous( ) {return this.data.projectionMatrix.value;}
	case "translationMatrix":	return function anonymous( ) {return this.data.translationMatrix.value;}
	case "uTransform":	return function anonymous( ) {return this.data.uTransform.value;}
	case "uColor":	return function anonymous( ) {return this.data.uColor.value;}
	case "uSampler":	return function anonymous( ) {return this.data.uSampler.value;}
	case "projectionMatrix":	return function anonymous( ) {return this.data.projectionMatrix.value;}
	case "translationMatrix":	return function anonymous( ) {return this.data.translationMatrix.value;}
	case "uTransform":	return function anonymous( ) {return this.data.uTransform.value;}
	case "uColor":	return function anonymous( ) {return this.data.uColor.value;}
	case "uSampler":	return function anonymous( ) {return this.data.uSampler.value;}
	case "projectionMatrix":	return function anonymous( ) {return this.data.projectionMatrix.value;}
	case "uColor":	return function anonymous( ) {return this.data.uColor.value;}
	case "uSampler":	return function anonymous( ) {return this.data.uSampler.value;}

	}
	console.log("generateGetter lose"+name);
	return null;
}

window.generateSetter=function (name) {
/*	switch (name)
	{
    case "projectionMatrix":
      return function anonymous(value ) {
        this.data.projectionMatrix.value = value;
        var location = this.data.projectionMatrix.location;
        this.gl.uniformMatrix3fv(location, false, value);
      }
    case "uSamplers":
      return function anonymous(value ) {
        this.data.uSamplers.value = value;
        var location = this.data.uSamplers.location;
        this.gl.uniform1iv(location, value);
      }
	  

    case "uSampler":
      return function anonymous(value ) {
        this.data.uSampler.value = value;
        var location = this.data.uSampler.location;
        this.gl.uniform1i(location, value);
      }
    case "alpha":
      return function anonymous(value ) {
        this.data.alpha.value = value;
        var location = this.data.alpha.location;
        this.gl.uniform1f(location, value);
      }
    case "translationMatrix":
      return function anonymous(value ) {
        this.data.translationMatrix.value = value;
        var location = this.data.translationMatrix.location;
        this.gl.uniformMatrix3fv(location, false, value);
      }
    case "tint":
      return function anonymous(value ) {
        this.data.tint.value = value;
        var location = this.data.tint.location;
        this.gl.uniform3f(location, value[0], value[1], value[2]);
      }
      break;
    case "uTransform":
      return function anonymous(value ) {
        this.data.uTransform.value = value;
        var location = this.data.uTransform.location;
        this.gl.uniformMatrix3fv(location, false, value);
      }
    case "uClampFrame":
      return function anonymous(value ) {
        this.data.uClampFrame.value = value;
        var location = this.data.uClampFrame.location;
        this.gl.uniform4f(location, value[0], value[1], value[2], value[3]);
      }
    case "uColor":
      return function anonymous(value ) {
        this.data.uColor.value = value;
        var location = this.data.uColor.location;
        this.gl.uniform4f(location, value[0], value[1], value[2], value[3]);
      }
    case "uMapCoord":
      return function anonymous(value ) {
        this.data.uMapCoord.value = value;
        var location = this.data.uMapCoord.location;
        this.gl.uniformMatrix3fv(location, false, value);
      }
    case "uClampOffset":
      return function anonymous(value ) {
        this.data.uClampOffset.value = value;
        var location = this.data.uClampOffset.location;
        this.gl.uniform2f(location, value[0], value[1]);
      }
	}*/

	switch(name)
	{
    case "otherMatrix":
      return function anonymous(value ) {
        this.data.otherMatrix.value = value;
        var location = this.data.otherMatrix.location;
        this.gl.uniformMatrix3fv(location, false, value);
      }
	case "mask":
      return function anonymous(value ) {
        this.data.mask.value = value;
        var location = this.data.mask.location;
        this.gl.uniform1i(location, value);
      }
   case "uAlpha":
      return function anonymous(value ) {
        this.data.uAlpha.value = value;
        var location = this.data.uAlpha.location;
        this.gl.uniform1i(location, value);
      }

	case "projectionMatrix":
	return function anonymous(value /**/) {
	this.data.projectionMatrix.value = value;
var location = this.data.projectionMatrix.location;
this.gl.uniformMatrix3fv(location, false, value);
	}
case "uSamplers":
	return function anonymous(value /**/) {
	this.data.uSamplers.value = value;
var location = this.data.uSamplers.location;
this.gl.uniform1iv(location, value);
	}
case "translationMatrix":
	return function anonymous(value /**/) {
	this.data.translationMatrix.value = value;
var location = this.data.translationMatrix.location;
this.gl.uniformMatrix3fv(location, false, value);
	}
case "projectionMatrix":
	return function anonymous(value /**/) {
	this.data.projectionMatrix.value = value;
var location = this.data.projectionMatrix.location;
this.gl.uniformMatrix3fv(location, false, value);
	}
case "alpha":
	return function anonymous(value /**/) {
	this.data.alpha.value = value;
var location = this.data.alpha.location;
this.gl.uniform1f(location, value);
	}
case "tint":
	return function anonymous(value /**/) {
	this.data.tint.value = value;
var location = this.data.tint.location;
this.gl.uniform3f(location, value[0], value[1], value[2]);
	}
case "projectionMatrix":
	return function anonymous(value /**/) {
	this.data.projectionMatrix.value = value;
var location = this.data.projectionMatrix.location;
this.gl.uniformMatrix3fv(location, false, value);
	}
case "translationMatrix":
	return function anonymous(value /**/) {
	this.data.translationMatrix.value = value;
var location = this.data.translationMatrix.location;
this.gl.uniformMatrix3fv(location, false, value);
	}
case "uTransform":
	return function anonymous(value /**/) {
	this.data.uTransform.value = value;
var location = this.data.uTransform.location;
this.gl.uniformMatrix3fv(location, false, value);
	}
case "uColor":
	return function anonymous(value /**/) {
	this.data.uColor.value = value;
var location = this.data.uColor.location;
this.gl.uniform4f(location, value[0], value[1], value[2], value[3]);
	}
case "uMapCoord":
	return function anonymous(value /**/) {
	this.data.uMapCoord.value = value;
var location = this.data.uMapCoord.location;
this.gl.uniformMatrix3fv(location, false, value);
	}
case "uClampFrame":
	return function anonymous(value /**/) {
	this.data.uClampFrame.value = value;
var location = this.data.uClampFrame.location;
this.gl.uniform4f(location, value[0], value[1], value[2], value[3]);
	}
case "uClampOffset":
	return function anonymous(value /**/) {
	this.data.uClampOffset.value = value;
var location = this.data.uClampOffset.location;
this.gl.uniform2f(location, value[0], value[1]);
	}
case "uSampler":
	return function anonymous(value /**/) {
	this.data.uSampler.value = value;
var location = this.data.uSampler.location;
this.gl.uniform1i(location, value);
	}
case "projectionMatrix":
	return function anonymous(value /**/) {
	this.data.projectionMatrix.value = value;
var location = this.data.projectionMatrix.location;
this.gl.uniformMatrix3fv(location, false, value);
	}
case "translationMatrix":
	return function anonymous(value /**/) {
	this.data.translationMatrix.value = value;
var location = this.data.translationMatrix.location;
this.gl.uniformMatrix3fv(location, false, value);
	}
case "uTransform":
	return function anonymous(value /**/) {
	this.data.uTransform.value = value;
var location = this.data.uTransform.location;
this.gl.uniformMatrix3fv(location, false, value);
	}
case "uColor":
	return function anonymous(value /**/) {
	this.data.uColor.value = value;
var location = this.data.uColor.location;
this.gl.uniform4f(location, value[0], value[1], value[2], value[3]);
	}
case "uSampler":
	return function anonymous(value /**/) {
	this.data.uSampler.value = value;
var location = this.data.uSampler.location;
this.gl.uniform1i(location, value);
	}
case "projectionMatrix":
	return function anonymous(value /**/) {
	this.data.projectionMatrix.value = value;
var location = this.data.projectionMatrix.location;
this.gl.uniformMatrix3fv(location, false, value);
	}
case "translationMatrix":
	return function anonymous(value /**/) {
	this.data.translationMatrix.value = value;
var location = this.data.translationMatrix.location;
this.gl.uniformMatrix3fv(location, false, value);
	}
case "uTransform":
	return function anonymous(value /**/) {
	this.data.uTransform.value = value;
var location = this.data.uTransform.location;
this.gl.uniformMatrix3fv(location, false, value);
	}
case "uColor":
	return function anonymous(value /**/) {
	this.data.uColor.value = value;
var location = this.data.uColor.location;
this.gl.uniform4f(location, value[0], value[1], value[2], value[3]);
	}
case "uSampler":
	return function anonymous(value /**/) {
	this.data.uSampler.value = value;
var location = this.data.uSampler.location;
this.gl.uniform1i(location, value);
	}
case "projectionMatrix":
	return function anonymous(value /**/) {
	this.data.projectionMatrix.value = value;
var location = this.data.projectionMatrix.location;
this.gl.uniformMatrix3fv(location, false, value);
	}
case "uColor":
	return function anonymous(value /**/) {
	this.data.uColor.value = value;
var location = this.data.uColor.location;
this.gl.uniform4f(location, value[0], value[1], value[2], value[3]);
	}
case "uSampler":
	return function anonymous(value /**/) {
	this.data.uSampler.value = value;
var location = this.data.uSampler.location;
this.gl.uniform1i(location, value);
	}
	}

	console.log("generateSetter lose"+name);
	return null;
}