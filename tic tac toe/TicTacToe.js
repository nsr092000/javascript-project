let grid = document.getElementsByClassName('value');
let turn = document.getElementById('turnchange')


console.log(grid)
let current = 1;

const playername = {
    1 : 'X',
    2 : 'O'
}

const winningCombination = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const addBackground = (indexArray)=>{

    indexArray.forEach(index=> grid[index].style.cssText = 'background-color:green; color:white')
}


const checkWinning = ()=>{

    for(let i=0;i<winningCombination.length;i++){
   
      combination = winningCombination[i]
      let value = grid[combination[0]].innerText 
   
       if(combination.every(combinationindex => grid[combinationindex].innerText && grid[combinationindex].innerText === value)){
           addBackground(combination)
           return value   
       }
    }
    return 'No Winner'
     }

     const refresh = ()=>{
         window.location.reload()
     }

const singleMove = (index)=>{

    if(!grid[index].innerText){

    grid[index].innerText = current === 1 ? playername[1] : playername[2]
    current = current === 1 ? 2: 1
    turn.innerText = `Player ${current}'s Turn`

    let winningPlayer = checkWinning()
    if(winningPlayer != 'No Winner'){
        document.getElementById('won').innerText = winningPlayer === 'X' ? 'Player 1 Won!' : 'PLayer 2 Won!'
        document.getElementById('won').style.color = 'red'
        setTimeout(()=>{
          refresh()
        },5000)
    }
    }

}

