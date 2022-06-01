// //EXAMINE THE DOCUMENT OBJECT

// // console.dir(document)
// // console.log(document.domain);
// // console.log(document.URL);
// // console.log(document.title);
// // console.log(document.doctype);
// // console.log(document.head);
// // console.log(document.body);
// // console.log(document.all);
// // console.log(document.forms);

// //GETELEMENTBYID//
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// // was having problem because of some extensions that were running in my chrome
// //console.log(headerTitle.outerHTML);
// // headerTitle.innerHTML = '<h3>HELLO</h3>';
// header.style.borderBottom = 'solid 3px #000';

// //GETELEMENTSBYCLASSNAME//
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// // items[1].textContent = 'HELLO';
// //can do STYLE
// for(var i=0; i<items.length; i++){
//     items[i].style.backgroundColor = 'rgb(20,100,100)';
// }

// //GETELEMENTSBYTAGNAME//
// var li = document.getElementsByTagName('li');
// console.log(li);
// // items[1].textContent = 'HELLO';
// //can do STYLE
// for(var i=0; i<li.length; i++){
//     li[i].style.backgroundColor = 'yellow';
// }

// //QUERYSELECTOR//
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'SOlid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'HELLO WORLD';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'SEND';

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:nth-child(2)');
// lastItem.style.color = 'blue';

// //nth-child(even) / nth-child(odd)

// //QUERYSELECTORALL//

// var titles = document.querySelectorAll('.title');
// console.log(titles[1]);

//TRAVERSE THE DOM//
// var itemlist = document.querySelector('#items');
// // parent node
// console.log(itemlist.parentNode);
// itemlist.parentNode.style.backgroundColor = '#f4f4f4';
// // child node
// console.log(itemlist.children);
// //first element child, last element child, next element sibling
// console.log(itemlist.nextElementSibling);

// // create element
// //create a div
// var newDiv = document.createElement('div');
// newDiv.className = 'hello';
// newDiv.id = 'hello1';
// newDiv.setAttribute('title', 'Hello div');
// var newDivText = document.createTextNode('Hello world');
// newDiv.appendChild(newDivText);
// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');
// container.insertBefore(newDiv, h1);
// console.log(newDiv);

// Event Listener - not running

var button = document
  .getElementById('button')
  .addEventListener('Click', buttonClick);

function buttonClick(){
    console.log('button clicked');
}


