   $rootScope.formate = function(ms){
        var ms = Number(ms);
        var date = new Date(ms);
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var HH1 = Math.floor(date.getHours()/10);
        var HH2 =date.getHours()%10;
        var mm1 = Math.floor(date.getMinutes()/10);
        var mm2 =date.getMinutes()%10;

        return date.getFullYear() + "-" + (month<10?('0'+month):month) + "-" + (day<10?('0'+day):day);
    }
