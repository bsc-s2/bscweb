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
  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'disableScrolling': true
  });

  $('#squeegee').mousemove(function (event) {
    var Ev = event || window.event;
    var pointX = Ev.clientX;
    var warp = $('#squeegee')[0];
    var wrapX = warp.offsetLeft;
    var wrapWidth = warp.offsetWidth;
    var afterWidth = Ev.clientX - wrapX;
    var beforeWidth = wrapWidth - afterWidth;
    afterWidth = afterWidth > 950 ? 950 : afterWidth;
    beforeWidth = beforeWidth < 40 ? 40 : beforeWidth;
    $('#squeegee .squeegee-before').width(beforeWidth);
    $('#squeegee .squeegee-after').width(afterWidth);
    $('#squeegee .squeegee-handle').css({
      left: afterWidth
    })
  });

  $(document).scroll(function () {
    if ($(document).scrollTop() > 100) {
      $(".navbar").addClass('navbar-with-background');
    } else {
      $(".navbar").removeClass('navbar-with-background');
    };
  });

  $(".index-product").mouseenter(function (event) {
    $(this).children().slideUp(200);
    $(this).next().slideDown(200);
  })
  $(".index-product-hover").mouseleave(function (event) {
    $(this).slideUp(200);
    $(this).prev().children().slideDown(200);
  })
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
});