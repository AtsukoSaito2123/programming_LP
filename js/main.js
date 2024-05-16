const swiper = new Swiper(".swiper", {
    loop: true, // デフォルトはfalse
    slidesPerView: 2.5, // 一度に表示する枚数
    spaceBetween: 8, // スライド間の距離
});


// アニメーションの時間とイージング
const animTiming = {
    duration: 300,
    easing: "ease-in-out",
};

// アコーディオンを閉じるときのキーフレーム
const closingAnimation = (answer) => [
    {
        height: answer.offsetHeight + "px",
        opacity: 1,
    },
    {
        height: 0,
        opacity: 0,
    },
];

// アコーディオンを開くときのキーフレーム
const openingAnimation = (answer) => [
    {
        height: 0,
        opacity: 0,
    },
    {
        height: answer.offsetHeight + "px",
        opacity: 1,
    },
];

// 実績
$(function () {
    $('.toggleTextButton').each(function (index) {
        $(this).on('click', function () {
            var detail = $('.list').eq(index);
            detail.toggleClass('open');

            // ボタンのテキストを切り替える
            var isTextVisible = detail.hasClass('open');
            $(this).text(isTextVisible ? '- 隠す' : '＋ その他作品集を見る');
        });
    });

// 体験談
    $('.toggleTextButton2').each(function (index) {
        $(this).on('click', function () {
            var detail2 = $('.list2').eq(index);
            detail2.toggleClass('open2');

            // ボタンのテキストを切り替える
            var isTextVisible2 = detail2.hasClass('open2');
            $(this).text(isTextVisible2 ? '- 隠す' : '＋ 体験談を見る');
        });
    });
});

$('.list3').each(function (index) {
    $(this).on('click', function () {
        var detail3 = $('.list3').eq(index);
        detail3.toggleClass('open3');
    });
});














