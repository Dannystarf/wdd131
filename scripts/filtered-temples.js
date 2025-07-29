// Temple data array with additional temples
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "72-80 Okpu-Umuobo Rd Aba, Abia State Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "200 E 510 N Manti, Utah 84642-1701 United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "1494 S 930 W Payson, Utah 84651 United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "321 Chalan Pale Ramon Lagu, Rte 1 Yigo 96929 Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "9900 Stoneybrook Dr Kensington, Maryland 20895-3199 United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Av. Javier Prado Este 6420 Urb. Santa Patricia La Molina Lima 12 Peru",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Avenida 510 N°90 Col. San Juan de Aragon 07950 México, Distrito Federal Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  // Additional temples
  {
    templeName: "Salt Lake Temple",
    location: "50 W North Temple St Salt Lake City, Utah 84150-9709 United States",
    dedicated: "1893, April, 6",
    area: 253015,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37762.jpg",
  },
  {
    templeName: "Tokyo Japan",
    location: "5-8-10 Minami Azabu Minato-ku Tokyo 106-0047 Japan",
    dedicated: "1980, October, 27",
    area: 53997,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-26340-main.jpg",
  },
  {
    templeName: "Rome Italy",
    location: "Via di Settebagni 376 Rome, RM Italy",
    dedicated: "2019, March, 10",
    area: 41010,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg",
    },
    {
        templeName: "Sydney Australia",
        location: "756 Pennant Hills Road Corner Pennant Hills Rd & Moseley St. Carlingford, New South Wales 2118 Australia",
        dedicated: "1984, September, 20",
        area: 30067,
        imageUrl:
          "https://churchofjesuschristtemples.org/assets/img/temples/sydney-australia-temple/sydney-australia-temple-43342-main.jpg",
    },
    {
        templeName: "Buenos Aires Argentina",
        location: "Aut. Tte. Gral. Riccheri N° 4955 B1778DUA Ciudad Evita, Buenos Aires Argentina",
        dedicated: "1986, January, 17",
        area: 30659,
        imageUrl:
          "https://churchofjesuschristtemples.org/assets/img/temples/buenos-aires-argentina-temple/buenos-aires-argentina-temple-4087-main.jpg",
    },
    {
        templeName: "Benin City Nigeria",
        location: "16 Commercial Avenue, Benin City, Nigeria",
        dedicated: "2025, May, 24",
        area: 30700,
        imageUrl:
          "https://churchofjesuschristtemples.org/assets/img/temples/benin-city-nigeria-temple/benin-city-nigeria-temple-58575-main.jpg",
    },
    {
        templeName: "Lisbon Portugal",
        location: "Avenida Dom João II, N75 Parque Das Nacoes 1990-364, Lisboa, Portugal",
        dedicated: "2019, September, 15",
        area: 23730,
        imageUrl:
          "https://churchofjesuschristtemples.org/assets/img/temples/lisbon-portugal-temple/lisbon-portugal-temple-6315-main.jpg",
    },
    {
        templeName: "Cape Town South Africa",
        location: "3 Liesbeek Ave Observatory, Cape Town, South Africa",
        dedicated: "2021, April, 04",
        area: 9500,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/cape-town-south-africa-temple/cape-town-south-africa-temple-23846-main.jpg",
    },
]

// DOM Content Loaded Event
document.addEventListener("DOMContentLoaded", () => {
  // Initialize footer information
  updateFooterInfo()

  // Initialize hamburger menu
  initializeHamburgerMenu()

  // Initialize temple display
  displayTemples(temples)

  // Initialize filter functionality
  initializeFilters()
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
      hamburger.classList.toggle("active")
      navigation.classList.toggle("active")

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

// Create temple card HTML
function createTempleCard(temple) {
  return `
        <div class="temple-card">
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
            <div class="temple-info">
                <h3 class="temple-name">${temple.templeName}</h3>
                <div class="temple-details">
                    <div class="temple-detail">
                        <span class="detail-label">Location:</span>
                        <span class="detail-value">${temple.location}</span>
                    </div>
                    <div class="temple-detail">
                        <span class="detail-label">Dedicated:</span>
                        <span class="detail-value">${temple.dedicated}</span>
                    </div>
                    <div class="temple-detail">
                        <span class="detail-label">Size:</span>
                        <span class="detail-value">${temple.area.toLocaleString()} sq ft</span>
                    </div>
                </div>
            </div>
        </div>
    `
}

// Display temples in the grid
function displayTemples(templesToShow) {
  const templeGrid = document.getElementById("temple-grid")

  if (!templeGrid) return

  // Add fade out animation to existing cards
  const existingCards = templeGrid.querySelectorAll(".temple-card")
  existingCards.forEach((card) => {
    card.classList.add("fade-out")
  })

  // Clear and populate after animation
  setTimeout(() => {
    templeGrid.innerHTML = ""

    templesToShow.forEach((temple, index) => {
      const templeCard = document.createElement("div")
      templeCard.innerHTML = createTempleCard(temple)
      templeCard.firstElementChild.style.animationDelay = `${index * 0.1}s`
      templeGrid.appendChild(templeCard.firstElementChild)
    })
  }, 300)
}

// Filter temples based on criteria
function filterTemples(criteria) {
  let filteredTemples = []
  let title = "Temple Gallery"

  switch (criteria) {
    case "old":
      filteredTemples = temples.filter((temple) => {
        const year = Number.parseInt(temple.dedicated.split(",")[0])
        return year < 1900
      })
      title = "Old Temples (Built before 1900)"
      break

    case "new":
      filteredTemples = temples.filter((temple) => {
        const year = Number.parseInt(temple.dedicated.split(",")[0])
        return year > 2000
      })
      title = "New Temples (Built after 2000)"
      break

    case "large":
      filteredTemples = temples.filter((temple) => temple.area > 90000)
      title = "Large Temples (Larger than 90,000 sq ft)"
      break

    case "small":
      filteredTemples = temples.filter((temple) => temple.area < 10000)
      title = "Small Temples (Smaller than 10,000 sq ft)"
      break

    default:
      filteredTemples = temples
      title = "All Temples"
  }

  // Update title
  const galleryTitle = document.getElementById("gallery-title")
  if (galleryTitle) {
    galleryTitle.textContent = title
  }

  displayTemples(filteredTemples)
}

// Initialize filter functionality
function initializeFilters() {
  const filterLinks = document.querySelectorAll("nav a[data-filter]")

  filterLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()

      // Remove active class from all links
      filterLinks.forEach((l) => l.classList.remove("active"))

      // Add active class to clicked link
      link.classList.add("active")

      // Filter temples
      const filter = link.getAttribute("data-filter")
      filterTemples(filter === "all" ? "all" : filter)
    })
  })
}

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

  // Observe images as they are added to the DOM
  const observeImages = () => {
    document.querySelectorAll('img[loading="lazy"]').forEach((img) => {
      imageObserver.observe(img)
    })
  }

  // Initial observation
  observeImages()

  // Re-observe when new images are added
  const targetNode = document.getElementById("temple-grid")
  if (targetNode) {
    const config = { childList: true, subtree: true }
    const callback = (mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === "childList") {
          observeImages()
        }
      }
    }
    const observer = new MutationObserver(callback)
    observer.observe(targetNode, config)
  }
}
