// THEME SWITCHER
(function( d ) {
    // 'use strict';
    d.getElementById( 'myRange' ).addEventListener( 'change',
       function() {
          switch( this.value ){
             case '1' :
                     d.body.classList.remove( 'theme2' ); 
                     d.body.classList.remove( 'theme3' );
                     d.body.classList.add( 'theme1' );
                     break;
             case '2' :
                     d.body.classList.remove( 'theme1' ); 
                     d.body.classList.remove( 'theme3' );
                     d.body.classList.add( 'theme2' );
                     break;
             case '3' :
                     d.body.classList.remove( 'theme1' ); 
                     d.body.classList.remove( 'theme2' );
                     d.body.classList.add( 'theme3' );
                     break;
           }
       }, false );
 }( document ));