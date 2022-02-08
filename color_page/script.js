function choose() {
    switch(document.getElementById("colors").value) {
        case "green": document.getElementById("body").style.backgroundColor = "#00FF00";
        break;
        case "red": document.getElementById("body").style.backgroundColor = "#ff0000 ";
        break;
        case "blue": document.getElementById("body").style.backgroundColor = "#0000ff";
        break;
    }
}