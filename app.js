$(document).ready(function(){


  $(function(){
    $.ajax({
      method:'GET',
      url: 'http://www.omdbapi.com/?t=drive&y=&plot=full&r=json'
    }).then(function(response){
      var drive = response;
      var drivePoster = response.Poster
      $('.movie1').append('<h3>' + response.Title + ", " + response.Year + '</h3>');
      $('.movie1').append('<img src='+ drivePoster +'></img>');
      $('.movie1').append('<p>Starring: ' + response.Actors + '</p>');
      $('.movie1').append('<p>Directed by: ' + response.Director + '</p>');

      console.log(drive);
    })
  })

  $(function(){
    $.ajax({
      method:'GET',
      url: 'http://www.omdbapi.com/?t=Ex+Machina&y=&plot=short&r=json'
    }).then(function(response){
      var exMach = response;
      var exMachPoster = response.Poster
      $('.movie2').append('<h3>' + response.Title + ", " + response.Year + '</h3>');
      $('.movie2').append('<img src='+ exMachPoster +'></img>');
      $('.movie2').append('<p>Starring: ' + response.Actors + '</p>');
      $('.movie2').append('<p>Directed by: ' + response.Director + '</p>');


      console.log(exMach);
    })
  })

  $(function(){
    $.ajax({
      method:'GET',
      url: 'http://www.omdbapi.com/?t=swiss+army+man&y=&plot=full&r=json'
    }).then(function(response){
      var swissArm = response;
      var swissArmPoster = response.Poster
      $('.movie3').append('<h3>' + response.Title + ", " + response.Year + '</h3>');
      $('.movie3').append('<img src='+ swissArmPoster +'></img>');
      $('.movie3').append('<p>Starring: ' + response.Actors + '</p>');
      $('.movie3').append('<p>Directed by: ' + response.Director + '</p>');

      console.log(swissArm);
    })
  })






});
