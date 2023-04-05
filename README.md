# JavaScript DOM
“DOM or Document Object Model is a special JavaScript object that exists only in the Browser environment. This object is used to get the website document structure, even manipulate it.”

## Exercise

### Selecting elements
```javascript
// Selecting Elements:

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

// document.querySelector() -> element
const p4 = document.querySelector('#b p');
p4.style.color = 'white';
p4.style.fontSize = '20px';

// document.querySelectorAll() -> element
const allSelectP = document.querySelectorAll('p')[2];
allSelectP.style.backgroundColor = 'black';

// document.getElementsByName()
const btn = document.getElementsByName('btn');
````
### Console Selecting Elements
![selecting-elements](selecting-elements.png)