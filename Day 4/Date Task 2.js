// Make a function that takes date string as a parameter, and returns the Day
// name (Saturday, Sunday,) of the given date.

function DayName(date)
{
    var arr= [];
     var name = new Date(date).getDay();

    // 0 - 6    (sunday - monday - thuesday - wednesday - thrusday - friday - saturday)

    var days = ["sunday", "monday" , "tuesday", "wednesday", "thursday" ,"friday" , "saturday"]

   console.log( days[name]);
}

var datename = "6/5/1996"
 DayName(datename);