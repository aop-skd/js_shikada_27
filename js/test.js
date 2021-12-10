
// タイトル画像と文字のランダム
	const n = Math.floor( Math.random() *3);
  
  if(n === 0){
    $("h1").css("background-image", "url(image/title1.jpeg)");
    $("h1").css("color", "pink");
    $("main").css("background-color", "#feeeed")
  }else if(n === 1){
    $("h1").css("background-image", "url(image/title2.jpeg)");
    $("h1").css("color", "orange");
    $("main").css("background-color", "#FBBD8E")
  }else if(n === 2){
    $("h1").css("background-image", "url(image/title3.jpeg)");
    $("h1").css("color", "white");
    $("main").css("background-color", "#AFDFE4")
  };
// 乱数を発生させてランダムにタイトル画像を表示する。


// タイピング風のやり方ーコピペ
  // TextTypingというクラス名がついている子要素（span）を表示から非表示にする定義
  function TextTypingAnime() {
    $('.TextTyping').each(function () {
      var elemPos = $(this).offset().top - 50;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      var thisChild = "";
      if (scroll >= elemPos - windowHeight) {
        thisChild = $(this).children(); //spanタグを取得
        //spanタグの要素の１つ１つ処理を追加
        thisChild.each(function (i) {
          var time = 200;
          //時差で表示する為にdelayを指定しその時間後にfadeInで表示させる
          $(this).delay(time * i).fadeIn(time);
        });
      } else {
        thisChild = $(this).children();
        thisChild.each(function () {
          $(this).stop(); //delay処理を止める
          $(this).css("display", "none"); //spanタグ非表示
        });
      }
    });
  }
  // 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function () {
    TextTypingAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面をスクロールをしたら動かしたい場合の記述

  // 画面が読み込まれたらすぐに動かしたい場合の記述
  $(window).on('load', function () {
    //spanタグを追加する
    var element = $(".TextTyping");
    element.each(function () {
      var text = $(this).html();
      var textbox = "";
      text.split('').forEach(function (t) {
        if (t !== " ") {
          textbox += '<span>' + t + '</span>';
        } else {
          textbox += t;
        }
      });
      $(this).html(textbox);

    });

    TextTypingAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述
// ここまでタイピング風の設定


// 選択肢の表示の記述
  $('.text').fadeOut();

  $(function() {
    $('[name="btn"]:radio').change( function() {
      if($('[id=a]').prop('checked')){
        $('.text').fadeOut();
        $('.text01').fadeIn();
      } else if ($('[id=b]').prop('checked')) {
        $('.text').fadeOut();
        $('.text02').fadeIn();
      } 

      if($('[id=c]').prop('checked')){
        $('.text').fadeOut();
        $('.text01, .text03').fadeIn();
      } else if ($('[id=d]').prop('checked')) {
        $('.text').fadeOut();
        $('.text01, .text04').fadeIn();
      } 

      if($('[id=e]').prop('checked')){
        $('.text').fadeOut();
        $('.text02, .text05').fadeIn();
      } else if ($('[id=f]').prop('checked')) {
        $('.text').fadeOut();
        $('.text02, .text06').fadeIn();
      } 

      if($('[id=g]').prop('checked')){
        $('.text').fadeOut();
        $('.text01, .text03,.text07').fadeIn();
      } else if ($('[id=h]').prop('checked')) {
        $('.text').fadeOut();
        $('.text01, .text03, .text08').fadeIn();
      } 

      if($('[id=i]').prop('checked')){
        $('.text').fadeOut();
        $('.text01, .text04,.text09').fadeIn();
      } else if ($('[id=j]').prop('checked')) {
        $('.text').fadeOut();
        $('.text01, .text04, .text10').fadeIn();
      } 

      if($('[id=k]').prop('checked')){
        $('.text').fadeOut();
        $('.text02, .text05,.text11').fadeIn();
      } else if ($('[id=l]').prop('checked')) {
        $('.text').fadeOut();
        $('.text02, .text05, .text12').fadeIn();
      } 

      if($('[id=m]').prop('checked')){
        $('.text').fadeOut();
        $('.text02, .text06,.text13').fadeIn();
      } else if ($('[id=n]').prop('checked')) {
        $('.text').fadeOut();
        $('.text02, .text06, .text14').fadeIn();
      } 
    });
  });
// ボタンを選択したら、一度すべてフェイドアウトして、必要なものだけFadeInする構文に設定
