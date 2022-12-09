let num=13;
let count=0;
for(let j=2;j<=num;j++){
  if(num%j==0){
    count++;
  }
}
if(count==2){
  console.log("Yes");
}else{
  console.log("No");
}