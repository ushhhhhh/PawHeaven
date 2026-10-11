const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, 'index.html');
const cssPath = path.join(__dirname, 'style.css');
const jsPath = path.join(__dirname, 'script.js');

const cssContent = fs.readFileSync(cssPath, 'utf8');
const jsContent = fs.readFileSync(jsPath, 'utf8');
let htmlContent = fs.readFileSync(htmlPath, 'utf8');

// Replace <link rel="stylesheet" href="style.css"> with <style>...</style>
const styleTag = `<style>\n${cssContent}\n</style>`;
htmlContent = htmlContent.replace('<link rel="stylesheet" href="style.css">', styleTag);

// Replace <script src="script.js"></script> with <script>...</script>
const scriptTag = `<script>\n${jsContent}\n</script>`;
htmlContent = htmlContent.replace('<script src="script.js"></script>', scriptTag);

fs.writeFileSync(htmlPath, htmlContent, 'utf8');
console.log('Successfully embedded CSS and JS directly into index.html!');
