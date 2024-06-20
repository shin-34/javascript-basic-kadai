const Text = document.getElementById('text');

const Btn = document.getElementById('btn');

Btn.addEventListener('click', () => {

    setTimeout(() => {
    const childList = document.createElement('li');
    
    childList.textContent = 'ボタンをクリックしました';

    text.appendChild(childList);

    text.textContent = 'ボタンをクリックしました。';
    }, 2000);

});