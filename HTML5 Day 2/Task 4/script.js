



function GenerateCircle() {
    let canvas = document.getElementById("canav1");
    let color_btn = document.getElementById("color_btn");
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = color_btn.value;
    ctx.beginPath();
    ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, 50, 0, Math.PI * 2, true);
    ctx.fill();
}
