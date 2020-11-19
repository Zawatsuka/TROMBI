let i = 0;
let original = document.querySelector('#card-user');


function clone(user) {
    let clone = original.cloneNode(true); //"deep" clone
    clone.id = 'card-user' + i;
    document.querySelector('.img').src = user.img
    document.querySelector('.name').innerHTML = user.name
    document.querySelector('.age').innerHTML = user.age
    document.querySelector('.city').innerHTML = user.city
    original.parentNode.appendChild(clone);
    i++;
}

function globalArray(element) {
    clone(element)
}
let arrayButton = document.querySelector('#bt');
arrayButton.onclick = function (e) {
    e.preventDefault();
    arrayUsers.forEach(globalArray)
}