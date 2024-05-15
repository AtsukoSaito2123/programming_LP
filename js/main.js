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

// Q&A
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".accordion-003").forEach(function (el) {
        const summary4 = el.querySelector(".summary4");
        const answer4 = el.querySelector(".answer4");

        summary4.addEventListener("click", (event) => {
            // デフォルトの挙動を無効化
            event.preventDefault();

            // detailsのopen属性を判定
            if (el.getAttribute("open") !== null) {
                // アコーディオンを閉じるときの処理
                const closingAnim = answer4.animate(closingAnimation(answer4), animTiming);

                closingAnim.onfinish = () => {
                    // アニメーションの完了後にopen属性を取り除く
                    el.removeAttribute("open");
                };
            } else {
                // open属性を付与
                el.setAttribute("open", "true");

                // アコーディオンを開くときの処理
                const openingAnim = answer4.animate(openingAnimation(answer4), animTiming);

                // 開くアニメーションの開始時の追加処理
                openingAnim.onstart = () => {
                    console.log("Opening animation started");
                    // ここに追加の処理を記述
                };

                // 開くアニメーションの完了時の追加処理
                openingAnim.onfinish = () => {
                    console.log("Opening animation finished");
                    // ここに追加の処理を記述
                };
            }
        });
    });
});















