// ==================== EXPANDED DATA STORAGE ====================
const scamDatabase = [
    // Original scams
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
    },
    // NEW SCAM ENTRIES
    {
        id: 7,
        type: 'job',
        title: 'Fake Remote Job Offer',
        description: 'Legitimate-looking job offer requires payment for "training materials" or "equipment" before starting. Company doesn\'t exist.',
        contact: 'careers@techsolutions-global.com',
        date: '2024-02-09',
        votes: 145,
        dangerLevel: 2,
        reported: true
    },
    {
        id: 8,
        type: 'rental',
        title: 'Apartment Rental Advance Fee Scam',
        description: 'Perfect apartment at below-market price. Landlord asks for deposit via wire transfer before showing property. Property doesn\'t exist or isn\'t theirs to rent.',
        contact: 'landlord_mike2024@outlook.com',
        date: '2024-02-10',
        votes: 178,
        dangerLevel: 3,
        reported: true
    },
    {
        id: 9,
        type: 'tech',
        title: 'Microsoft Tech Support Scam',
        description: 'Pop-up claims computer is infected. Fake tech support number leads to remote access trojan installation and payment for "fixing" non-existent issues.',
        contact: '+1-888-555-TECH',
        date: '2024-02-08',
        votes: 267,
        dangerLevel: 3,
        reported: true
    },
    {
        id: 10,
        type: 'charity',
        title: 'Fake Disaster Relief Fund',
        description: 'Website collecting donations for recent natural disaster. Money goes directly to scammers, not victims.',
        contact: 'disaster-relief-fund.org',
        date: '2024-02-07',
        votes: 198,
        dangerLevel: 3,
        reported: true
    },
    {
        id: 11,
        type: 'lottery',
        title: 'Foreign Lottery Winner Notification',
        description: 'Email claims you\'ve won international lottery you never entered. Requires fee to "process" winnings.',
        contact: 'winners@euro-mega-lottery.com',
        date: '2024-02-11',
        votes: 134,
        dangerLevel: 2,
        reported: true
    },
    {
        id: 12,
        type: 'phishing',
        title: 'PayPal Account Suspension',
        description: 'Urgent email about account limitation. Link goes to fake PayPal site harvesting login credentials and credit card information.',
        contact: 'security-alert@paypa1-secure.com',
        date: '2024-02-09',
        votes: 289,
        dangerLevel: 3,
        reported: true
    },
    {
        id: 13,
        type: 'investment',
        title: 'Pump and Dump Penny Stocks',
        description: 'Email promoting "hot stock tip" with guaranteed massive returns. Stock is manipulated and crashes after purchase.',
        contact: 'insider-tips@wallstreet-alerts.net',
        date: '2024-02-06',
        votes: 156,
        dangerLevel: 2,
        reported: true
    },
    {
        id: 14,
        type: 'crypto',
        title: 'Fake Crypto Exchange',
        description: 'Professional-looking crypto trading platform with great rates. Deposits work fine, withdrawals never process.',
        contact: 'cryptomax-exchange.io',
        date: '2024-02-10',
        votes: 221,
        dangerLevel: 3,
        reported: true
    },
    {
        id: 15,
        type: 'romance',
        title: 'Instagram Model Emergency',
        description: 'Beautiful profile connects romantically then has sudden emergency requiring wire transfer. Profile disappears after payment.',
        contact: 'Instagram DMs',
        date: '2024-02-05',
        votes: 167,
        dangerLevel: 2,
        reported: true
    },
    {
        id: 16,
        type: 'job',
        title: 'Reshipping/Package Forwarding Scam',
        description: 'Work from home job involves receiving packages and reshipping them. You\'re unknowingly laundering stolen goods.',
        contact: 'jobs@global-logistics-hub.com',
        date: '2024-02-11',
        votes: 143,
        dangerLevel: 2,
        reported: true
    },
    {
        id: 17,
        type: 'tech',
        title: 'Fake Antivirus Software',
        description: 'Free antivirus scan finds hundreds of threats. Premium version required to remove them. Software itself is malware.',
        contact: 'secureguard-pro.download',
        date: '2024-02-08',
        votes: 192,
        dangerLevel: 3,
        reported: true
    },
    {
        id: 18,
        type: 'rental',
        title: 'Vacation Rental Hijacking',
        description: 'Scammer copies legitimate Airbnb listing to fake website. Payment goes to scammer, you arrive to confused property owner.',
        contact: 'book-direct-save.com',
        date: '2024-02-09',
        votes: 176,
        dangerLevel: 3,
        reported: true
    },
    {
        id: 19,
        type: 'investment',
        title: 'Gold/Precious Metals Investment Scam',
        description: 'High-pressure sales tactics to invest in gold coins or bars at inflated prices. Metals never delivered or are fake.',
        contact: 'secure-gold-investments.com',
        date: '2024-02-07',
        votes: 154,
        dangerLevel: 2,
        reported: true
    },
    {
        id: 20,
        type: 'phishing',
        title: 'Netflix Payment Update Required',
        description: 'Email claiming payment failed and account will be suspended. Fake Netflix page steals credit card details.',
        contact: 'billing@netflix-updates.com',
        date: '2024-02-10',
        votes: 245,
        dangerLevel: 3,
        reported: true
    },
    {
        id: 21,
        type: 'crypto',
        title: 'Fake Elon Musk Giveaway',
        description: 'Twitter/X bot impersonating Elon Musk promises to double any crypto sent to specific wallet. You lose everything sent.',
        contact: 'Various Twitter bots',
        date: '2024-02-11',
        votes: 198,
        dangerLevel: 3,
        reported: true
    },
    {
        id: 22,
        type: 'charity',
        title: 'Fake GoFundMe Campaign',
        description: 'Emotional story about sick child or struggling family. Photos stolen from real families. Money goes to scammer.',
        contact: 'Various GoFundMe copycats',
        date: '2024-02-06',
        votes: 187,
        dangerLevel: 2,
        reported: true
    },
    {
        id: 23,
        type: 'lottery',
        title: 'Grandparent/Family Emergency Scam',
        description: 'Caller pretends to be grandchild in urgent trouble needing bail money or emergency funds. Pressure to act quickly.',
        contact: 'Phone calls',
        date: '2024-02-08',
        votes: 234,
        dangerLevel: 3,
        reported: true
    },
    {
        id: 24,
        type: 'job',
        title: 'Check Cashing Work From Home',
        description: 'Job involves depositing checks and wiring most of money elsewhere, keeping small percentage. Checks are fraudulent.',
        contact: 'financialservices@quickcash-jobs.com',
        date: '2024-02-09',
        votes: 165,
        dangerLevel: 3,
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
        { id: 'totalReports', target: 1567, prefix: '', suffix: '' },
        { id: 'totalUsers', target: 12340, prefix: '', suffix: '' },
        { id: 'preventedLoss', target: 3.8, prefix: '$', suffix: 'M' }
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
        { type: 'phishing', label: 'Phishing' },
        { type: 'job', label: 'Job Scams' },
        { type: 'rental', label: 'Rental' },
        { type: 'tech', label: 'Tech Support' },
        { type: 'charity', label: 'Charity' },
        { type: 'lottery', label: 'Lottery/Prize' }
    ];

    filtersContainer.innerHTML = filters.map(filter => `
        <button class="filter-btn ${filter.type === 'all' ? 'active' : ''}" 
                data-filter="${filter.type}">
            ${filter.label}
        </button>
    `).join('');

    // Add filter event listeners
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            currentFilter = btn.dataset.filter;
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderScams();
        });
    });
}

