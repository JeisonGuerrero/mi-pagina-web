function validarInputs() {
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const number = document.getElementById('number').value.trim();
    const texto = document.getElementById('texto').value.trim();
    const soloNumeros = /^[0-9]+$/;
    const soloLetras = /^[a-zA-Z\s]+$/;

    if (!nombre) {
        alert('El campo nombre no puede estar vacío');
        return false;
    }
    if (!soloLetras.test(nombre)) {
        alert('El campo nombre solo puede contener letras');
        return false;
    }
    if (!email) {
        alert('El campo email no puede estar vacío');
        return false;
    }
    if (!number || number.length > 11) {
        alert('El campo número no puede estar vacío y solo puede contener hasta 10 numeros');
        return false;
    }
    if (!soloNumeros.test(number)) {
        alert('El campo número solo puede contener números');
        return false;
    }
    if (!texto) {
        alert('El campo texto no puede estar vacío');
        return false;
    }

    return true;
}