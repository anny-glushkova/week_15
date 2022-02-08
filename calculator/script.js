
function sum() {
    let a = document.getElementById('first_number').value;
    let b = document.getElementById('second_number').value;

    alert(+a + +b);
}
function subtract(a, b) {
    a = document.getElementById('first_number').value;
    b = document.getElementById('second_number').value;
    alert(a - b);
}
function multiply(a, b) {
    a = document.getElementById('first_number').value;
    b = document.getElementById('second_number').value;
    alert(a * b);
}
function divide(a, b) {
    a = document.getElementById('first_number').value;
    b = document.getElementById('second_number').value;
    if (b == 0) {
        alert('Делить на ноль нельзя!');
    }
    else {
        alert(a / b);
    }
}



