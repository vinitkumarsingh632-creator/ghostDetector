let currentChat = 'start';

const chatFlow = {

  start: {
    options: [
      "Who are you?",
      "What is your name?"
    ],

    responses: [
      "The one standing behind you.",
      "The name carved into the grave beneath your home."
    ],

    next: ["whoAreYou", "name"]
  },


  whoAreYou: {
    options: [
      "There's nobody behind me.",
      "Then why can't I see you?"
    ],

    responses: [
      "Don't turn around.",
      "Because you're looking at the wrong side."
    ],

    next: ["behindMe", "cantSee"]
  },


  name: {
    options: [
      "What grave?",
      "That's impossible."
    ],

    responses: [
      "The one they buried before your house was built.",
      "Then why is there someone knocking from underneath your floor?"
    ],

    next: ["grave", "impossible"]
  },


  behindMe: {
    options: [
      "Why shouldn't I turn around?",
      "Are you behind me right now?"
    ],

    responses: [
      "Because the last person who did... never turned back.",
      "No. I'm much closer than that."
    ],

    next: ["final1", "final2"]
  },


  cantSee: {
    options: [
      "Where are you?",
      "What do you want?"
    ],

    responses: [
      "Closer than you think.",
      "I just wanted someone to talk to."
    ],

    next: ["final3", "final4"]
  },


  grave: {
    options: [
      "Who is buried there?",
      "Why is it beneath my home?"
    ],

    responses: [
      "You already know their name.",
      "Because this house was never supposed to be built here."
    ],

    next: ["final5", "final6"]
  },


  impossible: {
    options: [
      "I don't hear anything.",
      "What is that sound?"
    ],

    responses: [
      "Listen again.",
      "That isn't coming from downstairs."
    ],

    next: ["final7", "final8"]
  },


  final1: {
    options: [
      "Who was the last person?",
      "What happened to them?"
    ],

    responses: [
      "You.",
      "You're about to find out."
    ],

    next: [null, null]
  },


  final2: {
    options: [
      "Then who is behind me?",
      "I think you're lying."
    ],

    responses: [
      "Don't look.",
      "Turn around... and find out."
    ],

    next: [null, null]
  },


  final3: {
    options: [
      "How close?",
      "Can you touch me?"
    ],

    responses: [
      "Close enough to hear you breathing.",
      "I already did."
    ],

    next: [null, null]
  },


  final4: {
    options: [
      "Why me?",
      "Are you lonely?"
    ],

    responses: [
      "Because you were the one who answered.",
      "I've been waiting here for a very long time."
    ],

    next: [null, null]
  },


  final5: {
    options: [
      "Tell me the name.",
      "I don't know anyone buried there."
    ],

    responses: [
      "Look beneath your bed.",
      "You will."
    ],

    next: [null, null]
  },


  final6: {
    options: [
      "What happened here?",
      "Who lived here before me?"
    ],

    responses: [
      "Someone who never left.",
      "Ask them yourself."
    ],

    next: [null, null]
  },


  final7: {
    options: [
      "What should I listen for?",
      "I'm leaving."
    ],

    responses: [
      "Your name.",
      "You can try."
    ],

    next: [null, null]
  },


  final8: {
    options: [
      "Then where is it coming from?",
      "I don't want to hear this."
    ],

    responses: [
      "Behind you.",
      "It's already too late."
    ],

    next: [null, null]
  }

};
window.addEventListener('DOMContentLoaded',async(event)=>{
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
const chatOptions = ['Who are you?','What is your name?']
const firstResp = ['The one standing behind you.','The name carved into the grave beneath your home']
const firstPr = new Promise((res,rej)=>{
  setTimeout(()=>{
    displayOptions(chatOptions[0],chatOptions[1])
    res(true)
  },1000)
})
await firstPr
ghostDisplay(firstResp[ans])
})
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


function displayOptions (first,second) {
  const parent = document.getElementById('chatBox')
  const parentChild = document.createElement('div')
  const nestedParent = document.createElement('div')
  const childElem1 = document.createElement('p')
  const childElem2 = document.createElement('p')
  parentChild.textContent = 'You: '
  nestedParent.style.display = 'inline-block'
  childElem1.style.display = 'inline-block'
  childElem2.style.display = 'inline-block'
  parentChild.style.padding = '2rem'
  childElem1.onclick = () =>{
    nestedParent.textContent = childElem1.textContent
    ans = 0
  }
  childElem1.setAttribute('class','userChats')
  childElem2.setAttribute('class','userChats')
  childElem1.style.cursor = 'grab'
  childElem2.style.cursor = 'grab'
  childElem2.onclick = () =>{
    nestedParent.textContent = childElem2.textContent
    ans = 1
  }
  childElem1.textContent = first
  childElem2.textContent = second
  parent.appendChild(parentChild)
  parentChild.appendChild(nestedParent)
  nestedParent.appendChild(childElem1)
  nestedParent.appendChild(childElem2)
}
function ghostDisplay (data) {
  const parent = document.getElementById('chatBox')
  const parentChild = document.createElement('div')
  const title = document.createElement('div')
  const message = document.createElement('div')
  title.style.padding = '1rem'
  title.textContent = 'ghost:'
  title.style.display = 'inline-block'
  message.style.display = 'inline-block'
  message.setAttribute('class','ghostChats')
  parentChild.style.padding = '2rem'
  message.textContent = data
  parent.appendChild(parentChild)
  parentChild.appendChild(title)
  parentChild.appendChild(message)
}
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
  
  await scannerPromise
  document.getElementById('sirenSound').play()
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
  document.getElementById('toolContainer').style.opacity = 0
  setTimeout(()=>{
    document.getElementsByClassName('ghostDetectedWarning')[0].style.display = 'block'
  },1000)
}

const closeGhostWarning = document.getElementById('closeGhostWarning')
closeGhostWarning.addEventListener('click',()=>{
  document.getElementsByClassName('ghostDetectedWarning')[0].style.display = 'none'
  document.getElementById('toolContainer').style.opacity = 1
  
})
document.getElementById('talkWithGhost').addEventListener('click',()=>{
    document.getElementById('sirenSound').remove()
    document.getElementsByClassName('ghostDetectedWarning')[0].style.display = 'none'
    document.getElementById('ghostVideo').style.display = 'block'
    document.getElementById('ghostVideo').play()
    const interval = setInterval(()=>{
      if(document.getElementById('ghostVideo').currentTime.toFixed(1) == 12.0){
        document.getElementById('ghostVideo').remove()
        document.getElementById('toolContainer').remove()
        document.getElementsByClassName('talkContainer')[0].style.display = 'flex'
        clearInterval(interval)
      }
    },1000)
  })

