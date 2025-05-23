// Modal Functions
function openModal() {
  const modal = document.getElementById("modal");
  if (modal) modal.style.display = "flex";
}

function closeModal() {
  const modal = document.getElementById("modal");
  if (modal) modal.style.display = "none";
}

window.addEventListener("click", (e) => {
  const modal = document.getElementById("modal");
  if (modal && e.target === modal) {
    closeModal();
  }
});

// Optional: Close modal with Escape key
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});

// Contact Form Validation
const contactForm = document.getElementById("contactForm");
const errorText = document.getElementById("error");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name")?.value.trim();
    const email = document.getElementById("email")?.value.trim();
    const message = document.getElementById("message")?.value.trim();

    if (!name || !email || !message) {
      if (errorText) errorText.textContent = "Please fill out all fields.";
      return;
    }

    if (errorText) errorText.textContent = "";
    alert("Message sent! Thank you for reaching out.");
    contactForm.reset();
  });
}
const slider = document.querySelector(".slider");
if (slider) {
  let isDragging = false;
  let startX = 0;
  let initialScroll = 0;

  slider.addEventListener("mousedown", (e) => {
    isDragging = true;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    initialScroll = slider.scrollLeft;
  });

  slider.addEventListener("mouseleave", () => {
    isDragging = false;
    slider.classList.remove("active");
  });

  slider.addEventListener("mouseup", () => {
    isDragging = false;
    slider.classList.remove("active");
  });

  slider.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const scrollDistance = (x - startX) * 2; // Adjust speed multiplier here
    slider.scrollLeft = initialScroll - scrollDistance;
  });
}
document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    btn.style.backgroundColor = "#0097a7";
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.backgroundColor = "#00bcd4";
  });
});
const sections = document.querySelectorAll("main section[id]");
const navItems = document.querySelectorAll(".navbar ul li");
window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;

    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      currentSection = section.getAttribute("id");
    }
  });

  navItems.forEach((li) => {
    li.classList.remove("active_nav");
    const anchor = li.querySelector("a");
    if (anchor && anchor.getAttribute("href") === `#${currentSection}`) {
      li.classList.add("active_nav");
    }
  });
});
const profileImg = document.querySelector(".profile_image img");

if (profileImg) {
  profileImg.addEventListener("click", () => {
    profileImg.classList.toggle("grayscale");
  });
}





