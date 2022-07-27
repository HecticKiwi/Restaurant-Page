import createElement from './elements';

function loadHome() {
  const main = document.querySelector('main');
  main.innerHTML = '';
  main.appendChild(createElement('h1', 'Restaurant'));
  main.appendChild(createElement('p', 'We treat you like family', 'tagline'));
  document.querySelector('#home').classList.add('selected');
  document.querySelector('#menu').classList.remove('selected');
  document.querySelector('#contact').classList.remove('selected');
}

export default loadHome;
