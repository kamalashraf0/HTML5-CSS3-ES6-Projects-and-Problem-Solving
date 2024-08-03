let ImgArrs = [
        
        "Images/1.png",
        "Images/2.png",
        "Images/3.png",
        "Images/4.png",
        "Images/5.png",
   
]

let Next = document.getElementById("Next");
let prev = document.getElementById("Previous");
let Slid = document.getElementById("SlideShow");
let stop = document.getElementById("Stop");
let img = document.getElementById("image")
let index = 0;

Next.addEventListener("click" ,function () {
    if(index <ImgArrs.length - 1)
        {
            index++;
            img.src = ImgArrs[index]
            
        }
    
})


prev.addEventListener("click" ,function () {
    if(index > 0)
        {
            index--;
            img.src = ImgArrs[index]
            
        }
    
})

let timer = [];  

var slidshow = Slid.addEventListener("click", function () {
    for (let i = 0; i < ImgArrs.length; i++) {
        let timerId = setTimeout(
            (function(i) {
            return function() {
                img.src = ImgArrs[i];
            };
           })(i), i * 800);  
        timer.push(timerId);  
    }
});

stop.addEventListener("click", function () {
    
    for (let i = 0; i < timer.length; i++) {
        clearTimeout(timer[i]);
    }
   
});





