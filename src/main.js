window.addEventListener('DOMContentLoaded',(event)=>{
 const volumeWarning = document.getElementById('volumeWarning')
 const howContainer = document.getElementById('howContainer')
 const startInvestigation = document.getElementsByClassName('startInvestigation')[0]
 const investigationWarning = document.getElementById('investigationWarning')
 const finalWarning = document.getElementsByClassName('finalWarning')[0]
 
 const wooshSound = document.getElementById('wooshSound')
 volumeWarning.addEventListener('click',(event)=>{
  wooshSound.play()
  volumeWarning.style.display = 'none'
  volumeWarning.remove()
  howContainer.style.opacity = 1
  const bgSound = document.getElementById('bgSound')
  bgSound.play().then(ev=>console.log(ev)).catch(err=>console.log(err))
})
startInvestigation.addEventListener('click',(event)=>{
  wooshSound.play()
  howContainer.style.opacity = 0
  howContainer.remove()
  investigationWarning.style.opacity = 1
})
finalWarning.addEventListener('click',(event)=>{
  wooshSound.play()
  investigationWarning.style.opacity = 0
  setTimeout(()=>{
    investigationWarning.remove()
  },1000)
})
})



