// ==================== DATA STORAGE ====================
const scamDatabase = [
    {
        id: 1,
        type: 'crypto',
        title: 'Bitcoin Doubler Investment',
        description: 'Website promises to double your Bitcoin in 24 hours. Classic Ponzi scheme that disappears with your money.',
        contact: 'crypto-invest-2x.com',
        date: '2024-02-05',
        votes: 234,
        dangerLevel: 3,
        reported: true
    },
    {
        id: 2,
        type: 'phishing',
        title: 'Fake Amazon Security Alert',
        description: 'Email claiming suspicious activity on Amazon account. Links to fake login page stealing credentials.',
        contact: 'security@amazon-verify.com',
        date: '2024-02-06',
        votes: 189,
        dangerLevel: 3,
        reported: true
    },
    {
        id: 3,
        type: 'romance',
        title: 'Military Romance Scam',
        description: 'Fake military personnel on dating apps requesting money for emergencies or travel expenses.',
        contact: 'Various dating platforms',
        date: '2024-02-04',
        votes: 156,
        dangerLevel: 2,
        reported: true
    },
    {
        id: 4,
        type: 'investment',
        title: 'Forex Trading "Mentor"',
        description: 'Instagram influencer promises guaranteed returns with forex signals. Requires upfront payment for course.',
        contact: '@forexguru_millions',
        date: '2024-02-07',
        votes: 203,
        dangerLevel: 2,
        reported: true
    },
    {
        id: 5,
        type: 'phishing',
        title: 'IRS Tax Refund Scam',
        description: 'Email claiming you have an unclaimed tax refund. Asks for banking details to "deposit" money.',
        contact: 'refunds@irs-treasury.org',
        date: '2024-02-03',
        votes: 312,
        dangerLevel: 3,
        reported: true
    },
    {
        id: 6,
        type: 'crypto',
        title: 'NFT Minting Scam',
        description: 'Fake NFT project with Discord server. Phishing links steal wallet credentials during "minting".',
        contact: 'discord.gg/fake-nft-proj',
        date: '2024-02-08',
        votes: 98,
        dangerLevel: 2,
        reported: true
    }
];

const testimonials = [
    {
        name: 'Sarah M.',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
        loss: '$8,500',
        lossType: 'Crypto investment scam',
        saved: '$8,500',
        savedType: 'Identified scam before sending',
        quote: 'I was about to invest in a "guaranteed return" crypto platform. Searched it on ScamGuard Recovery and found 15 reports. Dodged a bullet thanks to this community!'
    },
    {
        name: 'James T.',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
        loss: '$3,200',
        lossType: 'Romance scam',
        saved: 'Prevented Further Loss',
        savedType: 'Reported scammer, helped 3 others',
        quote: 'After falling for a romance scam, I reported it here. The community helped me understand the tactics, and my report prevented three other people from losing money to the same scammer.'
    },
    {
        name: 'Maria R.',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
        loss: '$15,000',
        lossType: 'Investment Ponzi scheme',
        saved: '$15,000',
        savedType: 'Found warning before investing',
        quote: 'A colleague recommended an "exclusive investment opportunity." Before transferring funds, I checked here and found it was a classic Ponzi scheme. Shared the report with my colleague too!'
    },
    {
        name: 'David K.',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
        loss: '$1,200',
        lossType: 'Phishing attack',
        saved: 'Recovered Evidence',
        savedType: 'Community helped file police report',
        quote: 'Got phished via fake PayPal email. The ScamGuard community walked me through documenting everything and filing a proper report. Still fighting to recover funds, but I\'m not alone in this.'
    },
    {
        name: 'Lisa P.',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop',
        loss: '$25,000',
        lossType: 'Fake investment platform',
        saved: '$25,000',
        savedType: 'Community confirmed it was fake',
        quote: 'My elderly mother almost wired $25K to a "wealth manager." I searched the company here first and found dozens of warnings. We reported them immediately. Thank you for saving her retirement!'
    },
    {
        name: 'Michael B.',
        avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop',
        loss: '$6,800',
        lossType: 'NFT minting scam',
        saved: '$6,800',
        savedType: 'Spotted fake Discord before minting',
        quote: 'Got excited about an NFT drop, but something felt off. Checked ScamGuard Recovery and found it was a phishing operation. You guys saved me from losing my entire crypto wallet!'
    }
];

