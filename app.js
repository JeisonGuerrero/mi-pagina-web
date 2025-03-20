function validarInputs() {
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const number = document.getElementById('number').value.trim();
    const texto = document.getElementById('texto').value.trim();

    if (!nombre) {
        alert('El campo nombre no puede estar vacío');
        return false;
    }
    if (!email) {
        alert('El campo email no puede estar vacío');
        return false;
    }
    if (!number) {
        alert('El campo número no puede estar vacío');
        return false;
    }
    if (!texto) {
        alert('El campo texto no puede estar vacío');
        return false;
    }

    return true;
}