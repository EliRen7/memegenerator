const form = document.querySelector('form')
const btn = document.querySelector('.submit')

// preventing the form default reload
form.addEventListener("submit", function(e){
    e.preventDefault();
  })

// Converting the image URL to display in the browser
btn.addEventListener('click', function(){
  let imageURL = document.getElementById('url').value
  let div = document.createElement('div')
  let img = document.createElement('img')
  img.src = imageURL
  document.body.appendChild(div)
  let newImage = div.appendChild(img)
  div.classList.add('meme');
  displayTopMemeText(div)
  displayBottomMemeText(div)
  // Remove the image
  let removeImage = newImage.addEventListener('dblclick', function(){
    div.remove(newImage)
  })
})

 // get top text to display
 function displayTopMemeText(div){
  let topInputText = document.querySelector('.toptext')
  let topOutput = topInputText.value;
  let topDisplayOutput = document.createElement('div');
  topDisplayOutput.classList.add('topText');
  topDisplayOutput.innerHTML = topOutput;
  div.appendChild(topDisplayOutput)
 }
 
 // get bottom text to display 
function displayBottomMemeText(div){
let bottomInputText = document.querySelector('.bottomtext')
let bottomOutput = bottomInputText.value;
let bottomDisplayOutput = document.createElement('div');
bottomDisplayOutput.classList.add('bottomText');
bottomDisplayOutput.innerHTML = bottomOutput;
// let finalTopText= document.body.appendChild(bottomDisplayOutput)
div.appendChild(bottomDisplayOutput)
}






