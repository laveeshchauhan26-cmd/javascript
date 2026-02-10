// function myfunction( str){
//      let count=0;
//      for(const char of str){
//         if(char==="a"||char==="e"||char==="i"||char==="0"||char==="u"){
//         count++;
//         }
//      }
//      console.log(count);
// }




const countvow=(str)=>{
     let count=0;
      for(const char of str){
        if(char==="a"||char==="e"||char==="i"||char==="0"||char==="u"){
        count++;  
        }
      }
    console.log(count);
    return count; 
};

