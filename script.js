document.addEventListener('DOMContentLoaded', () => {

    // --- Render Data ---
    renderData();

    // --- Dark Mode Toggle ---
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = themeToggle.querySelector('i');

    // Check saved preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.setAttribute('data-theme', savedTheme);
        updateIcon(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        body.setAttribute('data-theme', 'dark');
        updateIcon('dark');
    }

    themeToggle.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateIcon(newTheme);
    });

    function updateIcon(theme) {
        if (theme === 'dark') {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }

    // --- Mobile Menu Toggle ---
    const menuBtn = document.getElementById('mobile-menu-btn');
    const sidebar = document.querySelector('.sidebar');

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });

        // Close sidebar when clicking outside on mobile
        document.addEventListener('click', (e) => {
            if (window.innerWidth <= 900 &&
                !sidebar.contains(e.target) &&
                !menuBtn.contains(e.target) &&
                sidebar.classList.contains('active')) {
                sidebar.classList.remove('active');
            }
        });
    }

    // --- Scroll Spy & Smooth Scroll ---
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section');

    // Smooth scroll
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Close mobile menu if open
                sidebar.classList.remove('active');

                window.scrollTo({
                    top: targetSection.offsetTop - 40,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll Observer for Active State
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -60% 0px', // Trigger when section is near top
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});

function renderData() {
    if (typeof data === 'undefined') {
        console.error('Data not found');
        return;
    }

    // Personal Info
    document.title = `Profile | ${data.personalInfo.name}`;
    const pName = document.getElementById('p-name');
    if (pName) pName.textContent = data.personalInfo.name;

    const pTitle = document.getElementById('p-title');
    if (pTitle) pTitle.textContent = data.personalInfo.title;

    const pEmail = document.getElementById('p-email');
    if (pEmail) pEmail.textContent = data.personalInfo.email;

    const pPhone = document.getElementById('p-phone');
    if (pPhone) pPhone.textContent = data.personalInfo.phone;

    const pAddress = document.getElementById('p-address');
    if (pAddress) pAddress.textContent = data.personalInfo.address;

    const pBio = document.getElementById('p-bio');
    if (pBio) pBio.textContent = data.personalInfo.bio;

    // Education
    const eduContainer = document.getElementById('education-list');
    if (eduContainer && data.education) {
        data.education.forEach(edu => {
            const div = document.createElement('div');
            div.className = 'timeline-item';
            div.innerHTML = `
                <span class="meta">${escapeHtml(edu.years)}</span>
                <h3 class="item-title">${escapeHtml(edu.institution)}</h3>
                <div class="item-subtitle">${escapeHtml(edu.degree)}</div>
                <p>${escapeHtml(edu.description)}</p>
            `;
            eduContainer.appendChild(div);
        });
    }

    // Experience
    const expContainer = document.getElementById('experience-list');
    if (expContainer && data.experience) {
        data.experience.forEach(job => {
            const div = document.createElement('div');
            div.className = 'timeline-item';
            div.innerHTML = `
                <span class="meta">${escapeHtml(job.years)}</span>
                <h3 class="item-title">${escapeHtml(job.role)}</h3>
                <div class="item-subtitle">${escapeHtml(job.company)}</div>
                <p>${escapeHtml(job.details)}</p>
            `;
            expContainer.appendChild(div);
        });
    }

    // Skills
    const skillsContainer = document.getElementById('skills-list');
    if (skillsContainer && data.skills) {
        for (const [category, list] of Object.entries(data.skills)) {
            const div = document.createElement('div');
            div.className = 'skill-category';

            let tagsHtml = list.map(skill => `<span class="skill-tag">${escapeHtml(skill)}</span>`).join('');

            div.innerHTML = `
                <h3>${escapeHtml(category)}</h3>
                <div class="skill-tags">
                    ${tagsHtml}
                </div>
            `;
            skillsContainer.appendChild(div);
        }
    }

    // Projects
    const projContainer = document.getElementById('projects-list');
    if (projContainer && data.projects) {
        data.projects.forEach(proj => {
            const div = document.createElement('div');
            div.className = 'project-card';
            div.innerHTML = `
                <h3 class="item-title">${escapeHtml(proj.name)}</h3>
                <span class="meta">${escapeHtml(proj.tech)}</span>
                <p>${escapeHtml(proj.desc)}</p>
            `;
            projContainer.appendChild(div);
        });
    }
}

// Simple HTML escaping helper to prevent XSS (mimicking PHP htmlspecialchars)
function escapeHtml(text) {
    if (!text) return '';
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
