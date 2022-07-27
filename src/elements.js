function createElement(tag, text, className = '') {
  const el = document.createElement(tag);
  el.innerText = text;
  el.className = className;
  return el;
}

export default createElement;
