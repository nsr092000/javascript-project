// let orderno = 0
// const block = document.getElementsByClassName('executeBlock')
// const cardHeader = document.getElementsByClassName('card-header')

// const executeOrder = ()=>{
//  let input = document.getElementById('orderId').value   
//  block[orderno].style.display = 'block'
//  cardHeader[orderno].innerText = 'Order ID: ' + input;
//  orderno++
// }

//// small Example to understand concept
 /*

 <div>
 <h5>hello</h5>
 </div>

 let newDiv = document.createElement('div')
 let newH5 = document.createElement('h5')
 let newH5text = document.createTextNode('using js') 

 parentDiv.appendChild(newDiv)
 newDiv.appendChild(newH5)
 newH5.appendChild(newH5text)
 */

let parentDiv = document.getElementById('Parentrow')
let emptyordergif = document.getElementById('emptyimage') 

const executeOrder = ()=>{

    emptyordergif.style.display = 'none'

 let input = document.getElementById('orderId').value   
 if(!input.length){
     alert('Please Enter a valid order ID!')
     return
 }

 createNewOrderColumn(input)
 
 customerorder(input)
 .then(orderdetails)
 .then(orderpicked)
 .then(productrecieved)
 .then(()=>{
     document.getElementById(input).innerText = 'customer is happy with the product'
 })
 .catch((err)=>console.log(err))

}




// <!-- 
//         <div class="col-md-4 mt-4 executeBlock">
//             <div class="card text-center">
//                 <div class="card-header">
//                   Order ID: 555646500001
//                 </div>
//                 <div class="card-body">
//                   <h5 class="card-title">Bill</h5>
//                   <p class="card-text">Items: ABC, DEF, XYZ </p>
//                   Processing...
//                 </div>
//                 <div class="card-footer"> 
//                   <a class="btn btn-primary">Cancel</a>
//                 </div>
                
//               </div>
//         </div> -->


