import loadHome from './home';
import loadMenu from './menu';

loadMenu();

document.querySelector('#home').addEventListener('click', loadHome);
document.querySelector('#menu').addEventListener('click', loadMenu);
