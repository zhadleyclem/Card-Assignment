
function Card(name, email, address, phone, birthdate) {
  this.name = name;
  this.email = email;
  this.address = address;
  this.phone = phone;
  this.birthdate = birthdate;
  this.printCard = function () {
    return `
      <div class="card-info">
        <p><strong>Name:</strong> ${this.name}</p>
        <p><strong>Email:</strong> ${this.email}</p>
        <p><strong>Address:</strong> ${this.address}</p>
        <p><strong>Phone:</strong> ${this.phone}</p>
        <p><strong>Birthdate:</strong> ${this.birthdate}</p>
      </div>`;
  };
}

const cards = [];

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("cardForm");
  const displayBtn = document.getElementById("showCards");
  const displayArea = document.getElementById("cardDisplay");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const address = document.getElementById("address").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const birthdate = document.getElementById("birthdate").value;

    if (!name || !email || !address || !phone || !birthdate) {
      alert("Please fill in all fields.");
      return;
    }

    const newCard = new Card(name, email, address, phone, birthdate);
    cards.push(newCard);
    alert("Card added!");

    form.reset();
    displayArea.innerHTML = '';
  });

  displayBtn.addEventListener("click", () => {
    if (cards.length === 0) {
      displayArea.innerHTML = "<p>No cards to show yet.</p>";
      return;
    }

    displayArea.innerHTML = cards.map(card => card.printCard()).join('');
  });
});
