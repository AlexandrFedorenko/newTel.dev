$(function(){
    $('.form-popup1').validate({
        rules: {
            title: {
                required: true
            },

            mess: {
                required: true
            },
            num: {
                required: true
            },
            url: {
                required: true
            }


        },
        messages: {
            name: {
                required: ""
            },
            mess: {
                required: ""

            },
            num: {
                required: ""
            },
            url: {
                required: ""
            },
            url: ""
        }
    });
});