function showMessage(content) {
    $('body').prepend("<div class=\"esa-layer\"><span class=\"esa-layer-content\">".concat(content, "</span></div>"));
    var $layer = $('.esa-layer');
    $layer.fadeIn(200);
    setTimeout(function () {
      $layer.remove();
    }, 2000);
  }
function buildPostCodeCopyBtns() {
    

    var $pres = $('pre');

    if (!$pres.length) {
      return false;
    }

    $.each($pres, function (index, pre) {
      
      if(index%2!=0){
        $(pre).attr('id', "copy_target_".concat(index-1));
      }else{
        $(pre).before("<div class=\"esa-clipboard-button\" data-clipboard-target=\"#copy_target_".concat(index, "\" title=\"\u590D\u5236\u4EE3\u7801\">复制</div>"));
      }
    });

    $.getScript("https://s0.pstatp.com/cdn/expire-1-M/clipboard.js/2.0.4/clipboard.min.js", function () {
      var clipboard = new ClipboardJS('.esa-clipboard-button');
      clipboard.on('success', function (e) {
       showMessage('代码已复制成功');

        e.clearSelection();
      });
      clipboard.on('error', function (e) {
       showMessage('代码复制失败');
      });
    });
  }

buildPostCodeCopyBtns();
