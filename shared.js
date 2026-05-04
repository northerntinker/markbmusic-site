// shared.js — injects nav, footer and social links into every page

(function () {
  // Determine active page for nav highlighting
  const path = window.location.pathname.split('/').pop() || 'index.html';

  const navHTML = `
    <a href="index.html" class="site-title">Mark Bowler</a>
    <button class="nav-toggle" aria-label="Toggle navigation" onclick="document.querySelector('nav').classList.toggle('open')">☰</button>
    <nav id="main-nav">
      <ul>
        <li><a href="index.html" ${path === 'index.html' ? 'class="active"' : ''}>Begin Again</a></li>
        <li>
          <a href="projects.html" ${path === 'projects.html' ? 'class="active"' : ''}>Projects</a>
          <ul class="dropdown">
            <li><a href="fragments-of-experience.html" ${path === 'fragments-of-experience.html' ? 'class="active"' : ''}>Fragments of Experience</a></li>
            <li><a href="little-england.html" ${path === 'little-england.html' ? 'class="active"' : ''}>Little England</a></li>
            <li><a href="music-for-prototype-vol-1.html" ${path === 'music-for-prototype-vol-1.html' ? 'class="active"' : ''}>Music for Prototype Vol 1</a></li>
          </ul>
        </li>
        <li><a href="listen.html" ${path === 'listen.html' ? 'class="active"' : ''}>Listen</a></li>
        <li><a href="watch.html" ${path === 'watch.html' ? 'class="active"' : ''}>Watch</a></li>
        <li><a href="about.html" ${path === 'about.html' ? 'class="active"' : ''}>About</a></li>
        <li><a href="audiobubble.html" ${path === 'audiobubble.html' ? 'class="active"' : ''}>Audiobubble</a></li>
      </ul>
    </nav>
  `;

  const socialHTML = `
    <div class="social-bar">
      <a href="https://www.facebook.com/mbowlercomposer" target="_blank" rel="noopener" aria-label="Facebook">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>
      </a>
      <a href="https://www.instagram.com/mbowlercomposer/" target="_blank" rel="noopener" aria-label="Instagram">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <circle cx="12" cy="12" r="4"/>
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
        </svg>
      </a>
      <a href="https://youtube.com/@mbowlercomposer" target="_blank" rel="noopener" aria-label="YouTube">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
          <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
        </svg>
      </a>
    </div>
  `;

  const footerHTML = `
    ${socialHTML}
    <nav aria-label="Footer navigation">
      <ul>
        <li><a href="works-list.html">Works List</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </nav>
    <p class="copyright">© Mark Bowler</p>
  `;

  const header = document.querySelector('header');
  if (header) header.innerHTML = navHTML;

  const footer = document.querySelector('footer');
  if (footer) footer.innerHTML = footerHTML;

  // Insert social bar at top of main content
  const main = document.querySelector('main');
  if (main) {
    const socialEl = document.createElement('div');
    socialEl.innerHTML = socialHTML;
    const socialBar = socialEl.firstElementChild;
    socialBar.classList.add('social-bar-top');
    main.insertBefore(socialBar, main.firstChild);
  }
})();
