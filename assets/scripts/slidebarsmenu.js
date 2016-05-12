(function($) {
        $(document).ready(function() {

        	
        	var $sb_trigger = $( '#sb-trigger' );
          
        	 var mySlidebars = new $.slidebars({siteClose:false});
      			$('.sb-toggle').on('touchstart click', function(e) {
      				e.preventDefault();
        			mySlidebars.slidebars.toggle('left');
        			$(this).toggleClass( 'menu-trigger' );
      			});
  
        });
      }) (jQuery);