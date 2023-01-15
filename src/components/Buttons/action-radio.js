function onRadioChange(e) {
    const radio = e.target;
    setVisible(radio);
    activeRadio(radio);
}

function activeRadio(radio) {
    const label = radio.closest('label');
    const active = document.querySelector('.active');

    if (active) active.classList.remove('active');
    label.classList.add('active');
}

function setVisible(radio) {
    const taskToOpen = document.querySelector(`[data-action=${radio.id}]`);
    const taskToClose = document.querySelector(`.visible`);

    taskToOpen.classList.add('visible');
    if (taskToClose) taskToClose.classList.remove('visible');
}

export { onRadioChange, setVisible };
