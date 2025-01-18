document.body.addEventListener('keyup', (event) => {
    sounds(event.code.toLowerCase())
})



  document.querySelector('.composer button').addEventListener('click', () =>{ 
    let listSong = document.querySelector('#input').value
    
    if(listSong !== '' ){
       let songArray = listSong.split('')
       playComposion(songArray)
    }
 
  });

   function sounds(Toutch){
    let ElementSound = document.querySelector(`#s_${Toutch}`)
    let newKey = document.querySelector(`div [data-key="${Toutch}"]`)


    if(ElementSound){ 
        ElementSound.play()
        ElementSound.currentTime = 0
    } 

    if(newKey){
       newKey.classList.add('active')

       setTimeout(() => {
        newKey.classList.remove('active')

       }, 300)


       
    }
   }
   
   function playComposion(songArray){
    let time = 0;

    for(let songItem of songArray){
        setTimeout(()=>{
          sounds(`key${songItem}`)

        }, time);
        time += 250;
     }
   }

















































/*
document.body.addEventListener('keyup', (event)=> {
     sounds(event.code.toLowerCase())
})

function sounds(keyToutch){
    let soundElement  = document.querySelector(`#s_${keyToutch}`)
    if(soundElement){
     soundElement.play();
    }
}
*/ 