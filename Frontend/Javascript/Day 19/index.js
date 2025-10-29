



// How can we resolve our problem of Callback Hell using Promise 

//  zomato application 


const orderDetail = {
     orderId:  123134,
     food: ["Pizza" , "Burger", "Pasta" , "Coke"],
     cost: 620,
     customer_name: "John Doe",
     customer_Location:"Dwarka",
     restaurant_Location:"Delhi"
}

function placedOrder(orderDetail) {
     console.log(`${orderDetail.cost} Payment is in progress`);

   return new Promise((resolve,reject)=>{

      setTimeout(() => {
        if(Math.random()>0.9) {
         console.log("Your Payment is received and order get placed");
         orderDetail.status = true;
         resolve(orderDetail);
        }
        else {
           reject("Payment is failed");
        }
         
     },3000) 
     });
}

// const Callback = (orderDetail) => {
//      preparingOrder(orderDetail);
// }


function preparingOrder(orderDetail) {
     console.log(`Your Food preparation started of ${orderDetail.food}`);
    return new Promise((resolve,reject)=> {
      setTimeout(() => { 
        if(Math.random()>0.05){
          console.log("Your order is now prepared");
         orderDetail.token = 123;
        resolve(orderDetail);
        }
        else {
          reject("Food item is not present at restuarant");
        }
         
     },3000);

    })
     
}


function pickUpOrder(orderDetail) {
     console.log(`Delivery boy is on way to pickup order from ${orderDetail.restaurant_Location}`);
    return new Promise((resolve,reject) => {
        setTimeout(() => {
        if(Math.random()>0.05) {
        console.log("I have picked up the order"); 
        orderDetail.received  = true;
        }
        else {
          reject("Delivery boy Unable to reach restuarant");
        }
       
     },3000);
      resolve(orderDetail);
    });
     
}



// placeOrder(preparingOrder(pickUpOrder)); it's the problem which not works properly 


 function deliverOrder() {
      console.log(`I am on my way to deliver order ${orderDetail.customer_Location}`);
     return new Promise((resolve,reject) =>{ 
       setTimeout(()=> {
        if (Math.random()>0.05) {
          console.log("Order delivered successfully");
          orderDetail.delivery = true; 
        }
        else {
          reject("Order Unsuccessful");
        }
          
          resolve(orderDetail);
       },3000);  
     });
       
 }

//  Callback Hell 

// placeOrder(orderDetail , (orderDetail) => {
//      preparingOrder( orderDetail,(orderDetail) => {
//          pickUpOrder(orderDetail,() => {
//                 deliverOrder(orderDetail);    
//          });
//      });
// });


// const Callback = () => {
//      pickUpOrder();
// }


// Resolve in this way to our Callback hell problem using promises 

placedOrder(orderDetail)
.then((orderDetail) => preparingOrder(orderDetail))
.then((orderDetail)=> pickUpOrder(orderDetail))
.then((orderDetail)=> deliverOrder(orderDetail))
.then((orderDetail) => {
      console.log(orderDetail);
})
.catch((error) => {
    console.log("Error", error);
});





