// ==================== STATE MANAGEMENT ====================
let currentFilter = 'all';
let votedScams = JSON.parse(localStorage.getItem('votedScams') || '[]');

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupEventListeners();
    animateStats();
    renderFilters();
    renderScams();
    renderTrending();
    renderTestimonials();
    setupScrollAnimations();
    setupScrollToTop();
    initializeChatbot();
}

// ==================== EVENT LISTENERS ====================
function setupEventListeners() {
    // Search functionality
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');
    
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') performSearch();
    });

    // Tab switching
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => switchTab(tab.dataset.tab));
    });

    // Form submission
    const reportForm = document.getElementById('reportForm');
    reportForm.addEventListener('submit', submitReport);

    // Header scroll effect
    window.addEventListener('scroll', handleScroll);

    // Mobile menu toggle
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileToggle) {
        mobileToggle.addEventListener('click', toggleMobileMenu);
    }
}

// ==================== ANIMATED STATISTICS ====================
function animateStats() {
    const stats = [
        { id: 'totalReports', target: 1247, prefix: '', suffix: '' },
        { id: 'totalUsers', target: 8521, prefix: '', suffix: '' },
        { id: 'preventedLoss', target: 2.4, prefix: '$', suffix: 'M' }
    ];

    stats.forEach(stat => {
        animateCounter(stat.id, stat.target, stat.prefix, stat.suffix);
    });
}

function animateCounter(elementId, target, prefix = '', suffix = '') {
    const element = document.getElementById(elementId);
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
        current += increment;
        step++;
        
        if (step >= steps) {
            current = target;
            clearInterval(timer);
        }

        const displayValue = elementId === 'preventedLoss' 
            ? current.toFixed(1) 
            : Math.floor(current).toLocaleString();
        
        element.textContent = prefix + displayValue + suffix;
    }, duration / steps);
}

// ==================== FILTER RENDERING ====================
function renderFilters() {
    const filtersContainer = document.getElementById('filters');
    const filters = [
        { type: 'all', label: 'All Types' },
        { type: 'crypto', label: 'Cryptocurrency' },
        { type: 'investment', label: 'Investment' },
        { type: 'romance', label: 'Romance' },
        { type: 'phishing', label: 'Phishing' }
    ];

    filtersContainer.innerHTML = filters.map(filter => `
        <button class="filter-btn ${filter.type === 'all' ? 'active' : ''}" 
                onclick="filterScams('${filter.type}', event)">
            ${filter.label}
        </button>
    `).join('');
}

function filterScams(type, event) {
    currentFilter = type;
    
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    renderScams();
}

// ==================== SCAM RENDERING ====================
function renderScams(scams = scamDatabase) {
    const grid = document.getElementById('scamGrid');
    
    const filteredScams = currentFilter === 'all' 
        ? scams 
        : scams.filter(s => s.type === currentFilter);

    grid.innerHTML = '';

    filteredScams.forEach((scam, index) => {
        const card = createScamCard(scam);
        grid.appendChild(card);
        
        // Stagger animation
        setTimeout(() => {
            card.classList.add('visible');
        }, index * 100);
    });
}

function createScamCard(scam) {
    const card = document.createElement('div');
    card.className = 'scam-card';

    const typeLabels = {
        crypto: 'Cryptocurrency',
        investment: 'Investment',
        romance: 'Romance',
        phishing: 'Phishing'
    };

    const isVoted = votedScams.includes(scam.id);

    card.innerHTML = `
        <span class="scam-type ${scam.type}">${typeLabels[scam.type]}</span>
        <h3 class="scam-title">${scam.title}</h3>
        <p class="scam-description">${scam.description}</p>
        ${scam.contact ? `<p style="color: var(--text-gray); font-size: 0.9rem; margin-bottom: 0.5rem;">📧 ${scam.contact}</p>` : ''}
        <div class="scam-meta">
            <div>
                <div class="scam-date">${formatDate(scam.date)}</div>
                <div class="danger-level" style="margin-top: 0.5rem;">
                    ${Array(3).fill(0).map((_, i) => 
                        `<span class="danger-dot ${i < scam.dangerLevel ? 'active' : ''}"></span>`
                    ).join('')}
                </div>
            </div>
            <div class="vote-section">
                <button class="vote-btn ${isVoted ? 'voted' : ''}" onclick="voteScam(${scam.id})">
                    👍 <span class="vote-count">${scam.votes}</span>
                </button>
            </div>
        </div>
    `;

    return card;
}

