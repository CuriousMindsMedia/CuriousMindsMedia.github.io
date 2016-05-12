( function( $ ) {

function contact_mobile(){
	$('body.contact .wrap.container').insertBefore('body.contact #headerCall');
	$('body.contact .contact-form').insertBefore('body.contact .contact-main-content');
}
function contact_desktop(){
	$('body.contact #headerCall').insertBefore('body.contact .wrap.container');
	$('body.contact .contact-main-content').insertBefore('body.contact .contact-form');
}

var mq = window.matchMedia('(min-width: 768px)');

if(mq.matches) {
    // the width of browser is more then 700px
    // alert('more than 768');
    contact_desktop();
} else {
    // the width of browser is less then 700px
    // alert('less than 768');
    contact_mobile();
}

mq.addListener(function(changed) {
    if(changed.matches) {
        // the width of browser is more then 700px
        // alert('more than 768');
        contact_desktop();
    } else {
        // the width of browser is less then 700px
        // alert('less than 768');
        contact_mobile();
    }
});



} )( jQuery );