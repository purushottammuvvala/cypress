//Sychronous 


// let test1 = ()=>{
//     console.log(`code starts here`);
//     alert(`this is an alert`)
//     console.log(`code ends here`);
// }
// let test2 = ()=>{
//     console.log(`look here`);
// }

// test1()
// test2()



let test1 = ()=>{
    setTimeout(()=>{
        console.log(`code starts here`);
    alert(`this is an alert`)
    console.log(`code ends here`);
    },5000)
}
let test2 = ()=>{
    console.log(`look here`);
}

test1()
test2()