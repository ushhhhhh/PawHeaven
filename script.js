/**
 * PawHaven Bengaluru — Main Interactive Script
 * Features:
 * - Pet profiles data & dynamic rendering
 * - Advanced multi-criteria filtering (Type, Age, Status, Area, Gender) & live search
 * - Pet details modal with comprehensive medical & behavioral records
 * - Adoption enquiry application form with validation & application receipt modal
 * - Shortlist / Saved Pets drawer with localStorage persistence
 * - Interactive Adoption Readiness Quiz
 * - Shelter Partner registration modal
 * - FAQ Accordion & Toast notification feedback
 * - Responsive mobile drawer & scroll spy
 */

// ==========================================
// 1. PET DATA REPOSITORY (DEMONSTRATION PROFILES)
// ==========================================
const PETS_DATA = [
  {
    id: "pet-bruno",
    name: "Bruno",
    type: "dog",
    category: "adult", // dog, cat, young, adult
    breed: "Indian Pariah (Indie) Dog",
    age: "2 years old",
    ageMonths: 24,
    gender: "Male",
    size: "Medium (18 kg)",
    personality: ["Friendly", "Loyal", "Gentle with Kids", "House-Trained"],
    location: "Indiranagar",
    status: "Available",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800&auto=format&fit=crop&q=80",
    story: "Bruno was found limping near an Indiranagar cafe during a heavy rainstorm. After complete rehabilitation at a foster home, he has blossomed into an exceptionally sweet and loyal boy who loves morning walks around defense colony parks and evening cuddles.",
    careNeeds: "Requires 30–45 mins of daily brisk walking. Low-maintenance coat, loves mental enrichment puzzles and belly rubs.",
    compatibility: {
      kids: "Wonderful with children",
      otherPets: "Friendly with dogs, untested with cats",
      apartment: "Highly suitable for apartments with regular walks"
    },
    medical: {
      vaccinated: "Fully Vaccinated (DHPPiL & Anti-Rabies)",
      neutered: "Sterilized / Neutered",
      dewormed: "Regularly Dewormed & Flea Protected",
      healthCheck: "100% Healthy & Fit"
    }
  },
  {
    id: "pet-bella",
    name: "Bella",
    type: "dog",
    category: "young",
    breed: "Indie Puppy",
    age: "5 months old",
    ageMonths: 5,
    gender: "Female",
    size: "Small-Medium Puppy (8 kg)",
    personality: ["Playful", "Curious", "Affectionate", "Fast Learner"],
    location: "Koramangala",
    status: "Available",
    image: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=800&auto=format&fit=crop&q=80",
    story: "Bella was rescued along with her brothers from a construction site in Koramangala. She is an inquisitive, cheerful pup who loves discovering new toys and is already learning basic commands like 'sit' and 'come' with positive reinforcement.",
    careNeeds: "High puppy energy! Needs dedicated time for basic obedience training, teething toys, and a puppy-proofed home.",
    compatibility: {
      kids: "Playful with children of all ages",
      otherPets: "Great with other dogs and cats",
      apartment: "Needs moderate daily playtime"
    },
    medical: {
      vaccinated: "Core Puppy Shots Completed",
      neutered: "Sterilization pledge required at 7 months",
      dewormed: "Up-to-date deworming schedule",
      healthCheck: "Vet certified healthy"
    }
  },
  {
    id: "pet-simba",
    name: "Simba",
    type: "cat",
    category: "adult",
    breed: "Domestic Short-hair (Orange Tabby)",
    age: "1 year old",
    ageMonths: 12,
    gender: "Male",
    size: "Small (4.2 kg)",
    personality: ["Affectionate", "Purr Machine", "Lap Cat", "Gentle"],
    location: "Whitefield",
    status: "Available",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&auto=format&fit=crop&q=80",
    story: "Simba was rescued from an office basement in Whitefield where he sought warmth. He has a soothing, loud purr that starts the second you stroke his head. Simba is an indoor prince who loves curling up beside laptop keyboards while you work from home.",
    careNeeds: "Indoor-only cat. Needs a sturdy scratching post, window perches for bird watching, and clean litter maintenance.",
    compatibility: {
      kids: "Very gentle with calm children",
      otherPets: "Coexists peacefully with cats",
      apartment: "Perfect companion for apartment living"
    },
    medical: {
      vaccinated: "Vaccinated (Tricat & Rabies)",
      neutered: "Neutered",
      dewormed: "Dewormed & Microchipped",
      healthCheck: "Excellent feline health"
    }
  },
  {
    id: "pet-luna",
    name: "Luna",
    type: "cat",
    category: "young",
    breed: "Domestic Tuxedo Kitten",
    age: "4 months old",
    ageMonths: 4,
    gender: "Female",
    size: "Kitten (2.1 kg)",
    personality: ["Gentle", "Cuddle Bug", "Quiet Observer", "Playful"],
    location: "Jayanagar",
    status: "Available",
    image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=800&auto=format&fit=crop&q=80",
    story: "Luna was found sheltering inside a potted plant nursery in Jayanagar. With her striking tuxedo coat and soulful eyes, she immediately captures hearts. She loves chasing feather wands and falling asleep purring on your chest.",
    careNeeds: "Requires high-protein kitten food, gentle handling, and secure window netting in Bengaluru apartments.",
    compatibility: {
      kids: "Gentle with all age groups",
      otherPets: "Adapts easily to other cats and pet-friendly dogs",
      apartment: "Ideal for cozy homes"
    },
    medical: {
      vaccinated: "Initial Kitten Vaccinations Done",
      neutered: "Spaying scheduled at 6 months",
      dewormed: "Regular deworming completed",
      healthCheck: "Clean bill of health"
    }
  },
  {
    id: "pet-max",
    name: "Max",
    type: "dog",
    category: "adult",
    breed: "Mixed Breed (Indie & Lab Mix)",
    age: "3 years old",
    ageMonths: 36,
    gender: "Male",
    size: "Medium-Large (22 kg)",
    personality: ["Energetic", "Athletic", "Eager to Please", "House-Trained"],
    location: "HSR Layout",
    status: "Available",
    image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=800&auto=format&fit=crop&q=80",
    story: "Max was surrendered when his previous family had to urgently relocate. He is a majestic, golden-brown mixed boy who already knows commands like 'sit', 'shake paw', and 'stay'. He is active and loves long lakeside jogs around Agara Lake.",
    careNeeds: "Active pet parents who enjoy daily outdoor runs and fetch games. Needs mental stimulation and loving consistency.",
    compatibility: {
      kids: "Great with older kids and teens",
      otherPets: "Enjoys dog playdates",
      apartment: "Good with committed daily exercise"
    },
    medical: {
      vaccinated: "Fully Vaccinated (Annual Booster Up to Date)",
      neutered: "Neutered",
      dewormed: "Regular Deworming & Tick Control",
      healthCheck: "Vibrant health and fitness"
    }
  },
  {
    id: "pet-misty",
    name: "Misty",
    type: "cat",
    category: "adult",
    breed: "Rescued Calico Cat",
    age: "2 years old",
    ageMonths: 24,
    gender: "Female",
    size: "Small (3.8 kg)",
    personality: ["Calm", "Independent", "Serene", "Observant"],
    location: "Malleshwaram",
    status: "Available",
    image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=800&auto=format&fit=crop&q=80",
    story: "Misty was looked after by community animal feeders in Malleshwaram before moving to a foster sanctuary. She is a dignified, quiet calico lady who enjoys relaxing in sunny spots and receiving gentle chin scratches after a long day.",
    careNeeds: "Low-maintenance lifestyle. Cozy sleeping blankets, quiet environment, and regular grooming.",
    compatibility: {
      kids: "Prefers calm, older children",
      otherPets: "Prefers being the only queen of the house",
      apartment: "100% apartment friendly"
    },
    medical: {
      vaccinated: "Vaccinated & Microchipped",
      neutered: "Spayed",
      dewormed: "Clean medical record",
      healthCheck: "Completely healthy"
    }
  },
  {
    id: "pet-rocky",
    name: "Rocky",
    type: "dog",
    category: "adult",
    breed: "Rescued Indie Senior",
    age: "6 years old",
    ageMonths: 72,
    gender: "Male",
    size: "Medium (19 kg)",
    personality: ["Gentle Soul", "Wise", "Low Energy", "Deeply Loyal"],
    location: "Bannerghatta Road",
    status: "Foster to Adopt",
    image: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=800&auto=format&fit=crop&q=80",
    story: "Rocky is a wise senior indie who survived years as a community dog before being nursed back from an injury. Senior dogs make the most thankful, peaceful companions — no chewing, no frantic barking, just boundless unconditional love and quiet companionship.",
    careNeeds: "Gentle 20-min daily walks, orthopedic soft bedding, and routine joint care supplements.",
    compatibility: {
      kids: "Gentle and patient with all humans",
      otherPets: "Coexists calmly with other gentle pets",
      apartment: "Wonderful apartment companion"
    },
    medical: {
      vaccinated: "Fully Vaccinated",
      neutered: "Neutered",
      dewormed: "Dewormed",
      healthCheck: "Healed & Stable, Mild joint supplements"
    }
  },
  {
    id: "pet-daisy",
    name: "Daisy",
    type: "dog",
    category: "young",
    breed: "Golden Indie Cross Pup",
    age: "7 months old",
    ageMonths: 7,
    gender: "Female",
    size: "Medium Pup (13 kg)",
    personality: ["Bouncy", "Joyful", "Friendly", "Food Motivated"],
    location: "Sarjapur Road",
    status: "Available",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&auto=format&fit=crop&q=80",
    story: "Daisy was found abandoned at Sarjapur Road in a cardboard box. From day one, she has been a beam of pure sunshine! She loves chasing balls in fenced gardens, learning trick commands with treats, and greeting every human like an old friend.",
    careNeeds: "Moderate-to-high exercise, crate training / routine guidance, positive social interaction.",
    compatibility: {
      kids: "Fantastic with kids",
      otherPets: "Loves other playful dogs",
      apartment: "Thrives with daily outdoor play"
    },
    medical: {
      vaccinated: "Fully Vaccinated",
      neutered: "Spayed",
      dewormed: "Up-to-date",
      healthCheck: "In excellent health"
    }
  }
];

