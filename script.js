// document.getElemenById()
const judul = document.getElementById('judul');
judul.style.color = 'black';
judul.style.backgroundColor = 'yellow';
judul.innerHTML = 'My name is Randi.';

// document.getElementsByTagName()
const p = document.getElementsByTagName('p');

for (let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'brown';   
}

// mengubah object menjadi element agar bisa di beri style
const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';

// document.getElementsByClassName()
const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = 'Join us Instagram';