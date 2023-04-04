//var items = document.getElementsByClassName('li')
//console.log(li);
//li[2].style.fontweight = 'bold';
//li.style.backgroundColor = 'green'
//for(var i=0;i<li.length;i++){
//    items[i].style.backgroundColor = 'grey';
//}


//var secondItem = document.querySelector
//('.list-group-item:nth-child(2)');
//secondItem.style.color = 'green';

var itemlist = document.querySelector('#items');
console.log(itemlist.parentNode);
itemlist.parentNode.style.backgroundColor = '#f4f4f4';
console.log(itemlist.parentNode.parentNode);

console.log(itemlist.parentElement);
itemlist.parentElement.style.backgroundColor = '#f4f4f4';
console.log(itemlist.parentElement.parentElement.parentElement);

console.log(itemlist.childNodes);

console.log(itemlist.children);
console.log(itemlist.children[1]);
itemlist.children[1].style.backgroundColor = 'yellow';

console.log(itemlist.firstchild);

console.log(itemlist.firstElementchild);
itemlist.firstElementChild.textcontent = 'Hello 1';

console.log(itemlist.lastchild);
console.log(itemlist.lastElementChild);
itemlist.lastElementChild.textcontent = 'Hello 4';

console.log(itemlist.nextSibling);
console.log(itemlist.nextElementSibling);

console.log(itemlist.previousSibling);
console.log(itemlist.previousElementSibling);
itemlist.previousElementSibling.style.color = 'green';

var newDiv = document.createElement('div');
newDiv.className='HEllo';

newDiv.className='HEllo1';

newDiv.setAttribute('title','Hello Div');

var newDivText = document.createTextNode('Hello world');

newDiv.appendChild(newDivText);

var container = document.querySelector('header.container');
var h1 = document.querySelector('header h1');

console.log(newDiv);
newDiv.style.fontSize = '30px';
container.insertBefore(newDiv,h1);