// ==========================================
// 2. STATE & LOCAL STORAGE (FAVORITES / SHORTLIST)
// ==========================================
let currentFilter = 'all';
let currentArea = 'all';
let currentGender = 'all';
let currentSearch = '';
let savedPets = JSON.parse(localStorage.getItem('pawhaven_saved_pets') || '[]');

// ==========================================
// 3. INITIALIZATION ON DOM LOAD
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  renderPetCards();
  updateCategoryCounts();
  updateShortlistBadge();
  setupFilterListeners();
  setupModalListeners();
  setupAdoptionForm();
  setupContactForm();
  setupReadinessQuiz();
  setupFaqAccordion();
  setupMobileMenu();
  setupScrollEffects();
});

// ==========================================
// 4. PET CARDS RENDERING & FILTERING
// ==========================================
function getFilteredPets() {
  return PETS_DATA.filter(pet => {
    // 1. Category Pill Filter
    if (currentFilter === 'dog' && pet.type !== 'dog') return false;
    if (currentFilter === 'cat' && pet.type !== 'cat') return false;
    if (currentFilter === 'young' && pet.category !== 'young') return false;
    if (currentFilter === 'adult' && pet.category !== 'adult') return false;
    if (currentFilter === 'available' && pet.status !== 'Available') return false;

    // 2. Area Dropdown Filter
    if (currentArea !== 'all' && pet.location !== currentArea) return false;

    // 3. Gender Dropdown Filter
    if (currentGender !== 'all' && pet.gender !== currentGender) return false;

    // 4. Search Filter
    if (currentSearch.trim() !== '') {
      const q = currentSearch.toLowerCase();
      const matchName = pet.name.toLowerCase().includes(q);
      const matchBreed = pet.breed.toLowerCase().includes(q);
      const matchLoc = pet.location.toLowerCase().includes(q);
      const matchPersonality = pet.personality.some(p => p.toLowerCase().includes(q));
      if (!matchName && !matchBreed && !matchLoc && !matchPersonality) {
        return false;
      }
    }

    return true;
  });
}

