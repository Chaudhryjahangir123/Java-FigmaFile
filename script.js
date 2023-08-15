
function addToCart(productName) {
    alert(productName + " added to cart.");
}


const buttons = document.querySelectorAll(".btn1, .btn2, .add-to-cart");
buttons.forEach(button => {
    button.addEventListener("mouseenter", () => {
        button.style.backgroundColor = "#956d21";
    });
    button.addEventListener("mouseleave", () => {
        button.style.backgroundColor = "#B88E2F";
    });
});


const addToCartParagraphs = document.querySelectorAll(".add-to-cart");
addToCartParagraphs.forEach(paragraph => {
    paragraph.addEventListener("click", () => {
        const productName = paragraph.dataset.productName;
        addToCart(productName);
    });
});
