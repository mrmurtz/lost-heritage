$(function(){
  $.getJSON('api', updateLocations);

  function updateLocations(data){
    var output = '';
    $.each(data, function(key, item){
      
    });
  }
});
