let name = document.getElementById("name_input");
let age = document.getElementById("age_input");
let email = document.getElementById("email_input");
let namespan = document.getElementById("name_span");
let agespan = document.getElementById("Age_span");
let emailspan = document.getElementById("Email_span");
let add = document.getElementById("Add");
let reset = document.getElementById("Reset");


function Validation() {
    let isValid = true;
    namespan.innerHTML = "";
    agespan.innerHTML = "";
    emailspan.innerHTML = "";

    
    if (name.value === "") {
        namespan.innerHTML = "This Field is Required";
        isValid = false;
    } else if (isFinite(name.value)) {
        namespan.innerHTML = "This Field is Required only Characters";
        isValid = false;
    }

   
    if (age.value === "") {
        agespan.innerHTML = "This Field is Required";
        isValid = false;
    } else if (isNaN(age.value)) {
        agespan.innerHTML = "This Field is Required only Numbers";
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


add.addEventListener("click", function () {
    if (Validation()) {
       
        let tableBody = document.querySelector("#data-table tbody");
        let newRow = document.createElement("tr");
        let nameCell = document.createElement("td");
        nameCell.textContent = name.value;
        newRow.appendChild(nameCell);

        let ageCell = document.createElement("td");
        ageCell.textContent = age.value;
        newRow.appendChild(ageCell);

        let emailCell = document.createElement("td");
        emailCell.textContent = email.value;
        newRow.appendChild(emailCell);

        
        tableBody.appendChild(newRow);

        
        name.value = "";
        age.value = "";
        email.value = "";
    } 
    
    });

reset.addEventListener("click", function () {
    name.value = ""
    age.value = ""
    email.value = ""
    namespan.innerHTML = "";
    agespan.innerHTML = "";
    emailspan.innerHTML = "";
});
