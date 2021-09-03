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


//  CALCULATOR
const keys = document.querySelector('.calculator__keys');

keys.addEventListener('click', e => {
 if (e.target.matches('button')) {
    const key = e.target
    const action = key.dataset.action
    if (!action) {
        console.log('number key!')
      }
      else if (
        action === 'add' ||
        action === 'subtract' ||
        action === 'multiply' ||
        action === 'divide'
      ) {
        console.log('operator key!')
      }
      else if (action === 'decimal') {
        console.log('decimal key!')
      }
      
      else if (action === 'clear') {
        console.log('clear key!')
      }
      
      else if (action === 'calculate') {
        console.log('equal key!')
      }
 }
})
const display = document.querySelector('.calculator__display')

keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target
    const action = key.dataset.action
    const keyContent = key.textContent
    const displayedNum = display.textContent
    // ...
  
  if (!action) {
    if (displayedNum === '0') {
      display.textContent = keyContent
    }
  }
}
})