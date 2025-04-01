$(document).ready(function () {
  $("#loginForm").submit(function (event) {
    event.preventDefault(); // 폼 제출 막기
    var username = $("#username").val();
    var password = $("#password").val();

    // 간단한 로그인 유효성 검사
    if (username === "admin" && password === "admin1234") {
      alert("로그인 성공");
      // 로그인 성공 시 이동할 페이지나 처리 추가
    } else {
      $("#error-message").show();
    }
  });
});
