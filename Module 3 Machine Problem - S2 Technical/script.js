let lastColor = "white";

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

    let boxTop = parseInt(getComputedStyle(box).top);

    if (boxTop === -350) { 
        box.style.backgroundColor = newColor;
        box.style.borderColor = newColor;
        box.style.zIndex = "2";

        box.style.top = "100px";

        setTimeout(() => {
            box.style.backgroundColor = "transparent";
        }, 400);
        
        box1.style.zIndex = "1";
        box1.style.backgroundColor = lastColor;
        box1.style.borderColor = lastColor;
        box1.style.top = "-350px";
    } else {
        box.style.backgroundColor = lastColor;
        box.style.borderColor = lastColor;
        box.style.top = "-350px";
        box.style.zIndex = "1";

        box1.style.backgroundColor = newColor;
        box1.style.borderColor = newColor;
        box1.style.zIndex = "2";
        box1.style.top = "100px";
        setTimeout(() => {
            box1.style.backgroundColor = "transparent";
        }, 400);
    }

    lastColor = newColor;
}