function renderTrending() {
    const trending = [...scamDatabase]
        .sort((a, b) => b.votes - a.votes)
        .slice(0, 6);

    const grid = document.getElementById('trendingGrid');
    grid.innerHTML = '';

    trending.forEach((scam, index) => {
        const card = createScamCard(scam);
        grid.appendChild(card);
        
        setTimeout(() => {
            card.classList.add('visible');
        }, index * 100);
    });
}

// ==================== TESTIMONIALS RENDERING ====================
function renderTestimonials() {
    const grid = document.getElementById('testimonialsGrid');
    
    testimonials.forEach((testimonial, index) => {
        const card = createTestimonialCard(testimonial);
        grid.appendChild(card);
        
        setTimeout(() => {
            card.classList.add('visible');
        }, index * 150);
    });
}

function createTestimonialCard(testimonial) {
    const card = document.createElement('div');
    card.className = 'testimonial-card';
    
    card.innerHTML = `
        <div class="testimonial-header">
            <img src="${testimonial.avatar}" alt="${testimonial.name}" class="testimonial-avatar">
            <div class="testimonial-info">
                <h4>${testimonial.name}</h4>
                <p>Verified User</p>
            </div>
        </div>
        <div class="loss-box">
            <p>❌ ${testimonial.loss.startsWith('$') ? 'Nearly Lost' : 'Lost'}: ${testimonial.loss}</p>
            <p>${testimonial.lossType}</p>
        </div>
        <div class="recovery-box">
            <p>✅ ${testimonial.saved.startsWith('$') ? 'Saved' : testimonial.saved}</p>
            <p>${testimonial.savedType}</p>
        </div>
        <p class="testimonial-quote">${testimonial.quote}</p>
        <p class="testimonial-credit">— Helped by ScamGuard Recovery</p>
    `;
    
    return card;
}

// ==================== SEARCH FUNCTIONALITY ====================
function performSearch() {
    const query = document.getElementById('searchInput').value.trim();
    if (!query) {
        // If empty, shake the input to indicate action needed
        const searchInput = document.getElementById('searchInput');
        searchInput.style.animation = 'shake 0.5s';
        setTimeout(() => {
            searchInput.style.animation = '';
        }, 500);
        return;
    }

    // Add search animation
    const searchBtn = document.getElementById('searchBtn');
    const searchText = searchBtn.querySelector('.search-text');
    const originalText = searchText.textContent;
    
    searchText.textContent = 'Checking...';
    searchBtn.style.transform = 'scale(0.9)';
    
    setTimeout(() => {
        searchBtn.style.transform = '';
        searchText.textContent = originalText;
    }, 600);

    // Always redirect to contact for verification
    displayContactRedirect(query);
}

