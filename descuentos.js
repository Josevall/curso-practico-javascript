//Descuento simple

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultPrice = document.getElementById("ResultPrice");
    resultPrice.innerText = "El precio con descuento son: $" + precioConDescuento;
}

//Descuento con cupones

const coupons = ["basico",
"especial",
"premium",
];


function onClickButtonPriceCoupon() {
    const inputPriceC = document.getElementById("inputPriceC");
    const priceCvalue = inputPriceC.value;

    const inputCoupon = document.getElementById("inputCoupon");
    const couponvalue = inputCoupon.value;

    let descuento; 

    switch(couponvalue) {
        case coupons[0]:
            descuento = 15;
        break;
        case coupons[1]:
            descuento = 20;
        break;
        case coupons[2]:
            descuento =25;
        break;
    }

    const precioConDescuentoC = calcularPrecioConDescuento(priceCvalue, descuento)

    const resultPrice = document.getElementById("ResultPriceC");
    resultPrice.innerText = "El precio despues de aplicar el cupon es: $" + precioConDescuentoC;
}

