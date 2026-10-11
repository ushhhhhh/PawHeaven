/* ===================================================================
   USHA PRAKASH - INTERACTIVE SCRIPT & AI ASSISTANT
   Responsive Navigation, Theme Switcher & AI Resume Agent
   =================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // 1. THEME TOGGLER (Dark / Light)
  const themeToggle = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }

  // 2. MOBILE HAMBURGER MENU
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const isOpen = navMenu.classList.contains('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });

    // Close when tapping outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        navMenu.classList.remove('open');
      }
    });
  }

  // 3. SCROLL SPY - ACTIVE NAVIGATION STATE
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset + 120;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop;
      const sectionId = current.getAttribute('id');
      const navItem = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => link.classList.remove('active'));
        if (navItem) navItem.classList.add('active');
      }
    });
  });

  // 4. AI ASSISTANT MODAL LOGIC
  const openAiBtn = document.getElementById('open-ai-chat-btn');
  const aiOverlay = document.getElementById('ai-modal-overlay');
  const aiCloseBtn = document.getElementById('ai-close-btn');

  if (openAiBtn && aiOverlay) {
    openAiBtn.addEventListener('click', () => {
      aiOverlay.classList.add('active');
      setTimeout(() => {
        const input = document.getElementById('ai-user-input');
        if (input) input.focus();
      }, 200);
    });
  }

  if (aiCloseBtn && aiOverlay) {
    aiCloseBtn.addEventListener('click', () => {
      aiOverlay.classList.remove('active');
    });
  }

  if (aiOverlay) {
    aiOverlay.addEventListener('click', (e) => {
      if (e.target === aiOverlay) {
        aiOverlay.classList.remove('active');
      }
    });
  }

});

// 5. COPY CONTACT DETAILS
function copyContactInfo() {
  const info = "Name: Usha Prakash\nEmail: prakashusha291@gmail.com\nPhone: +91 91483 54201\nLocation: Bengaluru, Karnataka";
  navigator.clipboard.writeText(info).then(() => {
    const copyText = document.getElementById('copy-text');
    if (copyText) {
      const original = copyText.textContent;
      copyText.textContent = "Copied to Clipboard!";
      setTimeout(() => {
        copyText.textContent = original;
      }, 2500);
    }
  }).catch(err => {
    alert("Copied: prakashusha291@gmail.com | +91 91483 54201");
  });
}

// 6. CONTACT FORM SUBMISSION
function handleFormSubmit(e) {
  e.preventDefault();
  const form = document.getElementById('contact-form');
  const submitBtn = document.getElementById('form-submit-btn');
  const toast = document.getElementById('form-toast');

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  submitBtn.disabled = true;
  submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending message...';

  setTimeout(() => {
    submitBtn.disabled = false;
    submitBtn.innerHTML = '<i class="fa-regular fa-paper-plane"></i> Send Message';

    toast.className = 'form-toast success';
    toast.innerHTML = `<strong>Thank you, ${name}!</strong> Your message has been prepared. You can also directly email Usha at <a href="mailto:prakashusha291@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}" style="text-decoration:underline; font-weight:600;">prakashusha291@gmail.com</a>.`;
    
    // Also trigger mailto in background
    window.location.href = `mailto:prakashusha291@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("From: " + name + " (" + email + ")\n\n" + message)}`;
    form.reset();
  }, 900);
}

// 7. AI ASSISTANT KNOWLEDGE BASE & REPLIES
const RESUME_KNOWLEDGE = {
  skills: `Usha's core technical toolkit includes:
• <strong>Languages:</strong> Python, JavaScript (ES6+), SQL, HTML5, CSS3, C.
• <strong>AI & Machine Learning:</strong> Gemini 2.5 Flash, Vertex AI, OpenAI APIs, Scikit-learn, Prompt Engineering, Streamlit, Cosine Similarity, TF-IDF.
• <strong>Data Science:</strong> Pandas, NumPy, Data Preprocessing, Feature Engineering.
• <strong>Web & Backend:</strong> React.js, Vite, Node.js, Express.js, Web Speech API, MySQL.
• <strong>Core Fundamentals:</strong> DSA, DBMS, OOP, Operating Systems, Computer Networks.`,

  projects: `Usha has developed two major featured projects:
1. <strong>Virtual Clinic – Autonomous Medical Voice Agent:</strong>
   • Voice & text conversational healthcare assistant with autonomous appointment scheduling.
   • Stack: Gemini 2.5 Flash, Vertex AI, OpenAI API, Web Speech API, React.js, Vite, Node.js, Express.js.
   • GitHub: <a href="https://github.com/shutupzunaira/voice-ai-agent" target="_blank" style="color:var(--accent-cyan); text-decoration:underline;">shutupzunaira/voice-ai-agent</a>

2. <strong>Movie Recommendation System:</strong>
   • Content-based recommendation engine using TF-IDF vectorization and Cosine Similarity on film metadata.
   • Stack: Python, Scikit-learn, Pandas, NumPy, Streamlit.
   • GitHub: <a href="https://github.com/ushhhhhh/movie" target="_blank" style="color:var(--accent-cyan); text-decoration:underline;">ushhhhhh/movie</a>`,

  education: `<strong>Education Details:</strong>
• <strong>Degree:</strong> Bachelor of Engineering (B.E.) in Artificial Intelligence and Machine Learning
• <strong>Institution:</strong> BMS Institute of Technology and Management, Bengaluru
• <strong>Graduation:</strong> Expected in 2028
• <strong>Academic CGPA:</strong> <strong>8.50 / 10.00</strong>
• <strong>Key Coursework:</strong> Data Structures & Algorithms, Machine Learning, Artificial Intelligence, DBMS, Linear Algebra, Probability & Statistics.`,

  certifications: `<strong>Industry Certifications:</strong>
1. <strong>Workato Foundations Level 1</strong> – Workato Automation Institute (2025)
2. <strong>Cyber Security & Applied Ethical Hacking</strong> – Infosys Springboard (2025)
3. <strong>Programming in C</strong> – Infosys Springboard (2024)`,

  contact: `<strong>Contact Usha Prakash:</strong>
• <strong>Email:</strong> <a href="mailto:prakashusha291@gmail.com" style="color:var(--accent-cyan);">prakashusha291@gmail.com</a>
• <strong>Phone:</strong> <a href="tel:+919148354201" style="color:var(--accent-cyan);">+91 91483 54201</a>
• <strong>Location:</strong> Bengaluru, Karnataka, India
• <strong>GitHub:</strong> <a href="https://github.com/ushhhhhh" target="_blank" style="color:var(--accent-cyan);">github.com/ushhhhhh</a>
• <strong>Status:</strong> Open to AI/ML & Software Internships!`
};

function generateAiResponse(input) {
  const query = input.toLowerCase();

  if (query.includes('skill') || query.includes('tech') || query.includes('language') || query.includes('python') || query.includes('react')) {
    return RESUME_KNOWLEDGE.skills;
  }
  if (query.includes('project') || query.includes('virtual clinic') || query.includes('movie') || query.includes('work') || query.includes('agent')) {
    return RESUME_KNOWLEDGE.projects;
  }
  if (query.includes('education') || query.includes('college') || query.includes('bms') || query.includes('cgpa') || query.includes('degree') || query.includes('gpa')) {
    return RESUME_KNOWLEDGE.education;
  }
  if (query.includes('certif') || query.includes('workato') || query.includes('infosys') || query.includes('course')) {
    return RESUME_KNOWLEDGE.certifications;
  }
  if (query.includes('contact') || query.includes('email') || query.includes('phone') || query.includes('reach') || query.includes('hire') || query.includes('intern')) {
    return RESUME_KNOWLEDGE.contact;
  }
  if (query.includes('who') || query.includes('about') || query.includes('summary') || query.includes('intro')) {
    return `<strong>Usha Prakash</strong> is an Artificial Intelligence & Machine Learning undergraduate at BMS Institute of Technology and Management (CGPA: 8.5/10). She specializes in building intelligent applications using Python, Scikit-learn, React, and LLMs such as Gemini and OpenAI APIs. She is passionate about solving real-world challenges through AI and software engineering.`;
  }

  return `I can help you with details about Usha Prakash! Try asking about:
• <em>Technical skills & tools</em>
• <em>Virtual Clinic or Movie Recommendation projects</em>
• <em>Education at BMSITM & CGPA</em>
• <em>Industry Certifications</em>
• <em>Contact info & internship inquiries</em>`;
}

function sendAiMessage() {
  const inputEl = document.getElementById('ai-user-input');
  const chatBody = document.getElementById('ai-chat-body');
  const text = inputEl.value.trim();

  if (!text) return;

  // Append user message
  const userMsgDiv = document.createElement('div');
  userMsgDiv.className = 'chat-message user-message';
  userMsgDiv.innerHTML = `
    <div class="message-avatar"><i class="fa-solid fa-user"></i></div>
    <div class="message-content">${escapeHtml(text)}</div>
  `;
  chatBody.appendChild(userMsgDiv);
  inputEl.value = '';
  chatBody.scrollTop = chatBody.scrollHeight;

  // Typing effect / bot response
  setTimeout(() => {
    const botResponse = generateAiResponse(text);
    const botMsgDiv = document.createElement('div');
    botMsgDiv.className = 'chat-message bot-message';
    botMsgDiv.innerHTML = `
      <div class="message-avatar"><i class="fa-solid fa-robot"></i></div>
      <div class="message-content">${botResponse}</div>
    `;
    chatBody.appendChild(botMsgDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
  }, 450);
}

function handleAiKeyPress(e) {
  if (e.key === 'Enter') {
    sendAiMessage();
  }
}

function askQuickPrompt(promptText) {
  const inputEl = document.getElementById('ai-user-input');
  if (inputEl) {
    inputEl.value = promptText;
    sendAiMessage();
  }
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.innerText = text;
  return div.innerHTML;
}
