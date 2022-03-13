let TDI = [];

function RTO(TD) {
  localStorage.setItem('TDI', JSON.stringify(TDI));

  const list = document.querySelector('.JTL');
  const item = document.querySelector(`[data-key='${TD.id}']`);

  if (TD.deleted) {
    item.remove();
    if (TDI.length === 0) list.innerHTML = '';
    return
  }

  const isChecked = TD.checked ? 'D' : '';
  const node = document.createElement("li");
  node.setAttribute('class', `TI ${isChecked}`);
  node.setAttribute('data-key', TD.id);
  node.innerHTML = `
    <input id="${TD.id}" type="checkbox"/>
    <label for="${TD.id}" class="Tic JT"></label>
    <span>${TD.text}</span>
    <button class="DT js-DT">
    <svg><use href="#DI"></use></svg>
    </button>
  `;

  if (item) {
    list.replaceChild(node, item);
  } else {
    list.append(node);
  }
}

function AT(text) {
  const TD = {
    text,
    checked: false,
    id: Date.now(),
  };

  TDI.push(TD);
  RTO(TD);
}

function TD(key) {
  const index = TDI.findIndex(item => item.id === Number(key));
  TDI[index].checked = !TDI[index].checked;
  RTO(TDI[index]);
}

function DT(key) {
  const index = TDI.findIndex(item => item.id === Number(key));
  const TD = {
    deleted: true,
    ...TDI[index]
  };
  TDI = TDI.filter(item => item.id !== Number(key));
  RTO(TD);
}

const form = document.querySelector('.JF');
form.addEventListener('submit', event => {
  event.preventDefault();
  const input = document.querySelector('.js-todo-input');

  const text = input.value.trim();
  if (text !== '') {
    AT(text);
    input.value = '';
    input.focus();
  }
});

const list = document.querySelector('.JTL');
list.addEventListener('click', event => {
  if (event.target.classList.contains('JT')) {
    const itemKey = event.target.parentElement.dataset.key;
    TD(itemKey);
  }

  if (event.target.classList.contains('js-DT')) {
    const itemKey = event.target.parentElement.dataset.key;
    DT(itemKey);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const ref = localStorage.getItem('TDI');
  if (ref) {
    TDI = JSON.parse(ref);
    TDI.forEach(t => {
      RTO(t);
    });
  }
});