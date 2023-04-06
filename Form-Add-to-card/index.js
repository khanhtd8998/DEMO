

// console.log(priceElement)
// console.log(quantity)
// console.log(reusult)

function sum() {
    var priceElement = parseInt(document.querySelector(".price").value);
    // var price = priceElement.getAttribute('value');
    var quantity = parseInt(document.querySelector(".quantity").value);
    var reusult = document.querySelector(".reusult")
    var reusultSum = priceElement * quantity;
    reusult.innerHTML = reusultSum;
  

}
function sum2() {
    var priceElement2 = parseInt(document.querySelector(".price2").value);
    // var price = priceElement.getAttribute('value');
    var quantity2 = parseInt(document.querySelector(".quantity2").value);
    var reusult2 = document.querySelector(".reusult2")
    var reusultSum2 = priceElement2 * quantity2;
    reusult2.innerHTML = reusultSum2;
  

}
function sum3() {
    var priceElement3 = parseInt(document.querySelector(".price3").value);
    // var price = priceElement.getAttribute('value');
    var quantity3 = parseInt(document.querySelector(".quantity3").value);
    var reusult3 = document.querySelector(".reusult3")
    var reusultSum3 = priceElement3 * quantity3;
    reusult3.innerHTML = reusultSum3;
  

}


