function Validator(formSelector) {
    var formRules = {};

    /**
     * Qui ước tạo rule:
     * - Nếu có lỗi thì return `error message`
     * - Nếu không có lỗi thì return `undifined`
     */
    var validatorRules = {
        required: function (value) {
            return value ? undefined : 'Vui lòng nhập trường này';
        },
        email: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : 'Trường này phải là email';
        },
        min: function (min) {
            return function (value) {
                return value.length >= min ? undefined : `Vui lòng nhập tối thiểu ${min} kí tự`;
            }
        }
    }

    // Lấy ra form element trong DOM theo `formSelector`
    const formElement = document.querySelector(formSelector);

    // Chỉ xử lí khi có element trong DOM
    if (formElement) {

        var inputs = formElement.querySelectorAll('[name][rules]');

        for (var input of inputs) {

            var rules = input.getAttribute('rules').split('|');
            formRules[input.name] = input.getAttribute('rules')
        }

        console.log(formRules);
    }
}