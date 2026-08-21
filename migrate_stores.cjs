const fs = require('fs');

const files = ['store.ts', 'chatstore.ts', 'eventstore.ts', 'pinstore.ts', 'todostore.ts', 'socketstore.ts'];
files.forEach(f => {
    const path = './src/store.ts/' + f;
    if (!fs.existsSync(path)) return;
    
    let content = fs.readFileSync(path, 'utf8');
    
    // Remove token fetching from localStorage
    content = content.replace(/.*const token = localStorage\.getItem\([^)]+\).*\n/g, '');
    
    // Fix headers block
    content = content.replace(/headers:\s*{([^}]+)}/g, (match, p1) => {
        let newHeaders = p1;
        // Remove authorization key entirely
        newHeaders = newHeaders.replace(/["']?authorization["']?\s*:\s*token(?:\s*\|\|\s*["'][^"']*["'])?\s*,?/g, '');
        // Clean up trailing commas in headers
        newHeaders = newHeaders.trim().replace(/,$/, '');
        return 'headers: {' + newHeaders + '},\n                credentials: "include"';
    });
    
    fs.writeFileSync(path, content);
    console.log(`Migrated ${f}`);
});
