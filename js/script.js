$(document).ready(function () {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $("header").toggleClass("toggle");
  });

  $(window).on("scroll load", function () {
    $("#menu").removeClass("fa-times");
    $("header").removeClass("toggle");

    if ($(window).scrollTop() > 0) {
      $(".top").show();
    } else {
      $(".top").hide();
    }
  });
  // Star animation logic for the navbar
  const navbar = document.querySelector(".navbar");

  function createStar() {
    const star = document.createElement("div");
    star.classList.add("star");

    // Random positioning for stars around the navbar
    star.style.left = Math.random() * window.innerWidth + "px";
    star.style.top = Math.random() * window.innerHeight + "px";

    // Append star to the navbar container
    navbar.appendChild(star);

    // Remove the star after animation
    setTimeout(() => {
      star.remove();
    }, 5000);
  }

  // Create stars every 300 milliseconds
  setInterval(createStar, 300);

  // smooth srolling
  $('a[href*="#"]').on("click", function (e) {
    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },

      500,
      "linear"
    );
  });
});