// ==================== SCAM RENDERING ====================
function renderScams() {
    const grid = document.getElementById('scamGrid');
    const filteredScams = currentFilter === 'all' 
        ? scamDatabase 
        : scamDatabase.filter(scam => scam.type === currentFilter);

    grid.innerHTML = filteredScams.map(scam => createScamCard(scam)).join('');
    
    // Add vote event listeners
    document.querySelectorAll('.vote-btn').forEach(btn => {
        btn.addEventListener('click', () => handleVote(btn.dataset.scamId));
    });
}

function renderTrending() {
    const grid = document.getElementById('trendingGrid');
    const trendingScams = [...scamDatabase]
        .sort((a, b) => b.votes - a.votes)
        .slice(0, 6);

    grid.innerHTML = trendingScams.map(scam => createScamCard(scam)).join('');
}

function createScamCard(scam) {
    const dangerColors = {
        1: { bg: '#fef3c7', text: '#92400e', label: 'Low Risk' },
        2: { bg: '#fed7aa', text: '#9a3412', label: 'Medium Risk' },
        3: { bg: '#fecaca', text: '#991b1b', label: 'High Risk' }
    };

    const typeIcons = {
        crypto: '₿',
        investment: '📈',
        romance: '💔',
        phishing: '🎣',
        job: '💼',
        rental: '🏠',
        tech: '💻',
        charity: '❤️',
        lottery: '🎰'
    };

    const danger = dangerColors[scam.dangerLevel];
    const hasVoted = votedScams.includes(scam.id);

    return `
        <div class="scam-card" data-scam-id="${scam.id}">
            <div class="scam-header">
                <span class="scam-type-badge">${typeIcons[scam.type]} ${scam.type}</span>
                <span class="danger-badge" style="background: ${danger.bg}; color: ${danger.text};">
                    ${danger.label}
                </span>
            </div>
            <h3 class="scam-title">${scam.title}</h3>
            <p class="scam-description">${scam.description}</p>
            <div class="scam-contact">
                <strong>Contact:</strong> ${scam.contact}
            </div>
            <div class="scam-footer">
                <div class="scam-meta">
                    <span class="scam-date">📅 ${formatDate(scam.date)}</span>
                </div>
                <button class="vote-btn ${hasVoted ? 'voted' : ''}" 
                        data-scam-id="${scam.id}"
                        ${hasVoted ? 'disabled' : ''}>
                    👍 ${scam.votes} ${hasVoted ? 'Voted' : 'Confirm'}
                </button>
            </div>
        </div>
    `;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return date.toLocaleDateString();
}

