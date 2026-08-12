import fs from 'fs';

const esPath = '/home/fer/portafolio/src/i18n/es.json';
const enPath = '/home/fer/portafolio/src/i18n/en.json';

const esData = JSON.parse(fs.readFileSync(esPath, 'utf8'));
const enData = JSON.parse(fs.readFileSync(enPath, 'utf8'));

const esProjects = [
  {
    "name": "Sistema de Control Escolar",
    "description": "Plataforma educativa desarrollada de forma colaborativa utilizando TypeScript, con despliegue y estandarización del entorno mediante Docker.",
    "image": "images/portfolio/control-escolar-web.jpg",
    "technologies": [
      { "name": "TypeScript", "image": "ts.svg" },
      { "name": "Docker", "image": "docker.svg" }
    ],
    "urlGithub": "https://github.com/team-ControlAcademico/controlEscolar-web",
    "urlProduction": ""
  },
  {
    "name": "Gestor de Citas Médicas",
    "description": "Aplicación web construida con PHP, Laravel y Blade para la gestión de información y consultas médicas, implementada en contenedores con Docker.",
    "image": "images/portfolio/doctor-appointment-app.jpg",
    "technologies": [
      { "name": "PHP", "image": "php.svg" },
      { "name": "Laravel", "image": "laravel.svg" },
      { "name": "Blade", "image": "blade.png" },
      { "name": "Docker", "image": "docker.svg" }
    ],
    "urlGithub": "https://github.com/karlosDuran/doctor-appointment-app",
    "urlProduction": ""
  },
  {
    "name": "Market App",
    "description": "Backend para aplicación de comercio electrónico con carrito de compras y catálogo de productos.",
    "image": "images/portfolio/market-app.jpg",
    "technologies": [
      { "name": "Java", "image": "java.svg" }
    ],
    "urlGithub": "https://github.com/karlosDuran/market-app",
    "urlProduction": ""
  },
  {
    "name": "Convertnut Web",
    "description": "Plataforma web para la conversión y gestión de diferentes formatos de datos. (Desarrollado como parte de mi experiencia laboral)",
    "image": "images/portfolio/convertnut.jpg",
    "technologies": [
      { "name": "TypeScript", "image": "ts.svg" },
      { "name": "HTML", "image": "html.svg" },
      { "name": "CSS", "image": "css.svg" },
      { "name": "PrimeNG", "image": "primeng.svg" },
      { "name": "CakePHP 2.2", "image": "cakephp.svg" },
      { "name": "PHP", "image": "php.svg" }
    ],
    "urlGithub": "",
    "urlProduction": ""
  },
  {
    "name": "SACPUVE Android",
    "description": "Aplicación móvil para Android enfocada en el control y gestión del sistema SACPUVE. (Desarrollado como parte de mi experiencia laboral)",
    "image": "images/portfolio/sacpuve-android.jpg",
    "technologies": [
      { "name": "Java", "image": "java.svg" },
      { "name": "Android SDK 36", "image": "android.svg" }
    ],
    "urlGithub": "",
    "urlProduction": ""
  }
];

const enProjects = [
  {
    "name": "School Control System",
    "description": "Collaboratively developed educational platform using TypeScript, with environment deployment and standardization via Docker.",
    "image": "images/portfolio/control-escolar-web.jpg",
    "technologies": [
      { "name": "TypeScript", "image": "ts.svg" },
      { "name": "Docker", "image": "docker.svg" }
    ],
    "urlGithub": "https://github.com/team-ControlAcademico/controlEscolar-web",
    "urlProduction": ""
  },
  {
    "name": "Medical Appointments Manager",
    "description": "Web application built with PHP, Laravel and Blade for information and consultation management, deployed in Docker containers.",
    "image": "images/portfolio/doctor-appointment-app.jpg",
    "technologies": [
      { "name": "PHP", "image": "php.svg" },
      { "name": "Laravel", "image": "laravel.svg" },
      { "name": "Blade", "image": "blade.png" },
      { "name": "Docker", "image": "docker.svg" }
    ],
    "urlGithub": "https://github.com/karlosDuran/doctor-appointment-app",
    "urlProduction": ""
  },
  {
    "name": "Market App",
    "description": "E-commerce application backend with shopping cart and product catalog.",
    "image": "images/portfolio/market-app.jpg",
    "technologies": [
      { "name": "Java", "image": "java.svg" }
    ],
    "urlGithub": "https://github.com/karlosDuran/market-app",
    "urlProduction": ""
  },
  {
    "name": "Convertnut Web",
    "description": "Web platform for data format conversion and management. (Developed as part of my professional experience)",
    "image": "images/portfolio/convertnut.jpg",
    "technologies": [
      { "name": "TypeScript", "image": "ts.svg" },
      { "name": "HTML", "image": "html.svg" },
      { "name": "CSS", "image": "css.svg" },
      { "name": "PrimeNG", "image": "primeng.svg" },
      { "name": "CakePHP 2.2", "image": "cakephp.svg" },
      { "name": "PHP", "image": "php.svg" }
    ],
    "urlGithub": "",
    "urlProduction": ""
  },
  {
    "name": "SACPUVE Android",
    "description": "Mobile application for Android focused on the control and management of the SACPUVE system. (Developed as part of my professional experience)",
    "image": "images/portfolio/sacpuve-android.jpg",
    "technologies": [
      { "name": "Java", "image": "java.svg" },
      { "name": "Android SDK 36", "image": "android.svg" }
    ],
    "urlGithub": "",
    "urlProduction": ""
  }
];

esData.PORTFOLIO_SECTION.PROJECTS = esProjects;
enData.PORTFOLIO_SECTION.PROJECTS = enProjects;

fs.writeFileSync(esPath, JSON.stringify(esData, null, 2));
fs.writeFileSync(enPath, JSON.stringify(enData, null, 2));

console.log("Projects updated successfully.");
