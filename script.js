const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

// Cart

var product_total = document.getElementById('product_total');
var shipping_charge = document.getElementById('shipping_charge');
var total_cart_amt = document.getElementById('total_cart_amt');
var discountCode = document.getElementById("discount_code1");

const decreaseNumber = (incdec, itemprice) => {
    var itemval = document.getElementById(incdec);
    var itemprice = document.getElementById(itemprice);
    console.log (itemprice.innerHTML);

    if(itemval.value <= 0){
        itemval.value = 0;
        alert('negative quantity not allowed')
    }else{
        itemval.value = parseInt(itemval.value) - 1;
        itemval.style.background = '#fff';
        itemval.style.color = '#000'
        itemprice.innerHTML = parseInt(itemprice.innerHTML) - 15;
        product_total.innerHTML = parseInt(product_total.innerHTML) - 15;
        total_cart_amt.innerHTML = parseInt(product_total.innerHTML) + parseInt(shipping_charge.innerHTML);
    }
}

const increaseNumber = (incdec, itemprice) => {
    var itemval = document.getElementById(incdec);
    var itemprice = document.getElementById(itemprice);

    if(itemval.value >= 5){
        itemval.value = 5;
        alert('max 5 allowed')
        itemval.style.background = 'red';
        itemval.style.color = '#fff'
    }else{
        itemval.value = parseInt(itemval.value) + 1;
        itemprice.innerHTML = parseInt(itemprice.innerHTML ) + 15;
        product_total.innerHTML = parseInt(product_total.innerHTML) + 15;
        total_cart_amt.innerHTML = parseInt(product_total.innerHTML) + parseInt(shipping_charge.innerHTML);
    }
}

const discount_code = () => {
    let totalamtcurr = parseInt(total_cart_amt.innerHTML);
    let error_trw = document.getElementById('error_trw');
    if(discountCode.value === 'apnidukaan'){
        let newtotalamt = totalamtcurr - 15;
        total_cart_amt.innerHTML = newtotalamt;
        error_trw.innerHTML = "Hurray! Code is Valid";
    }else{
        error_trw.innerHTML = "Try Again! Valid code is apnidukaan";
    }
}