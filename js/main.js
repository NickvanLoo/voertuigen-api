//create request variable
var request = new XMLHttpRequest()

//Open a new connection, using GET request on the url endpoint.
request.open('GET', 'https://opendata.rdw.nl/resource/m9d7-ebf2.json', true)

request.onload = function (){
    var data = JSON.parse(this.response);
    
    var statusHTML = '';

    $.each(data, function(i, status){
        statusHTML += '<tr>';
        statusHTML += '<td>' + status.kenteken + '</td>';
        statusHTML += '</tr>';
    });
    $('tbody').html(statusHTML);
}

request.send();

// $.ajax({
//     url: "https://opendata.rdw.nl/resource/m9d7-ebf2.json",
//     type: "GET",
//     data: {
//       "$limit" : 5000,
//       "$$app_token" : "YOURAPPTOKENHERE"
//     }
// }).done(function(data) {
//   alert("Retrieved " + data.length + " records from the dataset!");
//   console.log(data);
// });