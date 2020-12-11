// ===== SLIDE OUT NAVIGATION ANIMATIONS ===
// select the menu icon
var card = document.getElementById("activator");
// create a timeline for gsap (https://greensock.com/docs/v2/Easing)
var timeLine = gsap.timeline({ defaults: { ease: "power2.inOut" } });
// create a toggle variable
var toggle = false;

// timeline animation: we use <to> instead of <from> (we're going TO the value we specify)
timeLine.to(".activator", {
  background: "#805ad5",
  borderRadius: "5em 0 0 5em",
});
timeLine.to(
  "nav",
  {
    clipPath: "ellipse(100% 100% at 50% 50%)",
  },
  "-=.5"
);
timeLine.to(
  "nav img",
  {
    opacity: 1,
    transform: "translateX(0)",
    stagger: 0.05,
  },
  "-=.5"
);
// we don't want to run timeline before the event is triggered.
timeLine.pause();

// trigger the timeline on click
card.addEventListener("click", () => {
  toggle = !toggle;
  if (toggle ? timeLine.play() : timeLine.reverse());
});

// ======== PAGES TRANSITIONS ANIMATION ===
window.onload = () => {
  const transition_el = document.querySelector(".transition");
  const anchors = document.querySelector(".anchors-link");

  setTimeout(() => {
    transition_el.classList.remove("is-active"); // Remove "is-active" for the transition
  }, 150);

  for (let i = 0; i < anchors.length; i++) {
    const anchor = anchors[i];
    anchor.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent link to work for the transition
      let target = e.target.href;
      transition_el.classList.add("is-active"); // Add again "is-active" after transition

      setTimeout(() => {
        window.location.href = target; // Add again link functionality after transition
      }, 150);
    });
  }
};

// ========
$.fn.hoverfold = function (args) {
  this.each(function () {
    $(this)
      .children(".view")
      .each(function () {
        var $item = $(this),
          img = $item.children("img").attr("src"),
          struct = '<div class="slice s1">';
        struct += '<div class="slice s2">';
        struct += '<div class="slice s3">';
        struct += '<div class="slice s4">';
        struct += '<div class="slice s5">';
        struct += "</div>";
        struct += "</div>";
        struct += "</div>";
        struct += "</div>";
        struct += "</div>";

        var $struct = $(struct);

        $item
          .find("img")
          .remove()
          .end()
          .append($struct)
          .find("div.slice")
          .css("background-image", "url(" + img + ")")
          .prepend($('<span class="overlay" ></span>'));
      });
  });
};
