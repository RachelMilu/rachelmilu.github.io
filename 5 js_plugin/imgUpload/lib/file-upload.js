;(function(window) {
    function ImgUpload (elClass,config, callback, errorHandler) {
        document.querySelector(elClass).addEventListener("change",loadImageFile,false)
        var oFReader = new FileReader(), rFilter = /^(?:image\/bmp|image\/cis\-cod|image\/gif|image\/ief|image\/jpeg|image\/jpeg|image\/jpeg|image\/pipeg|image\/png|image\/svg\+xml|image\/tiff|image\/x\-cmu\-raster|image\/x\-cmx|image\/x\-icon|image\/x\-portable\-anymap|image\/x\-portable\-bitmap|image\/x\-portable\-graymap|image\/x\-portable\-pixmap|image\/x\-rgb|image\/x\-xbitmap|image\/x\-xpixmap|image\/x\-xwindowdump)$/i

        function loadImageFile() {
            if (document.querySelector(elClass).files.length === 0) {
                return
            }
            var oFile = document.querySelector(elClass).files[0]
            if (!rFilter.test(oFile.type)) {
                showAlert("请确定上传的文件为图片格式")
                return;
            }
            oFReader.readAsDataURL(oFile)
        }

        oFReader.onloadend = function (oFREvent) {
            var fileSelected = document.querySelector(elClass).files[0];
            var filename = fileSelected.name
            var pic = oFREvent.target.result
            if(fileSelected.size < 5242881){
                /*上传图片*/
                var options={}, postConfig = {};
                config(pic, options, postConfig);
                uploadImg(options, postConfig, postImgCallback)
            }else{
                showAlert("图片大小不能超过5M")
            }
        };

        function uploadImg(options, postConfig, callback){
            var imgUrl = "";
            var xmlhttp;
            if (window.XMLHttpRequest) {
                xmlhttp=new XMLHttpRequest();
            }else {
                xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlhttp.withCredentials = "true";
            xmlhttp.open("POST",postConfig.url,true);
            xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
            xmlhttp.setRequestHeader("Access-Control-Allow-Credentials","*");
            xmlhttp.send(options);
            xmlhttp.onreadystatechange=function()
            {
                if (xmlhttp.readyState==4 && xmlhttp.status==200) {
                    callback(xmlhttp);
                } else {
                    errorHandler(xmlhttp)
                }
            }

        }
        function clearInputVal (elClass) {
            document.querySelector(elClass).value = null
        }

        function showAlert (msg) {
            //这里可以trigger一个事件来使用外部的自定义alert或者~~
            alert(msg)
        }

    }
    window.ImgUpload = ImgUpload;

})(window);
