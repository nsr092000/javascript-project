
function output(){

    let display1 = Number(document.getElementById("item1").value);
    let display2 = Number(document.getElementById("item2").value);
    let display3 = Number(document.getElementById("item3").value);
    let display4 = Number(document.getElementById("item4").value);
    let display5 = Number(document.getElementById("item5").value);


let sum;
let total;

    let arr = [display1,display2,display3,display4,display5];
let arr2 = [];
for(let i=0;i<arr.length;i++){
  sum = 0;
  total = 0;
    if(arr[i]>200000){
        
        sum = arr[i]+arr[i]*0.1;
        total = sum - sum*0.002;
        arr2.push(total);
          
    }
    else if(arr[i]>100000){
        sum = arr[i]+arr[i]*0.05;
        total = sum-sum*0.0005;
        arr2.push(total);
 
    }
    else{
        total = arr[i]+ arr[i]*0.05;
        arr2.push(total);
 
    }

}

document.getElementById("output1").innerText = arr2[0];
document.getElementById("output2").innerText = arr2[1];
document.getElementById("output3").innerText = arr2[2];
document.getElementById("output4").innerText = arr2[3];
document.getElementById("output5").innerText = arr2[4];

}
