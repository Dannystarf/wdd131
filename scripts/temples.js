// Temple Album JavaScript

// DOM Content Loaded Event
document.addEventListener("DOMContentLoaded", () => {
  // Initialize footer information
  updateFooterInfo()

  // Initialize hamburger menu
  initializeHamburgerMenu()
})

// Update footer with current year and last modified date
function updateFooterInfo() {
  const currentYear = new Date().getFullYear()
  const lastModified = document.lastModified

  const currentYearElement = document.getElementById("currentYear")
  const lastModifiedElement = document.getElementById("lastModified")

  if (currentYearElement) {
    currentYearElement.textContent = currentYear
  }

  if (lastModifiedElement) {
    lastModifiedElement.textContent = lastModified
  }
}

// Initialize hamburger menu functionality
function initializeHamburgerMenu() {
  const hamburger = document.getElementById("hamburger")
  const navigation = document.getElementById("navigation")

  if (hamburger && navigation) {
    hamburger.addEventListener("click", () => {
      // Toggle active class on hamburger for animation
      hamburger.classList.toggle("active")

      // Toggle active class on navigation for visibility
      navigation.classList.toggle("active")

      // Update aria-expanded for accessibility
      const isExpanded = navigation.classList.contains("active")
      hamburger.setAttribute("aria-expanded", isExpanded)
    })

    // Close menu when clicking on navigation links (mobile)
    const navLinks = navigation.querySelectorAll("a")
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (window.innerWidth < 768) {
          hamburger.classList.remove("active")
          navigation.classList.remove("active")
          hamburger.setAttribute("aria-expanded", "false")
        }
      })
    })

    // Close menu when window is resized to larger screen
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 768) {
        hamburger.classList.remove("active")
        navigation.classList.remove("active")
        hamburger.setAttribute("aria-expanded", "false")
      }
    })
  }
}

// Smooth scrolling for navigation links (optional enhancement)
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Image lazy loading fallback for older browsers
if ("IntersectionObserver" in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target
        img.src = img.dataset.src || img.src
        img.classList.remove("lazy")
        imageObserver.unobserve(img)
      }
    })
  })

  document.querySelectorAll('img[loading="lazy"]').forEach((img) => {
    imageObserver.observe(img)
  })
}
