import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

loadHome();

document.querySelector('#home').addEventListener('click', loadHome);
document.querySelector('#menu').addEventListener('click', loadMenu);
document.querySelector('#contact').addEventListener('click', loadContact);
