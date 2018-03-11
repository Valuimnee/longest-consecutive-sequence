module.exports = function longestConsecutiveLength(array) {
  // your solution here
  if(array.length<2){
    return array.length;
  }
  var map=new Map();
  var currLength;
  for(var i=0;i<array.length; i++){
    if(map.has(array[i])){
      continue;
    }else{
      if(map.has(array[i]-1)&&map.has(array[i]+1)){
        currLength=map.get(array[i]-1)+map.get(array[i]+1)+1;
        map.set(array[i]- map.get(array[i]-1), currLength);
        map.set(array[i]+ map.get(array[i]+1), currLength);
        map.set(array[i], currLength);
      }else if(map.has(array[i]-1)){
        currLength=map.get(array[i]-1)+1;
        map.set(array[i]- map.get(array[i]-1), currLength);
        map.set(array[i], currLength);
      }else if(map.has(array[i]+1)){
        currLength=map.get(array[i]+1)+1;
        map.set(array[i]+ map.get(array[i]+1), currLength);
        map.set(array[i], currLength);
      }else {
        map.set(array[i], 1);
      }
    }
  }
  return Math.max(...map.values());
}
