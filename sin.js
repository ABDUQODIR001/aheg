let input = document.querySelector('main > input')
function yoz(x) {
    input.value += x
}
function calc(){
    input.value = eval(input.value)
}