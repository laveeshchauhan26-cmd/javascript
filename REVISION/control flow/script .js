// function getvalue(val){
//     if(val<100) return"A"
//     else if(val<75) return "B"
//     else if(val<55) return "c"
//     else return"fail"
// }
//  console.log(getvalue(89));





function  getgrade(score){
    if(score>=90&&score<=100){
        return "A+";
    }

    else if(score>=80&&score<=89){
        return "A";
    }
     else if(score>=70&&score<=79){
        return "B";
    }
     else if(score>=60&&score<=69){
        return "C";
    }
     else if(score>=33&&score<=59){
        return "D";
    }
     else if(score>=0&&score<=32){
        return "FAIL";
    }
    else{
        return "invalid marks";
    }

}
 console.log(getgrade(95));
