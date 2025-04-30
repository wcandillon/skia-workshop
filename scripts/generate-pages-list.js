#!/usr/bin/env node

/**
 * This script scans the app/pages directory and generates a pagesList.json file
 * that can be imported by the app at runtime.
 * 
 * Usage: node scripts/generate-pages-list.js
 */

const fs = require('fs');
const path = require('path');

// Path to the pages directory
const pagesDir = path.join(__dirname, '..', 'app', 'pages');
// Path to the output JSON file
const outputPath = path.join(__dirname, '..', 'app', 'pagesList.json');

function generatePagesList() {
  try {
    // Check if the pages directory exists
    if (!fs.existsSync(pagesDir)) {
      console.error(`Pages directory does not exist: ${pagesDir}`);
      return;
    }

    // Read all files in the pages directory
    const files = fs.readdirSync(pagesDir);
    
    // Filter tsx files, exclude _layout.tsx and other special files
    const pageFiles = files.filter(file => {
      return (
        (file.endsWith('.tsx') || file.endsWith('.js')) && 
        !file.startsWith('_') &&
        !file.startsWith('+')
      );
    });
    
    // Map files to page objects
    const pages = pageFiles.map(file => {
      const name = file.replace(/\.(tsx|js)$/, '');
      // Convert filename to a more readable name (e.g. 'hello-world' to 'Hello World')
      const displayName = name
        .split('-')
        .map(part => part.charAt(0).toUpperCase() + part.slice(1))
        .join(' ') + ' Page';
      
      return {
        name: displayName,
        route: `/pages/${name}`
      };
    });
    
    // Write the result to a JSON file
    fs.writeFileSync(outputPath, JSON.stringify(pages, null, 2));
    
    console.log(`Pages list updated with ${pages.length} pages:`);
    pages.forEach(page => console.log(`- ${page.name} (${page.route})`));
    console.log(`Output written to ${outputPath}`);
    
  } catch (error) {
    console.error('Error generating pages list:', error);
  }
}

// Run the function
generatePagesList(); 