

function prime(num){
    for(let i=0;i<=num;i++){
        if(num%i==0){
            return true
        }
    }
    return false;
}

let ans=prime(13);
if(ans){
    console.log("primr")
}else{
    console.log("Not prime")
}