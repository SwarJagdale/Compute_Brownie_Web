function calcprice(){
var x = document.getElementById("quantity").value; 
if (x<5){

    num=10*x;
    price.innerHTML = num.toString();
}

if(x>=5 && x<10){
num=10*x*0.9;
price.innerHTML = num.toString();
}

if(x>=10){
    num=8*x;
    price.innerHTML = num.toString()
}}
