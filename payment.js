paypal.Buttons({
    style : {
        color: 'blue',
        shape: 'pill'
    },
    createOrder: function (data, actions) {
        return actions.order.create({
            purchase_units : [{
                amount: {
                    value: '0.1'
                }
            }]
        });
    },
    onApprove: function (data, actions) {
        return actions.order.capture().then(function (details) {
            console.log(details)
            window.location.replace("success.html")
        })
    },
    onCancel: function (data) {
        window.location.replace("Oncancel.html")
    }
}).render('#paypal-payment-button');



const quantityInput = document.getElementById("quantityInput");
const priceElement = document.querySelector(".price h4");
const productPrice = 9000;
let quantity = 1;
function updateTotalPrice() {
    const totalPrice = productPrice * quantity;
    priceElement.textContent = `$${totalPrice}`;
}
quantityInput.addEventListener("input", function () {
    const inputQuantity = parseInt(this.value);
    if (!isNaN(inputQuantity) && inputQuantity >= 1) {
        quantity = inputQuantity;
        updateTotalPrice();
    }
});
updateTotalPrice();