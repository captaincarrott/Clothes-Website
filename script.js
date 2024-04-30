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

let divs = document.querySelectorAll(".prod");
var rates = document.querySelectorAll(".rate");
let count = document.querySelector(".count");

rates.forEach((rate) => {
    rate.style.display = "flex";
    rate.style.alignItems = "center"
    rate.style.color = "gray"
    rate.style.fontSize = "14px"
})

let ApiUrl = "https://fakestoreapi.com/products";

async function VeiwProducts() {
    const response = await fetch(`${ApiUrl}`);
    let data = await response.json();
    console.log(data);

    function stars() {

        let container = document.querySelector(".container-3");

            for (let i = 0; i < rates.length; i++) {

                let div = container.querySelectorAll(".rate")[i]


            let num = (data[i].rating.rate); //rate from api
            

                if ((num)) {
                div.innerHTML = '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
                div.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
                div.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
                div.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
                div.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';


                    if (num % 1 === 0) {
                        if (num === 1) {
                            div.innerHTML = '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
                        }else if (num === 2) {
                            div.innerHTML = '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';

                        }else if (num === 3) {
                            div.innerHTML = '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';

                        }else if (num === 4) {
                            div.innerHTML = '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';

                        }else if (num === 5) {
                            div.innerHTML = '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa fa-star" style="color: #ce3700;"></i>';

                        }
                    }else {

                        if (num < 0.5) {
                            div.innerHTML = '<i class="fa-regular fa-star star40" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
            
                        }else if (num === 0.5) {
                            div.innerHTML = '<i class="fa-regular fa-star-half-alt" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
                        }else if (num > 0.5 && num < 1) {
                            div.innerHTML = '<i class="fa-regular fa-star star60" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
                        }else if (num < 1.5 && num > 1) {
                            div.innerHTML = '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa-regular fa-star star40" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
                        }else if (num === 1.5) {
                            div.innerHTML = '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa-regular fa-star-half-alt" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
                        }else if (num > 1.5 && num < 2) {
                            div.innerHTML = '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa-regular fa-star star60" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
                        }else if (num < 2.5 && num > 2) {
                            div.innerHTML = '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa-regular fa-star star40" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
                        }else if (num === 2.5) {
                            div.innerHTML = '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa-regular fa-star-half-alt" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
                        }else if (num > 2.5 && num < 3) {
                            div.innerHTML = '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa-regular fa-star star60" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
                        }else if (num < 3.5 && num > 3) {
                            div.innerHTML = '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa-regular fa-star star40" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
            
                        }else if (num === 3.5) {
                            div.innerHTML = '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa-regular fa-star-half-alt" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
            
                        }else if (num > 3.5 && num < 4) {
                            div.innerHTML = '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa-regular fa-star star60" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
            
                        }else if (num < 4.5 && num > 4) {
                            div.innerHTML = '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa-regular fa-star star40" style="color: #ce3700;"></i>';
            
                        }else if (num === 4.5) {
                            div.innerHTML = '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa-regular fa-star-half-alt" style="color: #ce3700;"></i>';
            
                        }else if (num > 4.5 && num < 5) {
                            div.innerHTML = '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            div.innerHTML += '<i class="fa-regular fa-star star60" style="color: #ce3700;"></i>';
            
                        }
                    }


                }else {
                    console.log("no data");
                }
                
            }
            

    }
    
    // let elem = window.getComputedStyle(document.querySelector(".star"), ':after');
    // elem.width = "10px"
    stars()






    divs[0].innerHTML += `<p>price: ${data[0].price}$</p>`;
    divs[1].innerHTML += `<p>price: ${data[1].price}$</p>`;
    divs[2].innerHTML += `<p>price: ${data[2].price}$</p>`;
    divs[3].innerHTML += `<p>price: ${data[3].price}$</p>`;
    divs[4].innerHTML += `<p>price: ${data[4].price}$</p>`;
    divs[5].innerHTML += `<p>price: ${data[5].price}$</p>`;
    divs[6].innerHTML += `<p>price: ${data[6].price}$</p>`;
    divs[7].innerHTML += `<p>price: ${data[7].price}$</p>`;

    document.querySelectorAll(".rate")[0].innerHTML += `<div>(${data[0].rating.count}) (${data[0].rating.rate})</div>`;
    document.querySelectorAll(".rate")[1].innerHTML += `<div>(${data[1].rating.count}) (${data[1].rating.rate})</div>`;
    document.querySelectorAll(".rate")[2].innerHTML += `<div>(${data[2].rating.count}) (${data[2].rating.rate})</div>`;
    document.querySelectorAll(".rate")[3].innerHTML += `<div>(${data[3].rating.count}) (${data[3].rating.rate})</div>`;
    document.querySelectorAll(".rate")[4].innerHTML += `<div>(${data[4].rating.count}) (${data[4].rating.rate})</div>`;
    document.querySelectorAll(".rate")[5].innerHTML += `<div>(${data[5].rating.count}) (${data[5].rating.rate})</div>`;
    document.querySelectorAll(".rate")[6].innerHTML += `<div>(${data[6].rating.count}) (${data[6].rating.rate})</div>`;
    document.querySelectorAll(".rate")[7].innerHTML += `<div>(${data[7].rating.count}) (${data[7].rating.rate})</div>`;


}
VeiwProducts()

