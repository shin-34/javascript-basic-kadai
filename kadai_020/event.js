const Text = document.getElementById('text');

const Btn = document.getElementById('btn');

Btn.addEventListener('click', () => {
    const childList = document.createElement('li');

    childList.textContent = 'ボタンをクリックしました';

    text.appendChild(childList);

    text.textContent = 'ボタンをクリックしました。';
});