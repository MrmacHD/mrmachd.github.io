$(function(){
  
  $('img').bind('dragstart', function(event) { event.preventDefault(); });
  
  $('.iosapplication').click(function(){
    referTo($(this).attr("url"));
  });
  $('.iosapplication').keydown(function(event){
    if (event.keyCode == 13) referTo($(this).attr("url"));
  });
  
  $('.symbianapplication').click(function(){
    referTo($(this).attr("url"));
  });
  $('.symbianapplication').keydown(function(event){
    if (event.keyCode == 13) referTo($(this).attr("url"));
  });
  
  function referTo(url) {
    location.href = url;
  }
  
});

