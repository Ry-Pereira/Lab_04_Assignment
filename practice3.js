function authenticatePasswords(){
    let first_password = document.getElementById("user_first_password_input").value;
    let second_password = document.getElementById("user_second_password_input").value;

    let first_password_length = first_password.length
    let second_password_length = second_password.length


    if (first_password_length < 8){
        alert("The first password is less than 8");
    }
    else if(second_password_length < 8){
        alert("The second password is less than 8");

    }

    else if(first_password != second_password){
        alert("The passwords don't match");
    }
    else{
        alert("The passwords match");
    }

}