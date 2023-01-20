// Animation on scroll
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

// Dark mode switch
const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('click', () => {
    const body = document.body;
    if (body.classList.contains('dark')) {
        body.classList.add('light')
        body.classList.remove('dark')
        localStorage.setItem("mode", "light");
    } else if (body.classList.contains('light')) {
        body.classList.add('dark')
        body.classList.remove('light')
        localStorage.setItem("mode", "dark");
    }
});

if (localStorage.getItem("mode") === "dark") {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
    checkbox.checked = true;
} else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
    checkbox.checked = false;
}

// Nav mobile
const toggleMobile = document.querySelector(".menu-toggle-mobile");
const navMobile = document.querySelector(".nav-mobile");

toggleMobile.addEventListener("click", function() {
    this.classList.toggle("active");
    navMobile.classList.toggle("active");
});