//variables
const removeBtn = document.querySelector(".remove-btn");
const removeAll = document.querySelector(".remove-all")
const table = document.querySelector(".table");
const addBtn = document.getElementsByClassName("add-btn");
const price = document.querySelector(".price");
const total = document.querySelector(".total");
const tBody = document.querySelector("tbody");

const cart = document.querySelector(".cart");
const hideBtn = document.querySelector(".hide-btn");
const showBtn = document.querySelector(".show-btn");



//hide cart
showBtn.style.display = "none";
const hideCart = () => {
    cart.style.visibility = "hidden";
    showBtn.style.display = "inline";
}
hideBtn.addEventListener("click", hideCart);
//show cart
const showCart = () => {
    cart.style.visibility = "visible";
    showBtn.style.display = "none";
}
showBtn.addEventListener("click", showCart);
//remove item row on the cart
function removeItem(e) {
    if(e.target.parentElement.classList.contains("remove")) {
        e.target.parentElement.parentElement.remove();
    }
    if(tBody.innerHTML === "") total.innerHTML = 0;
}
table.addEventListener("click", removeItem)
//remove all item in the table body
const deleteAll = () => {
    tBody.innerHTML = "";
}
removeAll.addEventListener("click", deleteAll);

//Adding item to cart
function addItem() { 
        //create an element
        const tr = document.createElement("tr");
        //add inner text 
        tr.innerHTML = `
            <td></td>
            <td>Small pizzas</td>
            <td>80</td>
            <td class="remove"><button class="btn remove-btn">remove</button></td>
        `;
        tBody.appendChild(tr);
        total.innerHTML = parseInt(price.innerHTML) + parseInt(total.innerHTML);
}
for(let i = 0; i < addBtn.length; i++) {
    addBtn[i].addEventListener("click", addItem);
};