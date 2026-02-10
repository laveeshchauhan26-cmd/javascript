//  let i=0;
//  while(i<32){
//     console.log(i);
//     i++;
//  }



// ques-1:
for(let i=1;i<11;i++){
    console.log(i);
}


// ques-2:

let i=10;
while(i>0){
    console.log(i);
    i--;
}

// ques-3:
for(let i=1;i<21;i++){
    if(i%2===0){
        console.log(i);
    }
}

// ques-5:
let n=5;
for(let i =1;i<11;i++){
    console.log(`n*${i}=${n*i}`);

}


// ques-6:
let sum=0;
for(let i=1;i<101;i++){
    sum+=i;
    console.log(sum);
}

// ques-8:   ask the user for a number and print whether each number from 1 to that number is even or odd.

let val= prompt("give a number:");
for (let i=1;i<=val;i++){
    if(i%2===0){
        console.log(`${i} is even`);
    }
    else{
        console.log(`${i} is odd`);
    }
}


// ques-9:
// count how many number between 1 to 100 are divisible by 3 and 5 both.

 let count=0; 
for(let i=1;i<101;i++){
    if(i%3===0&&i%5===0){
        count++;
    }
}
console.log(count);




// break statement 

for(let i=0;i<101;i++){
    console.log(i);
    if(i%7===0){
        break;
    }
    // console.log(i);

}


for(let i=1;i<101;i++){
    console.log(i);
    if(i%3===0){
        continue;
    }

}