function jkk(){
    var name = document.getElementById("Fname").value;
    var phoneno = document.getElementById("Pnumber").value;
    var email = document.getElementById("Email").value;
    var message = document.getElementById("Mess").value;
    // var error_message = document.getElementById("err_mess").value;
    var mail1= /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9\.-]+).([a-z]{2,8})$/;
    var phnno1=/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    if(name.length < 4){
        alert("Please enter the vaild name...");
    }else{
        console.log("Name:"+name);
    }
    if(phnno1.test(phoneno)){
        console.log("Phone number :"+phoneno);
    }else{
        alert("Please enter a valid phone number....")
    }
    if(mail1.test(email)){
        console.log("Email"+email);
    }else{
        alert("Please enter a vaild Email ID");
    }
    console.log("Message: "+message);khyygu

}
