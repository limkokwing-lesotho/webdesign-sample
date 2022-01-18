function createContact() {
  const addressBook = document.querySelector('#addressBook');

  const name = document.querySelector('#names').value;
  const phoneNumber = document.querySelector('#phoneNumber').value;

  const contact = document.createElement('div');
  contact.innerHTML = `
    <img src='img/avater.png' alt='avater' />
    <h3>${name}</h3>
    <p>${phoneNumber}</p>
  `;

  addressBook.appendChild(contact);
}
