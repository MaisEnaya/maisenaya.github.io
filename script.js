const content = document.getElementById("content");
let sparkle = document.getElementById("sparkle");
let path = sparkle.querySelector("path");
let fun;

content.addEventListener("mousemove", function (event) {
    const containerRect = content.getBoundingClientRect();
    const mouseX = event.clientX - containerRect.left;

    // Calculate the hue based on the mouse position
    fun = (mouseX / containerRect.width) * 360;

    // Set the value of the --hue CSS variable
    document.documentElement.style.setProperty('--fun', fun);
    path.style.fill = `hsl(${fun}, 100%, 90%)`;
});
// sparkle.querySelector("path")

