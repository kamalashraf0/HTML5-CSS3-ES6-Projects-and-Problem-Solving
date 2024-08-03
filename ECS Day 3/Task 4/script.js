// function* fibonacciCount(count) {
//     let prev = 0, cur = 1;
//     for (let index = 0; index < count; index++) {
//         yield prev;
//         [prev, cur] = [cur, prev + cur];
//     }
// }

// // Usage
// for (let num of fibonacciCount(5)) {
//     console.log(num); 
// }

function DFab(n) {

    for (let index = 0 , prev = 0 , cur = 1; index < n; index++) {
        
        let fab = prev + cur;
        prev = cur;
        cur = fab

        console.log(prev);
    } 
}

 DFab(10);

 function* fibonacciMaxValue(max) {
    let prev = 0, cur = 1;
    while (prev <= max) {
        yield prev;
        [prev, cur] = [cur, prev + cur];
        
    }
}

for (let num of fibonacciMaxValue(8)) {
    console.log(num); 
}











