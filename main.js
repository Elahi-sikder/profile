$(document).ready(function(){
    $("#example").typer({
        strings: [
          "I am a web Developer",
          "I am a Programmer",
          "I am a Freelancer"
        ],
        typeSpeed: 100,
        backspaceSpeed: 50,
        backspaceDelay: 4000,
        repeatDelay: 1000,
        repeat: true,
        autoStart: true,
        startDelay: 100
      });
      // isotope
      // external js: isotope.pkgd.js


// init Isotope
let $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows'
});

// filter functions
let filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function() {
    let number = $(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
  },
  // show if name ends with -ium
  ium: function() {
    let name = $(this).find('.name').text();
    return name.match( /ium$/ );
  }
};

// bind filter button click
$('#filters').on( 'click', 'button', function() {
  let filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});


// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  let $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});

})

// wow
let wow = new WOW(
  {
  boxClass:     'wow',      // default
  animateClass: 'animated', // default
  offset:       0,          // default
  mobile:       true,       // default
  live:         true        // default
}
)
wow.init();
// portfolio gallery

/*========== scroll icon=============*/

function scrolled(){
  let scroll = document.getElementsByClassName("scroll")[0]
  window.addEventListener('scroll',function(){
    if(window.scrollY > 80){
      scroll.classList.add('activated')
    }else{
      scroll.classList.remove('activated')
    }
  })
  scroll.onclick = function(){
    window.scrollTo({top:0,behavior:"smooth"})
  }
}
scrolled()







