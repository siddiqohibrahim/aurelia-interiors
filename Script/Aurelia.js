
/* =========================================
   AURELIA INTERIORS — MAIN JAVASCRIPT
========================================= */


/* =========================================
   1. MOBILE NAVIGATION MENU
========================================= */

const menuOpenButton = document.getElementById("menu-open-button");
const menuCloseButton = document.getElementById("menu-close-button");
const navMenu = document.querySelector(".nav-menu");

if (menuOpenButton && navMenu) {
  menuOpenButton.addEventListener("click", function () {
    navMenu.classList.add("open");
  });
}

if (menuCloseButton && navMenu) {
  menuCloseButton.addEventListener("click", function () {
    navMenu.classList.remove("open");
  });
}

// Close the menu when a navigation link is selected.
if (navMenu) {
  const navLinks = navMenu.querySelectorAll(".nav-link, .nav-consultant");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      navMenu.classList.remove("open");
    });
  });
}


/* =========================================
   2. SERVICE IMAGE INTERACTIONS
========================================= */

const serviceImageContainers = document.querySelectorAll(
  ".service1-img .image-container, .service2-img .image-container"
);

serviceImageContainers.forEach(function (container) {
  const serviceImage = container.querySelector("img");
  const serviceText = container.querySelector("p");

  if (!serviceImage || !serviceText) {
    return;
  }

  container.addEventListener("click", function () {
    // Hide text on all the other service images.
    serviceImageContainers.forEach(function (otherContainer) {
      if (otherContainer !== container) {
        otherContainer.classList.remove("active");

        const otherText = otherContainer.querySelector("p");

        if (otherText) {
          otherText.style.display = "none";
        }
      }
    });

    // Toggle the selected image's text.
    const isActive = container.classList.toggle("active");

    serviceText.style.display = isActive ? "block" : "none";
  });
});


/* =========================================
   3. PROJECT IMAGE LIGHTBOX
========================================= */

const projectImages = document.querySelectorAll(".project-img1");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const lightboxCloseButton = document.querySelector("#lightbox-close");

if (lightbox && lightboxImage) {
  projectImages.forEach(function (image) {
    image.addEventListener("click", function () {
      lightboxImage.src = image.src;
      lightboxImage.alt = image.alt;
      lightbox.classList.add("active");
    });
  });

  if (lightboxCloseButton) {
    lightboxCloseButton.addEventListener("click", function () {
      lightbox.classList.remove("active");
    });
  }

  lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) {
      lightbox.classList.remove("active");
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      lightbox.classList.remove("active");
    }
  });
}


/* =========================================
   4. TESTIMONIAL SLIDER
========================================= */

const testimonialContainer = document.querySelector(
  ".testimonials-cardcontainer"
);

const testimonialPrevButton = document.querySelector(".testimonial-prev");
const testimonialNextButton = document.querySelector(".testimonial-next");

if (
  testimonialContainer &&
  testimonialPrevButton &&
  testimonialNextButton
) {
  function getTestimonialStep() {
    const firstCard = testimonialContainer.firstElementChild;

    if (!firstCard) {
      return 0;
    }

    const containerStyle = window.getComputedStyle(testimonialContainer);
    const gap =
      parseFloat(containerStyle.columnGap) ||
      parseFloat(containerStyle.gap) ||
      0;

    return firstCard.getBoundingClientRect().width + gap;
  }

  testimonialNextButton.addEventListener("click", function () {
    const step = getTestimonialStep();

    if (step === 0) {
      return;
    }

    const maxScroll =
      testimonialContainer.scrollWidth -
      testimonialContainer.clientWidth;

    if (
      testimonialContainer.scrollLeft >= maxScroll - 5
    ) {
      testimonialContainer.scrollTo({
        left: 0,
        behavior: "smooth"
      });
    } else {
      testimonialContainer.scrollBy({
        left: step,
        behavior: "smooth"
      });
    }
  });

  testimonialPrevButton.addEventListener("click", function () {
    const step = getTestimonialStep();

    if (step === 0) {
      return;
    }

    if (testimonialContainer.scrollLeft <= 5) {
      testimonialContainer.scrollTo({
        left:
          testimonialContainer.scrollWidth -
          testimonialContainer.clientWidth,
        behavior: "smooth"
      });
    } else {
      testimonialContainer.scrollBy({
        left: -step,
        behavior: "smooth"
      });
    }
  });
}


/* =========================================
   5. TEAM SLIDER AND DOTS
========================================= */

const teamContainer = document.querySelector(".team-cardcontainer");
const teamCards = document.querySelectorAll(".team-card");
const teamDotsContainer = document.querySelector(".team-slider-dots");

