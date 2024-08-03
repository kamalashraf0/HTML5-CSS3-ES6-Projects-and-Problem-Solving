var body = document.querySelector('body');
var originalImage = document.querySelector('img');
var copyImage = originalImage.cloneNode(true);
body.append(copyImage)
  
originalImage.setAttribute('style' , ' position: absolute; right:0;');
copyImage.setAttribute('style' , ' position: absolute; bottom:0;');

var list = document.querySelector('#navigation');

list.setAttribute('style' ,'position: absolute;  right:50% ; top:40%;')

  
  