// Đối tượng Validator
function Validator(options) {
    var formElement = document.querySelector(options.form);
    if (formElement) {
        options.rules.forEach(function (rule) {
            var inputElement = formElement.querySelector(rule.selector);
            var errorElement = inputElement.parentElement.querySelector(options.errorSelector);

            if (inputElement) {
                // sự kiện blur ngoài input
                inputElement.onblur = function () {
                    var errorMessage = rule.test(inputElement.value);
                    if (errorMessage) {
                        errorElement.innerText = errorMessage;
                        inputElement.parentElement.classList.add('invalid');
                    } else {
                        errorElement.innerText = '';
                        inputElement.parentElement.classList.remove('invalid');
                    }
                }
                // sự kiện khi nhập input
                inputElement.oninput = function () {
                    errorElement.innerText = '';
                    inputElement.parentElement.classList.remove('invalid');
                }
                //sự kiện submit form
                formElement.onsubmit = function () {
                    // alert('Đã submit');
                }
            }
        });
    }
}

// Định nghĩa các rules
Validator.isRequired = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : 'Vui lòng nhập trường này';
        }
    }
}

Validator.isEmail = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : 'Trường này phải là email';
        }
    }
}

Validator.minLength = function (selector, min) {
    return {
        selector : selector,
        test: function (value) {
            return value.length >= min ? undefined : `Vui lòng nhập tối thiểu ${min} ký tự`;
        }
    }
}