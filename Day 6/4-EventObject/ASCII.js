
document.addEventListener('keydown', function(event) {
   

    
 

    if (event.keyCode == 16 || event.keyCode == 17 || event.keyCode == 18)
        {
                return;
        }

        else if (event.ctrlKey)
            {
                alert(`Ctrl + ${event.keyCode}`)
            }
            else if (event.altKey)
                {
                    alert(`Alt + ${event.keyCode}`)
                }
                else if (event.shiftKey)
                    {
                        alert(`Shift + ${event.keyCode}`)
                    }

                    else 
                    {
                        alert(event.keyCode)
                    }

  



    
  
});


