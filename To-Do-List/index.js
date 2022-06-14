let parentDiv = document.getElementById('sectiondivid')
let inputt = document.getElementById('inputid')
let priority = document.getElementById('priorityid')
let date = document.getElementById('dateid')

const createTask = ()=>{

    let input = inputt.value
    let priorityy = priority.value 
    let datee = new Date(date.value).toLocaleDateString("en-US",{
        year: "numeric",
        month:"long",
        day:"numeric",
        hour:"numeric",
        minute:"numeric",
        second:"numeric"  
    })
    

    if(!input.length){
        alert('Enter a Task!')
       return
    }

    let cardiv = document.createElement('div')
    let cardheading = document.createElement('div')
    let cardheadingspan = document.createElement('span') 
    let deadlinedisplayspan = document.createElement('span')
    let spantext = document.createTextNode(priorityy + " Priority") 
    let cardbodydiv = document.createElement('div')
    let cardbodytext = document.createElement('p')
    let cardtext = document.createTextNode(input)
    let deletebody = document.createElement('a')
    let deletebodytext = document.createTextNode('Delete')

   parentDiv.appendChild(cardiv)
   cardiv.appendChild(cardheading)
   cardiv.appendChild(cardbodydiv)
   cardheading.appendChild(cardheadingspan)
   cardheading.appendChild(deadlinedisplayspan)
   cardheadingspan.appendChild(spantext)
   deadlinedisplayspan.innerText = datee
   cardbodydiv.appendChild(cardbodytext)
   cardbodytext.appendChild(cardtext)
   cardbodydiv.appendChild(deletebody)
   deletebody.appendChild(deletebodytext)
   
   cardiv.classList = 'card text-start'
   cardheading.classList = 'card-header heading'
   cardbodydiv.classList = 'card-body'
   cardbodytext.classList = 'card-text'
   deletebody.classList = 'btn btn-danger buttonposition'
   deadlinedisplayspan.classList = 'displaydate'
  
   // dragable Elements:-
   /*
    draggable = "true"   
    1. ondragStart 
    2. ondrag

    parent Elements (where you have to drag the draggable elements)
    1. ondragover
    2. ondrop
*/
   if(priorityy == "High"){
       cardheading.classList = "bg-danger header"
       cardbodydiv.classList = "card-body-high"
    }
   else if(priorityy == "Medium"){
       cardheading.classList = "bg-warning header"
       cardbodydiv.classList = "card-body-medium"
   }
   else if (priorityy == "Low"){
       cardheading.classList = "bg-info header"
       cardbodydiv.classList = "card-body-low"
       
    }

   deletebody.addEventListener('click',()=>{

    cardiv.style.display = 'none'
   })

   clearfield()

}

const clearfield = ()=>{

    inputt.value = ''

}

