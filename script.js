// burger menu  
let MenuBurger = document.querySelector(".menu");
let DropDown = document.querySelector(".drop-down");
let DropDownChild = document.querySelector(".drop-down-child");
let Close = document.querySelector(".close");
function burgerMenu() {
// click on burger icon
MenuBurger.addEventListener("click", () => {
    DropDown.classList.toggle("activ");
    DropDown.classList.remove("disable");
})
// close burger menu with (x) button
Close.addEventListener("click", () => {
    DropDown.classList.replace("activ", "disable");
})
// close burger menu while clicking outside the cart menu
document.addEventListener("click", (cursor) => {
    if (!DropDown.contains(cursor.target) && !MenuBurger.contains(cursor.target) && !DropDown.classList.contains("toggle")) {
        DropDown.classList.replace("activ", "disable");
    }
});
}
burgerMenu()
// cart menu
let cart = document.querySelector(".cart");
let cartDrop = document.querySelector(".cart-drop-down");
let CartChildDrop = document.querySelector(".cart-drop-down-child");
let closeCart = document.querySelector(".close-cart");
let closeCartbutton = document.querySelector(".btn1");
let minusButtons = document.querySelectorAll(".fa-circle-minus");
function cartMenu() {
// click on cart icon
cart.addEventListener("click", () => {
    cartDrop.classList.toggle("activ");
    cartDrop.classList.remove("disable");
})
// close cart with (x) button
closeCart.addEventListener("click", () => {
    cartDrop.classList.replace("activ", "disable");
})
// the other close button named close
closeCartbutton.addEventListener("click", () => {
    cartDrop.classList.replace("activ", "disable");
})
// close cart menu while clicking outside the cart menu
document.addEventListener("click", (cursor) => {
    if (!cartDrop.contains(cursor.target) && !cart.contains(cursor.target) && !cartDrop.classList.contains("toggle") && !cursor.target.classList.contains("fa-circle-minus")) {
        cartDrop.classList.replace("activ","disable");
    }
});
}
cartMenu()
let divs = document.querySelectorAll(".prod");
var rates = document.querySelectorAll(".rate");
let count = document.querySelector(".count");

rates.forEach((rate) => {
    rate.style.fontSize = "14px"
})

let ApiUrl = "https://dummyjson.com/products";

async function VeiwProducts() {
    const response = await fetch(`${ApiUrl}`);
    let data = await response.json();
    console.log(data);
    
    let products = data.products
    products.forEach(product => {
        let {id, name, price, rating, stock} = product; // Destructure the product object
        console.log({id, name, price, rating, stock})

        let infoDiv = document.createElement("div");
        infoDiv.classList.add("infodiv");
        let priceElement = document.createElement("p");
        let stockElement = document.createElement("div");
        priceElement.textContent = `Price: ${price}$`; // Include name and price
        stockElement.textContent = `Stock:(${stock})`; // Include name and price
        
        infoDiv.appendChild(stockElement);
        divs.forEach((div, index) => {
            if (index === id - 1) { // Assuming id is 1-based and matches the index
                div.appendChild(priceElement); // Append the price to the corresponding div
                div.appendChild(infoDiv); // Append the price to the corresponding div
            }
        });
    });

 
    function stars() {

        let container = document.querySelector(".container-3");

            for (let i = 0; i < rates.length; i++) {
                let num = (data.products[i].rating); //rate from api
                let ratediv = container.querySelectorAll(".rate")[i]

                let starsDiv = document.createElement("div");
                let numDiv = document.createElement("div");
                starsDiv.classList.add("starsDiv");
                numDiv.classList.add("numDiv");
                ratediv.appendChild(starsDiv);
                ratediv.appendChild(numDiv);
                numDiv.textContent = `(${num})`

            
            
                if ((num)) {
                starsDiv.innerHTML = '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
                starsDiv.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
                starsDiv.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
                starsDiv.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
                starsDiv.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
                    

                    if (num % 1 === 0) {
                        if (num === 1) {
                            starsDiv.innerHTML = '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
                        }else if (num === 2) {
                            starsDiv.innerHTML = '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';

                        }else if (num === 3) {
                            starsDiv.innerHTML = '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';

                        }else if (num === 4) {
                            starsDiv.innerHTML = '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';

                        }else if (num === 5) {
                            starsDiv.innerHTML = '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa fa-star" style="color: #ce3700;"></i>';

                        }
                    }else {

                        if (num < 0.5) {
                            starsDiv.innerHTML = '<i class="fa-regular fa-star star40" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
            
                        }else if (num === 0.5) {
                            starsDiv.innerHTML = '<i class="fa-regular fa-star-half-alt" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
                        }else if (num > 0.5 && num < 1) {
                            starsDiv.innerHTML = '<i class="fa-regular fa-star star60" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
                        }else if (num < 1.5 && num > 1) {
                            starsDiv.innerHTML = '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa-regular fa-star star40" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
                        }else if (num === 1.5) {
                            starsDiv.innerHTML = '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa-regular fa-star-half-alt" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
                        }else if (num > 1.5 && num < 2) {
                            starsDiv.innerHTML = '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa-regular fa-star star60" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
                        }else if (num < 2.5 && num > 2) {
                            starsDiv.innerHTML = '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa-regular fa-star star40" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
                        }else if (num === 2.5) {
                            starsDiv.innerHTML = '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa-regular fa-star-half-alt" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
                        }else if (num > 2.5 && num < 3) {
                            starsDiv.innerHTML = '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa-regular fa-star star60" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
                        }else if (num < 3.5 && num > 3) {
                            starsDiv.innerHTML = '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa-regular fa-star star40" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
            
                        }else if (num === 3.5) {
                            starsDiv.innerHTML = '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa-regular fa-star-half-alt" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
            
                        }else if (num > 3.5 && num < 4) {
                            starsDiv.innerHTML = '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa-regular fa-star star60" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa-regular fa-star" style="color: #ce3700;"></i>';
            
                        }else if (num < 4.5 && num > 4) {
                            starsDiv.innerHTML = '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa-regular fa-star star40" style="color: #ce3700;"></i>';
            
                        }else if (num === 4.5) {
                            starsDiv.innerHTML = '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa-regular fa-star-half-alt" style="color: #ce3700;"></i>';
            
                        }else if (num > 4.5 && num < 5) {
                            starsDiv.innerHTML = '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa fa-star" style="color: #ce3700;"></i>';
                            starsDiv.innerHTML += '<i class="fa-regular fa-star star60" style="color: #ce3700;"></i>';
            
                        }
                    }


                }else {
                    console.log("no data");
                }
                
            }
            

    }

    stars()

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
    const clickedProducts = [];

    // Function to update the visibility of the cart counter
    function updateCounterVisibility() {
        if (clickedProducts.length === 0) {
            counter.classList.add("hide-counter");
        } else {
            counter.classList.remove("hide-counter");
        }
    }
    
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
        updateCounterVisibility();
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
                console.log(price)
                // Append the new div to the products container
                productsDiv.appendChild(newDiv);
    
                // Add the clicked product to the array with its unique identifier
                clickedProducts.push({ code: code, counter: menuCounter, id: productId });
    
                // plus and minus buttons for the new product and add event listeners
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

