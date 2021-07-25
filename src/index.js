import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function() {
  $('#haiku-checker-form').submit(function(event) {
    event.preventDefault();
    const line1 = $('#line1').val();
    const line2 = $('#line2').val();
    const line3 = $('#line3').val();
    const haiku = new Haiku(line1, line2, line3);
    const result = haiku.checktype();
    $('#result').append(`<p>${result}</p>`);
  });
});