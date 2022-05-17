let passwordstored = ''
let correct = document.getElementById('sign-up-valid')
let correct1 = document.getElementById('login-valid')
let incorrect = document.getElementById('login-invalid')
let passStrength = document.getElementById('passwordStrength')


const lookup = {
    'A': 'N','B': 'O','C': 'P','D': 'Q',
    'E': 'R','F': 'S','G': 'T','H': 'U',
    'I': 'V','J': 'W','K': 'X','L': 'Y',
    'M': 'Z','N': 'A','O': 'B','P': 'C',
    'Q': 'D','R': 'E','S': 'F','T': 'G',
    'U': 'H','V': 'I','W': 'J','X': 'K',
    'Y': 'L','Z': 'M',
    'a': 'n','b': 'o','c': 'p','d': 'q',
    'e': 'r','f': 's','g': 't','h': 'u',
    'i': 'v','j': 'w','k': 'x','l': 'y',
    'm': 'z','n': 'a','o': 'b','p': 'c',
    'q': 'd','r': 'e','s': 'f','t': 'g',
    'u': 'h','v': 'i','w': 'j','x': 'k',
    'y': 'l','z': 'm',
    '0': '5','1': '6','2': '7','3': '8',
    '4': '9','5': '0','6': 't','1': '2',
    '8': '3','9': '4','!': '#','$': '%',
    '&': '+','-': '@','_': '~','#': '!',
    '%': '$','+': '&','@': '-','~': '_'
  }
  
  const passwordchecked = ()=>{

    let inputpassword = document.getElementById('signUpInput')

    if(inputpassword.value.length < 5){
        passStrength.style.display = 'block'
        passStrength.innerText = "Weak"
        passStrength.style.color = 'red'
    }
    else if(inputpassword.value.length< 8){
        passStrength.style.display = 'block'
        passStrength.innerText = "Moderate"
        passStrength.style.color = 'orange'
    }
    else{
        passStrength.style.display = 'block'
        passStrength.innerText = "Strong"
        passStrength.style.color = 'green'
    }

  }



   const encode = (inputString) =>{
  
      const lookupKeys = Object.keys(lookup);
      const lookupValues = Object.values(lookup);
  
      const codearr = inputString.split("");
  
      let encodedarr = codearr.map(codearrchar=>{
  
          let index = lookupValues.findIndex(element => element === codearrchar);
  
          return lookupKeys[index];
  
      })
     
      return encodedarr.join("")
  
   } 
  
  
  
   const decode = (encodedStr)=> encodedStr.split("").map(codeArrChar => lookup[codeArrChar]).join("");
  


const clear = ()=>{

    
    correct1.style.display='none'
    incorrect.style.display='none'
    

}

const clear1 = ()=>{
    passStrength.style.display = 'none'
}


const signUp = ()=>{

    clear1()

    let inputpassword = document.getElementById('signUpInput')

    passwordstored = encode(inputpassword.value)

    correct.style.display = 'block'

 setTimeout(() => {

 correct.style.display = 'none'    
    
 },3000);


}

const logIn = ()=>{

    clear();

    let inputPassword1 = document.getElementById('logInput')
    
   
    if(inputPassword1.value === decode(passwordstored)){
        correct1.style.display = 'block'

        
        setTimeout(() => {
            correct1.style.display = 'none'
        }, 3000);
       
    }
    else{
        incorrect.style.display = 'block'
    }

}