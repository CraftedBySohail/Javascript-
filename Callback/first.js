function placeOrder(){
    console.log("Payment is in Progress");

    setTimeout(()=>{
        console.log("Payment is received and order is placed");
    },3000);
}


function preparingOrder(){
    console.log("YOur food is preparing started");

        setTimeout(()=>{
        console.log("Your order is prepared");
    },3000);


}

placeOrder();
preparingOrder();
