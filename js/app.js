$(function () {
  const menus = ["About us", "Furniture", "Partnerships", "Contact"];

  menus.map((item) => {
    $(".menu-desktop, .menu-mobile-list").append(
      `<li class="nav-links"><a href='#' >${item}</a></li>`
    );
  });

  $(".menu-toggle").on("click", function () {
    $("#menu-mobile").toggleClass("active");
  });

  const features = [
    {
      icon: "./asset/search1.svg",
      text: "MANUFACTURED WITH QUALITY MATERIALS",
    },
    {
      icon: "5",
      text: "5 YEARS OF WARRANTY FOR EACH PRODUCT",
    },
    {
      icon: "./asset/work_outline.svg",
      text: "20 YEARS OF EXPERTISE",
    },
  ];

  features.map((item) => {
    let iconElement;

    if (item.icon.includes("./")) {
      iconElement = `<img src="${item.icon}" alt="icon" />`;
    } else {
      iconElement = `<span class="icon-text">${item.icon}</span>`;
    }

    $("#features").append(
      `<li class='feature-item'><span class='wrapper-icon'>${iconElement}</span><span class=text-icon>${item.text}</span></li>`
    );
  });

  const brand = [
    "./asset/gusto.svg",
    "./asset/stripe.svg",
    "./asset/treehouse.svg",
    "./asset/upwork.svg",
  ];

  brand.map((icon) => {
    $("#right").append(`<img src='${icon}' class='icon-img'/>`);
  });
});
