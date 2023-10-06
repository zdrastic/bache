console.log('start')

window.KOMMOPIXEL_IDENTIFIER_PARAMS = window.KOMMOPIXEL_IDENTIFIER_PARAMS || {};
window.KOMMOPIXEL_IDENTIFIER_PARAMS.onload = function (pixel_identifier) {
    console.log('in function')
    var visitor_uid = pixel_identifier.getVisitorUid(); // Reciving visitor_uid
    console.log('visitor_uid', visitor_uid);
    if (visitor_uid) {
      // Write it to the hidden form field 'visitor_uid'
      document.getElementById('visitor_uid').value = visitor_uid;
   }
};

console.log('test')


window.addEventListener("DOMContentLoaded", function () {
  console.log('test2')

});
