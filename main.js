var playPause = anime( {
    targets: 'object .box',
    translateX: [
        { value: 0, duration: 1000 },
        { value: 50, duration: 1000 },
        { value: 200, duration: 1000 },
        { value: 300.5, duration: 1000 },
        { value: 450, duration: 1000 },

        { value: -700, duration: 1000 },
        { value: -850.5, duration: 1000 },
        { value: -950, duration: 1000 },
        { value: 0, duration: 1000 }




    ],


    rotate: {
        value: '1rotate:',
        value: '1turn',
        easing: 'easeInOutSine'
    },
    opacity: '1',
    delay: function ( el, i, l ) { return i * 10000 },


    /****************************************************/



    //autoplay:false,
    loop: true

} );

$(function () {
    
    $('#contact-form').submit(function(e) {
        e.preventDefault();
        $('.comments').empty();
        var postdata = $('#contact-form').serialize();
        
        $.ajax({
            type: 'POST',
            url: '/php/contact.php',
            data: postdata,
            dataType: 'json',
            success: function(json) {
                 
                if(json.isSuccess) 
                {
                    $('#contact-form').append("<P>Your message has been sent. Thank you for contacting me :).</p><p class='thank-you'>Votre message a bien été envoyé. Merci de m'avoir contacté :)</p>");
                    $('#contact-form')[0].reset();
                }
                else
                {
                    $('#firstname + .comments').html(json.firstnameError);
                    $('#name + .comments').html(json.nameError);
                    $('#email + .comments').html(json.emailError);
                    $('#phone + .comments').html(json.phoneError);
                    $('#message + .comments').html(json.messageError);
                }                
            }
        });
    });

})

