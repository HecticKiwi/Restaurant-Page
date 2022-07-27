import createElement from './elements';

function createContactItem(imgSrc, text) {
  const contact = createElement('div', '', 'contact');
  const img = document.createElement('img');
  img.src = imgSrc;
  contact.appendChild(img);
  contact.appendChild(createElement('p', text));
  return contact;
}

function loadContact() {
  const main = document.querySelector('main');
  main.innerHTML = '';

  main.appendChild(createElement('h2', 'Get in touch with us!'));
  main.appendChild(createContactItem('./images/phone-line.svg', '(123) 456-7890'));
  main.appendChild(createContactItem('./images/mail-line.svg', 'restaurant@gmail.ca'));

  document.querySelector('#home').classList.remove('selected');
  document.querySelector('#menu').classList.remove('selected');
  document.querySelector('#contact').classList.add('selected');
}

export default loadContact;
