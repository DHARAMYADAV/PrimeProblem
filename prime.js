
//day-4 code
function prime(number){
    let factors=0;
    for(let i=2;i<=number;i++){
        if(number%i==0){
            factors++
        }
    }
    if(factors===1){
        return true;
    }
    return false;
}

let ans=prime(13);
if(ans){
    console.log("Prime Number")
}else{
    console.log("Not Prime Number")
}