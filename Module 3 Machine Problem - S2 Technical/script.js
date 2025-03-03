let lastColor = "white"; // Default color

function animateBox(day) {
    let box = document.getElementById("box");
    let box1 = document.getElementById("box1");

    let colors = {
        "Monday": "violet",
        "Tuesday": "gray",
        "Wednesday": "palevioletred",
        "Thursday": "green",
        "Friday": "cyan",
        "Saturday": "orange",
        "Sunday": "yellow"
    };

    let newColor = colors[day];

    // Get current position
    let boxTop = parseInt(getComputedStyle(box).top);

    if (boxTop === -250) { 
        // ✅ Set color BEFORE moving down to prevent black appearing
        box.style.backgroundColor = newColor;
        box.style.borderColor = newColor;
        box.style.zIndex = "2";

        // Move box down
        box.style.top = "100px";

        // ✅ Make transparent AFTER reaching position
        setTimeout(() => {
            box.style.backgroundColor = "transparent";
        }, 400);

        // Box1 moves up
        box1.style.zIndex = "1";
        box1.style.backgroundColor = lastColor; // ✅ Set previous color instantly
        box1.style.borderColor = lastColor;
        box1.style.top = "-250px";
    } else {
        // ✅ Set previous color BEFORE moving up (Prevents black flashing)
        box.style.backgroundColor = lastColor;
        box.style.borderColor = lastColor;

        // Move box up
        box.style.top = "-250px";
        box.style.zIndex = "1";

        // ✅ Set new color BEFORE moving down
        box1.style.backgroundColor = newColor;
        box1.style.borderColor = newColor;
        box1.style.zIndex = "2";
        box1.style.top = "100px";

        // ✅ Make transparent AFTER reaching position
        setTimeout(() => {
            box1.style.backgroundColor = "transparent";
        }, 400);
    }

    lastColor = newColor; // Update last color
}
