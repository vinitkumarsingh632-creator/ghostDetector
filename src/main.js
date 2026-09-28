window.addEventListener('DOMContentLoaded',(event)=>{
 const volumeWarning = document.getElementById('volumeWarning')
 volumeWarning.addEventListener('click',(event)=>{
  volumeWarning.style.display = 'none'
  const bgSound = document.getElementById('bgSound')
  console.log(bgSound.play().then(ev=>console.log(ev)).catch(err=>console.log(err)))
})
})



