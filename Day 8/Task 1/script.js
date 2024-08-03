let openbtn =document.getElementById("btn")


openbtn.addEventListener("click" ,function () {
   let form2= window.open('index2.html')
    setTimeout(() => {
       form2.window.close()
    }, 5000);
    
})



