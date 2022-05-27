

const createNewOrderColumn = (input)=>{

    let divcol = document.createElement('div')
   let carddiv = document.createElement('div')
   let cardheaderdiv = document.createElement('div')
   let cardheadertext = document.createTextNode('Order ID: '+ input)
   let cardbodydiv = document.createElement('div')
   let cardTitle = document.createElement('h5')
   let cardtitletext = document.createTextNode('Bill : $10000')
   let cardText = document.createElement('p')
   let cardTexttext = document.createTextNode('LG TV, Apple Laptop, Samsung Mobile')
   let status = document.createElement('div')
   let cardbodytext = document.createTextNode('Processing...')
   let cancelanchor = document.createElement('a')
   let canceltext = document.createTextNode('Cancel')
   let cardfooterdiv = document.createElement('div')
   
   parentDiv.appendChild(divcol)
   divcol.appendChild(carddiv)
   carddiv.appendChild(cardheaderdiv)
   carddiv.appendChild(cardbodydiv)
   carddiv.appendChild(cardfooterdiv)
   cardbodydiv.appendChild(cardTitle)
   cardTitle.appendChild(cardtitletext)
   cardbodydiv.appendChild(cardText)
   cardText.appendChild(cardTexttext)
   cardbodydiv.appendChild(status)
   status.appendChild(cardbodytext)
   cardfooterdiv.appendChild(cancelanchor)
   cancelanchor.appendChild(canceltext)
   cardheaderdiv.appendChild(cardheadertext)
   
  
   divcol.classList = 'col-md-4 mt-4 executeBlock'
   carddiv.classList = 'card text-center'
   cardheaderdiv.classList = 'card-header headingstyle'
   cardbodydiv.classList = 'card-body'
   cardfooterdiv.classList = 'card-footer'
   cardTitle.classList = 'card-title'
   cardText.classList ='card-text'
   status.classList = 'bg-success statuss'
   status.id = input
   cancelanchor.classList = 'btn btn-primary w-100 layout'
  
   cancelanchor.addEventListener('click',()=>{
     //  parentDiv.removeChild(divcol)
     divcol.style.display = 'none'
   })
   }
  