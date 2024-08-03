let clock_start = document.getElementById("startClock")
let Clock_show = document.getElementById("ClockNow")



clock_start.addEventListener("click" ,function () {

    alert("Clock Started")

    
    function updatetime() {
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();

         Clock_show.textContent = `${hours} : ${minutes} : ${seconds}`;
        
    }
    updatetime()

    let lockinterval = setInterval(() => {
        updatetime()
    }, 1000);

    document.addEventListener('keydown', function(event) {

        if (event.keyCode == 16 || event.keyCode == 17 || event.keyCode == 18)
            {
                    return;
            }          
                    else if (event.shiftKey)
                        {
                            
                            if (event.keyCode)
                                {
                                    clearInterval(lockinterval);
                                }
                        }
    });
    
   
    
})





