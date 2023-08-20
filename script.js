function addToCart(productName) {
    alert(productName + " added to cart.");
}

const buttons = document.querySelectorAll(".btn1, .btn2, .btn3, .add-to-cart");
buttons.forEach(button => {
    button.addEventListener("mouseenter", () => {
        button.style.backgroundColor = "#956d21";
    });
    button.addEventListener("mouseleave", () => {
        button.style.backgroundColor = "#B88E2F";
    });

    
    if (button.classList.contains("add-to-cart")) {
        button.addEventListener("click", () => {
            const productName = button.getAttribute("data-product-name");
            addToCart(productName);
        });
    }
});
const sizeButtons = document.querySelectorAll('.size-button');

const minusButton = document.querySelector('.minus-button');
const plusButton = document.querySelector('.plus-button');
const quantityInput = document.querySelector('.quantity-input');

sizeButtons.forEach(button => {
  button.addEventListener('click', () => {
    sizeButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});

const colorButtons = document.querySelectorAll('.color-button');

colorButtons.forEach(button => {
  button.addEventListener('click', () => {
    colorButtons.forEach(btn => btn.classList.remove('selected'));
    button.classList.add('selected');
  });
});
minusButton.addEventListener('click', () => {
  const currentValue = parseInt(quantityInput.value);
  if (currentValue > 1) {
    quantityInput.value = currentValue - 1;
  }
});

plusButton.addEventListener('click', () => {
  const currentValue = parseInt(quantityInput.value);
  quantityInput.value = currentValue + 1;
});

 