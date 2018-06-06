$(document).ready(function() {
    'use strict';
    if ($('#audiosource').length && $('#audiosource').length > 0) {
      var source = $('#audiosource').attr('src');
      $('#audiowrapper').show();
      $('#audiowrapper audio').attr('src', source).audioPlayer();
    }
});