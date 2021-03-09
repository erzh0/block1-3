function myOpenFunction() {
    var element = document.getElementById("myId");
    element.classList.remove("closed");
    element.classList.add("open");
}
function myCloseFunction() {
    var element = document.getElementById("myId");
    element.classList.remove("open");
    element.classList.add("closed");
}