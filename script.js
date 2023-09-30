let fun = 300;
const content = document.getElementById("content");

content.addEventListener("mousemove", function (event) {
    const containerRect = content.getBoundingClientRect();
    const mouseX = event.clientX - containerRect.left;

    // Calculate the hue based on the mouse position
    // fun = (mouseX / containerRect.width) * 300;
    fun = Math.min(Math.max((mouseX / containerRect.width) * 140, 0), 140) + 160;


    // Update the CSS variable by adding 'deg' to the value
    document.documentElement.style.setProperty("--fun", `${fun}deg`);
});
