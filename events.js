// function ubahWarnaP1 (){
//     p1.style.background = 'blue';
// }

// const p1 = document.querySelector('.p1')
// p1.onclick = ubahWarnaP1;

// function ubahWarnaP2 (){
//     p2.style.background = 'blue';
// }

// const p2 = document.querySelector('.p2')
// p2.onclick = ubahWarnaP2;

// function ubahWarnaP3 () {
//     p3.style.background = 'blue';
// }

// const p3 = document.querySelector('.p3')
// p3.onclick = ubahWarnaP3


// // Menambah Element Baru
// const p4 = document.querySelector('section#b p')
// p4.addEventListener('click', function() {
//     const ul = document.querySelector('section#b ul');
//     const liBaru = document.createElement('li');
//     const textLiBaru = document.createTextNode('Baris Baru')
    
//     liBaru.appendChild(textLiBaru);
//     ul.appendChild(liBaru);
// })

// const p3 = document.querySelector('.p3');
// p3.onclick = function() {
//     p3.style.background = 'lightblue';
// }

// p3.onclick = function() {
//     p3.style.color = 'red';
// }

const p3 = document.querySelector('.p3');
p3.addEventListener('mouseenter', function() {
    p3.style.backgroundColor = 'blue';
});

p3.addEventListener('mouseleave', function() {
    p3.style.backgroundColor = 'white';
});

// p3.addEventListener('dblclick', function() {
//     p3.style.color = 'red';
// });