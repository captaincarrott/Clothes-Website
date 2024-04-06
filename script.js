let MenuBurger = document.querySelector(".menu");
let DropDown = document.querySelector(".drop-down");
let DropDownChild = document.querySelector(".drop-down-child");
let Close = document.querySelector(".close");

MenuBurger.addEventListener("click", () => {
    DropDown.classList.toggle("activ");
})

MenuBurger.addEventListener("click", () => {
    DropDown.classList.remove("disable");
})

Close.addEventListener("click", () => {
    DropDown.classList.toggle("activ");
})

document.addEventListener("click", (cursor) => {
    if (!DropDown.contains(cursor.target) && !MenuBurger.contains(cursor.target) && !DropDown.classList.contains("toggle")) {
        DropDown.classList.remove("activ");
    }
});



Close.addEventListener("click", () => {
    DropDown.classList.toggle("disable");
})
document.addEventListener("click", (cursor) => {
    if (!DropDown.contains(cursor.target) && !MenuBurger.contains(cursor.target) && !DropDown.classList.contains("toggle")) {
        DropDown.classList.add("disable");
    }
});
