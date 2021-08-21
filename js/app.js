// ▓▒▒▒▒▒▒▒▒▒▒▒ UPADATING PRICING COMPONENT ▒▒▒▒▒▒▒▒▒▒▒▓ 
function updateComponentPrice(componentPriceID, amountValue) {
    const componentPrice = document.getElementById(componentPriceID);
    componentPrice.innerText = amountValue;
    calculateTotal();
};

// ▓▒▒▒▒▒▒▒▒▒▒▒ CALCULATE THE TOTAL PRICE ▒▒▒▒▒▒▒▒▒▒▒▓ 
function calculateTotal() {
    const bestPrice = parseFloat(document.getElementById("best-price").innerText);
    const ramPrice = parseFloat(document.getElementById("ram-price").innerText);
    const ssdPrice = parseFloat(document.getElementById("ssd-price").innerText);
    const deliveryCost = parseFloat(document.getElementById("delivery-cost").innerText);
    const total = bestPrice + ramPrice + ssdPrice + deliveryCost;

    const totalPrice = document.getElementById("total-price");
    const totalPriceWithDiscount = document.getElementById("total-price-with-discount");
    totalPrice.innerText = total;
    totalPriceWithDiscount.innerText = total;
};

// ▓▒▒▒▒▒▒▒▒▒▒▒ BUTTON HANDLER FUNCTION ▒▒▒▒▒▒▒▒▒▒▒▓ 
function addButtonListeners(btnID, outputId, value) {
    document.getElementById(btnID).addEventListener("click", function () {
        updateComponentPrice(outputId, value);
    });
};


// MEMORY(RAM) BUTTON HANDLER
addButtonListeners("normal-ram-btn", "ram-price", 0);
addButtonListeners("extra-ram-btn", "ram-price", 180);

// SSD BUTTON HANDLER
addButtonListeners("normal-ssd-btn", "ssd-price", 0);
addButtonListeners("extra-ssd-btn", "ssd-price", 100);
addButtonListeners("ultra-ssd-btn", "ssd-price", 180);

// DELIVERY COST BUTTON
addButtonListeners("free-delivery-btn", "delivery-cost", 0);
addButtonListeners("fast-delivery-btn", "delivery-cost", 20);

// CUPPON CODE / DISCOUNT CODE CONDITION AND BUTTON HANDLER 
document.getElementById("promo-code-apply-btn").addEventListener("click", function () {
    const totalPrice = parseFloat(document.getElementById("total-price").innerText);
    const promoCode = document.getElementById("promo-code-input");

    if (promoCode.value == "stevekaku") {
        const total = totalPrice - (totalPrice / 5);
        const totalPriceWithDiscount = document.getElementById("total-price-with-discount");
        totalPriceWithDiscount.innerText = total;
    };

    // clear input field
    promoCode.value = '';
});