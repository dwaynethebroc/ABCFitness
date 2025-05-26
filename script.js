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
  let cartData = JSON.parse(sessionStorage.getItem("cart")) || [];
  cartData.push(item);
  console.log(cartData);

  sessionStorage.setItem("cart", JSON.stringify(cartData));

  alert(
    `'${item}' has been added to your cart! View the cart at the top of the page to submit order`
  );
}

function processOrder() {
  const orderList = document.getElementById("cart");
  const cartData = JSON.parse(sessionStorage.getItem("cart")) || [];

  if (cartData.length > 0) {
    orderList.textContent = "";
    sessionStorage.removeItem("cart");
    alert("Thank you for your Order: \n" + cartData.join("\n"));
  } else {
    alert("Cart is empty!");
  }
}

function clearCart() {
  const orderList = document.getElementById("cart");
  const cartData = JSON.parse(sessionStorage.getItem("cart")) || [];

  if (cartData.length === 0) {
    alert("Your cart is empty!");
  } else {
    orderList.textContent = "";
    while (cart.length > 0) {
      cart.pop();
    }
    sessionStorage.removeItem("cart");
    alert("Your cart has been cleared!");
  }
}

function closeCart() {
  const popUpWindow = document.getElementById("pop-up");
  popUpWindow.classList.add("pop-up");
  popUpWindow.classList.remove("modal");
}

function viewCart() {
  const cartData = JSON.parse(sessionStorage.getItem("cart")) || [];

  const popUpWindow = document.getElementById("pop-up");
  popUpWindow.classList.remove("pop-up");
  popUpWindow.classList.add("modal");

  const orderList = document.getElementById("cart");
  orderList.textContent = "";

  cartData.forEach((shopItem) => {
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
  const fname = document.getElementById("fname").value.trim();
  const lname = document.getElementById("lname").value.trim();
  const order = document.getElementById("order").value.trim();
  const experience = document.getElementById("experience").value.trim();
  const email = document.getElementById("email").value.trim();
  let checked = document.getElementById("cbox").value.trim();

  if (checked === "on") {
    checked = true;
  } else {
    checked = false;
  }

  console.log(checked);

  const feedback = {
    name: `${fname} ${lname}`,
    email: email,
    order: order,
    experience: experience,
    custom: checked,
  };

  let feedbackList = JSON.parse(localStorage.getItem("feedback")) || [];
  feedbackList.push(feedback);
  localStorage.setItem("feedback", JSON.stringify(feedbackList));

  console.log(feedback);
  console.log(feedbackList);

  event.target.reset();
  alert(`Thank you for your message ${fname}`);
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
