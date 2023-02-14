document.getElementById('boton_oscuro').onclick = function () {
    let main_body = document.body;
    main_body.classList.toggle("modo_oscuro");
};

document.getElementById('boton1').addEventListener('click', function() {
    window.open('https://www.linkedin.com', '_blank');
});

document.getElementById('boton2').addEventListener('click', function() {
    window.open('https://www.facebook.com', '_blank');
});

