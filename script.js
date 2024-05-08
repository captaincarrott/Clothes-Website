let MenuBurger = document.querySelector(".menu");
let DropDown = document.querySelector(".drop-down");
let DropDownChild = document.querySelector(".drop-down-child");
let Close = document.querySelector(".close");

// ######################  burger menu  ##############################

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

// ######################  cart menu  ##############################

let cart = document.querySelector(".cart");
let cartDrop = document.querySelector(".cart-drop-down");
let CartChildDrop = document.querySelector(".cart-drop-down-child");
let closeCart = document.querySelector(".close-cart");
let closeCartbutton = document.querySelector(".btn1");

cart.addEventListener("click", () => {
    cartDrop.classList.toggle("activ");
})

cart.addEventListener("click", () => {
    cartDrop.classList.remove("disable");
})

closeCart.addEventListener("click", () => {
    cartDrop.classList.toggle("activ");
})
closeCartbutton.addEventListener("click", () => {
    cartDrop.classList.toggle("activ");
})

document.addEventListener("click", (cursor) => {
    if (!cartDrop.contains(cursor.target) && !cart.contains(cursor.target) && !cartDrop.classList.contains("toggle")) {
        cartDrop.classList.remove("activ");
    }
});



closeCart.addEventListener("click", () => {
    cartDrop.classList.toggle("disable");
})
document.addEventListener("click", (cursor) => {
    if (!cartDrop.contains(cursor.target) && !cart.contains(cursor.target) && !cartDrop.classList.contains("toggle")) {
        cartDrop.classList.add("disable");
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

    let coder = 0;
    for (let i = 0; i < divs.length; i++) {
        coder++
        divs[i].innerHTML += `<p class="code">code: CLT${coder}</p>`
        divs[i].innerHTML += `<button class="atc">Add To Cart</button>`;
    }
    
    let buttons = document.querySelectorAll(".atc");
    let counter = document.querySelector(".counter");
    let cartMenu = document.querySelector(".cart-drop-down-child");
    let productsDiv = document.createElement("div");
    
    cartMenu.appendChild(productsDiv);
    productsDiv.style.display = "flex";
    productsDiv.style.flexDirection = "column";
    
    // Initialize an empty array to store clicked product codes
    // Initialize an empty array to store clicked products
    const clickedProducts = [];
    
    // Function to handle the click event for the plus button
    function handlePlusClick(productId) {
        let clickedProduct = clickedProducts.find(product => product.id === productId);
        clickedProduct.counter++;
        document.querySelector(`#${productId} .pieces`).textContent = clickedProduct.counter;
        counter.textContent = parseInt(counter.textContent) + 1;
    }
    
    // Function to handle the click event for the minus button
    function handleMinusClick(productId) {
        let clickedProduct = clickedProducts.find(product => product.id === productId);
        clickedProduct.counter--;
        document.querySelector(`#${productId} .pieces`).textContent = clickedProduct.counter;
        counter.textContent = parseInt(counter.textContent) - 1;
        if (clickedProduct.counter === 0) {
            document.getElementById(productId).remove();
            // Remove the product from the clickedProducts array
            clickedProducts.splice(clickedProducts.findIndex(product => product.id === productId), 1);
        }
    }
    
    // Add event listeners to plus and minus buttons
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', () => {
            counter.classList.remove("hide-counter");
            counter.textContent = parseInt(counter.textContent) + 1;
    
            let added = buttons[i].parentNode;
            let code = added.childNodes[6].textContent;
    
            let menuCounter = 1; // Initialize the counter for the current product
    
            // Check if the product code has already been clicked
            let clickedProduct = clickedProducts.find(product => product.code === code);
    
            if (!clickedProduct) {
                // If product is not clicked before, create a new div for it
                let imgSrc = added.querySelector(".prod .img-a .img").src;
                let createImg = document.createElement("img");
                createImg.src = imgSrc;
                createImg.style.width = "70px";
    
                let price = added.childNodes[5].textContent;
    
                // Create a new unique identifier for the product div
                let productId = `product-${clickedProducts.length}`;
    
                // Create a new div for each click
                var newDiv = document.createElement("div");
                newDiv.id = productId;
                newDiv.classList.add("newdiv");
                newDiv.style.display = "flex";
                newDiv.style.alignItems = "center";
                newDiv.style.justifyContent = "space-between";
                newDiv.style.margin = " 10px";
    
                // Add product image to the new div
                newDiv.appendChild(createImg);
    
                // Add price and code information to the new div
                newDiv.innerHTML += `<div class="pricencode"><div>${price}</div><div class="menuCodes">${code}</div></div><i class="fa-solid fa-circle-minus fa-lg" style="color: #ce3700;"></i><p class="pieces">${menuCounter}</p><i class="fa-solid fa-circle-plus fa-lg" style="color: #ce3700;"></i>`;
    
                // Append the new div to the products container
                productsDiv.appendChild(newDiv);
    
                // Add the clicked product to the array with its unique identifier
                clickedProducts.push({ code: code, counter: menuCounter, id: productId });
    
                // Retrieve plus and minus buttons for the new product and add event listeners
                let plus = newDiv.querySelector(".fa-circle-plus");
                let minus = newDiv.querySelector(".fa-circle-minus");
                
                plus.addEventListener("click", () => {
                    handlePlusClick(productId);
                });
                
                minus.addEventListener("click", () => {
                    handleMinusClick(productId);
                });
                
            } else if (clickedProduct) {
                // Increment menu counter for the clicked product
                clickedProduct.counter++;
                let currentDiv = document.getElementById(clickedProduct.id);
                let pieces = currentDiv.querySelector(".pieces");
                pieces.textContent = clickedProduct.counter;
            }
        });
    }
    


}
VeiwProducts()

