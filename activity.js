$(document).ready(function () {
  $("td").click(function () {
    var activities = $(this).text();
    // if activities does not equal Not Available which is pass as a str
    if (activities != "Not Available") {
      $(this).toggleClass("selected");
    }
  });
});
