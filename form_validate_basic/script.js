var formRegister = document.querySelector('#formRegister');
formRegister.onsubmit = function () {
    var required = "Trường này là bắt buộc";
    var isSuccess = true;

    var txtName = document.querySelector('input[name="name"]').value;
    var txtEmail = document.querySelector('input[name="email"]').value;
    var txtPhone = document.querySelector('input[name="phone"]').value;
    var txtPassword = document.querySelector('input[name="password"]').value;
    var txtRepassword = document.querySelector('input[name="repassword"]').value;

    // reset all error message
    document.querySelector("#nameError").innerHTML = '';
    document.querySelector("#emailError").innerHTML = '';
    document.querySelector("#phoneError").innerHTML = '';
    document.querySelector("#passwordError").innerHTML = '';
    document.querySelector("#repasswordError").innerHTML = '';

    if (txtName == '') {
        document.querySelector("#nameError").innerHTML = required;
        isSuccess = false;
    }

    if (txtEmail == '') {
        document.querySelector("#emailError").innerHTML = required;
        isSuccess = false;
    }

    if (txtPhone == '') {
        document.querySelector("#phoneError").innerHTML = required;
        isSuccess = false;
    }

    if (txtPassword == '') {
        document.querySelector("#passwordError").innerHTML = required;
        isSuccess = false;
    }

    if (txtRepassword == '') {
        document.querySelector("#repasswordError").innerHTML = required;
        isSuccess = false;
    }


    if (!isSuccess) {
        return false;
    }

    // success
    alert('Đăng ký thành công');
    return true;
}