module.exports = function check(str, bracketsConfig) {
  // your solution

    var obj={};
    var op_br_list=[','];
    var str_open=[];
    var str_close=[];
    

    function contains(arr, elem) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == elem) {
                return true;
            }
        }
        return false;
    }

    //------------------------

    for(let i=0;i<bracketsConfig.length;i++){
        obj[bracketsConfig[i][1]]=bracketsConfig[i][0];  
    }

    for(let i=0;i<bracketsConfig.length;i++){
        str_open.push(bracketsConfig[i][0]);
        str_close.push(bracketsConfig[i][1]);
      }

    
    


    for(let i=0;i<str.length;i++){

      if (contains(str_close,str[i] )) {
        var tmp=op_br_list.pop();
        
        if(obj[str[i]]!=tmp){
          if (contains(str_open,str[i] )) {
            op_br_list.push(tmp);
            op_br_list.push(str[i]);

          }
          else {return false;}
        }
      }
        else {
          if(contains(str_open,str[i])){
            op_br_list.push(str[i]);  
          }
        }
        
      }
      //-------------------------------
     
     
     
     
     
     
      
    // if(op_br_list.length % 2==0){return true;}
    if(op_br_list.length!=1){
          return false;
        }
    return true;
}

