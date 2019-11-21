import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { BikeService } from './back.js';

$(document).ready(function() {
  $('#number').click(function() {
    const city = $('#location').val();
    $('#location').val("");
    const color = $('#color').val();
    $('#color').val("");
    const manufacturer = $('#manufacturer').val();
    $('#manufacturer').val("");

    (async () => {
      let bikeService = new BikeService();
      const response = await bikeService.apiCall(city,color,manufacturer);
      // if (typeof response !== "string") {
        getElements(response);
      // } else {
    })();

   function getElements(response) {
      $('.showNumber').text(`The number of stolen bikes that match your search is ${response.proximity}`);
      $('.showTotal').text(`The total number of nonstolen bikes in your area is ${response.non}`);
      $('.showErrors').text(`I'm sorry, Dave, I don't think I can do that because:  ${response.error}`);
    };
  });
});
