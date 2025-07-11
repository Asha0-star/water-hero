// --- Game Data ---
const cardPairs = [
  // 1
  {
    label: "Phosphorus",
    img: "https://cdn-icons-png.flaticon.com/512/2913/2913466.png"
  },
  {
    label: "Helpful in fertilizers, dangerous in fresh water ecosystems.",
    img: "https://cdn-icons-png.flaticon.com/512/2913/2913466.png"
  },
  // 2
  {
    label: "Nitrate",
    img: "https://cdn-icons-png.flaticon.com/512/2913/2913469.png"
  },
  {
    label: "From fertilizers & septic tanks; causes algal blooms.",
    img: "https://cdn-icons-png.flaticon.com/512/2913/2913469.png"
  },
  // 3
  {
    label: "Lead",
    img: "https://cdn-icons-png.flaticon.com/512/2913/2913470.png"
  },
  {
    label: "Old pipes can leach lead into drinking water.",
    img: "https://cdn-icons-png.flaticon.com/512/2913/2913470.png"
  },
  // 4
  {
    label: "Mercury",
    img: "https://cdn-icons-png.flaticon.com/512/2913/2913471.png"
  },
  {
    label: "Released by coal burning; toxic to fish and humans.",
    img: "https://cdn-icons-png.flaticon.com/512/2913/2913471.png"
  },
  // 5
  {
    label: "Microplastics",
    img: "https://cdn-icons-png.flaticon.com/512/2913/2913472.png"
  },
  {
    label: "Tiny plastic pieces from waste; hard to filter out.",
    img: "https://cdn-icons-png.flaticon.com/512/2913/2913472.png"
  },
  // 6
  {
    label: "Oil",
    img: "https://cdn-icons-png.flaticon.com/512/2913/2913473.png"
  },
  {
    label: "Spills and runoff pollute oceans and rivers.",
    img: "https://cdn-icons-png.flaticon.com/512/2913/2913473.png"
  },
  // 7
  {
    label: "Arsenic",
    img: "https://cdn-icons-png.flaticon.com/512/2913/2913474.png"
  },
  {
    label: "Occurs naturally or from mining; toxic in water.",
    img: "https://cdn-icons-png.flaticon.com/512/2913/2913474.png"
  },
  // 8
  {
    label: "Chlorine",
    img: "https://cdn-icons-png.flaticon.com/512/2913/2913475.png"
  },
  {
    label: "Used to disinfect water; too much can be harmful.",
    img: "https://cdn-icons-png.flaticon.com/512/2913/2913475.png"
  },
  // 9
  {
    label: "E. coli",
    img: "https://cdn-icons-png.flaticon.com/512/2913/2913476.png"
  },
  {
    label: "Bacteria from sewage or animal waste; causes illness.",
    img: "https://cdn-icons-png.flaticon.com/512/2913/2913476.png"
  },
  // 10
  {
    label: "Pesticides",
    img: "https://cdn-icons-png.flaticon.com/512/2913/2913477.png"
  },
  {
    label: "Runoff from farms contaminates streams and lakes.",
    img: "https://cdn-icons-png.flaticon.com/512/2913/2913477.png"
  },
  // 11
  {
    label: "Fluoride",
    img: "https://cdn-icons-png.flaticon.com/512/2913/2913478.png"
  },
  {
    label: "Added to water for dental health; excess can be harmful.",
    img: "https://cdn-icons-png.flaticon.com/512/2913/2913478.png"
  },
  // 12
  {
    label: "Copper",
    img: "https://cdn-icons-png.flaticon.com/512/2913/2913479.png"
  },
  {
    label: "Corroded pipes can release copper into water.",
    img: "https://cdn-icons-png.flaticon.com/512/2913/2913479.png"
  },
  // 13
  {
    label: "Detergents",
    img: "https://cdn-icons-png.flaticon.com/512/2913/2913480.png"
  },
  {
    label: "Household waste; causes foaming and harms aquatic life.",
    img: "https://cdn-icons-png.flaticon.com/512/2913/2913480.png"
  },
  // 14
  {
    label: "Cadmium",
    img: "https://cdn-icons-png.flaticon.com/512/2913/2913481.png"
  },
  {
    label: "From batteries and industry; toxic to kidneys.",
    img: "https://cdn-icons-png.flaticon.com/512/2913/2913481.png"
  },
  // 15
  {
    label: "Pharmaceuticals",
    img: "https://cdn-icons-png.flaticon.com/512/2913/2913482.png"
  },
  {
    label: "Medicines flushed down drains can affect wildlife.",
    img: "https://cdn-icons-png.flaticon.com/512/2913/2913482.png"
  },
  // 16
  {
    label: "Aluminum",
    img: "https://cdn-icons-png.flaticon.com/512/2913/2913483.png"
  },
  {
    label: "Can enter water from soil or treatment chemicals.",
    img: "https://cdn-icons-png.flaticon.com/512/2913/2913483.png"
  },
  // 17
  {
    label: "Radon",
    img: "https://cdn-icons-png.flaticon.com/512/2913/2913484.png"
  },
  {
    label: "A radioactive gas that can dissolve into groundwater.",
    img: "https://cdn-icons-png.flaticon.com/512/2913/2913484.png"
  },
  // 18
  {
    label: "Atrazine",
    img: "https://cdn-icons-png.flaticon.com/512/2913/2913485.png"
  },
  {
    label: "A common weed killer; disrupts aquatic ecosystems.",
    img: "https://cdn-icons-png.flaticon.com/512/2913/2913485.png"
  },
  // 19
  {
    label: "PCBs",
    img: "https://cdn-icons-png.flaticon.com/512/2913/2913486.png"
  },
  {
    label: "Industrial chemicals; persist in water for decades.",
    img: "https://cdn-icons-png.flaticon.com/512/2913/2913486.png"
  },
  // 20
  {
    label: "Salt",
    img: "https://cdn-icons-png.flaticon.com/512/2913/2913487.png"
  },
  {
    label: "Road salt runoff can harm freshwater organisms.",
    img: "https://cdn-icons-png.flaticon.com/512/2913/2913487.png"
  }
];

