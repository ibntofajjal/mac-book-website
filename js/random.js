/* // ▓▒▒▒▒▒▒▒▒▒▒▒ MEMORY BUTTON EVENT ▒▒▒▒▒▒▒▒▒▒▒▓




// FOR 16GB BUTTON 😈
document.getElementById("memory-16gb").addEventListener("click", function(){
    const extraMemoryCost = document.getElementById("extra-memory-cost");
    const extraMemoryCostText = parseInt(extraMemoryCost.innerText);
    // const extraMemoryCostNumber = parseInt(extraMemoryCostText);
    const perExtraMemoryCost16gb = 180;
    extraMemoryCost.innerText = perExtraMemoryCost16gb;

    // Best price
    const bestPrice = document.getElementById("best-price");
    const bestPriceText = parseInt(bestPrice.innerText);

    // PLUS 
    const bestPriceAndMemory = bestPriceText + perExtraMemoryCost16gb;

    // Total price 
    const totalPrice = document.getElementById("total-price");
    const totalPriceText = parseInt(totalPrice.innerText);
    totalPrice.innerText = bestPriceAndMemory;
});

// FOR 8GB BUTTON 😈
document.getElementById("memory-8gb").addEventListener("click", function(){
    const extraMemoryCost = document.getElementById("extra-memory-cost");
    const extraMemoryCostText = parseInt(extraMemoryCost.innerText);
    // const extraMemoryCostNumber = parseInt(extraMemoryCostText);
    const perExtraMemoryCost8gb = 0;
    extraMemoryCost.innerText = perExtraMemoryCost8gb;
});

// ▓▒▒▒▒▒▒▒▒▒▒▒ STORAGE BUTTONS EVENT ▒▒▒▒▒▒▒▒▒▒▒▓
// FOR 256GB VARIANT 😈
document.getElementById("storage-256gb").addEventListener("click", function(){
    const extraStorageCost = document.getElementById("extra-storage-cost");
    const extraStorageCostText = extraStorageCost.innerText;
    const perExtraStorageCost512gb = 0;
    extraStorageCost.innerText = perExtraStorageCost512gb;
});
// FOR 512GB VARIANT 😈
document.getElementById("storage-512gb").addEventListener("click", function(){
    const extraStorageCost = document.getElementById("extra-storage-cost");
    const extraStorageCostText = extraStorageCost.innerText;
    const perExtraStorageCost512gb = 100;
    extraStorageCost.innerText = perExtraStorageCost512gb;
});
// FOR 1TB VARIANT 😈
document.getElementById("storage-1tb").addEventListener("click", function(){
    const extraStorageCost = document.getElementById("extra-storage-cost");
    const extraStorageCostText = extraStorageCost.innerText;
    const perExtraStorageCost512gb = 180;
    extraStorageCost.innerText = perExtraStorageCost512gb;
});

// ▓▒▒▒▒▒▒▒▒▒▒▒ DELEVERY BUTTONS EVENT ▒▒▒▒▒▒▒▒▒▒▒▓
document.getElementById("free-delevery").addEventListener("click") */


/*\ update component price which is on the table \*/
function updateComponentPrice(componentPriceID, amountValue) {
    const componentPrice = document.getElementById(componentPriceID);
    componentPrice.innerText = amountValue;
    calculateTotal();
};

/*\ calculate the total price of the composnents and show output \*/
function calculateTotal() {
    const bestPrice = parseInt(document.getElementById("best-price").innerText);
    const ramPrice = parseInt(document.getElementById("ram-price").innerText);
    const ssdPrice = parseInt(document.getElementById("ssd-price").innerText);
    const deliveryCost = parseInt(document.getElementById("delivery-cost").innerText);
    const total = bestPrice + ramPrice + ssdPrice + deliveryCost;

    const totalPrice = document.getElementById("total-price");
    const totalPriceWithDiscount = document.getElementById("total-price-with-discount");
    totalPrice.innerText = total;
    totalPriceWithDiscount.innerText = total;
};

/*\ Add button handler function \*/
function addButtonListeners(btnID, outputId, value) {
    document.getElementById(btnID).addEventListener("click", function () {
        updateComponentPrice(outputId, value);
    });
};

// ▓▒▒▒▒▒▒▒▒▒▒▒ BUTTONS EVENT ▒▒▒▒▒▒▒▒▒▒▒▓
// MEMORY BUTTON HANDLER 🔥
addButtonListeners("memory-8gb", "ram-price", 0);
addButtonListeners("memory-16gb", "ram-price", 180);

// STORAGE BUTTON HANDLER 🔥
addButtonListeners("storage-256gb", "ssd-price", 0);
addButtonListeners("storage-512gb", "ssd-price", 100);
addButtonListeners("storage-1tb", "ssd-price", 180);

// delivery cost button handler
addButtonListeners("free-delevery", "delevery-cost", 0);
addButtonListeners("paid-delevery", "delevery-cost", 20);

/*\ discount \*/
document.getElementById("promo-button").addEventListener("click", function () {
    const totalPrice = parseInt(document.getElementById("total-price").innerText);
    const promoCode = document.getElementById("promo-code-input");

    if (promoCode.value == "stevekaku") {
        const total = totalPrice - (totalPrice / 5);
        const totalPriceWithDiscount = document.getElementById("total-price-footer");
        totalPriceWithDiscount.innerText = total;
    };

    // clear input field
    promoCode.value = '';
});




