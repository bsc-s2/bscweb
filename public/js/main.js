jQuery(document).ready(function () {
  $.fn.serializeObject = function () {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function () {
      if (o[this.name]) {
        if (!o[this.name].push) {
          o[this.name] = [o[this.name]];
        }
        o[this.name].push(this.value || '');
      } else {
        o[this.name] = this.value || '';
      }
    });
    return o;
  };

  // video show & close
  $('#videoTrigger').click(function (event) {
    event.stopPropagation();
    $("#videoBox").css('display', 'block');
    $('#indexVideo')[0].play();
    ga('send', 'event', 'Videos', 'play', 'Product film');
  });
  $('#videoClose').click(function () {
    $('#indexVideo')[0].pause();
    $("#videoBox").css('display', 'none');
    var myVideo = document.getElementById("indexVideo");
    ga('send', 'event', 'Videos', 'close', 'Product film', parseInt(myVideo.currentTime));
  })

  /* login analytics */
  $('#login').click(function(event) {
    ga('send', 'event', 'Login');
  })

  // lightbox option
  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'disableScrolling': true
  });

  // navbar
  $(document).scroll(function () {
    if ($(document).scrollTop() > 100) {
      $(".navbar").addClass('navbar-with-background');
    } else {
      $(".navbar").removeClass('navbar-with-background');
    };
  });

  // register
  $(".register-sumbit-button").click(function () {
    var inputList = $(".form-control") || [];
    var isValid = true;
    // check form status
    $.each(inputList, function(index, input) {
      if(input.value.length === 0) {
        isValid = false;
        input.setCustomValidity("不能为空");
      } else {
        input.setCustomValidity("");
      }
    })
    isValid && $.ajax({
      type: "POST",
      url: 'https://hooks.slack.com/services/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',
      data: JSON.stringify({
        text: '#新客户！ ' + JSON.stringify($('.register-form').serializeObject())
      })
    }).success(function() {
			alert("提交成功");
			$('.register-form')[0].reset();
		})
  });

  /* google analytics */
  (function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments);
    };
    i[r].l = 1 * new Date();
    a = s.createElement(o);
    m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m);
  })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
  // UA-119482301-1 是测试跟踪ID
  ga('create', 'UA-119482301-1', 'auto');
  ga('send', 'pageview');
  ga('set', 'userId', 'USER_ID');
});