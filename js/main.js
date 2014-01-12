$(document).ready(function () {


	$('#signup-form').validate({
		rules: {
			inputname: {
				minlength: 3,
				maxlength: 15,
				required: true
			},

			emailfield: {
				required: true,
				email: true,
			},

			phonefield: {
                   required: true,
                   digits: true,
                   }
		},


	});




});


// override jquery validate plugin defaults
// http://stackoverflow.com/questions/18754020/bootstrap-3-with-jquery-validation-plugin
$.validator.setDefaults({
    highlight: function(element) {
        $(element).closest('.form-group').addClass('has-error');
    },
    unhighlight: function(element) {
        $(element).closest('.form-group').removeClass('has-error');
    },
    errorElement: 'span',
    errorClass: 'help-block',
    errorPlacement: function(error, element) {
        if(element.parent('.input-group').length) {
            error.insertAfter(element.parent());
        } else {
            error.insertAfter(element);
        }
    }
});
