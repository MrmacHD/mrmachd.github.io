$(function(){
  
  $('img').bind('dragstart', function(event) { event.preventDefault(); });
  
  $('.objectivecexperiment').click(function(){
    referTo($(this).attr("url"));
  });
  $('.objectivecexperiment').keydown(function(event){
    if (event.keyCode == 13) referTo($(this).attr("url"));
  });
  
  $('.javaexperiment').click(function(){
    referTo($(this).attr("url"));
  });
  $('.javaexperiment').keydown(function(event){
    if (event.keyCode == 13) referTo($(this).attr("url"));
  });
  
  $('.cppexperiment').click(function(){
    referTo($(this).attr("url"));
  });
  $('.cppexperiment').keydown(function(event){
    if (event.keyCode == 13) referTo($(this).attr("url"));
  });
  
  $('.pythonexperiment').click(function(){
    referTo($(this).attr("url"));
  });
  $('.pythonexperiment').keydown(function(event){
    if (event.keyCode == 13) referTo($(this).attr("url"));
  });
  
  function referTo(url) {
    location.href = url;
  }
  
});

