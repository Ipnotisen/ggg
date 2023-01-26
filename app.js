// Animation on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
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
// Loader
const loader = document.querySelector('.loader');

window.addEventListener('load', () => {
    document.body.style.overflow = "hidden";
    setTimeout(() => {
        loader.classList.add('fondu-out');
        document.body.style.overflow = "visible";
        loader.style.display = "none";
        modalPro.style.display = "none";
        modalAmateur.style.display = "none";
    }, 1200);
});
// Close Modal
const modalAmateur = document.getElementById("modal-amateur");
const modalPro = document.getElementById("modal-pro");
const closeButton = document.querySelectorAll('.close');
const openAmateur = document.querySelector("#open-amateur");
const openPro = document.querySelector("#open-pro");

closeButton.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        modalAmateur.style.display = "none";
    });
});

closeButton.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        modalPro.style.display = "none";
    });
});

openAmateur.addEventListener('click', (e) => {
    modalAmateur.style.display = "block";
});
openPro.addEventListener('click', (e) => {
    modalPro.style.display = "block";
});