function renderPetCards() {
  const grid = document.getElementById('petsGrid');
  const emptyState = document.getElementById('emptyState');
  const resultsCount = document.getElementById('resultsCount');

  const filtered = getFilteredPets();

  // Update counter
  resultsCount.textContent = `Showing ${filtered.length} rescued companion${filtered.length === 1 ? '' : 's'}`;

  if (filtered.length === 0) {
    grid.innerHTML = '';
    emptyState.style.display = 'block';
    return;
  }

  emptyState.style.display = 'none';

  grid.innerHTML = filtered.map(pet => {
    const isFavorited = savedPets.includes(pet.id);
    const statusClass = pet.status === 'Available' ? 'status-available' : 'status-foster';

    return `
      <article class="pet-card" data-pet-id="${pet.id}">
        <div class="pet-card-media">
          <img src="${pet.image}" alt="${pet.name} — ${pet.breed}" class="pet-card-img" loading="lazy">
          
          <button class="pet-fav-btn ${isFavorited ? 'favorited' : ''}" 
                  onclick="toggleFavorite('${pet.id}', event)" 
                  aria-label="${isFavorited ? 'Remove from favorites' : 'Add to favorites'}"
                  title="${isFavorited ? 'Favorited' : 'Add to Shortlist'}">
            <i class="fa-${isFavorited ? 'solid' : 'regular'} fa-heart"></i>
          </button>

          <span class="pet-status-pill ${statusClass}">
            <i class="fa-solid fa-circle-dot"></i> ${pet.status}
          </span>

          <span class="demo-card-tag">
            <i class="fa-solid fa-circle-info"></i> Demo Profile
          </span>
        </div>

        <div class="pet-card-content">
          <div class="pet-card-top">
            <h3 class="pet-name">${pet.name}</h3>
            <span class="pet-breed-type">
              <i class="fa-solid fa-${pet.type === 'dog' ? 'dog' : 'cat'}"></i> ${pet.breed}
            </span>
          </div>

          <div class="pet-meta-row">
            <span class="pet-meta-item"><i class="fa-solid fa-cake-candles"></i> ${pet.age}</span>
            <span class="pet-meta-item"><i class="fa-solid fa-${pet.gender === 'Male' ? 'mars' : 'venus'}"></i> ${pet.gender}</span>
            <span class="pet-meta-item"><i class="fa-solid fa-weight-hanging"></i> ${pet.size}</span>
          </div>

          <div class="pet-personality-tags">
            ${pet.personality.map(tag => `<span class="pet-tag">#${tag}</span>`).join('')}
          </div>

          <div class="pet-location-row">
            <i class="fa-solid fa-location-dot"></i>
            <span>Foster Location: <strong>${pet.location}, Bengaluru</strong></span>
          </div>

          <div class="pet-card-actions">
            <button class="btn btn-card-details" onclick="openPetModal('${pet.id}')">
              <i class="fa-solid fa-eye"></i> View Details
            </button>
            <button class="btn btn-card-adopt" onclick="openEnquiryModal('${pet.id}')">
              <i class="fa-solid fa-heart"></i> Interested
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function updateCategoryCounts() {
  document.getElementById('countAll').textContent = PETS_DATA.length;
  document.getElementById('countDog').textContent = PETS_DATA.filter(p => p.type === 'dog').length;
  document.getElementById('countCat').textContent = PETS_DATA.filter(p => p.type === 'cat').length;
  document.getElementById('countYoung').textContent = PETS_DATA.filter(p => p.category === 'young').length;
  document.getElementById('countAdult').textContent = PETS_DATA.filter(p => p.category === 'adult').length;
  document.getElementById('countAvailable').textContent = PETS_DATA.filter(p => p.status === 'Available').length;
}

function setupFilterListeners() {
  // Category filter pills
  const pills = document.querySelectorAll('.filter-pill');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => {
        p.classList.remove('active');
        p.setAttribute('aria-selected', 'false');
      });
      pill.classList.add('active');
      pill.setAttribute('aria-selected', 'true');
      currentFilter = pill.getAttribute('data-filter');
      renderPetCards();
    });
  });

  // Area select
  const areaSelect = document.getElementById('areaFilter');
  if (areaSelect) {
    areaSelect.addEventListener('change', (e) => {
      currentArea = e.target.value;
      renderPetCards();
    });
  }

  // Gender select
  const genderSelect = document.getElementById('genderFilter');
  if (genderSelect) {
    genderSelect.addEventListener('change', (e) => {
      currentGender = e.target.value;
      renderPetCards();
    });
  }

  // Search input
  const searchInput = document.getElementById('petSearchInput');
  const clearBtn = document.getElementById('searchClearBtn');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value;
      if (currentSearch.length > 0) {
        clearBtn.style.display = 'block';
      } else {
        clearBtn.style.display = 'none';
      }
      renderPetCards();
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      searchInput.value = '';
      currentSearch = '';
      clearBtn.style.display = 'none';
      renderPetCards();
    });
  }

  // Reset filters button
  const resetBtn = document.getElementById('resetFiltersBtn');
  const emptyResetBtn = document.getElementById('emptyResetBtn');

  const doReset = () => {
    currentFilter = 'all';
    currentArea = 'all';
    currentGender = 'all';
    currentSearch = '';

    if (searchInput) searchInput.value = '';
    if (clearBtn) clearBtn.style.display = 'none';
    if (areaSelect) areaSelect.value = 'all';
    if (genderSelect) genderSelect.value = 'all';

    pills.forEach(p => {
      p.classList.toggle('active', p.getAttribute('data-filter') === 'all');
      p.setAttribute('aria-selected', p.getAttribute('data-filter') === 'all' ? 'true' : 'false');
    });

    renderPetCards();
  };

  if (resetBtn) resetBtn.addEventListener('click', doReset);
  if (emptyResetBtn) emptyResetBtn.addEventListener('click', doReset);
}

