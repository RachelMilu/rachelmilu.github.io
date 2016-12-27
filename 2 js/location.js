function getLocationWitoutHash() {
    var str = location.protocol + "//"
    if(arguments.length){
        for(var i=0; i<arguments.length; i++){
            var key = arguments[i];
            if(key === "port"){
                if(window.location[key] === "8080" || window.location[key] === "443"){

                }else {
                    str += (":"+window.location[key]);
                }

            } else{
                str += (window.location[key])
            }
        }
        return str;
    }
    return "";
}
