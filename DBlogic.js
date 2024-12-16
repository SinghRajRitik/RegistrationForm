function submitForm(){
    let firstName = document.getElementById("first").value;
    let secondName = document.getElementById("second").value;
    const combinedName = firstName +" "+ secondName;
    RollNO()
    Age()
    Email()

}
function RollNO(){
    const rollNo = document.getElementById("roll-no").value;
}
function Gender(){
    const gender = document.getElementById("gen").value;
    console.log(gender);
    
}
function Age(){
    const age = document.getElementById("age").value;
}
function Email(){
    const email = document.getElementById("email-add").value;
}