// ==========================================
// 5. SHORTLIST / FAVORITES SYSTEM
// ==========================================
function toggleFavorite(petId, event) {
  if (event) event.stopPropagation();

  const index = savedPets.indexOf(petId);
  const pet = PETS_DATA.find(p => p.id === petId);

  if (index === -1) {
    savedPets.push(petId);
    showToast(`Added ${pet ? pet.name : 'pet'} to your shortlist!`, 'success');
  } else {
    savedPets.splice(index, 1);
    showToast(`Removed ${pet ? pet.name : 'pet'} from your shortlist.`, 'info');
  }

  localStorage.setItem('pawhaven_saved_pets', JSON.stringify(savedPets));
  updateShortlistBadge();
  renderPetCards();
  renderShortlistDrawer();
}

function updateShortlistBadge() {
  const count = savedPets.length;
  const badge = document.getElementById('shortlistCount');
  const mobileBadges = document.querySelectorAll('.mobileShortlistCount');

  if (badge) badge.textContent = count;
  mobileBadges.forEach(b => b.textContent = count);
}

function renderShortlistDrawer() {
  const drawerBody = document.getElementById('drawerBody');
  const drawerCount = document.getElementById('drawerCount');
  if (!drawerBody) return;

  drawerCount.textContent = savedPets.length;

  if (savedPets.length === 0) {
    drawerBody.innerHTML = `
      <div class="drawer-empty">
        <i class="fa-regular fa-heart"></i>
        <h4>Your Shortlist is Empty</h4>
        <p>Click the heart icon on any pet card to save your favourite rescued souls here!</p>
      </div>
    `;
    return;
  }

  const items = savedPets.map(id => PETS_DATA.find(p => p.id === id)).filter(Boolean);

  drawerBody.innerHTML = items.map(pet => `
    <div class="drawer-item">
      <img src="${pet.image}" alt="${pet.name}" class="drawer-item-img">
      <div class="drawer-item-meta">
        <h4 class="drawer-item-name">${pet.name}</h4>
        <span class="drawer-item-sub">${pet.breed} &bull; ${pet.age}</span>
        <span class="drawer-item-loc"><i class="fa-solid fa-location-dot"></i> ${pet.location}, Bengaluru</span>
        <button class="btn btn-primary btn-sm mt-2" onclick="closeShortlistDrawer(); openEnquiryModal('${pet.id}')">
          <i class="fa-solid fa-paw"></i> Apply to Adopt
        </button>
      </div>
      <button class="drawer-item-remove" onclick="toggleFavorite('${pet.id}')" title="Remove">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    </div>
  `).join('');
}

