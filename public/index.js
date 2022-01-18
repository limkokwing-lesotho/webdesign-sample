function displayContacts() {
  const addressBook = document.querySelector('#addressBook');

  // Clear the address book so that it can be repopulated
  addressBook.innerHTML = '';

  db.collection('contacts')
    .get()
    .then((querySnapshot) => {
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
}

function createContact() {
  const names = document.querySelector('#names');
  const phoneNumber = document.querySelector('#phoneNumber');

  //Only create a contact if name is not empty
  if (names.value.length > 0) {
    db.collection('contacts').add({
      name: names.value,
      phoneNumber: phoneNumber.value,
    });

    // Clear the text inputs
    names.value = '';
    phoneNumber.value = '';

    // Display new list of contacts
    displayContacts();
  }
}
