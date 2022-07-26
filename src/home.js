function createTextElement(tag, text) {
  const el = document.createElement(tag);
  el.innerText = text;
  return el;
}

function createFeature(src, spanText) {
  const div = document.createElement('div');
  div.className = 'feature box';
  const img = document.createElement('img');
  img.src = src;
  div.appendChild(img);
  div.appendChild(createTextElement('span', spanText));
  return div;
}

function loadHome() {
  const main = document.querySelector('main');

  const greeting = document.createElement('div');
  greeting.classList.add('greeting');
  greeting.appendChild(createTextElement('h1', "Welcome to WcDonald's!"));
  greeting.appendChild(createTextElement('h2', "Please don't sue us!"));

  main.appendChild(greeting);

  const content = document.createElement('div');
  content.classList.add('content');
  content.append(createTextElement('h2', 'Enjoy your next dinner at one of our convenient locations!'));
  const features = document.createElement('div');
  features.classList.add('features');
  features.addpen;
}

export default loadHome;
