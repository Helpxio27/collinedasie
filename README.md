# 🍜 Colline d'Asie — Restaurant Website

> Static website for **Colline d'Asie**, showcasing both the **Delsarte** and **Clignancourt** restaurant locations.

---

## About

This repository contains the source code for the official website of **Colline d'Asie**, a family-friendly Asian restaurant with two locations in Paris:

* 📍 **Colline d'Asie Delsarte**
* 📍 **Colline d'Asie Clignancourt**

The website provides visitors with:

* Restaurant information
* Menus for each location
* Opening hours
* Photos
* Contact information
* Social media links

The project is intentionally simple: it is a **fully static website** with no backend, database, or server-side rendering.

---

# Tech Stack

The website is built using classic web technologies:

* HTML5
* CSS3
* JavaScript (ES5)
* Bootstrap
* jQuery
* Owl Carousel
* Magnific Popup
* WOW.js
* Animate.css

There are **no build tools**, **no package manager**, and **no framework** involved.

Simply edit the files and deploy.

---

# Repository Structure

```text
.
├── index.html                  # Main landing page
├── about.html                  # About page
├── menu_delsarte.html          # Delsarte menu
├── menu_clignancourt.html      # Clignancourt menu
│
├── src
│   ├── css                     # Stylesheets
│   ├── js                      # JavaScript
│   ├── images                  # Images, logos, videos and assets
│   └── fonts                   # Custom fonts
│
└── .github
    └── workflows
        └── static.yml          # GitHub Pages deployment workflow
```

---

# Hosting

The website is hosted using **GitHub Pages**.

Whenever changes are pushed to the repository (depending on the configured branch(main for this repo)), GitHub Actions automatically deploys the latest version using the workflow located at:

```
.github/workflows/static.yml
```

This means there is **no manual deployment process**.

Typical workflow:

1. Make your changes.
2. Commit them.
3. Push to GitHub.
4. GitHub Actions builds and publishes the updated static website.
5. The changes become available on GitHub Pages.

---

# Development

Because the project is completely static, there is nothing to install.

Clone the repository:

```bash
git clone <repository-url>
```
Then open file path on a browser and it's done.

---

# Assets

The `src/images` directory contains:

* Restaurant photos
* Logos
* Social media icons
* Backgrounds
* Decorative graphics
* Promotional media
* Short promotional videos

Fonts are stored under:
```
src/fonts/
```

Third-party CSS and JavaScript libraries are stored inside:
```
src/css/
src/js/
```

---

# Pages

| Page                     | Purpose                      |
| ------------------------ | ---------------------------- |
| `index.html`             | Homepage                     |
| `about.html`             | Restaurant presentation      |
| `menu_delsarte.html`     | Delsarte restaurant menu     |
| `menu_clignancourt.html` | Clignancourt restaurant menu |

---

# Updating Content

Most updates only require editing HTML files.

Common tasks include:

* Updating menus
* Replacing images
* Changing opening hours
* Updating contact information
* Adding new promotional content

Static assets can simply be replaced inside `src/images`.

---

# Design Philosophy

This project intentionally avoids modern JavaScript frameworks.

The goal is to remain:

* lightweight
* fast
* easy to maintain
* easy to host
* easy for anyone to edit

A simple static website is more than enough for the needs of the restaurant.

---

# License

This repository contains proprietary assets (logos, menus, photographs, branding, and media) belonging to **Colline d'Asie**.
Unless otherwise stated, the contents of this repository are **not intended for redistribution or commercial reuse**.
Third-party libraries remain subject to their respective licenses.
---

Made with ❤️ for **Colline d'Asie**. 
