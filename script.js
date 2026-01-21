const cart = {
  dj: { name: "DJ Night", price: 800, qty: 0 },
  bollywood: { name: "Bollywood Night", price: 700, qty: 0 },
  techno: { name: "Techno Party", price: 1000, qty: 0 },
  newyear: { name: "New Years Bash", price: 1500, qty: 0 },
  foam: { name: "Foam Party", price: 1200, qty: 0 },
  christmas: { name: "Christmas Party", price: 900, qty: 0 }
};

function increase(key) {
  cart[key].qty++;
  updateUI();
}

function decrease(key) {
  if (cart[key].qty > 0) {
    cart[key].qty--;
    updateUI();
  }
}

function updateUI() {
  let total = 0;
  const list = document.getElementById("cart-items");
  const totalText = document.getElementById("total");

  list.innerHTML = "";

  for (let key in cart) {
    document.getElementById(`qty-${key}`).innerText = cart[key].qty;

    if (cart[key].qty > 0) {
      const li = document.createElement("li");
      li.textContent = cart[key].name + " x " + cart[key].qty;
      list.appendChild(li);
      total += cart[key].price * cart[key].qty;
    }
  }

  totalText.innerText = total;
}

function checkout() {
  window.location.href = "feedback.html";
}

function saveFile() {
  const text = document.getElementById("note").value;
  const blob = new Blob([text], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "feedback.txt";
  link.click();
}
function loadFile(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    document.getElementById("note").value = e.target.result;
  };
  reader.readAsText(file);
}