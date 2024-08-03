
    function displayUserInfo() {
        const params = new URLSearchParams(window.location.search);
        const name = params.get('name');
        const age = params.get('age');
        const gender = params.get('gender');
        const email = decodeURIComponent(params.get('email')); // Decode the email address
        const address = params.get('address');

        document.getElementById('greeting').innerHTML = `Hello, ${name}!`;
        document.getElementById('info').innerHTML = `
            Age: ${age}<br>
            Gender: ${gender}<br>
            Email: ${email}<br>
            Address: ${address}
        `;
    }

    displayUserInfo();

