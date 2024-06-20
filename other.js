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
    updateTotalPrice(productId, clickedProduct.counter);
}

// function to handle the click event for the minus button
function handleMinusClick(productId) {
    let clickedProduct = clickedProducts.find(product => product.id === productId);
    clickedProduct.counter--;
    document.querySelector(`#${productId} .pieces`).textContent = clickedProduct.counter;
    counter.textContent = parseInt(counter.textContent) - 1;
    updateTotalPrice(productId, clickedProduct.counter);
    if (clickedProduct.counter === 0) {
        document.getElementById(productId).remove();
        // remove the product from the clickedProducts array
        clickedProducts.splice(clickedProducts.findIndex(product => product.id === productId), 1);
    }
    updateCounterVisibility();
}

// Function to update the total price based on the number of pieces
function updateTotalPrice(productId, pieceCount) {
let clickedProduct = clickedProducts.find(product => product.id === productId);
price = parseInt(clickedProduct.price); // get the price per unit
let totalPrice = price * pieceCount;
document.querySelector(`#${productId} .price`).textContent = `Price: $${totalPrice.toFixed(2)}`;
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
            // increment menu counter for the clicked product
            clickedProduct.counter++;
            let currentDiv = document.getElementById(clickedProduct.id);
            let pieces = currentDiv.querySelector(".pieces");
            pieces.textContent = clickedProduct.counter;
            updateTotalPrice(clickedProduct.id, clickedProduct.counter);
        }
    });
}
