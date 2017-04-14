function getWindowScroll(num) {
  var s = $(window).scrollTop(),
    d = $(".section:nth-child(" + num + ")").offset().top;
  c = $(window).height();

  return Math.abs((d - s) / (d + c));
}
$(window).scroll(function(event) {
  /*
  
                 _  /)
                 mo / )
                 |/)\)
                  /\_
                  \__|=
                 (    )
                 __)(__
           _____/      \\______
          |   _     ___   _   ||
          |  | \     |   | \  ||
          |  |  |    |   |  | ||
          |  |_/     |   |_/  ||
          |  | \     |   |    ||
          |  |  \    |   |    ||
          |  |   \. _|_. | .  ||
          |                   ||
          |  Beautiful code   ||
          | You were too good ||
          | for slow machines ||
          |  You will not be  ||
          |     forgotten     ||
          |                   ||
  *       | *   **    * **    |**      **
  
  if (getWindowScroll(1) < 0.4) {
    $('.section:nth-child(1) .blurred').css('opacity', (2.5 * Math.round(getWindowScroll(1) * 100) / 100));
  }
  if (getWindowScroll(2) < 0.4) {
    $('.section:nth-child(2) .blurred').css('opacity', (2.5 * Math.round(getWindowScroll(2) * 100) / 100));
  }
  if (getWindowScroll(3) < 0.4) {
    $('.section:nth-child(3) .blurred').css('opacity', (2.5 * Math.round(getWindowScroll(3) * 100) / 100));
  }
  if (getWindowScroll(4) < 0.4) {
    $('.section:nth-child(4) .blurred').css('opacity', (2.5 * Math.round(getWindowScroll(4) * 100) / 100));
  }
  */
});

function fixVHChrome() {
  var options = [{
    selector: '.section',
    property: 'min-height',
    vh: 110,
  }, {
    selector: '.section:nth-child(2)',
    property: 'top',
    vh: 110
  }, {
    selector: '.section:nth-child(3)',
    property: 'top',
    vh: 220
  }, {
    selector: '.section:nth-child(4)',
    property: 'top',
    vh: 330
  }];

  var vhFix = new VHChromeFix(options);
}




var $animation_elements = $('.svg-animation');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if (getWindowScroll(3) < .2) {
      $element.addClass('in-view');
    }
    else {
      $element.addClass('notransition');
      $element.removeClass('in-view');
      $element[0].offsetHeight;
      $element.removeClass('notransition');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');

function initSignup() {
  $('.email-input').keydown(function() {
    var email = this.value;
  });

  $('#name').focus(function() {
    $('#name').addClass('input-focused');
    $('#name-label').addClass('input-focused-label');
  });
  
  $('#name').focusout(function() {
    if ($('#name').val() == "") {
      $('#name').removeClass('input-focused');
      $('#name-label').removeClass('input-focused-label');
    }
  });

  $('#email').focus(function() {
    $('#email').addClass('input-focused');
    $('#email-label').addClass('input-focused-label');
    $('#email-button').addClass('input-focused-button');
  });

  $('#email').focusout(function() {
    if ($('#email').val() == "") {
      $('#email').removeClass('input-focused');
      $('#email-label').removeClass('input-focused-label');
      $('#email-button').removeClass('input-focused-button');
    }
  });
}

function signUp() {
  var email = $('#email').val();
  var name = $('#name').val();
  
  $('#email').blur();
  $('#email-button').addClass('is-active');
  $('#name-form').addClass('is-active');

  setTimeout(function() {
    $('#email-button').html('Thanks!');
    $('#name-form').addClass('is-done');
  }, 500);

  var xhr = new XMLHttpRequest();
  xhr.open("GET", "scripts/email.php?name=" + name + "&email=" + email, true);
  xhr.send();

  $('#email-button').addClass('is-done');
  $('#email-label').html('');
  $('#email').val('');
  $('#email-button').prop('disabled', true);

  return false;
}
