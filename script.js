
$(document).ready(function () {
  console.log("jQuery is ready!");
  $("#setupStatus").text("jQuery is ready!");

  $("#greeting").text("Hello, I am Aldiyar!");
  $(".intro").css("font-size", "18px");
  $("h2").css("color", "blue");

  $("#darkBtn").click(function () {
    $("body")
      .addClass("dark")
      .css({
        "background-color": "black",
        color: "white",
      });
    $("h2").css("color", "lightblue");
  });

  $("#lightBtn").click(function () {
    $("body")
      .removeClass("dark")
      .css({
        "background-color": "white",
        color: "black",
      });
    $("h2").css("color", "blue");
  });

  $("#hideBtn").click(function () {
    $("#facts").hide();
  });

  $("#showBtn").click(function () {
    $("#facts").show();
  });

  $("#toggleBtn").click(function () {
    $("#facts").toggle();
  });

  $("#fadeInBtn").click(function () {
    $("#gallery img").stop(true, true).fadeIn(300);
  });

  $("#fadeOutBtn").click(function () {
    $("#gallery img").stop(true, true).fadeOut(300);
  });

  $("#fadeToggleBtn").click(function () {
    $("#gallery img").stop(true, true).fadeToggle(300);
  });

  $("#musicBtn, #subjectBtn").click(function () {
    const panel = $(this).parent().next(".panel");
    panel.stop(true, true);
    $(this).attr("aria-expanded", !panel.is(":visible"));
    panel.slideToggle(300);
  });

  $("#movieBtn").click(function () {
    const panel = $("#moviePanel");
    panel.stop(true, true);

    if (panel.is(":visible")) {
      panel.slideUp(300);
      $(this).attr("aria-expanded", "false");
    } else {
      panel.slideDown(300);
      $(this).attr("aria-expanded", "true");
    }
  });

  $("#addBtn, #prependBtn").click(function () {
    const skill = $("#newSkill").val().trim();

    if (skill === "") {
      $("#skillMessage").text("Please enter a skill first.");
      return;
    }

    const item = $("<li></li>").text(skill);

    if (this.id === "prependBtn") {
      $("#skillList").prepend(item);
    } else {
      $("#skillList").append(item);
    }

    $("#newSkill").val("");
    $("#skillMessage").text("Skill added: " + skill);
  });

  $("#removeBtn").click(function () {
    const last = $("#skillList li:last");

    if (last.length === 0) {
      $("#skillMessage").text("There are no skills left to remove.");
      return;
    }

    $("#skillMessage").text("Removed: " + last.text());
    last.remove();
  });

  $("#changeLinkBtn").click(function () {
    if ($("#socialLink").attr("href") === "https://www.instagram.com/mimemamomuuuvv/") {
      $("#socialLink")
        .attr("href", "https://github.com/Shankslegenda")
        .text("Visit GitHub");
      $(this).text("Change GitHub link to Instagram");
    } else {
      $("#socialLink")
        .attr("href", "https://www.instagram.com/mimemamomuuuvv/")
        .text("Visit Instagram");
      $(this).text("Change Instagram link to GitHub");
    }
  });

  $("#nameInput").on("input", function () {
    $("#namePreview").text("Name: " + $(this).val());
  });

  $("#emailInput").on("input", function () {
    $("#emailPreview").text("Email: " + $(this).val());
  });

  $("#contactForm").on("submit", function (event) {
    event.preventDefault();
  });

  let animated = false;

  $("#animateBtn").click(function () {
    $(".bar").stop(true, true);

    if (!animated) {
      $("#htmlBar").animate({ width: "90%" }, 800);
      $("#cssBar").animate({ width: "70%" }, 800);
      $("#jsBar").animate({ width: "60%" }, 800);
    } else {
      $(".bar").animate({ width: "0%" }, 800);
    }

    animated = !animated;
  });
});
