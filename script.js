const priceInput = document.getElementById("itemPrice");
const costInput = document.getElementById("wholesaleCost");
const qtyInput = document.getElementById("quantitySold");
const resultEl = document.getElementById("result");

let chart; // this will be our graph later

document.getElementById("calcBtn").addEventListener("click", () => {
    const price = Number(priceInput.value);
    const cost = Number(costInput.value);
    const qty = Number(qtyInput.value);

    const profitPerItem = price - cost;
    const totalProfit = profitPerItem * qty;

    resultEl.textContent = `Total Profit: $${totalProfit}`;

    drawChart(profitPerItem, qty);
});
