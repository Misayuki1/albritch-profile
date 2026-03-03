# Personal Profile Website

A comprehensive, academic-themed personal portfolio website designed to showcase professional qualifications, education, and projects with a sophisticated "Doctorate Standard" aesthetic.

## 🌟 Features

- **Data-Driven Architecture**: All content (Profile, Education, Skills, Projects) is managed via `data.php`, making it easy to update without touching HTML.
- **Interactive UI**:
  - 🌓 **Dark/Light Mode**: Persistent theme toggle with smooth transitions.
  - 📱 **Fully Responsive**: Mobile-optimized sidebar and layout.
  - ⚓ **Smooth Scrolling**: Navigation links smoothly scroll to sections.
  - 👁️ **Scroll Spy**: Auto-highlights the current section in the navigation menu.
- **Academic Design**: Clean typography (Inter & Merriweather) and a professional color palette.

## 📂 Project Structure

The project code is located in the `index.php` directory:

- **`webpagetragico.php`**: The main entry point responsible for rendering the website structure.
- **`data.php`**: Central configuration file containing all personal data arrays. Edit this file to update your site's content.
- **`style.css`**: CSS stylesheet using CSS variables for easy theming.
- **`script.js`**: Handles client-side logic (theme toggling, mobile menu, scroll interactions).
- **`images/`**: Directory for profile pictures and assets.

## 📱 Mobile App Version (PWA)

A fully static, offline-capable version of the profile site has been generated in the **`mobile-version/`** directory. This version replaces the PHP backend with static HTML and JavaScript, allowing it to function as a Progressive Web App (PWA) on mobile devices without needing a running server.

### 📂 Mobile Structure
- **`index.html`**: The static entry point.
- **`data.js`**: Replaces `data.php`. Edit this file to update content for the mobile version.
- **`manifest.json`** & **`sw.js`**: Enable PWA installation and offline capabilities.

## 🚀 Getting Started

### Prerequisites

- A local web server with PHP support (e.g., [XAMPP](https://www.apachefriends.org/), WAMP, MAMP).

### Installation

1. Clone or download this repository.
2. Place the project folder into your web server's root directory (e.g., `C:\xampp\htdocs\webpageproject`).
3. Ensure the folder structure follows:
   ```
   webpageproject/
   └── index.php/
       ├── webpagetragico.php
       ├── data.php
       ├── style.css
       ├── script.js
       └── ...
   ```

### Usage

1. Start your Apache/PHP server.
2. Open your web browser and navigate to:
   ```
   http://localhost/webpageproject/index.php/webpagetragico.php
   ```
   *(Note: The URL depends on your specific folder name and server configuration)*

## ✏️ Customization

To personalize the website, simply open **`data.php`** in a text editor and update the values in the arrays:

```php
$personalInfo = [
    'name' => "Your Name",
    'title' => "Your Title",
    // ...
];
```

## 🛠️ Technologies Used

- **PHP**: Server-side rendering.
- **HTML5 & CSS3**: Structure and Styling.
- **JavaScript (ES6+)**: Interactivity.
- **FontAwesome**: Icons.
- **Google Fonts**: Typography.

## 📄 License

This project is open for educational and personal use.