// --- Rewards List ---
const possibleRewards = [
  {
    label: "Grocery Store Coupon",
    img: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png",
    desc: "$10 off your next grocery trip!"
  },
  {
    label: "On-Campus Cafe Coupon",
    img: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
    desc: "Free coffee or pastry at the campus cafe."
  },
  {
    label: "Sports Team Ticket",
    img: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
    desc: "1 free ticket to a campus sports game."
  },
  {
    label: "Bookstore Discount",
    img: "https://cdn-icons-png.flaticon.com/512/3062/3062634.png",
    desc: "15% off at the campus bookstore."
  },
  {
    label: "Laundry Card Credit",
    img: "https://cdn-icons-png.flaticon.com/512/1046/1046857.png",
    desc: "$5 credit for campus laundry machines."
  }
];

// --- Helper to pick random pairs for each game ---
function pickRandomPairs(pairCount) {
  const indices = [];
  while (indices.length < pairCount) {
    const idx = Math.floor(Math.random() * (cardPairs.length / 2));
    if (!indices.includes(idx)) indices.push(idx);
  }
  // Each pair is two consecutive items in cardPairs
  const selected = [];
  indices.forEach(i => {
    selected.push(cardPairs[2 * i], cardPairs[2 * i + 1]);
  });
  return selected;
}

// --- Game Setup ---
let cards = [];
function setupGame() {
  // Pick 6 random pairs (12 cards)
  const selected = pickRandomPairs(6);
  // Assign pair index for matching
  cards = [];
  for (let i = 0; i < selected.length; i += 2) {
    cards.push(
      { id: i, pair: i, ...selected[i] },
      { id: i + 1, pair: i, ...selected[i + 1] }
    );
  }
  shuffle(cards);
}
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// --- DOM Elements ---
const grid = document.querySelector('.card-grid');
const progressBar = document.getElementById('progress-bar');
const modal = document.getElementById('prize-modal');
const closeModalBtn = document.getElementById('close-modal');
// Add reference for modal content
const modalContent = modal.querySelector('.modal-content');

