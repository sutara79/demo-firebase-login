$(function () {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD8knVNa-GP_Yn05ZW4gUesUo-gvOY1-FQ",
    authDomain: "practice-in-github.firebaseapp.com",
    databaseURL: "https://practice-in-github.firebaseio.com",
    storageBucket: "practice-in-github.appspot.com",
    messagingSenderId: "72755289888"
  };
  firebase.initializeApp(config);


  // ボタンがクリックされた時の処理
  $('#login').on('click', function(ev) {
    // メールアドレス・パスワードを取得
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // 新規ユーザーを登録
    firebase.auth().createUserWithEmailAndPassword(email, password)
  });
});