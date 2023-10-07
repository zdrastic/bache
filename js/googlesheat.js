// в эту константу помещаем URL развёрнутого веб-приложения Google Apps Script
// https://script.google.com/macros/s/AKfycbzOXkf6dq_YAn3CrKlNykmEzIfxigGhYuN--wQWXi86PL6QVagZaer4Mxi0hi2TyYxzUQ/exec

const URL_APP =
  "https://script.google.com/macros/s/AKfycbzOXkf6dq_YAn3CrKlNykmEzIfxigGhYuN--wQWXi86PL6QVagZaer4Mxi0hi2TyYxzUQ/exec";

// находим форму в документе
const forms = document.querySelectorAll(".form_send");

forms.forEach((form) => {
  // указываем адрес отправки формы (нужно только в начале примера)
  form.action = URL_APP;

  // вспомогательная функция проверки заполненности формы
  function isFilled(details) {
    const { name, email, tel, dialCode, country } = details;
    if (!name) return false;
    if (!email) return false;
    if (!tel) return false;
    if (!dialCode) return false;
    if (!country) return false;
    return true;
  }
  // function timeout(ms) {
  //   return new Promise((resolve) => setTimeout(resolve, ms));
  // }

  // навешиваем обработчик на отправку формы
  form.addEventListener("submit", async (ev) => {
    // отменяем действие по умолчанию
    ev.preventDefault();
    // await timeout(1000);
    //
    // console.log("send", form);

    // получаем ссылки на элементы формы

    const name = form.querySelector("[name=name]");
    const email = form.querySelector("[name=email]");
    const tel = form.querySelector("[name=tel]");
    const dialCode = form.querySelector("[name=dialCode]");
    const country = form.querySelector("[name=country]");

    console.log("in script code", dialCode);
    console.log("in script country", dialCode);
    // const message = document.querySelector("[name=message]");
    // const rule = document.querySelector("[name=rule]");

    // собираем данные из элементов формы
    let details = {
      name: name.value.trim(),
      email: email.value.trim(),
      tel: tel.value.trim(),
      dialCode: dialCode.value.trim(),
      country: country.value.trim(),
      // message: message.value.trim(),
      // rule: rule.checked,
    };
    console.log("details", details);

    // если поля не заполнены - прекращаем обработку
    if (!isFilled(details)) return;

    // подготавливаем данные для отправки
    let formBody = [];
    for (let property in details) {
      // кодируем названия и значения параметров
      let encodedKey = encodeURIComponent(property);
      let encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    // склеиваем параметры в одну строку
    formBody = formBody.join("&");

    // выполняем отправку данных в Google Apps
    const result = await fetch(URL_APP, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      cors: "no-cors",
      body: formBody,
    })
      .then((res) => res.json())
      .catch((err) => alert("Ошибка!"));
    // .then((res) => console.log(res));
    console.log("result", result);

    if (result.type === "success") {
      // name.value = "";
      // email.value = "";
      // tel.value = "";
      // message.value = "";
      // alert("Спасибо за заявку!");
		console.log("succesfully sent")
      window.location.replace("./thankyou.html");
    }
    if (result.type === "error") {
      alert(`Ошибка( ${result.errors}`);
    }
  });
});