function displayContactRedirect(query) {
    const resultsDiv = document.getElementById('searchResults');
    const resultsContent = document.getElementById('resultsContent');

    resultsDiv.classList.remove('hidden');

    resultsContent.innerHTML = `
        <div style="text-align: center; padding: 2rem;">
            <div style="font-size: 4rem; margin-bottom: 1rem;">🛡️</div>
            <h3 style="color: var(--primary); margin-bottom: 1rem; font-size: 1.8rem;">Thank You for Being Vigilant!</h3>
            <p style="font-size: 1.1rem; color: var(--text-gray); margin-bottom: 2rem; max-width: 600px; margin-left: auto; margin-right: auto;">
                You've entered: <strong style="color: var(--text-dark);">"${query}"</strong>
            </p>
            
            <div style="background: linear-gradient(135deg, #f0f9ff, #e0f2fe); padding: 2rem; border-radius: 12px; margin-bottom: 2rem; border-left: 4px solid var(--primary);">
                <h4 style="color: var(--text-dark); margin-bottom: 1rem; font-size: 1.3rem;">🔍 Get Expert Verification</h4>
                <p style="color: var(--text-gray); margin-bottom: 1.5rem; line-height: 1.6;">
                    Our team at <strong>ScamGuard Recovery</strong> will personally verify this for you. We check against our database, analyze patterns, and provide expert guidance.
                </p>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin-top: 1.5rem;">
                    <a href="mailto:onlyforwork597@gmail.com?subject=Scam Check Request: ${encodeURIComponent(query)}&body=Hi ScamGuard Recovery,%0D%0A%0D%0AI want to verify if the following is a scam:%0D%0A%0D%0A${encodeURIComponent(query)}%0D%0A%0D%0APlease help me verify this.%0D%0A%0D%0AThank you!" 
                       style="background: var(--primary); color: white; padding: 1.25rem 2rem; border-radius: 12px; text-decoration: none; font-weight: 600; display: flex; flex-direction: column; align-items: center; gap: 0.5rem; transition: var(--transition); box-shadow: 0 4px 12px rgba(0,0,0,0.15);"
                       onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 6px 20px rgba(0,0,0,0.2)'"
                       onmouseout="this.style.transform=''; this.style.boxShadow='0 4px 12px rgba(0,0,0,0.15)'">
                        <span style="font-size: 2rem;">📧</span>
                        <span>Email Us</span>
                        <span style="font-size: 0.85rem; opacity: 0.9;">onlyforwork597@gmail.com</span>
                    </a>
                    
                    <a href="https://www.instagram.com/infoseeker_web/" 
                       target="_blank"
                       rel="noopener noreferrer"
                       style="background: linear-gradient(135deg, #E1306C, #C13584); color: white; padding: 1.25rem 2rem; border-radius: 12px; text-decoration: none; font-weight: 600; display: flex; flex-direction: column; align-items: center; gap: 0.5rem; transition: var(--transition); box-shadow: 0 4px 12px rgba(0,0,0,0.15);"
                       onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 6px 20px rgba(0,0,0,0.2)'"
                       onmouseout="this.style.transform=''; this.style.boxShadow='0 4px 12px rgba(0,0,0,0.15)'">
                        <span style="font-size: 2rem;">📸</span>
                        <span>DM on Instagram</span>
                        <span style="font-size: 0.85rem; opacity: 0.9;">@infoseeker_web</span>
                    </a>
                </div>
                
                <p style="margin-top: 1.5rem; font-size: 0.9rem; color: var(--text-gray);">
                    ⏱️ <strong>Average Response Time:</strong> Within 2-24 hours
                </p>
            </div>
            
            <div style="background: #fff3e0; padding: 1.5rem; border-radius: 8px; border-left: 4px solid var(--warning); text-align: left;">
                <h5 style="color: var(--text-dark); margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
                    <span>⚠️</span>
                    <span>While You Wait - Red Flags to Watch For:</span>
                </h5>
                <ul style="margin: 0; padding-left: 1.5rem; color: var(--text-gray); line-height: 1.8;">
                    <li>Requests for money upfront or "verification fees"</li>
                    <li>Promises of guaranteed returns or "too good to be true" offers</li>
                    <li>Pressure to act immediately or threats of consequences</li>
                    <li>Poor grammar, spelling errors, or unprofessional communication</li>
                    <li>Requests for personal information via unsecured channels</li>
                    <li>Unverifiable company details or fake contact information</li>
                </ul>
            </div>
            
            <div style="margin-top: 2rem; padding: 1.5rem; background: #f8f9fa; border-radius: 8px;">
                <p style="color: var(--text-gray); margin-bottom: 1rem;">
                    💡 <strong>Need immediate help?</strong> You can also chat with our assistant
                </p>
                <button onclick="openChatForScamCheck()" 
                        style="background: white; color: var(--primary); border: 2px solid var(--primary); padding: 0.75rem 1.5rem; border-radius: 8px; cursor: pointer; font-weight: 600; transition: var(--transition);"
                        onmouseover="this.style.background='var(--primary)'; this.style.color='white'"
                        onmouseout="this.style.background='white'; this.style.color='var(--primary)'">
                    💬 Chat with Assistant
                </button>
            </div>
        </div>
    `;

    resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Function to open chat with scam check context
function openChatForScamCheck() {
    const chatToggle = document.getElementById('chatToggle');
    const chatWindow = document.getElementById('chatWindow');
    const chatInput = document.getElementById('chatInput');
    
    // Open chat if closed
    if (chatWindow.classList.contains('hidden')) {
        chatWindow.classList.remove('hidden');
        chatToggle.classList.add('active');
    }
    
    // Add a helpful prompt
    setTimeout(() => {
        const searchValue = document.getElementById('searchInput').value.trim();
        if (searchValue) {
            addChatMessage(`I need help verifying: "${searchValue}"`, 'user');
            setTimeout(() => {
                showTypingIndicator();
                setTimeout(() => {
                    hideTypingIndicator();
                    addChatMessage("I understand you want to verify if something is a scam. For the most accurate verification, I recommend contacting our team directly:", 'bot', [
                        "📧 Email: onlyforwork597@gmail.com",
                        "📸 Instagram: @infoseeker_web",
                        "",
                        "Our team will personally investigate and get back to you within 2-24 hours.",
                        "",
                        "In the meantime, I can help you understand common scam patterns. What specific concerns do you have about this?"
                    ]);
                }, 1000);
            }, 500);
        } else {
            addChatMessage("I see you're looking to check if something is a scam. I can help with that!", 'bot', [
                "For expert verification, contact our team:",
                "📧 onlyforwork597@gmail.com",
                "📸 @infoseeker_web",
                "",
                "Or tell me what you'd like to verify and I can give you guidance on red flags to watch for!"
            ]);
        }
        
        // Scroll chat to bottom
        const chatMessages = document.getElementById('chatMessages');
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 300);
}

// ==================== VOTING SYSTEM ====================
function voteScam(id) {
    const scam = scamDatabase.find(s => s.id === id);
    if (!scam) return;

    if (votedScams.includes(id)) {
        scam.votes--;
        votedScams = votedScams.filter(v => v !== id);
    } else {
        scam.votes++;
        votedScams.push(id);
    }

    localStorage.setItem('votedScams', JSON.stringify(votedScams));
    
    // Update UI with animation
    const voteButtons = document.querySelectorAll(`[onclick="voteScam(${id})"]`);
    voteButtons.forEach(btn => {
        btn.classList.add('voted');
        const countSpan = btn.querySelector('.vote-count');
        if (countSpan) {
            countSpan.textContent = scam.votes;
            countSpan.style.transform = 'scale(1.3)';
            setTimeout(() => {
                countSpan.style.transform = '';
            }, 300);
        }
    });

    renderScams();
    renderTrending();
}

// ==================== TAB SWITCHING ====================
function switchTab(tabName) {
    // Update tab buttons
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');

    // Update tab content
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(`${tabName}Tab`).classList.add('active');
}

// ==================== FORM SUBMISSION ====================
function submitReport(e) {
    e.preventDefault();

    const submitBtn = e.target.querySelector('.submit-btn');
    submitBtn.classList.add('loading');

    // Simulate submission delay
    setTimeout(() => {
        const newScam = {
            id: scamDatabase.length + 1,
            type: document.getElementById('scamType').value,
            title: document.getElementById('scamTitle').value,
            description: document.getElementById('scamDescription').value,
            contact: document.getElementById('scamContact').value,
            date: new Date().toISOString().split('T')[0],
            votes: 1,
            dangerLevel: parseInt(document.getElementById('dangerLevel').value),
            reported: true
        };

        scamDatabase.unshift(newScam);
        
        document.getElementById('successMessage').classList.add('show');
        e.target.reset();
        submitBtn.classList.remove('loading');
        
        setTimeout(() => {
            document.getElementById('successMessage').classList.remove('show');
            switchTab('recent');
        }, 3000);

        renderScams();
        renderTrending();
        animateStats();
    }, 1500);
}

// ==================== SCROLL ANIMATIONS ====================
function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe all animatable elements
    document.querySelectorAll('.scam-card, .testimonial-card').forEach(el => {
        observer.observe(el);
    });
}

// ==================== SCROLL TO TOP ====================
function setupScrollToTop() {
    const scrollBtn = document.getElementById('scrollToTop');
    
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollBtn.classList.remove('hidden');
        } else {
            scrollBtn.classList.add('hidden');
        }
    });
}

