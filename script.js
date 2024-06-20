// burger menu  
let MenuBurger = document.querySelector(".menu");
let DropDown = document.querySelector(".drop-down");
let DropDownChild = document.querySelector(".drop-down-child");
let Close = document.querySelector(".close");

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

// cart menu
let cart = document.querySelector(".cart");
let cartDrop = document.querySelector(".cart-drop-down");
let CartChildDrop = document.querySelector(".cart-drop-down-child");
let closeCart = document.querySelector(".close-cart");
let closeCartbutton = document.querySelector(".btn1");
let minusButtons = document.querySelectorAll(".fa-circle-minus");

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


let divs = document.querySelectorAll(".prod");
var rates = document.querySelectorAll(".rate");
let count = document.querySelector(".count");

let ApiUrl = "https://dummyjson.com/products";

async function handleProducts() {
    const response = await fetch(`${ApiUrl}`);
    let data = await response.json();
    console.log(data);
    
    let products = data.products
    products.forEach(product => {
        let {id, name, price, rating, stock} = product; // destructure the product object
        console.log({id, name, price, rating, stock})

        let infoDiv = document.createElement("div");
        infoDiv.classList.add("infodiv");
        let priceElement = document.createElement("p");
        let stockElement = document.createElement("div");
        priceElement.textContent = `price: ${price}$`; // include name and price
        parseInt(priceElement.textContent)
        stockElement.textContent = `Stock: ${stock}`; // include name and price
        
        infoDiv.appendChild(stockElement);
        divs.forEach((div, index) => {
            if (index === id - 1) { // assuming id is 1-based and matches the index
                div.appendChild(priceElement); // append the price to the corresponding div
                div.appendChild(infoDiv); // append the price to the corresponding div
            }
        });
    });

 
    function rate() {

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

    rate()

    let coder = 0;
    function productCode(products) {
        for (let i = 0; i < products.length; i++) {
            coder++
            products[i].innerHTML += `<p class="code">code: CLT${coder}</p>`
            products[i].innerHTML += `<button class="atc">Add To Cart</button>`;
        } 
    }
    productCode(divs);

    let buttons = document.querySelectorAll(".atc");
    let counter = document.querySelector(".counter");
    let cartMenu = document.querySelector(".cart-drop-down-child");
    let productsDiv = document.createElement("div");
    
    cartMenu.appendChild(productsDiv);
    productsDiv.style.display = "flex";
    productsDiv.style.flexDirection = "column";
    
    // initialize an empty array to store clicked product codes
    const clickedProducts = [];

    // function to update the visibility of the cart counter
    function updateCounterVisibility() {
        if (clickedProducts.length === 0) {
            counter.classList.add("hide-counter");
        } else {
            counter.classList.remove("hide-counter");
        }
    }
    
    // function to handle the click event for the plus button
    function handlePlusClick(productId) {
        let clickedProduct = clickedProducts.find(product => product.id === productId);
        clickedProduct.counter++;
        document.querySelector(`#${productId} .pieces`).textContent = clickedProduct.counter;
        counter.textContent = parseInt(counter.textContent) + 1;
        updateTotalPrice(productId, clickedProduct.counter, clickedProduct.price);
    }
    
    // function to handle the click event for the minus button
    function handleMinusClick(productId) {
        let clickedProduct = clickedProducts.find(product => product.id === productId);
        clickedProduct.counter--;
        document.querySelector(`#${productId} .pieces`).textContent = clickedProduct.counter;
        counter.textContent = parseInt(counter.textContent) - 1;
        updateTotalPrice(productId, clickedProduct.counter, clickedProduct.price);
        if (clickedProduct.counter === 0) {
            document.getElementById(productId).remove();
            // remove the product from the clickedProducts array
            clickedProducts.splice(clickedProducts.findIndex(product => product.id === productId), 1);
        }
        updateCounterVisibility();
    }
    
    // function to update the total price based on the number of pieces
    function updateTotalPrice(productId, pieceCount, price) {
        let clickedProduct = clickedProducts.find(product => product.id === productId);
        price = price.replace("price:", "").replace("$", "").trim();
        let totalPrice = price * pieceCount; // Calculate the total price
        document.querySelector(`#${productId} .price`).textContent = `price: ${totalPrice.toFixed(2)}$`;
        console.log(price)
    }


    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', () => {
            counter.classList.remove("hide-counter");
            counter.textContent = parseInt(counter.textContent) + 1;
    
            let added = buttons[i].parentNode;
            let code = added.childNodes[6].textContent;
    
            let menuCounter = 1; // initialize the counter for the current product
    
            // check if the product code has already been clicked
            let clickedProduct = clickedProducts.find(product => product.code === code);
    
            if (!clickedProduct) {
                // if product is not clicked before, create a new div for it
                let imgSrc = added.querySelector(".prod .img-a .img").src;
                let createImg = document.createElement("img");
                createImg.src = imgSrc;
                createImg.style.width = "70px";
    
                let price = added.childNodes[5].textContent;
                
                // create a new unique identifier for the product div
                let productId = `product-${clickedProducts.length}`;
    
                // create a new div for each click
                var newDiv = document.createElement("div");
                newDiv.id = productId;
                newDiv.classList.add("newdiv");
    
                // add product image to the new div
                newDiv.appendChild(createImg);

                // add price and code information to the new div
                // Create the container for price and code
                let priceCodeDiv = document.createElement('div');
                priceCodeDiv.className = 'pricencode';

                // Create and append the price div
                let priceDiv = document.createElement('div');
                priceDiv.className = 'price';
                priceDiv.textContent = price;
                priceCodeDiv.appendChild(priceDiv);
  
                // Create and append the code div
                let codeDiv = document.createElement('div');
                codeDiv.className = 'menuCodes';
                codeDiv.textContent = code;
                priceCodeDiv.appendChild(codeDiv);

                // Append the priceCodeDiv to newDiv
                newDiv.appendChild(priceCodeDiv);

                // Create and append the minus icon
                let minusIcon = document.createElement('i');
                minusIcon.className = 'fa-solid fa-circle-minus fa-lg';
                minusIcon.style.color = '#ce3700';
                newDiv.appendChild(minusIcon);

                // Create and append the pieces paragraph
                let piecesParagraph = document.createElement('p');
                piecesParagraph.className = 'pieces';
                piecesParagraph.textContent = menuCounter;
                newDiv.appendChild(piecesParagraph);

                // Create and append the plus icon
                let plusIcon = document.createElement('i');
                plusIcon.className = 'fa-solid fa-circle-plus fa-lg';
                plusIcon.style.color = '#ce3700';
                newDiv.appendChild(plusIcon);

                console.log(price)
                // append the new div to the products container
                productsDiv.appendChild(newDiv);
    
                // add the clicked product to the array with its unique identifier
                clickedProducts.push({ code: code, counter: menuCounter, id: productId, price: price});
    
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
                // increment menu counter for the clicked product
                clickedProduct.counter++;
                let currentDiv = document.getElementById(clickedProduct.id);
                let pieces = currentDiv.querySelector(".pieces");
                pieces.textContent = clickedProduct.counter;
                updateTotalPrice(clickedProduct.id, clickedProduct.counter, clickedProduct.price); // Pass clickedProduct.id instead of productId
            }
            
        });
    }
    


}
handleProducts()