// ==================== VOTING SYSTEM ====================
function handleVote(scamId) {
    const id = parseInt(scamId);
    if (votedScams.includes(id)) return;

    const scam = scamDatabase.find(s => s.id === id);
    if (scam) {
        scam.votes++;
        votedScams.push(id);
        localStorage.setItem('votedScams', JSON.stringify(votedScams));
        renderScams();
        renderTrending();
    }
}

// ==================== TESTIMONIALS ====================
function renderTestimonials() {
    const grid = document.getElementById('testimonialsGrid');
    grid.innerHTML = testimonials.map(testimonial => `
        <div class="testimonial-card">
            <div class="testimonial-header">
                <img src="${testimonial.avatar}" alt="${testimonial.name}" class="testimonial-avatar">
                <div class="testimonial-info">
                    <h4>${testimonial.name}</h4>
                    <div class="loss-info">
                        <span class="loss-badge">Lost: ${testimonial.loss}</span>
                        <span class="saved-badge">✓ Saved: ${testimonial.saved}</span>
                    </div>
                </div>
            </div>
            <p class="testimonial-quote">"${testimonial.quote}"</p>
            <div class="testimonial-meta">
                <span class="scam-type-small">${testimonial.lossType}</span>
            </div>
        </div>
    `).join('');
}

