function updateIphoneNumber(product, isIncrease, total, price) {
    const iphoneInput = document.getElementById(product);
    let iphoneNumber = iphoneInput.value;
    if (isIncrease == true) {
        iphoneNumber = parseInt(iphoneNumber) + 1
    }
    else if (iphoneNumber > 0) {
        iphoneNumber = parseInt(iphoneNumber) - 1
    }
    iphoneInput.value = iphoneNumber;
    // update iphone price
    const iphoneTotal = document.getElementById(total);
    const iphoneTotalAmount = iphoneNumber * price
    iphoneTotal.innerText = iphoneTotalAmount;
    // calculate total price
    calculateTotal()
}
// calculate product price
function calculateTotal() {
    const phoneTotalText = document.getElementById('phone-total');
    const phoneTotal = parseInt(phoneTotalText.innerText);
    const caseTotalText = document.getElementById('case-total');
    const caseTotal = parseInt(caseTotalText.innerText);
    // subtotal
    const subTotal = document.getElementById('sub-total');
    const productTotal = phoneTotal + caseTotal;
    subTotal.innerText = productTotal;
    // taxtotal
    const taxTotal = document.getElementById('tax-total');
    const tax = productTotal / 10;
    taxTotal.innerText = tax;
    // grandtotal
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = productTotal + tax;

}

// handle phone increase decrease events.........//
document.getElementById('phone-plus').addEventListener('click', function () {
    updateIphoneNumber('phone-number', true, 'phone-total', 1259);

})
document.getElementById('phone-minus').addEventListener('click', function () {
    updateIphoneNumber('phone-number', false, 'phone-total', 1259);

})


// handle silicone case increase decrease events.........//
document.getElementById('case-plus').addEventListener('click', function () {
    updateIphoneNumber('case-number', true, 'case-total', 59);

})

document.getElementById('case-minus').addEventListener('click', function () {
    updateIphoneNumber('case-number', false, 'case-total', 59);

})




