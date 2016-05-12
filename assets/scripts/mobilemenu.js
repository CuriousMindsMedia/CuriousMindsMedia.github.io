( function( $ ) {
 /*** 
  * Run this code when the #toggle-menu link has been tapped
  * or clicked
  */
 //var open=false;
 $( '#toggle-menu' ).on( 'touchstart click', function(e) {
  e.preventDefault();

 
  var $body = $( 'body' ),
      $page = $( '#page' ),
      $menu = $( '#mobile-nav' ),
      $toggle_menu = $( '#toggle-menu' ),
      $mobile_nav = $( '#mobile-nav' ),
 
      /* Cross browser support for CSS "transition end" event */
      transitionEnd = 'transitionend webkitTransitionEnd otransitionend MSTransitionEnd';
 
  /* When the toggle menu link is clicked, animation starts */
  $body.addClass( 'animating' );
 
  /***
   * Determine the direction of the animation and
   * add the correct direction class depending
   * on whether the menu was already visible.
   */
  $toggle_menu.toggleClass( 'menu-trigger' );
   
   
  if ( $body.hasClass( 'menu-visible' ) ) {
   $body.addClass( 'left' );
   //$mobile_nav.addClass( 'fadeOut' );
   
  } else {
   $body.addClass( 'right' );
   //$mobile_nav.addClass( 'fadeIn' );
  }
  
  /***
   * When the animation (technically a CSS transition)
   * has finished, remove all animating classes and
   * either add or remove the "menu-visible" class 
   * depending whether it was visible or not previously.
   */
  $page.on( transitionEnd, function() {
   $body
    .removeClass( 'animating left right' )
    .toggleClass( 'menu-visible' );
    //$mobile_nav.removeClass( 'fadeIn fadeOut' );
 
   $page.off( transitionEnd );
  } );
  // $menu.height( $(document).height() );
 } );
} )( jQuery );