// ==================== HEADER SCROLL EFFECT ====================
function handleScroll() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// ==================== MOBILE MENU ====================
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
}

// ==================== UTILITY FUNCTIONS ====================
function formatDate(dateStr) {
    const date = new Date(dateStr);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    return date.toLocaleDateString();
}

// ==================== PERFORMANCE OPTIMIZATION ====================
// Debounce function for search
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to search
const searchInput = document.getElementById('searchInput');
if (searchInput) {
    searchInput.addEventListener('input', debounce(() => {
        // Auto-suggest could be implemented here
    }, 300));
}

// ==================== CHATBOT FUNCTIONALITY ====================
let chatbotResponses = {
    greetings: [
        "Hello! I'm here to help you stay safe from scams. How can I assist you?",
        "Hi there! Welcome to ScamGuard Recovery. What can I help you with today?",
        "Hey! Need help identifying or reporting a scam? I'm here for you!"
    ],
    report: {
        message: "I can help you report a scam! To report, you can:",
        options: [
            "1. Use our Report Form on this website",
            "2. Contact us on Instagram @infoseeker_web",
            "3. Email us at onlyforwork597@gmail.com",
            "Would you like me to take you to the report form?"
        ]
    },
    search: {
        message: "Want to check if something is a scam? Here's what you can do:",
        options: [
            "• Use our search bar at the top of the page",
            "• Enter the website URL, email, or phone number",
            "• Our database will show if others have reported it",
            "Try it now - just scroll up to the search box!"
        ]
    },
    help: {
        message: "I'm here to help! Here are some things I can assist with:",
        options: [
            "🔍 Check if something is a scam",
            "📝 Report a scam you've encountered",
            "💬 Get advice on protecting yourself",
            "📧 Contact our team directly",
            "What would you like help with?"
        ]
    },
    contact: {
        message: "You can reach the ScamGuard Recovery team at:",
        options: [
            "📧 Email: onlyforwork597@gmail.com",
            "📸 Instagram: @infoseeker_web",
            "We typically respond within 24 hours!"
        ]
    },
    crypto: {
        message: "Cryptocurrency scams are common. Watch out for:",
        options: [
            "⚠️ Promises of guaranteed returns",
            "⚠️ Pressure to invest quickly",
            "⚠️ Requests to send crypto to 'verify' your wallet",
            "⚠️ Fake celebrity endorsements",
            "Would you like to report a crypto scam?"
        ]
    },
    recovery: {
        message: "Important information about fund recovery:",
        options: [
            "✅ We provide information and community support",
            "✅ We help you report to proper authorities",
            "❌ We DON'T promise guaranteed recovery",
            "❌ Be wary of 'recovery services' charging upfront fees",
            "Contact us for guidance: onlyforwork597@gmail.com"
        ]
    }
};

