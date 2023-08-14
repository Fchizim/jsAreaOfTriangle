function calculate(){
    let B = document.getElementById('base').value;
    let H = document.getElementById('height').value;
    A = ((1 / 2) * B * H)
    document.getElementById('output').innerHTML= A
}