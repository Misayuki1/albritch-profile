<?php
require_once 'data.php';

// Helper to sanitize output
function e($text)
{
    echo htmlspecialchars($text);
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profile | <?php e($personalInfo['name']); ?></title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Merriweather:wght@300;700&display=swap"
        rel="stylesheet">

    <!-- Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

    <!-- Styles -->
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <button class="theme-toggle" id="theme-toggle" aria-label="Toggle Dark Mode">
        <i class="fas fa-moon"></i>
    </button>

    <button class="mobile-menu-btn" id="mobile-menu-btn" aria-label="Open Menu">
        <i class="fas fa-bars"></i>
    </button>

    <div class="app-container">
        <!-- SIDEBAR -->
        <aside class="sidebar">
            <div class="profile-header">
                <img src="images/formal.jpg" alt="Profile Picture" class="profile-img">
                <div class="name-title">
                    <h1>Albritch Benj</h1>
                    <p><?php e($personalInfo['title']); ?></p>
                </div>
            </div>

            <nav>
                <ul class="nav-links">
                    <li><a href="#profile" class="active"><i class="fas fa-user-circle"></i> Profile</a></li>
                    <li><a href="#education"><i class="fas fa-graduation-cap"></i> Education</a></li>
                    <li><a href="#experience"><i class="fas fa-briefcase"></i> Experience</a></li>
                    <li><a href="#skills"><i class="fas fa-code"></i> Skills</a></li>
                    <li><a href="#projects"><i class="fas fa-laptop-code"></i> Projects</a></li>
                </ul>
            </nav>

            <div class="contact-info">
                <div class="contact-item">
                    <i class="fas fa-envelope"></i>
                    <span><?php e($personalInfo['email']); ?></span>
                </div>
                <div class="contact-item">
                    <i class="fas fa-phone"></i>
                    <span><?php e($personalInfo['phone']); ?></span>
                </div>
                <div class="contact-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <span><?php e($personalInfo['address']); ?></span>
                </div>
            </div>
        </aside>

        <!-- MAIN CONTENT -->
        <main class="main-content">

            <!-- ABOUT -->
            <section id="profile">
                <h2 class="section-title">About Me</h2>
                <div class="content-block">
                    <p class="bio-text"><?php e($personalInfo['bio']); ?></p>
                </div>
            </section>

            <!-- EDUCATION -->
            <section id="education">
                <h2 class="section-title">Education</h2>
                <?php foreach ($education as $edu): ?>
                    <div class="timeline-item">
                        <span class="meta"><?php e($edu['years']); ?></span>
                        <h3 class="item-title"><?php e($edu['institution']); ?></h3>
                        <div class="item-subtitle"><?php e($edu['degree']); ?></div>
                        <p><?php e($edu['description']); ?></p>
                    </div>
                <?php endforeach; ?>
            </section>

            <!-- EXPERIENCE -->
            <section id="experience">
                <h2 class="section-title">Experience</h2>
                <?php foreach ($experience as $job): ?>
                    <div class="timeline-item">
                        <span class="meta"><?php e($job['years']); ?></span>
                        <h3 class="item-title"><?php e($job['role']); ?></h3>
                        <div class="item-subtitle"><?php e($job['company']); ?></div>
                        <p><?php e($job['details']); ?></p>
                    </div>
                <?php endforeach; ?>
            </section>

            <!-- SKILLS -->
            <section id="skills">
                <h2 class="section-title">Technical Proficiency</h2>
                <div class="skills-grid">
                    <?php foreach ($skills as $category => $list): ?>
                        <div class="skill-category">
                            <h3><?php e($category); ?></h3>
                            <div class="skill-tags">
                                <?php foreach ($list as $skill): ?>
                                    <span class="skill-tag"><?php e($skill); ?></span>
                                <?php endforeach; ?>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
            </section>

            <!-- PROJECTS -->
            <section id="projects">
                <h2 class="section-title">Created Projects</h2>
                <?php foreach ($projects as $proj): ?>
                    <div class="project-card">
                        <h3 class="item-title"><?php e($proj['name']); ?></h3>
                        <span class="meta"><?php e($proj['tech']); ?></span>
                        <p><?php e($proj['desc']); ?></p>
                    </div>
                <?php endforeach; ?>
            </section>

        </main>
    </div>

    <script src="script.js"></script>
</body>

</html>