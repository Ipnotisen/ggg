const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('click', () => {
    const body = document.body;
    if(body.classList.contains('dark')){

        body.classList.add('light')
        body.classList.remove('dark')

    } else if(body.classList.contains('light')){

        body.classList.add('dark')
        body.classList.remove('light')

    }
})