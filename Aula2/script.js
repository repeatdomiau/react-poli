//const template = document.getElementById('cartItem'); //antigo;
const templateElement = document.querySelector('#cartItem');
const cartElement = document.querySelector('#cart');
const produtosElement = document.querySelector('#produtos');

//const replaceAll = (from, to, text) => text.split(from).join(to);

String.prototype.replaceAll = function (from, to) {
    return this.split(from).join(to);
}

produtosElement.addEventListener("click", evt => {

    if (evt.target.nodeName === "BUTTON") {
        const name = evt.target.getAttribute('data-name');
        const img = evt.target.getAttribute('data-img');

        const template = templateElement.innerHTML;

        const item = template
            .replaceAll('{{NAME}}', name)
            .replaceAll('{{IMG}}', img);

        cartElement.innerHTML = item + cartElement.innerHTML;
    }

});

cartElement.addEventListener("click", evt => {

    if (evt.target.nodeName === "BUTTON") {
        evt.target.parentElement.remove();
    }

});