function initializeChatbot() {
    const chatToggle = document.getElementById('chatToggle');
    const chatWindow = document.getElementById('chatWindow');
    const chatMinimize = document.querySelector('.chat-minimize');
    const chatInput = document.getElementById('chatInput');
    const chatSend = document.getElementById('chatSend');
    const quickReplies = document.querySelectorAll('.quick-reply');

    // Toggle chat window
    chatToggle.addEventListener('click', () => {
        chatWindow.classList.toggle('hidden');
        chatToggle.classList.toggle('active');
    });

    // Minimize chat
    chatMinimize.addEventListener('click', () => {
        chatWindow.classList.add('hidden');
        chatToggle.classList.remove('active');
    });

    // Send message
    chatSend.addEventListener('click', sendChatMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendChatMessage();
    });

    // Quick replies
    quickReplies.forEach(button => {
        button.addEventListener('click', () => {
            const reply = button.dataset.reply;
            handleQuickReply(reply);
        });
    });
}

function sendChatMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    
    if (!message) return;

    // Add user message
    addChatMessage(message, 'user');
    input.value = '';

    // Show typing indicator
    showTypingIndicator();

    // Process message and respond
    setTimeout(() => {
        hideTypingIndicator();
        const response = generateResponse(message);
        addChatMessage(response.message, 'bot', response.options);
    }, 1000 + Math.random() * 1000);
}

