// for (let index = 0; index < 10; index++){
//     console.log(`sometext ,${index}`);
    
//     }
function table() {
    let indexvalue = document.querySelector("#num").value;
    for (let index = 0; index < 10; index++){
        console.log(`${indexvalue} x ${index + 1} = ${indexvalue * (index + 1)}  `);
        
        }  
}