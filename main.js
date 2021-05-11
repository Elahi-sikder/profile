$(document).ready(function(){
/*=====================Preloader ==============================
=================================================================*/
          setTimeout(function() {
            $('#ctn-preloader').addClass('loaded');
            $('body').removeClass('no-scroll-y');
            if ($('#ctn-preloader').hasClass('loaded')) {
              $('#preloader').delay(1000).queue(function() {
                $(this).remove();
              });
            }
          }, 2000);
          
/*=====================Typing js ==============================
==================================================================*/
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
/*=====================filterizer js ==============================
==================================================================*/
$('.list').click(function(){
  const value =$(this).attr('data-filter');
  if(value == "All"){
    $(".filtr-item").show(200)
  }else{
    $(".filtr-item").not('.'+ value).hide();
    $(".filtr-item").filter('.'+ value).show();
  }
  
})
$('.list').click(function(){
  $(this).addClass("active")
})
      

/*=====================Mobile menu js ==============================
===================================================================*/
        $('.menu').click(function(){
        $('.sidenav').toggleClass('sidenavactive')
        })
/*=====================Whatsapp menu js ==============================
===================================================================*/
$('#mywhatsappButton').venomButton({
  phone: '+96569912720',
  chatMessage: 'Chat with me',
  message: "Type your message",
  nameClient: "jQuery Script",
  showPopup: true,
  position:"right",
  zIndex: 7236,
  size:'60px'
});
})


/*=====================wow js ---- content coming on scroll ==============================
===================================================================*/
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

/*=====================Scroll up icon ==============================
===================================================================*/

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
      window.location.href='#home'
    }
    }
    scrolled()
 /*=====================MY DYNAMIC AGE ==============================
===================================================================*/
  function myage() { 
     let age = document.getElementById('age')
     let mybirth = 1996
     let currentdate = new Date().getFullYear()
     let result = currentdate - mybirth
     age.innerHTML = result
   }
   myage()
 /*=====================Form validation and take user data==============================
===================================================================*/
let form = document.getElementById('form')
form.addEventListener('submit',function(event){
  event.preventDefault()
  let formdata={};
  [...this.elements].forEach((el)=>{
    formdata[el.name] = el.value
  })
  alert('Message will send now....')
  let objdata = JSON.stringify(formdata)
  let question = prompt('Please Copy Your text and press OK.',objdata)
  if(question){
    window.location.href='https://m.me/elahi.sikder'
  }else{
    return false;
  }
  this.reset()
})
