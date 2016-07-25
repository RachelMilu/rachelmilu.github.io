//100元 分10个随机红包 6-12元之间



function rad(total, count, min, max){
    var totalS = total*100,
        minS = min*100,
        maxS = max*100;
    var rs = [];
    //random:range [0, 1)
    /*output: [min, max)*/
    function share (totalS, count, minS, maxS) {
        var minSum = totalS*count;
        var left = totalS - minS;
        if( left < 0){//不够分
            return false;
        }
        else if(left == 0){
            for(var i=0;i<count;i++){
                rs.push(minS/100);
            }
            return rs;
        }else{

            var randomS, nextFlag;
            for(var i=0;i<500;i++){
                randomS = next(totalS,count,minS, maxS)
                if(randomS < 0){
                    console.log('....',i)
                }else{
                    break;
                }
            }

            if(!randomS){
                console.log('....没有取到合适的',i)
                return false;
            }

            console.log('breaking...',randomS)
            rs.push(randomS/100)
            share(totalS-randomS, count-1, minS, maxS);

        }

    }
    share(totalS, count, minS, maxS);
    return rs;
}
function next(totalS,count,minS,maxS){
    var randomS ,minusLeft;
    randomS = random(minS, maxS);
    minusLeft = (totalS - randomS) ;
    return (minusLeft > minS*count && minusLeft < maxS*count)?randomS:-1;
}
function random(min, max){
    return Math.round(Math.random()*(max-min)+min)
}


/*
 flag表示边界值：
 “lr”：两者都包含，
 “l”：包含左边界，
 “r”：包含右边界，
 “”：不定义则两者都不包含
 */
//
//function random(min, max, flag){
//    var temp = Math.random()*(max-min);
//    switch(flag){
//        case "lr":
//            temp = Math.round(temp)
//            break;
//
//        case "l":
//            temp = Math.floor(temp)
//            break;
//
//        case "r":
//            temp = Math.ceil(temp)
//            break;
//
//        default:
//            break;
//
//    }
//    return +min
//}
