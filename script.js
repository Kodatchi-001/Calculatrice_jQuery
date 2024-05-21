$(document).ready(function () {
    var content = $('#content');

    function addNumber(number) {
        content.val(content.val() + number);
    }

    function addOperator(operator) {
        content.val(content.val() + operator);
    }

    function calculateResult() {
        try {
            content.val(eval(content.val()));
        } catch (error) {
            alert("Erreur");
            content.val('');
        }
    }

    $('button').on('click', function () {
        var number = $(this).data('number');
        var operator = $(this).data('operator');

        if (number !== undefined) {
            addNumber(number);
        } else if (operator !== undefined) {
            addOperator(operator);
        }
    });

    $('#clear').on('click', function () {
        content.val('');
    });

    $('#equals').on('click', calculateResult);
});
