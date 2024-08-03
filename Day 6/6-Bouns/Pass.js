document.addEventListener('DOMContentLoaded', function() {
    var passwordInput = document.getElementById('password-input');
    var togglePassword = document.getElementById('toggle-password');
    var eyeIcon = document.getElementById('eye');
    var eyeSlashIcon = document.getElementById('eye-slash');

    togglePassword.addEventListener('click', function() {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            eyeIcon.style.display = 'none';
            eyeSlashIcon.style.display = 'block';
        } else {
            passwordInput.type = 'password';
            eyeIcon.style.display = 'block';
            eyeSlashIcon.style.display = 'none';
        }
    });
});


