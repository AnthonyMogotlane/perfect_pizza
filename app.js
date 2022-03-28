//variables
const removeBtn = document.querySelector(".remove-btn");
const table = document.querySelector(".table");
const addBtn = document.querySelector(".add-btn");
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


function addItem() { 
    let smallPrice = 80;
    //create an element
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    //add class name
    td.className = "remove-row";
    tr.innerHTML = `
        <td>1x</td>
        <td>Small pizzas</td>
        <td>80</td>
        <td class="remove"><button class="btn remove-btn">remove</button></td>
    `;
    table.appendChild(tr);
    total.innerHTML = parseInt(price.innerHTML) + parseInt(total.innerHTML);
    
}
addBtn.addEventListener("click", addItem);

function removeItem(e) {
    if(e.target.parentElement.classList.contains("remove")) {
        e.target.parentElement.parentElement.remove();
    }
    if(tBody.innerHTML === "") total.innerHTML = 0;
}
table.addEventListener("click", removeItem)