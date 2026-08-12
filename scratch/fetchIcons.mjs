import fs from 'fs';
import https from 'https';
import path from 'path';

const ICONS = {
  "react.webp": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "php.webp": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
  "java.webp": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  "linux.webp": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
  "jira.webp": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg",
  "aws.webp": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  "flutter.webp": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
  "docker.webp": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  "android.webp": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg",
  "dart.webp": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg",
  "cpp.webp": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
  "cmake.webp": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cmake/cmake-original.svg",
  "swift.webp": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg",
  "c.webp": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
  "html.webp": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  "css.webp": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  "ts.webp": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  "js.webp": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  "primeng.webp": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg",
  "cakephp.webp": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cakephp/cakephp-original.svg",
  "laravel.webp": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
  "vite.webp": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
  "blade.webp": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png"
};

const dir = '/home/fer/portafolio/public/images';

for (const [filename, url] of Object.entries(ICONS)) {
  const ext = url.endsWith('.png') ? '.png' : '.svg';
  const targetFile = filename.replace('.webp', ext);
  const dest = path.join(dir, targetFile);
  
  https.get(url, (res) => {
    if (res.statusCode === 200) {
      res.pipe(fs.createWriteStream(dest));
    }
  }).on('error', (err) => console.error(`Error downloading ${url}: ${err.message}`));
}

const replaceInFile = (file) => {
  let content = fs.readFileSync(file, 'utf8');
  for (const [filename, url] of Object.entries(ICONS)) {
    const ext = url.endsWith('.png') ? '.png' : '.svg';
    const targetFile = filename.replace('.webp', ext);
    content = content.replace(new RegExp(filename, 'g'), targetFile);
  }
  fs.writeFileSync(file, content);
};

replaceInFile('/home/fer/portafolio/src/i18n/es.json');
replaceInFile('/home/fer/portafolio/src/i18n/en.json');
replaceInFile('/home/fer/portafolio/src/data/skills.json');

console.log('Icons downloaded and JSON files updated.');
