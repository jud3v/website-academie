const btn = document.querySelector('.btn');
if (btn != null){
    btn.addEventListener('click', () => {
        btn.classList.toggle('active');
    })
}