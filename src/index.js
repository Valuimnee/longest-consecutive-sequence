module.exports = function longestConsecutiveLength(array) {
  // your solution here
  if(array.length==0){
    return 0;
  }
  var set=new Set();
  var lehgth=0;
  var currLength;
  var currEl;
  for(var i=0;i<array.length; i++){
    set.add(array[i]);
  }
  for(var i=0;i<array.length; i++){
    if(set.has(array[i])){
      currLength=0;
      currEl=array[i];
      while(set.has(currEl)){
        currLength++;
        set.delete(currEl);
        currEl++;
      }
      currEl=array[i]-1;
      while(set.has(currEl)){
        currLength++;
        set.delete(currEl);
        currEl--;
      }
      if(currLength>lehgth){
        lehgth=currLength;
      }
    }
  }
  return lehgth;
}
