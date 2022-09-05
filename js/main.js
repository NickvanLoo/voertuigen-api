//create request variable
var request = new XMLHttpRequest()

//Open a new connection, using GET request on the url endpoint.
request.open('GET', 'https://opendata.rdw.nl/resource/m9d7-ebf2.json', true)

request.onload = function () {
    var data = JSON.parse(this.response);

    var statusHTML = '';

    $.each(data, function (i, status) {
        statusHTML += '<tr>';
        statusHTML += '<td>' + status.kenteken + '</td>';
        statusHTML += '<td>' + status.merk + '</td>';
        statusHTML += '<td>' + status.voertuigsoort + '</td>';
        statusHTML += '</tr>';
    });
    $('tbody').html(statusHTML);
}

request.send();