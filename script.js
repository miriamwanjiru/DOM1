// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const plusButtons = document.querySelectorAll(".fa-plus-circle");
  const minusButtons = document.querySelectorAll(".fa-minus-circle");
  const deleteButtons = document.querySelectorAll(".fa-trash-alt");
  const heartIcons = document.querySelectorAll(".fa-heart");
  const totalPriceElement = document.querySelector(".total");

  // Helper: update total
  function updateTotal() {
    let total = 0;
    const productCards = document.querySelectorAll(".card-body");

    productCards.forEach(card => {
      const unitPrice = parseFloat(card.querySelector(".unit-price").textContent);
      const quantity = parseInt(card.querySelector(".quantity").textContent);
      total += unitPrice * quantity;
    });

    totalPriceElement.textContent = `${total} $`;
  }

  // Plus button
  plusButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const quantityElement = btn.nextElementSibling;
      let quantity = parseInt(quantityElement.textContent);
      quantity++;
      quantityElement.textContent = quantity;
      updateTotal();
    });
  });

  // Minus button
  minusButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const quantityElement = btn.previousElementSibling;
      let quantity = parseInt(quantityElement.textContent);
      if (quantity > 0) {
        quantity--;
        quantityElement.textContent = quantity;
        updateTotal();
      }
    });
  });

  // Delete button
  deleteButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const cardBody = btn.closest(".card-body");
      cardBody.remove();
      updateTotal();
    });
  });

  // Heart like button
  heartIcons.forEach(heart => {
    heart.addEventListener("click", () => {
      heart.classList.toggle("liked");
      heart.style.color = heart.classList.contains("liked") ? "red" : "black";
    });
  });
});