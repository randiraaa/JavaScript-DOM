// Section 4. Manipulating elements

// innerHTML
const judul = document.getElementById('judul');
judul.innerHTML = '<em>Nama Saya Randi</em>';

const sectionA = document.querySelector('#a');
sectionA.innerHTML = 'hello world';

// creatElement
let paragraphBaru = document.createElement('p');
let teksBaru = document.createTextNode('Paragraph Baru'); // createTextNode
// simpan tulisan dalam sebuah paragraph
paragraphBaru.appendChild(teksBaru);
// simpan pBaru di akhir section a
let bagianBaru = document.getElementById('a');
bagianBaru.appendChild(paragraphBaru); // appenChild

// Section 5. Working with Attributes

// element.setAttribute()
const judulAttribute = document.getElementsByTagName('h1')[0];
judul.setAttribute('name', 'randi');

// Section 6. Manipulating Element’s Styles

// element.style<property CSS>
const judulStyle = document.querySelector('#judul');
judulStyle.style.color = 'lightblue';
judulStyle.style.backgroundColor = 'salmon';
