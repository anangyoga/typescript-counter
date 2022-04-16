var add = document.getElementById("add");
var remove = document.getElementById("delete");
var value = document.getElementById("value");
var integer = 0;
add.addEventListener("click", function () {
    integer += 1;
    value.innerHTML = integer;
});
remove.addEventListener("click", function () {
    integer -= 1;
    value.innerHTML = integer;
});
