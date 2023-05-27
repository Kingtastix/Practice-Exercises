window.onload = () => {
    var leftColor = document.getElementById("left");
    var rightColor = document.getElementById("right");
    var text = document.querySelector("h3");
    var body = document.getElementById("gradient");

    function setGradient(){
        body.style.background = `linear-gradient(to right, ${leftColor.value}, ${rightColor.value})`;
    }

    leftColor.addEventListener("input", () => {
        setGradient();
        update();

    })

    rightColor.addEventListener("input", () => {
        setGradient();
        update();
        
    })

    function update(){
        text.textContent = body.style.background;
    }

}