                                //  String Task 1.1




  /*
         var word = prompt("enter a word : ")

         
       
        var Case = confirm("Do you want to consider the case-sensetive of the entered word?");      
        var isPalindrome;
        
        if (Case)
             {
                    isPalindrome = (word == word.split('').reverse().join(''));
             } 
        else 
            { 
                 var tolower = word.toLocaleLowerCase();
                 isPalindrome = (tolower == tolower.split('').reverse().join(''));
                   
            }

            if (isPalindrome) 
                {
                    document.write("<h1>The Word " + word + " is a palindrome.</h1>");
                } else {
                    document.write("<h1>The Word " + word + " is not a palindrome.</h1>");
                }


*/

           

                                //  String Task 1.2




/*
               var str = prompt("Enter a Word ");

               while (isFinite(str))
                {
                    str = prompt("Please Enter a Valid Word : ")
                }


               var count = 0 ;

               for (var i = 0; i < str.length; i++)
               {
                    var lowerstr = str.toLocaleLowerCase ();

                    if (lowerstr.charAt(i) == 'e')
                    count++;
               }

               document.write("<h1>The word\"" + str + "\" contains " + count + " 'e' characters.</h1>");

*/









                
                            //  String Task 1.3


/*

                var nameinfo = prompt ("Enter your Name : ")

                 while (isFinite(nameinfo))
                    {
                        nameinfo = prompt("Please Enter A valid name with charater : ")
                    }


                    var phoneinfo = prompt ("Enter your Number : ")

                    while (isNaN(phoneinfo) || phoneinfo.length < 8)
                        {
                            
                                
                                     phoneinfo = prompt("Please Enter A valid numeric Number and should be 8 numbers : ")
                                
                            
                        }
                   


                        var Mobileinfo = prompt("Enter your Mobile Number:");

                        while (isNaN(Mobileinfo) || Mobileinfo.length !== 11 || !(Mobileinfo.startsWith("010") || Mobileinfo.startsWith("011") || Mobileinfo.startsWith("012"))) {
                            Mobileinfo = prompt("Please enter a valid numeric phone number that starts with 010, 011, or 012 and is exactly 11 digits :");
                        }


                        // var Mobileinfo = prompt("Enter your Mobile Number:");

                                // var regex = /^(010|011|012)\d{8}$/;
                        
                                // while (!regex.test(Mobileinfo)) {
                                //  Mobileinfo = prompt("Please enter a valid numeric phone number that starts with 010, 011, or 012 and is exactly 11 digits :");
                                // }



                            var Emailinfo = prompt ("Enter Your Email :")

                            var regex = /^[^\s@]+@[^\s@]+\.(com)$/  ;
                            while (isFinite(Emailinfo) || !regex.test(Emailinfo))
                                {
                                    Emailinfo = prompt("Enter Your Email like this format --> example@example.com  ")
                                    
                                }

                                document.write("  <h1>"+nameinfo+" </h1>" +
                                "  <h1>"+phoneinfo+" </h1>"+
                                "  <h1>"+Mobileinfo+" </h1>"+
                                "  <h1>"+Emailinfo+" </h1>")

                                




*/



                                // Math task 1 

/*
                         var radius = prompt("Enter a radius to get the Area of the Circle : ");  

                         while (isNaN(radius))
                            {
                                radius= prompt("PLease Enter a Number to get the area : ");
                            }
                        
                         
                         var area = Math.PI* radius * radius;

                         document.write("<h1> The Area of the circle  = "+ area +"</h1>");


*/



                                 // Math task 2

                            
/*
                                 var value = prompt("Enter a value to get the squareroot : ");  

                                 while (isNaN(value))
                                    {
                                        value= prompt("PLease Enter a Number to get the squareroot : ");
                                    }
                                
                                 
                                 var sqrt = Math.sqrt(value);
        
                                 document.write("<h1> The SquareRoot of the Value = "+ sqrt +"</h1>");



*/




















                                 // Array task 1

                               
                                 var arr = [];
                                 for (i = 1 ; i< 4 ; i++) 
                                    {    
                                     var value = prompt("Enter Value " + i);
                                     var intvalue = parseInt(value)                                 
                                      arr.push(intvalue);
                                    }                                   
                                 var sum = 0;
                                 var multiple = 1 ;
                                 var division = arr[0] ;
                                 for (var i = 0; i < arr.length; i++) {                                
                                    sum += arr[i];
                                    multiple *= arr[i] ;
                                    if (i > 0)
                                    division /= arr[i] ;
                                 }

                                 document.write("<h1>The Sum of the 3 values = "+sum+ " </h1>" +
                                 "<h1>The Multiplication of the 3 values = "+ multiple+ " </h1>" +
                                 "<h1>The Division of the 3 values = "+ division+ " </h1>"
                                 );




                                // Array task 2

                             

                                var arr = [];

                                for (i = 1 ; i < 4 ; i++)
                                     {  
                                    var value = prompt( "Enter Value " + i);

                                    while (isNaN(value))
                                        {
                                            value = prompt ("Please enter a valid numbers : ");                                       
                                        }
                                        var intvalue = parseInt(value)                                    
                                        arr.push(intvalue);
                               }                    
                                document.write("<h1> Array you entered = "+arr+"</h1>" + 
                                    "<h1> Ascending Array = "+arr.sort(function(a, b) { return a - b;})+"</h1>"+
                                    "<h1> Descending Array = "+arr.sort(function(a, b) { return b - a;})+"</h1>"
                                    
                                )











                                     // Function task 1
/*
                                function parameter(x,y,z)
                                {
                                    if (arguments.length  != 2)
                                         throw "Parameter should be only 2 elements";   
                                }
                              var x , y ,z ;
                                parameter(x,y);



*/

                                     // Function task 2  
                                     


                                    function add(x,y,z){   
                                            sum = 0;

                                    for (var i = 0 ; i < arguments.length ;i++)
                                        {
                                            if (isNaN(arguments[i]))
                                                throw "there is a non-numeric value"
                                            sum += arguments[i];
                                        }

                                      

                                        return sum ;
                                    
                                }

                                    var result = add(5 , 9, 10);
                                     console.log(result);





                                     // Function task 3


                                          function reversed(x,y,z)
                                          {
                                            var arr = [] ;
                                                for (var i = 0 ; i<arguments.length;i++)
                                                    {
                                                        arr.push(arguments[i])
                                                    }

                                                    return arr.reverse();
                                          }


                                         

                                          var result= reversed(5,1.5,'omar');

                                          console.log(result);

                                        