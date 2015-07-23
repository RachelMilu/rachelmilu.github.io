function getArray(array,r){
    var rsArrayOuter=[]
    for(var i=0;i<array.length;i++){
        var rsArrInner = [];
        for(var j=0;j<array.length;j++){
          var x = (array[j].x-array[i].x);
          var y = (array[j].y-array[i].y);
          var rs = x*x + y*y;
          if(rs < r*r){
            rsArrInner.push(j);
          }
        }
        rsArrayOuter.push(rsArrInner);

    }
    console.log(rsArrayOuter)
    return rsArrayOuter;
}

function getBiggestSubArr(rsArrayOuter){
  var temp=[];
  var index = 0;
  var length = 0;
  for(var i=0;i<rsArrayOuter.length;i++){
    if(rsArrayOuter[i].length > length){
        length = rsArrayOuter[i].length;
        temp = rsArrayOuter[i];
        index = i;
    }

  }
  var rs = {};
  rs.index = index;
  rs.biggestArr = temp;
  return rs;
}



function removeItems(originArr,array2){
  var rs = JSON.parse(JSON.stringify(originArr));
  array2.sort(function(x,y){return x-y});
  rs.sort(function(x,y){return x-y});

  for(var i=array2.length-1;i>-1;i--){
    console.log("----------------------")
    console.log("rs",rs)
    for(var j=0;j<rs.length;j++){
        if(rs[j] == array2[i]){
          rs.splice(j,1);
        }
    }
    
    console.log("array2[i]",array2[i]);
    console.log("rs",rs)
  }
  console.log(rs)
  return rs

}
