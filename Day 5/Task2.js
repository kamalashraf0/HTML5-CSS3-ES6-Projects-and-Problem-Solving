
function ArrayOfTable() {
    

var numOfPersons = prompt("Enter The Number of persons : ")

while (isNaN(numOfPersons))
    {
        numOfPersons = prompt("The input should be numeric");
    }

var IntnumofPesrons=parseInt(numOfPersons);

var usernameArr = [];
var userageArr = [];

for (var i = 1; i <=IntnumofPesrons ; i++) 
    {
        var username = prompt("Enter User "+ i +" Name");

        while (!(username.length > 3 && username.length < 10) || isFinite(username) )
            {
                username = prompt("Please the name should be string and  4 to 9 length")
            }

            var userAge = parseInt(prompt("Enter User " + i + " Age : "));

            

            while (isNaN(userAge) || !(userAge > 10 && userAge < 60 ))

                {
                    userAge = prompt("Please Enter Numeric input and should between 10 and 60");
                }

                usernameArr.push(username);
                userageArr.push(userAge);
           
    }
    
    document.addEventListener("DOMContentLoaded", function() {
    
        var table = document.getElementById('ArrayofTable').getElementsByTagName('tbody')[0];

            for (var i = 0; i < usernameArr.length; i++) {

                         var newRow = table.insertRow();
                         var nameCell = newRow.insertCell(0);                
                        var agecell = newRow.insertCell(1);
                        nameCell.textContent = usernameArr[i]; 
                        agecell.textContent = userageArr[i];             
            }
    
    });

}
// tbody.innerHtml+='<tr><td><td><td><td></tr>'


ArrayOfTable();