// --- Game State ---
let flipped = [];
let matchedPairs = 0;
let points = 0;
let lockBoard = false;
let currentReward = null; // Track the reward for this win

// --- Card Creation ---
function createCard(card, idx) {
  const cardDiv = document.createElement('div');
  cardDiv.className = 'card';
  cardDiv.dataset.pair = card.pair;
  cardDiv.dataset.idx = idx;

  cardDiv.innerHTML = `
    <div class="card-inner">
      <div class="card-back">
        <img src="Screenshot_27-6-2025_171657_www.bing.com.jpeg" alt="charity: water logo">
      </div>
      <div class="card-front">
        <img src="${card.img}" alt="" style="width:32px;display:block;margin:0 auto 8px;">
        <span>${card.label}</span>
      </div>
    </div>
  `;
  cardDiv.addEventListener('click', () => onCardClick(cardDiv));
  return cardDiv;
}

// --- Render Grid ---
function renderGrid() {
  grid.innerHTML = '';
  cards.forEach((card, idx) => {
    grid.appendChild(createCard(card, idx));
  });
}

function resetGame() {
  flipped = [];
  matchedPairs = 0;
  lockBoard = false;
  setupGame();
  renderGrid();
}



// --- Card Flip Logic ---
function onCardClick(cardDiv) {
  if (lockBoard) return;
  if (cardDiv.classList.contains('flipped') || cardDiv.classList.contains('matched')) return;
  cardDiv.classList.add('flipped');
  flipped.push(cardDiv);

  if (flipped.length === 2) {
    lockBoard = true;
    const [c1, c2] = flipped;
    if (c1.dataset.pair === c2.dataset.pair && c1 !== c2) {
      // Match!
      setTimeout(() => {
        c1.classList.add('matched');
        c2.classList.add('matched');
        flipped = [];
        matchedPairs++;
        lockBoard = false;
        if (matchedPairs === cards.length / 2) {
          onGameWin();
        }
      }, 400);
    } else {
      // Not a match
      setTimeout(() => {
        c1.classList.remove('flipped');
        c2.classList.remove('flipped');
        flipped = [];
        lockBoard = false;
      }, 1000);
    }
  }
}

// --- Simple Confetti Effect (Beginner Level) ---
function showConfetti() {
  // Create a container for confetti
  var confettiContainer = document.createElement('div');
  confettiContainer.style.position = 'fixed';
  confettiContainer.style.left = '0';
  confettiContainer.style.top = '0';
  confettiContainer.style.width = '100vw';
  confettiContainer.style.height = '100vh';
  confettiContainer.style.pointerEvents = 'none';
  confettiContainer.style.zIndex = '9999';
  document.body.appendChild(confettiContainer);

  var colors = ['#ffd600', '#43a047', '#2196f3', '#ff5252', '#ffb300', '#ab47bc'];
  var confettiCount = 40;
  var confettiPieces = [];

  for (var i = 0; i < confettiCount; i++) {
    var conf = document.createElement('div');
    conf.style.position = 'absolute';
    conf.style.width = '12px';
    conf.style.height = '12px';
    conf.style.background = colors[Math.floor(Math.random() * colors.length)];
    conf.style.left = Math.random() * window.innerWidth + 'px';
    conf.style.top = '-20px';
    conf.style.opacity = '0.85';
    conf.style.borderRadius = '3px';
    confettiContainer.appendChild(conf);
    confettiPieces.push({
      el: conf,
      x: parseFloat(conf.style.left),
      y: -20,
      speed: 2 + Math.random() * 3,
      angle: Math.random() * 2 * Math.PI
    });
  }

  // Animate confetti
  var frame = 0;
  function animateConfetti() {
    for (var i = 0; i < confettiPieces.length; i++) {
      var c = confettiPieces[i];
      c.y += c.speed;
      c.x += Math.sin(c.angle) * 2;
      c.el.style.top = c.y + 'px';
      c.el.style.left = c.x + 'px';
      c.angle += 0.05;
    }
    frame++;
    if (frame < 60) { // ~2 seconds at 30fps
      requestAnimationFrame(animateConfetti);
    }
  }
  animateConfetti();

  // Remove confetti after 2 seconds
  setTimeout(function() {
    confettiContainer.remove();
  }, 2000);
}

