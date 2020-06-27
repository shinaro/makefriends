$(function(){
  /*　サイドメニューの開閉　 */
  $('.menu_btn').click(function(){
    $('.myprofile_tab').addClass('open');
    $('.menu_btn').addClass('open');
  });
  $('.close_btn').click(function(){
    $('.myprofile_tab').removeClass('open');
    $('.menu_btn').removeClass('open');
  });

/*　相手のプロフィールクリックでチャット欄表示　*/
  $('.perImg_side').click(function(){
    $('.per_message').addClass('popup');
    });
    $('.close_btn2').click(function(){
      $('.per_message').removeClass('popup');
      });

/* サイドバーゲームカテゴリー設定 */
  $(".gamecate").on('click',function(){
    $(this).toggleClass("active1");
  });
/*ゲームのプラットフォーム*/
$(".fas fa-desktop fa-4x").on('click',function(){
  $(this).toggleClass("circle");
});
$(".circle").on('click',function(){
  $(this).toggleClass("on");
});

/*プレイ時間選択*/
  $(".timecate").on('click',function(){
    $(this).toggleClass("active2");
  });


/*サイドバーにあるスライダー設定*/
  $(".slider").slider({
    min: 0,
    max: 4,
    value: 2,
    step: 1,
  });

});
