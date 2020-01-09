const input = document.querySelector('#controls>input');
const createBtn = document.querySelector('button[data-action="render"]');
const clearBtn = document.querySelector('button[data-action="destroy"]');
const boxes = document.querySelector('#boxes');
createBtn.addEventListener('click', () => createBoxes(input.value));
clearBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount, size = 30) {
    const resaltBoxes = Array(Number(amount))
        .fill('')
        .map((item, idx) => {
            const backgroundColor = `rgb(${Math.floor(
        Math.random() * 255,
      )}, ${Math.floor(Math.random() * 255)}, ${Math.floor(
        Math.random() * 255,
      )})`;
            const newBox = `<div style="background-color: ${backgroundColor}; width: ${size +
        idx * 10}px; height: ${size + idx * 10}px;"></div>`;
            return (item += newBox);
        });
    boxes.insertAdjacentHTML('beforeend', resaltBoxes.join(''));
}

function destroyBoxes() {
    boxes.innerHTML = '';
}