function changeColor(){
    let container = document.getElementById("container");
    if(container.style.backgroundColor == "white"){
        container.style.backgroundColor = "black";
        container.style.color = "white";
    }
    else{
        container.style.backgroundColor = "white";
        container.style.color = "black";
    }
}