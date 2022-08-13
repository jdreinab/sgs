
let cells = document.getElementsByClassName("cell")

for (let i = 0; i < cells.length; i++) {
    const cell = cells[i].firstElementChild;
    cell.addEventListener("click", show_popup, true)
    cell.addEventListener("mouseenter", show_popup, true)
    cell.addEventListener("mouseleave", show_popup, true)
}

function show_popup() {
    this.nextElementSibling.classList.toggle("show")
}