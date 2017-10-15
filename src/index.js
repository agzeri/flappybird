function render() {
  var element = document.createElement('div');

  element.textContent = '@agzeri';
  console.log(element.textContent)

  return element;
};

document.body.appendChild(render());
