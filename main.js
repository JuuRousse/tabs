$(".tab-link").click((event) => {
    $(".tab-link").removeClass("active");
    $(event.target).addClass("active");

    let index = event.target.dataset.index;

    $(".tab-content").removeClass("active");

    $(".tab-content[data-index=" + index + "]").addClass("active");
});

document.querySelector("#form").addEventListener("submit", (event) => {
    event.preventDefault();

    const item1 = document.querySelector("#item1").value;

    const item2 = document.querySelector("#item2").value;

    const item3 = document.querySelector("#item3").value;

    const item4 = document.querySelector("#item4").value;

    let resultHtml = "";

    const name = `
    <div class="row">
      <span><img src="./img/meh-rolling-eyes-regular.svg" alt=""></span>
      ${item1} ${item2}
    </div>
    `;

    const phone = `
    <div class="row">
      <span><img src="./img/phone-alt-solid.svg" alt=""></span>
      ${item3}
    </div>
    `;

    const email = `
    <div class="row email-elipsis">
      <span title="${item4}"><img src="./img/envelope-regular.svg" alt=""></span>
      ${item4}
    </div>
    `;

    if (item1 || item2) {
        resultHtml = resultHtml + name;
    }

    if (item3) {
        resultHtml = resultHtml + phone;
    }

    if (item4) {
        resultHtml = resultHtml + email;
    }

    document.querySelector(".form-data").innerHTML = resultHtml;
});
