///////////////////////////////////////////////////////////
// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
// Make mobile navigation work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions

function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

////////////////////////////////////
// Sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

/////////////////////////////////////////////////////////////
// animations
/////////////////////////////////////////////////////////////
scrollAppear();

function scrollAppear() {
  const mainHeading = document.querySelector(".heading-primary");
  const heroDescription = document.querySelector(".hero-description");

  const subHeading = document.querySelectorAll(".subheading");
  const headingSecondary = document.querySelectorAll(".heading-secondary");
  const headingTer = document.querySelectorAll(".heading-ter");
  const stepDesription = document.querySelectorAll(".step-description");

  const testimonial = document.querySelectorAll(".testimonial");

  const features = document.querySelectorAll(".feature");

  const listItem = document.querySelectorAll(".list-item");
  const listItemPricing = document.querySelectorAll(".list-item-pricing");
  const planPrice = document.querySelectorAll(".plan-price");

  // let featuresPosition = features.getBoundingClientRect().top;

  const ScreenPos = window.innerHeight / 1.15;

  mainHeading.classList.add("text-appear");
  heroDescription.classList.add("text-appear");

  // smallText.forEach(function (text) {
  //   let introPosition = text.getBoundingClientRect().top;

  //   if (introPosition < ScreenPos) {
  //     text.classList.add("text-appear");
  //   }
  // });

  subHeading.forEach(function (subheading) {
    let introPosition = subheading.getBoundingClientRect().top;

    if (introPosition < ScreenPos) {
      subheading.classList.add("text-appear");
    }
  });
  headingSecondary.forEach(function (headingSecondary) {
    let introPosition = headingSecondary.getBoundingClientRect().top;

    if (introPosition < ScreenPos) {
      headingSecondary.classList.add("text-appear");
    }
  });
  headingTer.forEach(function (headingTer) {
    let introPosition = headingTer.getBoundingClientRect().top;

    if (introPosition < ScreenPos) {
      headingTer.classList.add("text-appear");
    }
  });
  stepDesription.forEach(function (stepDesription) {
    let introPosition = stepDesription.getBoundingClientRect().top;

    if (introPosition < ScreenPos) {
      stepDesription.classList.add("text-appear");
    }
  });
  features.forEach(function (features) {
    let introPosition = features.getBoundingClientRect().top;

    if (introPosition < ScreenPos) {
      features.classList.add("text-appear");
    }
  });
  testimonial.forEach(function (testimonial) {
    let introPosition = testimonial.getBoundingClientRect().top;

    if (introPosition < ScreenPos) {
      testimonial.classList.add("text-appear");
    }
  });
  planPrice.forEach(function (planPrice) {
    let introPosition = planPrice.getBoundingClientRect().top;

    if (introPosition < ScreenPos) {
      planPrice.classList.add("text-appear");
    }
  });
  // listItemPricing.forEach(function (listItemPricing) {
  //   let introPosition = listItemPricing.getBoundingClientRect().top;

  //   if (introPosition < ScreenPos) {
  //     listItemPricing.classList.add("text-appear");
  //   }
  // });

  // listItem.forEach(function (listItem) {
  let introPosition = listItem[0].getBoundingClientRect().top;

  if (introPosition < ScreenPos) {
    listItem.forEach(function (listItem) {
      listItem.classList.add("text-appear");
    });
  }

  let introPosition2 = listItemPricing[0].getBoundingClientRect().top;
  if (introPosition2 < ScreenPos) {
    listItemPricing.forEach(function (listItemPricing) {
      listItemPricing.classList.add("text-appear");
    });
  }
}

window.addEventListener("scroll", scrollAppear);
