window.addEventListener('scroll', scrollPage);

function scrollPage() {
  var headerContents = document.querySelector('header');
  var navBar = document.querySelector('nav');
   
  if(document.scrollY > 80 || document.documentElement.scrollTop > 80){
    headerContents.classList.add('scrollPage');
    navBar.classList.add('scrollPage');

  } else {
    headerContents.classList.remove('scrollPage');
    navBar.classList.remove('scrollPage');
  }

}

document.addEventListener('keydown', function(event){
  if(event.key == 'ArrowDown' || event.key === 'ArrowUp'){
    event.preventDefault();//removes cursor lines
    if(event.key == 'ArrowDown'){
      window.scrollBy(0, 60);//scroll down 50pixels as the downArrow key pressed
    } else if( event.key === 'ArrowUp'){
      window.scrollBy(0, -60); //scroll up 50pixels as the upArrow key pressed
    }
 }
});