function handleQuickReply(replyType) {
    const responses = {
        'report': chatbotResponses.report,
        'search': chatbotResponses.search,
        'help': chatbotResponses.help
    };

    const response = responses[replyType];
    if (response) {
        addChatMessage(`I want to ${replyType} a scam`, 'user');
        
        showTypingIndicator();
        setTimeout(() => {
            hideTypingIndicator();
            addChatMessage(response.message, 'bot', response.options);
        }, 800);
    }
}

function generateResponse(message) {
    const lowerMessage = message.toLowerCase();

    // Greeting detection
    if (lowerMessage.match(/\b(hi|hello|hey|good morning|good afternoon)\b/)) {
        return {
            message: chatbotResponses.greetings[Math.floor(Math.random() * chatbotResponses.greetings.length)],
            options: null
        };
    }

    // Report scam
    if (lowerMessage.includes('report') || lowerMessage.includes('submit')) {
        return chatbotResponses.report;
    }

    // Search/check
    if (lowerMessage.includes('search') || lowerMessage.includes('check') || lowerMessage.includes('is this a scam')) {
        return chatbotResponses.search;
    }

    // Contact
    if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('reach')) {
        return chatbotResponses.contact;
    }

    // Crypto scams
    if (lowerMessage.includes('crypto') || lowerMessage.includes('bitcoin') || lowerMessage.includes('nft')) {
        return chatbotResponses.crypto;
    }

    // Recovery
    if (lowerMessage.includes('recover') || lowerMessage.includes('get my money back')) {
        return chatbotResponses.recovery;
    }

    // Help/general
    if (lowerMessage.includes('help') || lowerMessage.includes('what can you do')) {
        return chatbotResponses.help;
    }

    // Thanks
    if (lowerMessage.match(/\b(thanks|thank you|appreciate)\b/)) {
        return {
            message: "You're welcome! Stay safe out there. If you need anything else, just ask!",
            options: null
        };
    }

    // Default response
    return {
        message: "I'm here to help with scam reporting and prevention. You can ask me about:",
        options: [
            "• How to report a scam",
            "• Checking if something is a scam",
            "• Cryptocurrency scam protection",
            "• Contacting our team",
            "What would you like to know?"
        ]
    };
}

function addChatMessage(text, sender, options = null) {
    const messagesContainer = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${sender}-message`;

    const avatar = sender === 'bot' ? '🛡️' : '👤';
    
    let optionsHTML = '';
    if (options && options.length > 0) {
        optionsHTML = `<div style="margin-top: 0.75rem;">`;
        options.forEach(option => {
            optionsHTML += `<p style="background: #f8f9fa; padding: 0.5rem; border-radius: 8px; margin: 0.5rem 0; font-size: 0.9rem;">${option}</p>`;
        });
        optionsHTML += `</div>`;
    }

    messageDiv.innerHTML = `
        <div class="message-avatar">${avatar}</div>
        <div class="message-content">
            <p>${text}</p>
            ${optionsHTML}
        </div>
    `;

    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function showTypingIndicator() {
    const messagesContainer = document.getElementById('chatMessages');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'chat-message bot-message';
    typingDiv.id = 'typingIndicator';
    
    typingDiv.innerHTML = `
        <div class="message-avatar">🛡️</div>
        <div class="message-content">
            <div class="typing-indicator">
                <span class="typing-dot"></span>
                <span class="typing-dot"></span>
                <span class="typing-dot"></span>
            </div>
        </div>
    `;

    messagesContainer.appendChild(typingDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function hideTypingIndicator() {
    const typingIndicator = document.getElementById('typingIndicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

// ==================== CONSOLE MESSAGE ====================
console.log('%c🛡️ ScamGuard Recovery', 'color: #dc2626; font-size: 24px; font-weight: bold;');
console.log('%cProtecting the community, one report at a time.', 'color: #64748b; font-size: 14px;');
console.log('%cFounded by infoseeker_web', 'color: #059669; font-size: 12px;');