if (
  teamContainer &&
  teamCards.length > 0 &&
  teamDotsContainer
) {
  let teamDots = [];

  function getTeamStep() {
    const firstCard = teamCards[0];

    if (!firstCard) {
      return 0;
    }

    const containerStyle = window.getComputedStyle(teamContainer);
    const gap =
      parseFloat(containerStyle.columnGap) ||
      parseFloat(containerStyle.gap) ||
      0;

    return firstCard.getBoundingClientRect().width + gap;
  }

  function createTeamDots() {
    teamDotsContainer.innerHTML = "";
    teamDots = [];

    const step = getTeamStep();

    if (step <= 0) {
      return;
    }

    const maxScroll =
      teamContainer.scrollWidth - teamContainer.clientWidth;

    const numberOfDots = Math.max(
      1,
      Math.ceil(maxScroll / step) + 1
    );

    for (let i = 0; i < numberOfDots; i++) {
      const dot = document.createElement("button");

      dot.type = "button";
      dot.classList.add("team-slider-dot");
      dot.setAttribute("aria-label", "Show team slide " + (i + 1));

      dot.addEventListener("click", function () {
        teamContainer.scrollTo({
          left: i * step,
          behavior: "smooth"
        });
      });

      teamDotsContainer.appendChild(dot);
      teamDots.push(dot);
    }

    updateTeamDots();
  }

  function updateTeamDots() {
    if (teamDots.length === 0) {
      return;
    }

    const step = getTeamStep();

    if (step <= 0) {
      return;
    }

    const currentIndex = Math.round(
      teamContainer.scrollLeft / step
    );

    teamDots.forEach(function (dot, index) {
      dot.classList.toggle("active", index === currentIndex);
      dot.setAttribute(
        "aria-current",
        index === currentIndex ? "true" : "false"
      );
    });
  }

  teamContainer.addEventListener("scroll", updateTeamDots);

  createTeamDots();

  window.addEventListener("resize", function () {
    createTeamDots();
  });
}


/* =========================================
   6. CONSULTATION SUCCESS POPUP
========================================= */

const successPopup = document.getElementById("success-popup");
const successCloseButton = document.getElementById(
  "success-close-button"
);

function showConsultationPopup(title, message, isSuccess) {
  if (!successPopup) {
    alert(message);
    return;
  }

  const popupHeading = successPopup.querySelector("h2");
  const popupParagraph = successPopup.querySelector("p");
  const popupIcon = successPopup.querySelector(".success-icon");

  if (popupHeading) {
    popupHeading.textContent = title;
  }

  if (popupParagraph) {
    popupParagraph.textContent = message;
  }

  if (popupIcon) {
    popupIcon.textContent = isSuccess ? "✓" : "!";
  }

  successPopup.classList.add("show");
}

function closeConsultationPopup() {
  if (successPopup) {
    successPopup.classList.remove("show");
  }
}

if (successCloseButton) {
  successCloseButton.addEventListener(
    "click",
    closeConsultationPopup
  );
}

if (successPopup) {
  successPopup.addEventListener("click", function (event) {
    if (event.target === successPopup) {
      closeConsultationPopup();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (
      event.key === "Escape" &&
      successPopup.classList.contains("show")
    ) {
      closeConsultationPopup();
    }
  });
}


/* =========================================
   7. CONSULTATION FORM — WEB3FORMS
========================================= */

const consultationForm = document.getElementById(
  "consultation-form"
);

if (consultationForm) {
  consultationForm.addEventListener(
    "submit",
    async function (event) {
      event.preventDefault();

      const formData = new FormData(consultationForm);

      /*
        IMPORTANT:
        Replace YOUR_NEW_ACCESS_KEY with your regenerated
        Web3Forms access key. Do not share your key publicly.
      */

      formData.append("access_key", "79aa8df5-1807-4673-9d7f-423a00f67c97");

      formData.append(
        "subject",
        "New Aurelia Interiors Consultation Request"
      );

      const submitButton = consultationForm.querySelector(
        'button[type="submit"]'
      );

      if (!submitButton) {
        console.error("The form submit button could not be found.");
        return;
      }

      const originalButtonText = submitButton.innerHTML;

      submitButton.disabled = true;
      submitButton.textContent = "Sending...";

      try {
        const response = await fetch(
          "https://api.web3forms.com/submit",
          {
            method: "POST",
            body: formData
          }
        );

        const result = await response.json();

        if (response.ok && result.success) {
          consultationForm.reset();

          showConsultationPopup(
            "Thank You!",
            "Your consultation request has been submitted successfully. We'll be in touch soon to confirm the details.",
            true
          );
        } else {
          console.error("Web3Forms error:", result);

          showConsultationPopup(
            "Request Not Sent",
            result.message ||
              "We couldn't send your request. Please try again.",
            false
          );
        }
      } catch (error) {
        console.error("Consultation form error:", error);

        showConsultationPopup(
          "Connection Error",
          "We couldn't connect to the form service. Please check your internet connection and try again.",
          false
        );
      } finally {
        submitButton.disabled = false;
        submitButton.innerHTML = originalButtonText;
      }
    }
  );
}