// ==================== SEARCH FUNCTIONALITY ====================
function performSearch() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.trim().toLowerCase();
    
    if (!query) {
        alert('Please enter something to search for');
        return;
    }

    const results = scamDatabase.filter(scam => 
        scam.title.toLowerCase().includes(query) ||
        scam.description.toLowerCase().includes(query) ||
        scam.contact.toLowerCase().includes(query)
    );

    displaySearchResults(results, query);
}

function displaySearchResults(results, query) {
    const resultsSection = document.getElementById('searchResults');
    const resultsContent = document.getElementById('resultsContent');

    resultsSection.classList.remove('hidden');
    resultsSection.scrollIntoView({ behavior: 'smooth' });

    if (results.length === 0) {
        resultsContent.innerHTML = `
            <div class="no-results">
                <div class="no-results-icon">🔍</div>
                <h3>No exact matches found for "${query}"</h3>
                <p>This doesn't mean it's safe! Scammers constantly create new schemes.</p>
                <div class="safety-tips">
                    <h4>⚠️ Stay vigilant:</h4>
                    <ul>
                        <li>If it seems too good to be true, it probably is</li>
                        <li>Never send money to someone you haven't met in person</li>
                        <li>Verify company legitimacy through official channels</li>
                        <li>Be suspicious of urgency and pressure tactics</li>
                    </ul>
                </div>
                <button class="report-unknown-btn" onclick="switchTab('report')">
                    Report This Potential Scam
                </button>
            </div>
        `;
    } else {
        resultsContent.innerHTML = `
            <div class="results-header">
                <p class="results-count">Found ${results.length} matching report${results.length > 1 ? 's' : ''} for "${query}"</p>
                <div class="results-warning">
                    ⚠️ WARNING: These reports indicate potential scam activity
                </div>
            </div>
            <div class="scam-grid">
                ${results.map(scam => createScamCard(scam)).join('')}
            </div>
        `;
    }
}

// ==================== TAB SWITCHING ====================
function switchTab(tabName) {
    // Update tab buttons
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.tab === tabName);
    });

    // Update tab content
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });

    const targetTab = document.getElementById(`${tabName}Tab`);
    if (targetTab) {
        targetTab.classList.add('active');
        targetTab.scrollIntoView({ behavior: 'smooth' });
    }
}

// ==================== FORM SUBMISSION ====================
function submitReport(e) {
    e.preventDefault();

    const form = e.target;
    const submitBtn = form.querySelector('.submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoader = submitBtn.querySelector('.btn-loader');

    // Show loading state
    btnText.classList.add('hidden');
    btnLoader.classList.remove('hidden');
    submitBtn.disabled = true;

    // Simulate submission
    setTimeout(() => {
        // Reset form
        form.reset();
        
        // Show success message
        const successMsg = document.getElementById('successMessage');
        successMsg.style.display = 'block';
        successMsg.scrollIntoView({ behavior: 'smooth' });

        // Reset button
        btnText.classList.remove('hidden');
        btnLoader.classList.add('hidden');
        submitBtn.disabled = false;

        // Hide success message after 5 seconds
        setTimeout(() => {
            successMsg.style.display = 'none';
        }, 5000);
    }, 1500);
}

// ==================== SCROLL EFFECTS ====================
function handleScroll() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

function setupScrollToTop() {
    const scrollBtn = document.getElementById('scrollToTop');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollBtn.classList.remove('hidden');
        } else {
            scrollBtn.classList.add('hidden');
        }
    });

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    const toggle = document.querySelector('.mobile-menu-toggle');
    navLinks.classList.toggle('active');
    toggle.classList.toggle('active');
}

// ==================== CHATBOT FUNCTIONALITY ====================
function openChatForScamCheck() {
    const chatWindow = document.getElementById('chatWindow');
    const chatToggle = document.getElementById('chatToggle');
    
    chatWindow.classList.remove('hidden');
    chatToggle.classList.add('active');
    
    setTimeout(() => {
        addChatMessage("I'd like to check if something is a scam", 'user');
        showTypingIndicator();
        
        setTimeout(() => {
            hideTypingIndicator();
            addChatMessage(chatbotResponses.search.message, 'bot', chatbotResponses.search.options);
        }, 1000);
    }, 500);
}

