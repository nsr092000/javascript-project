
const customerorder = (orderNumber)=>{

    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            document.getElementById(orderNumber).innerText = 'Customer Places order'
            resolve(orderNumber)
        }, 3000);
    })
}

const orderdetails = (orderNumber)=>{

    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            document.getElementById(orderNumber).innerText = 'Order details sent to inventory'
            resolve(orderNumber)
        }, 5000);
    })
}

const orderpicked = (orderNumber)=>{

    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            document.getElementById(orderNumber).innerText = 'Order is picked,packed and shipped'
            resolve(orderNumber)
        }, 8000);
    })
}


const productrecieved  = (orderNumber)=>{

    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            document.getElementById(orderNumber).innerText = 'Product is received by Customer'
            resolve(orderNumber)
        }, 4000);
    })
}

