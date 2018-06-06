$(document).ready(function() {
    'use strict';
    if ($('#audiosource').length && $('#audiosource').lengt > 0) {
      var source = $('#audiosource').attr('src');
      $('#audiowrapper').show();
      $('#audiowrapper audio').attr('src', source).audioPlayer();
    }
});