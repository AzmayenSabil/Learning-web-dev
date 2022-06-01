var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

//FORM SUBMIT EVENT

form.addEventListener('submit', function addItem(e){
    e.preventDefault();
    console.log(1);
});

// ADD ITEM FUNCTION
// function addItem(e){
//     e.preventDefault();
//     console.log(1);
// }