const chatbotResponses = {
    greetings: [
        "Hello! Welcome to ScamGuard Recovery. How can I help protect you today?",
        "Hi there! I'm here to help you identify and report scams. What brings you here?",
        "Welcome! Whether you need to check something suspicious or report a scam, I'm here to assist."
    ],
    report: {
        message: "I can help you report a scam! Here's how:",
        options: [
            "1️⃣ Click the 'Report a Scam' tab above",
            "2️⃣ Fill in as many details as possible",
            "3️⃣ Include contact info, websites, or emails used",
            "4️⃣ Your report helps protect others!",
            "For detailed assistance, email: onlyforwork597@gmail.com"
        ]
    },
    search: {
        message: "You can check if something is a scam in two ways:",
        options: [
            "🔍 Use the search box above to look for specific websites, emails, or phone numbers",
            "📊 Browse our database by category (Crypto, Investment, Romance, etc.)",
            "💬 Describe what happened - I can help identify red flags",
            "📧 Email us for investigation: onlyforwork597@gmail.com"
        ]
    },
    help: {
        message: "I can help you with several things:",
        options: [
            "🔍 Search our scam database",
            "📝 Report a new scam",
            "📚 Learn how to spot scams",
            "💰 Get recovery resources",
            "📧 Contact our team: onlyforwork597@gmail.com",
            "What would you like help with?"
        ]
    },
    contact: {
        message: "You can reach the ScamGuard Recovery team at:",
        options: [
            "📧 Email: onlyforwork597@gmail.com",
            "📸 Instagram: @infoseeker_web",
            "We typically respond within 24 hours!",
            "For urgent scam reports, please email us directly."
        ]
    },
    crypto: {
        message: "Cryptocurrency scams are common. Watch out for:",
        options: [
            "⚠️ Promises of guaranteed returns",
            "⚠️ Pressure to invest quickly",
            "⚠️ Requests to send crypto to 'verify' your wallet",
            "⚠️ Fake celebrity endorsements",
            "Need help? Email: onlyforwork597@gmail.com"
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

    addChatMessage(message, 'user');
    input.value = '';

    showTypingIndicator();

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

    if (lowerMessage.match(/\b(hi|hello|hey|good morning|good afternoon)\b/)) {
        return {
            message: chatbotResponses.greetings[Math.floor(Math.random() * chatbotResponses.greetings.length)],
            options: null
        };
    }

    if (lowerMessage.includes('report') || lowerMessage.includes('submit')) {
        return chatbotResponses.report;
    }

    if (lowerMessage.includes('search') || lowerMessage.includes('check') || lowerMessage.includes('is this a scam')) {
        return chatbotResponses.search;
    }

    if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('reach')) {
        return chatbotResponses.contact;
    }

    if (lowerMessage.includes('crypto') || lowerMessage.includes('bitcoin') || lowerMessage.includes('nft')) {
        return chatbotResponses.crypto;
    }

    if (lowerMessage.includes('recover') || lowerMessage.includes('get my money back')) {
        return chatbotResponses.recovery;
    }

    if (lowerMessage.includes('help') || lowerMessage.includes('what can you do')) {
        return chatbotResponses.help;
    }

    if (lowerMessage.match(/\b(thanks|thank you|appreciate)\b/)) {
        return {
            message: "You're welcome! Stay safe out there. If you need anything else, just ask!",
            options: null
        };
    }

    return {
        message: "I'm here to help with scam reporting and prevention. You can ask me about:",
        options: [
            "• How to report a scam",
            "• Checking if something is a scam",
            "• Cryptocurrency scam protection",
            "• Contacting our team: onlyforwork597@gmail.com",
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
