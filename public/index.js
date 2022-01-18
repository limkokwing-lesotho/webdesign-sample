const addressBook = document.querySelector('#addressBook');

db.collection('contacts').onSnapshot((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    const div = document.createElement('div');
    const contact = doc.data();
    div.innerHTML = `
      <img src='img/avater.png' alt='avater' />
      <h3>${contact.name}</h3>
      <p>${contact.phoneNumber}</p>`;
    addressBook.appendChild(div);
  });
});

function createContact() {
  const names = document.querySelector('#names');
  const phoneNumber = document.querySelector('#phoneNumber');

  db.collection('contacts').add({
    name: names.value,
    phoneNumber: phoneNumber.value,
  });

  // Clear the text inputs
  names.value = '';
  phoneNumber.value = '';
}
