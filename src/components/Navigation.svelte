<script>
  import BriefcaseIcon from '@components/icons/briefcase-icon.svelte';
  import EnvelopeIcon from '@components/icons/envelope-icon.svelte';
  import HomeIcon from '@components/icons/home-icon.svelte';
  import UserIcon from '@components/icons/user-icon.svelte';
  import WrenchIcon from '@components/icons/wrench-icon.svelte';
  import SunIcon from '@components/icons/sun-icon.svelte';
  import MoonIcon from '@components/icons/moon-icon.svelte';
  import { onMount } from 'svelte';

  import { getI18n } from '@i18n/index';

  export let currentLocale = 'es';
  
  let current = '';
  let scrollY = 0;
  let darkThemeName = 'dark-theme'; // nombre de la clase para el tema oscuro
  let isDarkTheme = false; // indicador del estado del tema

  const i18n = getI18n({ currentLocale });
  let home = i18n.HERO_SECTION.TITLE_NAV;
  let about = i18n.ABOUT_SECTION.TITLE;
  let experience = i18n.EXPERIENCE_SECTION.TITLE;
  let skills = i18n.SKILLS_SECTION.TITLE;
  let portfolio = i18n.PORTFOLIO_SECTION.TITLE;
  let contact = i18n.CONTACT_SECTION.TITLE;
  let theme = {
    dark: i18n.THEME.DARK_THEME,
    light: i18n.THEME.LIGHT_THEME,
  };

  onMount(() => {
    isDarkTheme = document.body.classList.contains(darkThemeName);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  function setTheme() {
    document.body.classList.toggle(darkThemeName);
    isDarkTheme = document.body.classList.contains(darkThemeName);
    localStorage.setItem('theme', isDarkTheme ? darkThemeName : 'light');
  }

  function handleScroll() {
    const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll('li');

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop - 60) {
        current = section.id;
      }
    });

    navLi.forEach((li) => {
      li.classList.remove('active');
      if (li.classList.contains(current)) {
        li.classList.add('active');
      }
    });

    scrollY = window.scrollY; // Actualiza la posición de desplazamiento
  }
</script>

<nav>
  <ul class="nav">
    <li class="home active">
      <a href="#home" aria-label="Home section">
        <HomeIcon />
        <span class="title"> {home} </span>
      </a>
    </li>
    <li class="portfolio">
      <a href="#portfolio" aria-label="Portfolio section">
        <BriefcaseIcon />
        <span class="title">{portfolio}</span>
      </a>
    </li>
    <li class="skills">
      <a href="#skills" aria-label="Skills section">
        <WrenchIcon />
        <span class="title">{skills}</span>
      </a>
    </li>
    <li class="about">
      <a href="#about" aria-label="About section">
        <UserIcon />
        <span class="title">{about}</span>
      </a>
    </li>
    <li class="experience">
      <a href="#experience" aria-label="Experience section">
        <BriefcaseIcon />
        <span class="title">{experience}</span>
      </a>
    </li>
    <li class="contact">
      <a href="#contact" aria-label="Contact section">
        <EnvelopeIcon />
        <span class="title">{contact}</span>
      </a>
    </li>
    <li class="divisor">
      <!-- <hr class="line-divisor"> -->
      <div class="line-divisor"></div>
    </li>
    <li>
      <a on:click={setTheme} aria-label="Change theme">
        {#if isDarkTheme}
        <SunIcon />
        <span class="title">{theme.light}</span>
        {:else}
        <MoonIcon />
        <span class="title">{theme.dark}</span>
        {/if}
      </a>
    </li>
  </ul>
</nav>

<style>
  nav {
    position: fixed;
    bottom: 0;
    left: 50%;
    background: var(--glass-bg);
    backdrop-filter: blur(24px) saturate(180%);
    -webkit-backdrop-filter: blur(24px) saturate(180%);
    border: 1px solid var(--glass-border);
    border-radius: 40px;
    box-shadow:
      0 8px 32px rgba(0, 0, 0, 0.12),
      inset 0 1px 0 rgba(255, 255, 255, 0.2),
      inset 0 -1px 0 rgba(0, 0, 0, 0.05);
    z-index: 100;
    transform: translate(-50%, -50%);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  nav:hover {
    border-color: var(--glass-hover-border);
    box-shadow:
      0 0 20px var(--glass-hover-shadow),
      0 8px 32px rgba(0, 0, 0, 0.15),
      inset 0 1px 0 rgba(255, 255, 255, 0.25);
    transform: translate(-50%, -50%) scale(1.01);
  }

  nav ul.nav {
    padding: 0.6rem;
    display: flex;
    /* flex-direction: column; */
    flex-direction: row;

    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  nav ul.nav li {
    cursor: pointer;
    position: relative;
    list-style: none;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    box-sizing: border-box;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    background-color: var(--glass-bg);
    border: 1px solid transparent;
  }

  nav ul.nav li.divisor {
    background: none;
    width: 2px;
    display: flex;
    align-items: center;
  }

  nav ul.nav li.divisor .line-divisor {
    border-left: 2px solid #4b5563;
    height: 70%;
  }

  nav ul.nav li.active {
    transition: 0.2s;
    background: var(--primary-color);
  }

  nav ul.nav li a {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: var(--bg-dark3);
    font-weight: bold;
  }

  nav ul.nav li.active a {
    color: #fff;
  }

  nav ul.nav li a .title {
    position: absolute;
    left: 50%;
    top: -70px;
    display: block;
    background: var(--bg-color-tooltip);
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    color: var(--font-color);
    width: max-content;
    padding: 5px 10px;
    transform: translate(-50%, 15%);
    border-radius: 8px;
    border: 1px solid var(--glass-border);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    visibility: hidden;
    opacity: 0;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  nav ul.nav li:hover {
    background-color: var(--bg-color-button-hover);
    border-color: var(--glass-border);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15);
  }

  nav ul.nav li.active:hover {
    background-color: var(--primary-color);
  }

  nav ul.nav li a:hover .title {
    transform: translate(-50%, 50%);
    visibility: visible;
    opacity: 1;
  }

  nav ul.nav li a .title::before {
    content: "";
    position: absolute;
    width: 12px;
    height: 12px;
    background: var(--bg-color-tooltip);
    bottom: -8px;
    left: 48%;
    transform: rotate(45deg) translateX(-50%);
    border-radius: 2px;
    transition: 0.5s;
  }

  @media (max-width: 768px) {
    nav ul.nav li {
      width: 56px;
      height: 56px;
    }
    nav ul.nav li a .title {
      display: none;
    }
  }

  @media (max-width: 480px) {
    nav {
      width: 95vw;
      max-width: 400px;
    }
    nav ul.nav {
      gap: 4px;
      padding: 0.4rem;
    }
    nav ul.nav li {
      width: 38px;
      height: 38px;
    }
  }
</style>