function openShortlistDrawer() {
  renderShortlistDrawer();
  document.getElementById('shortlistDrawer').classList.add('active');
  document.getElementById('shortlistDrawerBackdrop').classList.add('active');
}

function closeShortlistDrawer() {
  document.getElementById('shortlistDrawer').classList.remove('active');
  document.getElementById('shortlistDrawerBackdrop').classList.remove('active');
}

// ==========================================
// 6. PET DETAILS MODAL
// ==========================================
function openPetModal(petId) {
  const pet = PETS_DATA.find(p => p.id === petId);
  if (!pet) return;

  const content = document.getElementById('petModalContent');
  const modal = document.getElementById('petModal');

  content.innerHTML = `
    <div class="pet-modal-header">
      <img src="${pet.image}" alt="${pet.name}" class="pet-modal-img">
      <div class="pet-modal-badges">
        <span class="pet-status-pill ${pet.status === 'Available' ? 'status-available' : 'status-foster'}">
          ${pet.status}
        </span>
        <span class="demo-card-tag"><i class="fa-solid fa-tag"></i> Demonstration Profile</span>
      </div>
    </div>

    <div class="pet-modal-body">
      <div class="d-flex justify-content-between align-items-center">
        <div>
          <h2 class="modal-title">${pet.name}</h2>
          <span class="pet-breed-type">
            <i class="fa-solid fa-${pet.type === 'dog' ? 'dog' : 'cat'}"></i> ${pet.breed} &bull; ${pet.location}, Bengaluru
          </span>
        </div>
      </div>

      <!-- Quick Vital Stats Grid -->
      <div class="pet-modal-meta-grid">
        <div class="modal-meta-item">
          <span>Age</span>
          <strong>${pet.age}</strong>
        </div>
        <div class="modal-meta-item">
          <span>Gender</span>
          <strong>${pet.gender}</strong>
        </div>
        <div class="modal-meta-item">
          <span>Size / Weight</span>
          <strong>${pet.size}</strong>
        </div>
        <div class="modal-meta-item">
          <span>Bengaluru Area</span>
          <strong>${pet.location}</strong>
        </div>
      </div>

      <!-- Personality Tags -->
      <div class="pet-personality-tags mb-3">
        ${pet.personality.map(t => `<span class="pet-tag">#${t}</span>`).join('')}
      </div>

      <!-- Story -->
      <h4 class="pet-modal-section-title"><i class="fa-solid fa-book-open"></i> Story &amp; Background</h4>
      <p class="pet-modal-story text-body">${pet.story}</p>

      <!-- Medical Status -->
      <h4 class="pet-modal-section-title"><i class="fa-solid fa-stethoscope"></i> Medical &amp; Health Record</h4>
      <div class="medical-tags-grid">
        <div class="med-tag"><i class="fa-solid fa-check-circle"></i> ${pet.medical.vaccinated}</div>
        <div class="med-tag"><i class="fa-solid fa-check-circle"></i> ${pet.medical.neutered}</div>
        <div class="med-tag"><i class="fa-solid fa-check-circle"></i> ${pet.medical.dewormed}</div>
        <div class="med-tag"><i class="fa-solid fa-check-circle"></i> ${pet.medical.healthCheck}</div>
      </div>

      <!-- Compatibility & Care -->
      <h4 class="pet-modal-section-title"><i class="fa-solid fa-house-chimney-user"></i> Home &amp; Care Compatibility</h4>
      <ul class="goals-list mb-3">
        <li>
          <div class="goal-bullet"><i class="fa-solid fa-child"></i></div>
          <div><strong>Kids &amp; Family:</strong> <span>${pet.compatibility.kids}</span></div>
        </li>
        <li>
          <div class="goal-bullet"><i class="fa-solid fa-paw"></i></div>
          <div><strong>Other Pets:</strong> <span>${pet.compatibility.otherPets}</span></div>
        </li>
        <li>
          <div class="goal-bullet"><i class="fa-solid fa-building"></i></div>
          <div><strong>Living Space:</strong> <span>${pet.compatibility.apartment}</span></div>
        </li>
      </ul>
      <p class="care-tip"><strong>Care Requirements:</strong> ${pet.careNeeds}</p>

      <!-- Action Footer -->
      <div class="pet-modal-actions">
        <button class="btn btn-outline" onclick="toggleFavorite('${pet.id}')">
          <i class="fa-solid fa-heart"></i> Shortlist Pet
        </button>
        <button class="btn btn-primary btn-lg flex-grow-1" onclick="closeModal('petModal'); openEnquiryModal('${pet.id}')">
          <i class="fa-solid fa-paw"></i> Interested in Adopting ${pet.name}
        </button>
      </div>
    </div>
  `;

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

// ==========================================
// 7. ADOPTION APPLICATION ENQUIRY MODAL
// ==========================================
function openEnquiryModal(petId) {
  const pet = PETS_DATA.find(p => p.id === petId) || PETS_DATA[0];
  const modal = document.getElementById('enquiryModal');

  document.getElementById('enquiryPetId').value = pet.id;
  document.getElementById('enquiryPetName').textContent = pet.name;
  document.getElementById('enquiryTitle').innerHTML = `Adopt <span class="text-orange">${pet.name}</span> (${pet.breed})`;

  // Reset errors
  document.querySelectorAll('#adoptionEnquiryForm .form-error').forEach(e => e.classList.remove('visible'));

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function setupAdoptionForm() {
  const form = document.getElementById('adoptionEnquiryForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;
    const name = document.getElementById('applicantName').value.trim();
    const email = document.getElementById('applicantEmail').value.trim();
    const phone = document.getElementById('applicantPhone').value.trim();
    const area = document.getElementById('applicantArea').value;
    const message = document.getElementById('applicantMessage').value.trim();
    const agreement = document.getElementById('familyAgreementCheck').checked;

    // Validate Name
    if (name.length < 2) {
      document.getElementById('appNameErr').classList.add('visible');
      isValid = false;
    } else {
      document.getElementById('appNameErr').classList.remove('visible');
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      document.getElementById('appEmailErr').classList.add('visible');
      isValid = false;
    } else {
      document.getElementById('appEmailErr').classList.remove('visible');
    }

    // Validate Phone (+91 format: 10 digits)
    const cleanPhone = phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      document.getElementById('appPhoneErr').classList.add('visible');
      isValid = false;
    } else {
      document.getElementById('appPhoneErr').classList.remove('visible');
    }

    // Validate Area
    if (!area) {
      document.getElementById('appAreaErr').classList.add('visible');
      isValid = false;
    } else {
      document.getElementById('appAreaErr').classList.remove('visible');
    }

    // Validate Message
    if (message.length < 10) {
      document.getElementById('appMsgErr').classList.add('visible');
      isValid = false;
    } else {
      document.getElementById('appMsgErr').classList.remove('visible');
    }

    // Validate Agreement Checkbox
    if (!agreement) {
      document.getElementById('appAgreeErr').classList.add('visible');
      isValid = false;
    } else {
      document.getElementById('appAgreeErr').classList.remove('visible');
    }

    if (!isValid) return;

    // Retrieve pet info
    const petId = document.getElementById('enquiryPetId').value;
    const pet = PETS_DATA.find(p => p.id === petId) || PETS_DATA[0];

    // Generate unique application reference code
    const randomRef = 'PH-BLR-' + Math.floor(1000 + Math.random() * 9000);

    // Populate Success Modal
    document.getElementById('successAppRef').textContent = randomRef;
    document.getElementById('successPetSummary').textContent = `For ${pet.name} • ${pet.breed} in ${pet.location}, Bengaluru`;

    // Close Enquiry modal & open Success modal
    closeModal('enquiryModal');
    form.reset();

    const successModal = document.getElementById('successModal');
    successModal.classList.add('active');
    successModal.setAttribute('aria-hidden', 'false');

    showToast(`Application ${randomRef} submitted successfully!`, 'success');
  });

  // Close success modal button
  const closeSuccessBtn = document.getElementById('closeSuccessModalBtn');
  if (closeSuccessBtn) {
    closeSuccessBtn.addEventListener('click', () => {
      closeModal('successModal');
    });
  }
}

// ==========================================
// 8. GENERAL CONTACT FORM & NEWSLETTER
// ==========================================
function setupContactForm() {
  const form = document.getElementById('generalContactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;
      const name = document.getElementById('contactName').value.trim();
      const email = document.getElementById('contactEmail').value.trim();
      const subject = document.getElementById('contactSubject').value;
      const message = document.getElementById('contactMessage').value.trim();

      if (name.length < 2) {
        document.getElementById('nameError').classList.add('visible');
        isValid = false;
      } else {
        document.getElementById('nameError').classList.remove('visible');
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        document.getElementById('emailError').classList.add('visible');
        isValid = false;
      } else {
        document.getElementById('emailError').classList.remove('visible');
      }

      if (!subject) {
        document.getElementById('subjectError').classList.add('visible');
        isValid = false;
      } else {
        document.getElementById('subjectError').classList.remove('visible');
      }

      if (message.length < 15) {
        document.getElementById('messageError').classList.add('visible');
        isValid = false;
      } else {
        document.getElementById('messageError').classList.remove('visible');
      }

      if (!isValid) return;

      showToast('Thank you! Your message has been sent to our concept support team.', 'success');
      form.reset();
    });
  }

  // Newsletter form
  const newsForm = document.getElementById('newsletterForm');
  if (newsForm) {
    newsForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('newsletterEmail').value.trim();
      if (email) {
        showToast('Subscribed! You will receive alerts for weekend adoption camps in Bengaluru.', 'success');
        newsForm.reset();
      }
    });
  }
}

// ==========================================
// 9. SHELTER PARTNER MODAL
// ==========================================
function openPartnerModal(partnerName) {
  const modal = document.getElementById('partnerModal');
  const title = document.getElementById('partnerModalTitle');
  if (partnerName) {
    title.textContent = `Partner Inquiry: ${partnerName}`;
  } else {
    title.textContent = `Become a Shelter Partner`;
  }
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

document.addEventListener('click', (e) => {
  if (e.target.closest('#becomePartnerBtn')) {
    openPartnerModal();
  }
});

const partnerForm = document.getElementById('shelterPartnerForm');
if (partnerForm) {
  partnerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    closeModal('partnerModal');
    partnerForm.reset();
    showToast('Shelter partner interest received! We will connect with your rescue group shortly.', 'success');
  });
}

// ==========================================
// 10. INTERACTIVE ADOPTION READINESS QUIZ
// ==========================================
function setupReadinessQuiz() {
  const checkboxes = document.querySelectorAll('.quiz-checkbox');
  const badge = document.getElementById('feedbackBadge');
  const text = document.getElementById('feedbackText');

  if (!checkboxes.length) return;

  function updateQuiz() {
    const checkedCount = Array.from(checkboxes).filter(c => c.checked).length;

    if (checkedCount === 0) {
      badge.textContent = '🐾 Complete the checklist';
      badge.style.backgroundColor = 'var(--orange-500)';
      text.textContent = 'Select all checkboxes that apply to your current situation to see your adoption readiness profile.';
    } else if (checkedCount <= 2) {
      badge.textContent = '🌱 Getting Prepared';
      badge.style.backgroundColor = 'var(--orange-600)';
      text.textContent = 'You are on the right track! Take a little more time to ensure all family members are aligned and your home has necessary balcony safety meshes.';
    } else if (checkedCount === 3) {
      badge.textContent = '⭐ Almost Ready!';
      badge.style.backgroundColor = 'var(--orange-700)';
      text.textContent = 'Great preparation! Double-check your daily work schedules and vet clinic locations in Bengaluru. You are nearly set to welcome a companion.';
    } else if (checkedCount === 4) {
      badge.textContent = '🎉 100% Ready to Adopt!';
      badge.style.backgroundColor = 'var(--green-600)';
      text.textContent = 'Outstanding! You have the empathy, lifestyle stability, and commitment needed for a rescued companion. Take a look at our pet profiles above!';
    }
  }

  checkboxes.forEach(cb => {
    cb.addEventListener('change', updateQuiz);
  });
}

// ==========================================
// 11. FAQ ACCORDION
// ==========================================
function setupFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const button = item.querySelector('.faq-question');
    button.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      // Close other active FAQs
      faqItems.forEach(f => {
        f.classList.remove('active');
        f.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });
      if (!isActive) {
        item.classList.add('active');
        button.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

// ==========================================
// 12. GENERAL MODAL HELPERS & DRAWER TOGGLES
// ==========================================
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

function setupModalListeners() {
  // Close buttons on modals
  const petClose = document.getElementById('petModalClose');
  if (petClose) petClose.addEventListener('click', () => closeModal('petModal'));

  const enquiryClose = document.getElementById('enquiryModalClose');
  if (enquiryClose) enquiryClose.addEventListener('click', () => closeModal('enquiryModal'));

  const partnerClose = document.getElementById('partnerModalClose');
  if (partnerClose) partnerClose.addEventListener('click', () => closeModal('partnerModal'));

  // Close modal when clicking on backdrop
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closeModal(overlay.id);
      }
    });
  });

  // Escape key closes modals and drawers
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.active').forEach(m => closeModal(m.id));
      closeShortlistDrawer();
      closeMobileMenu();
    }
  });

  // Shortlist Drawer triggers
  const openShortlistBtn = document.getElementById('openShortlistBtn');
  const mobileShortlistBtn = document.getElementById('mobileShortlistBtn');
  const closeDrawerBtn = document.getElementById('closeDrawerBtn');
  const drawerBackdrop = document.getElementById('shortlistDrawerBackdrop');
  const drawerBrowseBtn = document.getElementById('drawerBrowseBtn');

  if (openShortlistBtn) openShortlistBtn.addEventListener('click', openShortlistDrawer);
  if (mobileShortlistBtn) {
    mobileShortlistBtn.addEventListener('click', () => {
      closeMobileMenu();
      openShortlistDrawer();
    });
  }
  if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeShortlistDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeShortlistDrawer);
  if (drawerBrowseBtn) drawerBrowseBtn.addEventListener('click', closeShortlistDrawer);
}

// ==========================================
// 13. MOBILE MENU TOGGLE
// ==========================================
function setupMobileMenu() {
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileClose = document.getElementById('mobileCloseBtn');
  const mobileLinks = document.querySelectorAll('.mobile-link, .mobile-adopt-btn');

  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      mobileMenu.classList.add('active');
      mobileMenu.setAttribute('aria-hidden', 'false');
      mobileBtn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    });
  }

  if (mobileClose && mobileMenu) {
    mobileClose.addEventListener('click', closeMobileMenu);
  }

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });
}

function closeMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileBtn = document.getElementById('mobileMenuBtn');
  if (mobileMenu) {
    mobileMenu.classList.remove('active');
    mobileMenu.setAttribute('aria-hidden', 'true');
    if (mobileBtn) mobileBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
}

// ==========================================
// 14. SCROLL EFFECTS & NAVBAR ACTIVE SPY
// ==========================================
function setupScrollEffects() {
  const header = document.getElementById('header');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link');
  const sections = document.querySelectorAll('section[id], header[id]');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    // Header frosted glass on scroll
    if (scrollPos > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Scroll spy for navigation
    let currentId = 'home';
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  });
}

// ==========================================
// 15. TOAST NOTIFICATION UTILITY
// ==========================================
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast ${type === 'success' ? 'toast-success' : ''}`;
  
  const icon = type === 'success' ? 'fa-circle-check' : 'fa-circle-info';
  toast.innerHTML = `
    <i class="fa-solid ${icon}"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}
