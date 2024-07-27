document.addEventListener('DOMContentLoaded', () => {
    const textBox = document.querySelector('.text-box h1');
    const words = ['FABIANA', 'UMA CRIADORA', 'UMA INOVADORA'];
    let i = 0;

    setInterval(() => {
        textBox.textContent = words[i];
        i = (i + 1) % words.length;
    }, 3000);

    const formElements = document.querySelectorAll('.contato-form input, .contato-form textarea, .contato-form button');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            } else {
                entry.target.classList.remove('fade-in');
            }
        });
    }, { threshold: 0.1 });

    formElements.forEach(el => observer.observe(el));
});
document.addEventListener('DOMContentLoaded', () => {
    const footer = document.querySelector('.footer');
    footer.classList.add('fade-in');
});
document.addEventListener('DOMContentLoaded', () => {
    const textBox = document.querySelector('.text-box h1');
    const words = ['FABIANA', 'UMA CRIADORA', 'UMA INOVADORA'];
    let i = 0;

    setInterval(() => {
        textBox.textContent = words[i];
        i = (i + 1) % words.length;
    }, 3000);

    const formElements = document.querySelectorAll('.contato-form input, .contato-form textarea, .contato-form button');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            } else {
                entry.target.classList.remove('fade-in');
            }
        });
    }, { threshold: 0.1 });

    formElements.forEach(el => observer.observe(el));

    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        observer.observe(item);
    });
});


