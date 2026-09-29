window.addEventListener('DOMContentLoaded',(event)=>{
 const volumeWarning = document.getElementById('volumeWarning')
 const howContainer = document.getElementById('howContainer')
 const startInvestigation = document.getElementsByClassName('startInvestigation')[0]
 const investigationWarning = document.getElementById('investigationWarning')
 const finalWarning = document.getElementsByClassName('finalWarning')[0]
 const toolContainer = document.getElementById('toolContainer')
 const emfReading = document.getElementsByClassName('emfReading')
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
    toolContainer.style.display = 'flex'
    displayTools()
  },1000)
})
})


async function displayTools () {
 const emfControl = document.getElementsByClassName('emfControl')[0]
 const emfStatusControl = document.getElementsByClassName('emfStatusControl')[0]
 const emfStatus = document.getElementsByClassName('emfStatus')[0]

 const tempControl = document.getElementsByClassName('tempControl')[0]
 const tempStatusControl = document.getElementsByClassName('tempStatusControl')[0]
 const tempStatus = document.getElementsByClassName('tempStatus')[0]


 const scannerControl = document.getElementsByClassName('scannerControl')[0]
 const scannerStatusControl = document.getElementsByClassName('scannerStatusControl')[0]
 const scannerStatus = document.getElementsByClassName('scannerStatus')[0]

 const soundControl = document.getElementsByClassName('soundControl')[0]
 const soundStatusControl = document.getElementsByClassName('soundStatusControl')[0]
 const soundStatus = document.getElementsByClassName('soundStatus')[0]
  
  emfControl.style.opacity = 1
  document.querySelector('.emfReading').textContent = `0.2 µF`
  const emfPromise = new Promise((res,rej)=>{
       setTimeout(()=>{
        emfStatusControl.style.opacity = 1
        res(true)
       },1000)
  })
  await emfPromise
  tempControl.style.opacity = 1
  document.querySelector('.tempReading').textContent = '27 C'
  console.log(tempStatusControl)
  const tempPromise = new Promise((res,rej)=>{
       setTimeout(()=>{
        tempStatusControl.style.opacity = 1
        res(true)
       },1000)
  })
  await tempPromise
  scannerControl.style.opacity = 1
  const scannerPromise = new Promise((res,rej)=>{
    setTimeout(()=>{
      scannerStatusControl.style.opacity = 1
      res(true)
    },1000)
  })
  document.getElementById('sirenSound').play()
  await scannerPromise
  soundControl.style.opacity = 1
  scannerControl.className = 'danger'
  scannerStatus.textContent = 'DANGER'
  document.getElementsByClassName('emfReading')[0].textContent = '10 µF'
  emfStatus.textContent = 'DANGER'
  emfStatus.style.color = 'red'

  document.querySelector('.tempReading').textContent = '-120 C'
  tempStatus.textContent = 'DANGER'
  tempStatus.style.color = 'red'

  scannerStatus.textContent = 'DANGER'
  scannerStatus.style.color = 'red'

  soundStatus.textContent = 'DANGER'
  soundStatus.style.color = 'red'
  document.querySelector('.soundReading').textContent = '120 db'

  const soundPromise = new Promise((res,rej)=>{
    setTimeout(()=>{
      soundStatusControl.style.opacity = 1
      res(true)
    },1000)
  })
  await soundPromise
  document.getElementsByClassName('ghostDetectedWarning').display = 'flex'
}


