/*

- order placed
- After 2s, Chef received the order and started preparing
- After 3s,  Pizza sauce added
- After 5s, First layer of cheeze added
- After 10s, Topping added
- After 5s, Second layer of cheeze added
- After 15s, Pizza baked!
- After 5s, Oregano added and packed
- order Successful goes to customer

*/

let orderplaced = document.getElementById("orderPlaced");
let chefrecieved = document.getElementById("chefRecieved");
let pizzasauce = document.getElementById("pizzaSauce");
let firstcheese = document.getElementById("firstCheese");
let toppingadded = document.getElementById("toppingAdded");
let secondcheese = document.getElementById("secondCheese");
let pizzabaked = document.getElementById("pizzaBaked");
let oreganoadded = document.getElementById("oreganoAdded");
let packagerecived = document.getElementById("packageRecieved")
let package = document.getElementById("packageHandover");
let value = false;

function refresh(){
            window.location.reload();
} 

const callbackfunc = ()=>{
    let packagehandover = document.getElementById('packageHandover')

    packagehandover.style.display = "block"
    packagehandover.innerText = "Order Successful goes to the customer"
    
}


const executeOrder = (callback) => {

    let orderId = document.getElementById("OrderId").value
    
    if(value){
        alert('Click on CLEAR button and then enter the new Order-Id!')
        return
    }
    
    if(orderId){
    value = true;
    orderplaced.style.display = "block"
    orderplaced.innerText = `${orderId} :- Order Placed`
   
    setTimeout(() => {
       
        chefrecieved.style.display = "block"
        chefrecieved.innerText = "Chef received the order and started preparing"
        
        setTimeout(() => {
            

        pizzasauce.style.display = "block"
        pizzasauce.innerText = "pizza sauce added"
        
            setTimeout(() => {
                
        firstcheese.style.display = "block"
        firstcheese.innerText = "First layer of cheese added"
       
                setTimeout(() => {
                    
        toppingadded.style.display = "block"
        toppingadded.innerText = "Topping added"
        
                    setTimeout(() => {
                        
        secondcheese.style.display = "block"
        secondcheese.innerText = "second layer of cheeze added"
        
                        setTimeout(() => {
                            
        pizzabaked.style.display = "block"
        pizzabaked.innerText = "pizza baked!"
        

                            setTimeout(() => {

                                
        oreganoadded.style.display = "block"
        oreganoadded.innerText = "oregano added and packed"
        
                                setTimeout(() => {
                                    
        packagerecived.style.display = "block"
        packagerecived.innerText = "packaged received at counter"
       
                                    callback()
                                }, 4000)
                            }, 8000)
                        }, 5000)

                    }, 5000)
                }, 10000);


            }, 5000);

        }, 3000);

    }, 2000);


    }
    


}
