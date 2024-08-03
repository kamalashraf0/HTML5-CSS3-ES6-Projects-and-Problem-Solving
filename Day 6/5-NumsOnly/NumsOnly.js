

    var numberInput = document.getElementById('numberInput');

    numberInput.addEventListener('keypress', function(event) {
       
        if (event.key < '0' || event.key > '9' )  {
            event.preventDefault();
        }

        
    });

    numberInput.addEventListener('input', function() {
        
        numberInput.value = numberInput.value.replace(/[^0-9]/g, '');
    });

