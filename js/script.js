// const input = document.querySelector("#phoneInput");
// window.intlTelInput(input, {
//   initialCountry: "auto",
//   geoIpLookup: callback => {
//     fetch("https://ipapi.co/json")
//       .then(res => res.json())
//       .then(data => callback(data.country_code))
//       .catch(() => callback("us"));
//   },
//   utilsScript: "/intl-tel-input/js/utils.js?1687509211722" // just for formatting/placeholders etc
// });


// $(function () {
//     $(".phone_mask").mask("+38(999) 999-9999");
// });

// const checkCountry = ()=>{
        
//     //При загрузкі ставим маску для України
//     $(function () {
//         $(".phone_mask").mask("+38(000) 000-0000");
//     });

//     //Перевіряєм країну
//     fetch('https://ipapi.co/json/')
//     .then(response => response.json())
//     .then(data => {
//         //Якщо країна Італія - міняєм маску на +39
//         if(data.country_name === 'Italy') {
//             $(function () {
//                 $(".phone_mask").mask("+39(000) 000-0000");
//             }); 
//         }
//     })
//     .catch(error => console.error(error));
// }
// checkCountry()


//  имя

document.addEventListener("DOMContentLoaded", function () {
    var inpname = document.querySelector(".inpname");

    inpname.addEventListener("input", function (event) {
        var inputValue = event.target.value;
        var regex = /[^a-zA-Zа-яА-Я]/g; // Регулярное выражение для поиска небуквенных символов

        // Удаление небуквенных символов из ввода
        inpname.value = inputValue.replace(regex, "");
    });
});




window.addEventListener("DOMContentLoaded", function () {
    var header = document.querySelector(".header");

    function scrollHandler() {
        var scrollPosition = window.scrollY;

        if (scrollPosition >= 500) {
            header.classList.add("header_show");
        } else {
            header.classList.remove("header_show");
        }
    }

    window.addEventListener("scroll", scrollHandler);
});





// menu smooth scroll
// var $page = $('html, body');
// $('.smoothscrl').click(function () {
//     $page.animate({
//         scrollTop: $($.attr(this, 'href')).offset().top
//     }, 400);
//     return false;
// });

$("body").on('click', '[href*="#"]', function(e){
    var fixed_offset = 100;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
  });

// END  menu smooth scroll


$('.calc_period__item').on('click', function () {
    $('.calc_period__item').removeClass('active');
    $(this).toggleClass('active');
});


$('.calc_options__itm').on('click', function () {
    $('.calc_options__itm').removeClass('active');
    $(this).toggleClass('active');
});


$('.close').on('click', function () {
    $('.popup').fadeOut('fast');
});


// calculator 



document.addEventListener("DOMContentLoaded", function () {
    var input1 = document.querySelector(".MyInput");
    var optionItems = document.querySelectorAll(".calc_options__itm");
    var periodItems = document.querySelectorAll(".calc_period__item");
    var sumBlock = document.querySelector(".calc_sum__sum");
    var prcBlock = document.querySelector(".calc_sum__prc");

    function calculateSum() {
        var inputValue = parseFloat(input1.value);
        var sum = inputValue;

        // Получение значения периода
        var selectedPeriod = 0;
        periodItems.forEach(function (periodItem) {
            if (periodItem.classList.contains("selected")) {
                selectedPeriod = parseFloat(periodItem.dataset.period);
            }
        });

        // Умножение на проценты в зависимости от выбранного периода
        var percentage = 45;
        if (selectedPeriod === 2) {
            percentage = 90;
        } else if (selectedPeriod === 3) {
            percentage = 135;
        }

        sum += (inputValue * (percentage / 100));

        sumBlock.textContent = sum;
        prcBlock.textContent = percentage + "%";
    }

    // Обработчик события ввода в поле ввода
    input1.addEventListener("input", function () {
        calculateSum();
    });

    // Обработчик события клика на блоках optionitem
    optionItems.forEach(function (optionItem) {
        optionItem.addEventListener("click", function () {
            var content = optionItem.querySelector("span").textContent.trim();
            var value = parseFloat(content);

            input1.value = value;
            calculateSum();
        });
    });

    // Обработчик события клика на кнопках периода
    periodItems.forEach(function (periodItem) {
        periodItem.addEventListener("click", function () {
            periodItems.forEach(function (item) {
                item.classList.remove("selected");
            });

            periodItem.classList.add("selected");

            calculateSum();
        });
    });
});






//  показать попап по клику на отправить 

// window.addEventListener("DOMContentLoaded", function () {
//     var form = document.querySelector(".myForm");
//     var popup = document.querySelector(".popup");

//     form.addEventListener("submit", function (event) {
//         event.preventDefault(); // Отмена стандартной отправки формы

//         // Ваш код обработки отправки формы

//         // Отображение popup
//         popup.style.display = "block";
//     });
// });
// window.addEventListener("DOMContentLoaded", function () {
//     var form = document.querySelector(".myForm2");
//     var popup = document.querySelector(".popup");

//     form.addEventListener("submit", function (event) {
//         event.preventDefault(); // Отмена стандартной отправки формы

//         // Ваш код обработки отправки формы

//         // Отображение popup
//         popup.style.display = "block";
//     });
// });