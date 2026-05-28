const fs = require('fs');

let content = fs.readFileSync('app/page.tsx', 'utf8');

// The original extensions for home page were probably .jpg or .png. Let's do .jpg for all base projects
const replacements = [
    ['/images/Além do Céu imagem principal 1.webp', '/images/Além do Céu imagem principal 1.jpg'],
    ['/images/Cacau Parque imagem principal 1.webp', '/images/Cacau Parque imagem principal 1.jpg'],
    ['/images/song bird imagem principal 1.webp', '/images/song bird imagem principal 1.jpg'],
    ['/images/matcha mojo imagem principal 1.webp', '/images/matcha mojo imagem principal 1.jpg'],
    ['/images/baly imagem principal 1.webp', '/images/baly imagem principal 1.jpg'],
    ['/images/doaleite imagem principal 1.webp', '/images/doaleite imagem principal 1.jpg'],
    ['/images/the florist imagem principal 1.webp', '/images/the florist imagem principal 1.jpg'],
    ['/images/Ilustrações imagem principal 1.webp', '/images/Ilustrações imagem principal 1.jpg'],

    // Profile pics
    ['/images/Shrek29_29.webp', '/images/Shrek29_29.jpg'],
    ['/images/freepik__-model-midjourney-dalle3-stablediffusion-subjectre__89002.webp', '/images/freepik__-model-midjourney-dalle3-stablediffusion-subjectre__89002.png'],
    
    // Shrek mode
    ['/images/1211043-shrek-arrive-sur-netflix-le-1er-novembre-2025.webp', '/images/1211043-shrek-arrive-sur-netflix-le-1er-novembre-2025.jpg'],
    ['/images/shrek-passeios-kids.webp', '/images/shrek-passeios-kids.jpg'],
    ['/images/images (1).webp', '/images/images (1).jpg'],
    ['/images/5d43f01-shrek-1024x576.webp', '/images/5d43f01-shrek-1024x576.jpg'],
    ['/images/maxresdefault.webp', '/images/maxresdefault.jpg'],
    ['/images/blob_reva.webp', '/images/blob_reva.jpg'],
    ['/images/burro-do-shrek_2025-07-30_14-47-35.webp', '/images/burro-do-shrek_2025-07-30_14-47-35.jpg'],
    ['/images/Shrek_Shrek_FE-TUBBZ_PL_1.webp', '/images/Shrek_Shrek_FE-TUBBZ_PL_1.jpg']
];

let modified = false;
for (const [oldVal, newVal] of replacements) {
    if (content.includes(oldVal)) {
        content = content.replace(oldVal, newVal);
        modified = true;
    }
}

if (modified) {
    fs.writeFileSync('app/page.tsx', content, 'utf8');
}
