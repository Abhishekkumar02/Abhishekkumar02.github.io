$(function() {
  
  var link = $('#navbar a.dot');
  
  // Move to specific section when click on menu link
  link.on('click', function(e) {
    var target = $($(this).attr('href'));
    $('html, body').animate({
      scrollTop: target.offset().top
    }, 600);
    $(this).addClass('active');
    e.preventDefault();
  });
  
  // Run the scrNav when scroll
  $(window).on('scroll', function(){
    scrNav();
  });
  
  // scrNav function 
  // Change active dot according to the active section in the window
  function scrNav() {
    var sTop = $(window).scrollTop();
    $('section').each(function() {
      var id = $(this).attr('id'),
          offset = $(this).offset().top-1,
          height = $(this).height();
      if(sTop==0){
        $('#navbar').find('[data-scroll="' + "home" + '"]').addClass('active');
      }
      console.log(offset+"kkkkk")
      console.log(height+"llllk")
      console.log(sTop+"llllsTopk")
      if(sTop >= offset && sTop < offset + height) {
        console.log("llllll")
        link.removeClass('active');
        $('#navbar').find('[data-scroll="' + id + '"]').addClass('active');
      }
    });
  }
  scrNav();
});