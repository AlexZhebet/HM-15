const button = document.querySelectorAll(`.button`),
 div = document.createElement(`div`);

button[0].addEventListener(`click`, () => {
    button[0].after(div);
    div.classList.add(`button_text`);
    div.innerHTML = `<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio atque suscipit error esse nostrum neque aperiam
    pariatur, sunt itaque in ut harum eius dolore deserunt et ipsa modi, numquam perferendis.</p>`;
    div.addEventListener(`click`, () => {
        div.classList.add(`purple`);
    })
});

button[1].addEventListener(`click`, () => {
    div.remove();
    div.classList.remove(`purple`);
}); 