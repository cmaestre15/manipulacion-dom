













const h1 = document.querySelector ("h1");
const p = document.querySelector ("p");
const parrafito = document.querySelector ("parrafito");
const pid = document.getElementById("pid");
const input = document.querySelector("input");

console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

input.value ='456';

const img = document.createElement('img');
img.setAttribute('src', 'https://images.pexels.com/photos/1049298/pexels-photo-1049298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
console.log(img);

pid.appendChild(img);