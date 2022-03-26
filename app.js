const removeBtn = document.querySelector(".remove-btn");
const table = document.querySelector(".table");
const addBtn = document.querySelector(".add-btn");

function addItem() {
    
    //create an element
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    //add class name
    td.className = "remove-row";
    tr.innerHTML = `
        <td>1x</td>
        <td>Small pizzas</td>
        <td>80.00</td>
        <td class="remove"><button class="btn remove-btn">remove</button></td>
    `;
    table.appendChild(tr);
}
addBtn.addEventListener("click", addBtn);


function removeItem(e) {
    if(e.target.parentElement.classList.contains("remove")) {
        e.target.parentElement.parentElement.remove();
    }
}
table.addEventListener("click", removeItem)