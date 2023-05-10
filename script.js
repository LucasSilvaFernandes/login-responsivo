const mode = document.querySelector('.bi-moon-fill')

mode.addEventListener('click', () => {
    const form = document.querySelector('#login-form')
    if(mode.classList.contains('bi-moon-fill')) {
        mode.classList.remove('bi-moon-fill');
        mode.classList.add('bi-brightness-high-fill');

        form.classList.add('dark');
        return;
    }

    mode.classList.remove('bi-brightness-high-fill');
    mode.classList.add('bi-moon-fill')

    form.classList.remove('dark')
    
})