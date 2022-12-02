function validate(){
    if(document.myForm.employeeId.value==""){
        document.getElementById("idErr").innerHTML="Please enter your ID";
        return false;
    }

    if(document.myForm.firstName.value==""){
        document.getElementById("fnameErr").innerHTML="Please enter your first name";
        return false;
    }

    if(document.myForm.lastName.value==""){
        document.getElementById("lnameErr").innerHTML="Please enter your last name";
        return false;
    }

    if(document.myForm.contactNumber.value==""){
        document.getElementById("numErr").innerHTML="Please enter your contact number";
        return false;
    }

    if(document.myForm.salary.value==""){
        document.getElementById("salErr").innerHTML="Please enter your current salary";
        return false;
    }

    if(document.myForm.username.value==""){
        document.getElementById("userErr").innerHTML="Please enter your username";
        return false;
    }

    if(document.myForm.email.value==""){
        document.getElementById("emailErr").innerHTML = "Please enter your email";
        return false;   
    }else{
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(document.myForm.email.value)==false){
            alert("Please enter a valid email address");
            return false;
        }
    }
}

