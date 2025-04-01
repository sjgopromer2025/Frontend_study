$(document).ready(function () {
  $("#signupForm").submit(function (event) {
    event.preventDefault(); // 폼 제출 막기
    var username = $("#username").val();
    var email = $("#email").val();
    var password = $("#password").val();

    // 유효성 검사
    if (username && email && password) {
      $("#success-message").show();
      $("#error-message").hide();
    } else {
      $("#error-message").show();
      $("#success-message").hide();
    }
  });
});
