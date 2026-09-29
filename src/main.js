window.addEventListener('DOMContentLoaded',(event)=>{
 const volumeWarning = document.getElementById('volumeWarning')
 const howContainer = document.getElementById('howContainer')
 const startInvestigation = document.getElementsByClassName('startInvestigation')[0]
 const investigationWarning = document.getElementById('investigationWarning')
 volumeWarning.addEventListener('click',(event)=>{
  volumeWarning.style.display = 'none'
  howContainer.style.opacity = 1
  const bgSound = document.getElementById('bgSound')
  console.log(bgSound.play().then(ev=>console.log(ev)).catch(err=>console.log(err)))
})
startInvestigation.addEventListener('click',(event)=>{
  howContainer.style.opacity = 0
  investigationWarning.style.opacity = 1
  console.log(investigationWarning)
  console.log('Done')
})
})



