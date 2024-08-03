
    let name = document.getElementById("name");
    let age = document.getElementById("age");
    let email = document.getElementById("email");
    let namespan = document.getElementById("name_span");
    let agespan = document.getElementById("age_span");
    let emailspan = document.getElementById("email_span");

    let sub_btn = document.getElementById("btn_sub");

    function handleSubmit(event) {
        event.preventDefault();
        if (Validation()) {
            const Hname = document.getElementById('name').value;
            const Hage = document.getElementById('age').value;
            const Hgender = document.querySelector('input[name="rad_gender"]:checked').value;
            const Hemail = document.getElementById('email').value;
            const Haddress = document.getElementById('address').value;

            const params = new URLSearchParams({
                name: Hname,
                age: Hage,
                gender: Hgender,
                email: Hemail,
                address: Haddress
            });

            window.location.href = 'index2.html?' + params.toString();
        }
    }

    function Validation() {
        let isValid = true;
        namespan.innerHTML = "";
        agespan.innerHTML = "";
        emailspan.innerHTML = "";

        if (name.value === "") {
            namespan.innerHTML = "This Field is Required";
            isValid = false;
        } else if (!isNaN(name.value)) {
            namespan.innerHTML = "This Field requires only characters";
            isValid = false;
        }

        if (age.value === "") {
            agespan.innerHTML = "This Field is Required";
            isValid = false;
        } else if (isNaN(age.value)) {
            agespan.innerHTML = "This Field requires only numbers";
            isValid = false;
        }

        if (email.value === "") {
            emailspan.innerHTML = "This Field is Required";
            isValid = false;
        } else {
            var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailRegex.test(email.value)) {
                emailspan.innerHTML = "Email should be like (abc@example.com)";
                isValid = false;
            }
        }

        return isValid;
    }

    sub_btn.addEventListener("click", handleSubmit);

    setTimeout(() => {
        alert("Timeout");
        this.window.close();
    }, 30000); 