// --- Progress Bar & Win Logic ---
function onGameWin() {
  showConfetti(); // Show confetti before anything else
  points += 50;
  updateProgressBar();
  if (points >= 100) {
    animateGift && animateGift(); // If animateGift exists
    // Pick a random reward not already won
    let rewards = [];
    try {
      rewards = JSON.parse(localStorage.getItem('water_rewards') || '[]');
    } catch {}
    const wonLabels = rewards.map(r => r.label);
    const available = possibleRewards.filter(r => !wonLabels.includes(r.label));
    if (available.length > 0) {
      currentReward = available[Math.floor(Math.random() * available.length)];
    } else {
      currentReward = null;
    }
    // Show the modal immediately when a reward is earned
    showModal(currentReward);
    // Do NOT reset game immediately after showing modal; wait for modal close
  } else {
    // Reset game immediately if not enough points for a reward
    resetGame();
  }
}

function updateProgressBar() {
  const percent = Math.min(points, 100);
  progressBar.style.width = percent + '%';
  if (percent === 100 && modal.classList.contains('hidden')) {
    showModal(currentReward);
  }
}

// --- Modal Logic ---
function showModal(reward) {
  if (reward) {
    modalContent.innerHTML = `
      <h2>Congratulations!</h2>
      <p>Your knowledge earned you ${reward.label}!</p>
      <div style="margin:18px 0;">
        <img src="${reward.img}" alt="" style="width:64px;height:64px;border-radius:12px;box-shadow:0 2px 8px #ffd60055;">
        <div style="font-size:1.2rem;font-weight:600;margin-top:8px;">${reward.label}</div>
        <div style="font-size:1rem;color:#555;margin-top:4px;">${reward.desc}</div>
      </div>
      <button id="close-modal">Claim Prize</button>
    `;
  } else {
    modalContent.innerHTML = `
      <h2>Congratulations!</h2>
      <p>You earned a prize for your support!</p>
      <button id="close-modal">Close</button>
    `;
  }
  modal.classList.remove('hidden');
  // Remove any previous event listeners by replacing the button
  document.getElementById('close-modal').onclick = handleModalClose;
}

function handleModalClose() {
  modal.classList.add('hidden');
  // Save reward if any
  if (currentReward) {
    let rewards = [];
    try {
      rewards = JSON.parse(localStorage.getItem('water_rewards') || '[]');
    } catch {}
    if (!rewards.some(r => r.label === currentReward.label)) {
      rewards.push(currentReward);
      localStorage.setItem('water_rewards', JSON.stringify(rewards));
    }
    currentReward = null;
  }
  // Reset points and progress bar
  points = 0;
  updateProgressBar();
  if (typeof giftIcon !== 'undefined' && giftIcon.classList) {
    giftIcon.classList.remove('glow');
  }
  resetGame();
}

// --- Menu and Initial Setup ---
const menuDropdown = document.getElementById('menu-dropdown');
const hamburgerBtn = document.getElementById('hamburger-btn');
hamburgerBtn.addEventListener('click', () => {
    return menuDropdown.classList.toggle('hidden');
});


document.getElementById('menu-rewards').addEventListener('click', function() {
  window.location.href = 'rewards.html';
});
document.getElementById('menu-newgame').addEventListener('click', () => {
  resetGame();
});

// --- Initial Setup ---
setupGame();
renderGrid();
updateProgressBar();