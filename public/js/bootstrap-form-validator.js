// Bootstrap js for disabling form submissions
// if there are invalid fields
;(function() {
    // Fetch the form we want to apply
    // custom Bootstrap validation styles to
    var form = document.getElementsByClassName('needs-validation')[0];
    form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        form.classList.add('was-validated');
    }, false);
})();
