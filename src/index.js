import printUsername from './components/hello';

function render() {
  const element = document.createElement('div');

  element.textContent = printUsername('Yair');
  console.log(element.textContent)

  return element;
};

document.body.appendChild(render());
