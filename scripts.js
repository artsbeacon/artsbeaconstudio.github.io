$(document).ready(function(){
  // dropdown for class list for mobile 
  var $tabContent = $('#classDetails .tab-pane')
  $('#classListDropdown .dropdown-menu a').on('click', function (evt) {
    $('#classListDropdownLabel').html($(this).text() + ' <span class="caret"></span>')
    $('#classDetails .nav.nav-pills a[href="'+$(this).attr('href')+'"]').tab('show')
    evt.preventDefault()
  })

  // card links
  $('.card a').on('click', function(evt){
    $('#classDetails a[href="#'+$(this).attr('aria-controls')+'"]').tab('show')
  })
  // form controls
  function hideShowFields(classId){
    if(classId.indexOf('kids') > -1){
      $('#childFields').slideDown()
    } else {
      $('#childFields').slideUp()
    }
  }
  $('#classDetails .tab-pane button').on('click', function(evt){
    var $par = $(this).closest('.tab-pane')
    var classId = $par.attr('id')
    $('#formClass').val(classId)
    hideShowFields(classId)
  })
  $('#formClass').on('change', function(evt){
    var classId = $(this).val()
    hideShowFields(classId)
  })
  // Add smooth scrolling to all links in navbar + footer link
  $(".card a, .navbar a, footer a[href='#homePage']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
})
