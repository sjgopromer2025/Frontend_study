$(document).ready(function () {
  // 게시글 리스트
  var posts = ["첫 번째 게시글", "두 번째 게시글", "세 번째 게시글"];

  // 게시글 출력
  function displayPosts() {
    $("#postList").empty();
    posts.forEach(function (post) {
      $("#postList").append("<li>" + post + "</li>");
    });
  }

  // 게시글 추가 버튼 클릭 시
  $("#addPostBtn").click(function () {
    var newPost = prompt("새 게시글을 입력하세요");
    if (newPost) {
      posts.push(newPost);
      displayPosts();
    }
  });

  displayPosts();
});
