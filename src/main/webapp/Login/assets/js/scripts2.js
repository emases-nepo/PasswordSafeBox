
jQuery(document).ready(function() {

    $('.page-container form').submit(function(){
        var username = $(this).find('.username').val();
        var password = $(this).find('.password').val();
        var password2 = $(this).find('.password2').val();
        var darkPassword = $(this).find('.darkPassword').val();
        var darkPassword2 = $(this).find('.darkPassword2').val();
        if(username == '') {
            $(this).find('.error').fadeOut('fast', function(){
                $(this).css('top', '27px');
            });
            $(this).find('.error').fadeIn('fast', function(){
                $(this).parent().find('.username').focus();
            });
            return false;
        }
        if(password == '') {
            $(this).find('.error').fadeOut('fast', function(){
                $(this).css('top', '96px');
            });
            $(this).find('.error').fadeIn('fast', function(){
                $(this).parent().find('.password').focus();
            });
            return false;
        }
        if(password2 == '') {
            $(this).find('.error').fadeOut('fast', function(){
                $(this).css('top', '165px');
            });
            $(this).find('.error').fadeIn('fast', function(){
                $(this).parent().find('.password2').focus();
            });
            return false;
        }
        if(darkPassword == '') {
            $(this).find('.error').fadeOut('fast', function(){
                $(this).css('top', '234px');
            });
            $(this).find('.error').fadeIn('fast', function(){
                $(this).parent().find('.darkPassword').focus();
            });
            return false;
        }
        if(darkPassword2 == '') {
            $(this).find('.error').fadeOut('fast', function(){
                $(this).css('top', '303px');
            });
            $(this).find('.error').fadeIn('fast', function(){
                $(this).parent().find('.darkPassword2').focus();
            });
            return false;
        }
        if(darkPassword2 != darkPassword) {
        	 $(this).find('.error2').fadeOut('fast', function(){
                 $(this).css('top', '234px');
             });
             $(this).find('.error2').fadeIn('fast', function(){
                 $(this).parent().find('.darkPassword').focus();
             });
            $(this).find('.error').fadeOut('fast', function(){
                $(this).css('top', '303px');
            });
            $(this).find('.error').fadeIn('fast', function(){
                $(this).parent().find('.darkPassword2').focus();
            });
            return false;
        }
        if(password2 != password) {
        	 $(this).find('.error2').fadeOut('fast', function(){
                 $(this).css('top', '96px');
             });
             $(this).find('.error2').fadeIn('fast', function(){
                 $(this).parent().find('.password').focus();
             });
            $(this).find('.error').fadeOut('fast', function(){
                $(this).css('top', '165px');
            });
            $(this).find('.error').fadeIn('fast', function(){
                $(this).parent().find('.password2').focus();
            });
            return false;
        }
        
        
    });

    $('.page-container form .username, .page-container form .password, .page-container form .password2,.page-container form .darkPassword, .page-container form .darkPassword2').keyup(function(){
        $(this).parent().find('.error').fadeOut('fast');
        $(this).parent().find('.error2').fadeOut('fast');
    });

});
