const inputs = document.querySelectorAll('.input');

inputs.forEach(input => {
    input.addEventListener('change', adjust)
    input.addEventListener('input', adjust)
})

function adjust() {
    const prefixVar = '--';
    const suffix = this.dataset.suffix || ''
    document.documentElement.style.setProperty(prefixVar + this.name, this.value + suffix);
}


