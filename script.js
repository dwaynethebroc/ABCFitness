let slideIndex = 0;
let cart = [];

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  // Remove 'active' from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Show current slide and activate dot
  slides[slideIndex - 1].style.display = "block";
  if (dots.length >= slideIndex) {
    dots[slideIndex - 1].className += " active";
  }

  // Repeat every 5 seconds
  setTimeout(showSlides, 5000);
}

function showSection(section) {
  const pages = document.getElementsByClassName("page");

  Array.from(pages).forEach((page) => {
    page.classList.remove("active"); // remove active from all
  });

  const activePage = document.getElementById(section);
  activePage.classList.add("active"); // add active to the selected page
}

function addToCart(item) {
  cart.push(item);
  console.log(cart);

  alert(
    `'${item}' has been added to your cart! View the cart at the top of the page to submit order`
  );
}

function processOrder() {
  const orderList = document.getElementById("cart");
  if (cart.length > 0) {
    orderList.textContent = "";
    alert("Thank you for your Order!");
  } else {
    alert("Cart is empty!");
  }
}

function clearCart() {
  const orderList = document.getElementById("cart");
  if (cart.length === 0) {
    alert("Your cart is empty!");
  } else {
    orderList.textContent = "";
    while (cart.length > 0) {
      cart.pop();
    }
    alert("Your cart has been cleared!");
  }
}

function closeCart() {
  const popUpWindow = document.getElementById("pop-up");
  popUpWindow.classList.add("pop-up");
  popUpWindow.classList.remove("modal");
}

function viewCart() {
  const popUpWindow = document.getElementById("pop-up");
  popUpWindow.classList.remove("pop-up");
  popUpWindow.classList.add("modal");

  const orderList = document.getElementById("cart");
  orderList.textContent = "";
  cart.forEach((shopItem) => {
    const listItem = document.createElement("li");
    listItem.textContent = shopItem;
    orderList.appendChild(listItem);
  });
}

function subscribeNewsletter(event) {
  event.preventDefault();
  alert("Thank you for subscribing!");
  event.target.reset();
}

function submitFeedback(event) {
  event.preventDefault();
  alert("Thank you for your message");
  event.target.reset();
}

// Automatically start when the DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  showSlides();

  const feedbackForm = document.getElementById("feedback");
  if (feedbackForm) {
    feedbackForm.addEventListener("submit", submitFeedback);
  }

  const subscribeForm = document.getElementById("subscribe");
  if (subscribeForm) {
    subscribeForm.addEventListener("submit", subscribeNewsletter);
  }

  const viewCartButton = document.getElementById("viewCart");
  if (viewCartButton) {
    viewCartButton.addEventListener("click", viewCart);
  }

  const closeButton = document.getElementById("close");
  if (closeButton) {
    closeButton.addEventListener("click", closeCart);
  }

  const clearCartButton = document.getElementById("clearCart");
  if (clearCartButton) {
    clearCartButton.addEventListener("click", clearCart);
  }

  const processOrderButton = document.getElementById("process");
  if (processOrderButton) {
    processOrderButton.addEventListener("click", processOrder);
  }
});
