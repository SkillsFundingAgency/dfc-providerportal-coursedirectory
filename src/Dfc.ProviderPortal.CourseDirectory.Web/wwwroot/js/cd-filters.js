


const item = document.getElementsByClassName('item');
const items = [...item];


for(let x of items) {
    items.forEach( (item) => {
        //item.classList.remove('active'); 
console.log(item.classList);
    })
    x.addEventListener('click', () => {


        //if (x.classList.contains('active')) {
        //    x.classList.remove('active');
        //}
    x.classList.add('active');
items.forEach( (val) => {
    if (val.classList.contains('active')) {
    console.log(val.classList);
}
});

//if (x)
  //      console.log( ...x.childNodes);
    })
}


