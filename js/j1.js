function getProductPriceById(productPriceFieldId){
    const priceField = document.getElementById(productPriceFieldId);
    const priceFieldValueString = priceField.innerText;
    const priceFieldValue = parseFloat(priceFieldValueString);
    return priceFieldValue;
}

function total(number,productPriceFieldId){
    const priceField = document.getElementById(productPriceFieldId);
    const priceFieldValueString = priceField.innerText;
    const priceFieldValue = parseFloat(priceFieldValueString);
    let total = 0;
    total = priceFieldValue + number;
    priceField.innerText = total.toFixed(2);
    const finalTotal = document.getElementById('final-total');
    finalTotal.innerText = total.toFixed(2);
    

    if(total <= 0){
        document.getElementById('btn-purchase').disabled = true;
    }
    else{
        document.getElementById('btn-purchase').disabled = false;
    }

}



let count = 0;

function setText(productName , quantity, perPrice){
    if(quantity <= 1){
        count++;
    }
    if(count > 0){
        const hr = document.getElementById('product-hr');
        hr.classList.remove('hidden');
    }
    else{
        hr.classList.add('hidden');
    }
    const tableBody = document.getElementById('table-body');
    const tr = document.createElement('tr')
    const td = document.createElement('td');
    
    const SN = count;
    td.innerText = SN;
    td.classList.add('border-2');
    tr.appendChild(td);

    const td2 = document.createElement('td');
    td2.innerText = productName;
    td2.classList.add('border-2');
    tr.appendChild(td2);

    const td3 = document.createElement('td');
    td3.innerText = quantity;
    td3.classList.add('border-2');
    tr.appendChild(td3);

    const td4 = document.createElement('td');
    td4.innerText = perPrice;
    td4.classList.add('border-2');
    tr.appendChild(td4);

    const td5 = document.createElement('td');
    td5.innerText = perPrice*quantity;
    td5.classList.add('border-2');
    tr.appendChild(td5);
    
    tableBody.appendChild(tr);
}




document.getElementById('coupon-code').addEventListener('keyup', function(event){
    const text = event.target.value;
    const couponButton = document.getElementById('coupon-btn');
    const priceFieldValue = getProductPriceById('total');

    if(text == 'SELL200' && priceFieldValue >= 200){
        couponButton.removeAttribute('disabled');
    }
    else{
        couponButton.setAttribute('disabled',true);
    }
})

let productArray = [];

function insertProductName(productName) {
    if (!productArray.includes(productName)) {
        productArray.push(productName);
    }
}

function findProduct(productName) {
    let index = productArray.indexOf(productName);
    return index + 1;
}

let product1Quantity = 0;
document.getElementById('product-1').addEventListener('click', function () {
    product1Quantity++;
    const product1 = getProductPriceById('product-1-price');
    total(product1, 'total');
    const product = document.getElementById('product-1-name');
    productName = product.innerText;
    insertProductName(productName);
    let index = findProduct(productName);
    console.log(index);
    console.log(productArray);
    if (product1Quantity <= 1) {
        setText(productName, product1Quantity, product1);
    } else {
        setQuantityPrice(index, product1Quantity, product1);
    }
});


function setQuantityPrice(index, product1Quantity, product1){
    const tBody = document.getElementById('table-body');
    const total = product1Quantity*product1;
    tBody.childNodes[index].childNodes[2].innerText = product1Quantity;
    console.log(    tBody.childNodes[index].childNodes[2].innerText = product1Quantity );
    tBody.childNodes[index].childNodes[4].innerText = total;
}

let product2Quantity = 0;
document.getElementById('product-2').addEventListener('click', function(){
    product2Quantity++;
    const product2 = getProductPriceById('product-2-price');
    total(product2, 'total');
    const product = document.getElementById('product-2-name');
    productName = product.innerText;
    insertProductName(productName);
    let index = findProduct(productName);
    if(product2Quantity <=1){
        setText(productName,product2Quantity,product2);
    }
    else{
        setQuantityPrice(index,product2Quantity,product2)
    }
})

