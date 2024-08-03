
//document.body.setAttribute('style' , ' margin: 0; padding: 0;')
var div = document.createElement('div');
div.setAttribute('style', 'background-color: red; width: 200px; height: 200px; display:inline-block;');
document.body.appendChild(div);


function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


div.addEventListener('click', function() {
    
  
  var newDiv= div.cloneNode(true);
  newDiv.setAttribute('style', `background-color: ${getRandomColor()}; width: 200px; height: 200px; display:inline-block;`);
  document.body.appendChild(newDiv);
});



