import createElement from './elements';

function createMenuItem(imgSrc, name, desc) {
  const item = createElement('div', '', 'item');
  const img = document.createElement('img');
  img.src = imgSrc;
  item.appendChild(img);
  item.appendChild(createElement('h3', name));
  item.appendChild(createElement('p', desc));
  console.log('asd');
  return item;
}

function loadMenu() {
  const main = document.querySelector('main');
  main.innerHTML = '';

  main.appendChild(createElement('h2', 'Our menu has something for everyone.'));
  const menu = createElement('div', '', 'menu');
  menu.appendChild(createMenuItem('./images/burger.webp', 'Burger', "You can't go wrong with the classic fan favorite."));
  menu.appendChild(createMenuItem('./images/french_fries.webp', 'French Fries', 'Why yes, you would like fries with your order!'));
  menu.appendChild(createMenuItem('./images/milkshake.webp', 'Milkshake', 'A delicious beverage to complement your meal.'));
  main.appendChild(menu);

  document.querySelector('#home').classList.add('selected');
  document.querySelector('#menu').classList.remove('selected');
  document.querySelector('#contact').classList.remove('selected');
}

export default loadMenu;