let product3Quantity = 0;
document.getElementById('product-3').addEventListener('click', function(){
    product3Quantity++;
    const product3 = getProductPriceById('product-3-price');
    total(product3, 'total');
    const product = document.getElementById('product-3-name');
    productName = product.innerText;
    insertProductName(productName);
    let index = findProduct(productName);
    if(product3Quantity <=1){
        setText(productName,product3Quantity,product3);
    }
    else{
        setQuantityPrice(index,product3Quantity,product3)
    }
})


let product4Quantity = 0;
document.getElementById('product-4').addEventListener('click', function(){
    product4Quantity++;
    const product4 = getProductPriceById('product-4-price');
    total(product4, 'total');
    const product = document.getElementById('product-4-name');
    productName = product.innerText;
    insertProductName(productName);
    let index = findProduct(productName);
    if(product4Quantity <=1){
        setText(productName,product4Quantity,product4);
    }
    else{
        setQuantityPrice(index,product4Quantity,product4)
    }
})

let product5Quantity = 0;
document.getElementById('product-5').addEventListener('click', function(){
    product5Quantity++;
    const product5 = getProductPriceById('product-5-price');
    total(product5, 'total');
    const product = document.getElementById('product-5-name');
    productName = product.innerText;
    insertProductName(productName);
    let index = findProduct(productName);
    if(product5Quantity <=1){
        setText(productName,product5Quantity,product5);
    }
    else{
        setQuantityPrice(index,product5Quantity,product5)
    }
})

let product6Quantity = 0;
document.getElementById('product-6').addEventListener('click', function(){
    product6Quantity++;
    const product6 = getProductPriceById('product-6-price');
    total(product6, 'total');
    const product = document.getElementById('product-6-name');
    productName = product.innerText;
    insertProductName(productName);
    let index = findProduct(productName);
    if(product6Quantity <=1){
        setText(productName,product6Quantity,product6);
    }
    else{
        setQuantityPrice(index,product6Quantity,product6)
    }
})

let product7Quantity = 0;
document.getElementById('product-7').addEventListener('click', function(){
    product7Quantity++;
    const product7 = getProductPriceById('product-7-price');
    total(product7, 'total');
    const product = document.getElementById('product-7-name');
    productName = product.innerText;
    insertProductName(productName);
    let index = findProduct(productName);
    if(product7Quantity <=1){
        setText(productName,product7Quantity,product7);
    }
    else{
        setQuantityPrice(index,product7Quantity,product7)
    }
})

let product8Quantity = 0;
document.getElementById('product-8').addEventListener('click', function(){
    product8Quantity++;
    const product8 = getProductPriceById('product-8-price');
    total(product8, 'total');
    const product = document.getElementById('product-8-name');
    productName = product.innerText;
    insertProductName(productName);
    let index = findProduct(productName);
    if(product8Quantity <=1){
        setText(productName,product8Quantity,product8);
    }
    else{
        setQuantityPrice(index,product8Quantity,product8)
    }
})

let product9Quantity = 0;
document.getElementById('product-9').addEventListener('click', function(){
    product9Quantity++;
    const product9 = getProductPriceById('product-9-price');
    total(product9, 'total');
    const product = document.getElementById('product-9-name');
    productName = product.innerText;
    insertProductName(productName);
    let index = findProduct(productName);
    if(product9Quantity <=1){
        setText(productName,product9Quantity,product9);
    }
    else{
        setQuantityPrice(index,product9Quantity,product9)
    }
})

document.getElementById('coupon-btn').addEventListener('click', function(){
    const discount = document.getElementById('discount');
    const finalTotal = document.getElementById('final-total');

    const total = getProductPriceById('total');
    const discountAmount = total * 0.20;
    discount.innerText = discountAmount.toFixed(2);

    const finalAmount = total - discountAmount;
    finalTotal.innerText = finalAmount.toFixed(2);


})

function reloadPage() {
    location.reload();
}


document.getElementById('go-home').addEventListener('click', function(){
    reloadPage();
})





