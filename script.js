const fs = require('fs');
const path = require('path');

const mappings = {
    // the-florist
    '/images/projects/the-florist/ultrawide imagem the florist.webp': '/images/ultrawide imagem the florist.jpg',
    '/images/projects/the-florist/The Florist - Pitch Deck 2 (2)_page-0004.webp': '/images/The Florist - Pitch Deck 2 (2)_page-0004.jpg',
    '/images/projects/the-florist/The Florist - Pitch Deck 2 (2)_page-0007.webp': '/images/The Florist - Pitch Deck 2 (2)_page-0007.jpg',
    '/images/projects/the-florist/The Florist - Pitch Deck 2 (2)_page-0011.webp': '/images/The Florist - Pitch Deck 2 (2)_page-0011.jpg',
    '/images/projects/the-florist/The Florist - Pitch Deck 2 (2)_page-0008.webp': '/images/The Florist - Pitch Deck 2 (2)_page-0008.jpg',
    '/images/projects/the-florist/The Florist - Pitch Deck 2 (2)_page-0013.webp': '/images/The Florist - Pitch Deck 2 (2)_page-0013.jpg',
    '/images/projects/the-florist/The Florist - Pitch Deck 2 (2)_page-0015.webp': '/images/The Florist - Pitch Deck 2 (2)_page-0015.jpg',

    // projeto-baly
    '/images/projects/projeto-baly/baly imagem principal 1.webp': '/images/baly imagem principal 1.jpg',
    '/images/projects/projeto-baly/O Baly é meninoPrancheta 2@3x.webp': '/images/O Baly é meninoPrancheta 2@3x.png',
    '/images/projects/projeto-baly/O Baly é meninoPrancheta 2 cópia@3x.webp': '/images/O Baly é meninoPrancheta 2 cópia@3x.png',
    '/images/projects/projeto-baly/LATA TRADICIONAL.webp': '/images/LATA TRADICIONAL.png',
    '/images/projects/projeto-baly/LATA MAÇÃ VERDE.webp': '/images/LATA MAÇÃ VERDE.png',
    '/images/projects/projeto-baly/LATA MELANCIA.webp': '/images/LATA MELANCIA.png',
    '/images/projects/projeto-baly/LATA AÇAÍ.webp': '/images/LATA AÇAÍ.png',
    '/images/projects/projeto-baly/LATA GUARANÁ.webp': '/images/LATA GUARANÁ.png',
    '/images/projects/projeto-baly/melancia planoPrancheta 1 cópia 3.webp': '/images/melancia planoPrancheta 1 cópia 3.png',
    '/images/projects/projeto-baly/melancia planoPrancheta 1 cópia 2.webp': '/images/melancia planoPrancheta 1 cópia 2.png',
    '/images/projects/projeto-baly/planoPrancheta 1 cópia.webp': '/images/planoPrancheta 1 cópia.png',
    '/images/projects/projeto-baly/planoPrancheta 1.webp': '/images/planoPrancheta 1.png',

    // songbird
    '/images/projects/songbird/ultrawide imagem songbird.webp': '/images/ultrawide imagem songbird.jpg',
    '/images/projects/songbird/identidade criada.webp': '/images/identidade criada e baseada na maneira que pássaros cantaam e mostram sua beleza que em conjunto com a múscia se complementam como um pássaro e sua voz..jpg',
    '/images/projects/songbird/gif do projeto.gif': '/images/gif do projeto.gif',
    '/images/projects/songbird/paleta de cores s.webp': '/images/paleta de cores s.jpg',
    '/images/projects/songbird/aplicação do design no disco.webp': '/images/aplicação do design no disco.jpg',
    '/images/projects/songbird/aplicação do design.webp': '/images/aplicação do design.jpg',
    '/images/projects/songbird/44-songbird-design-studio-6000.webp': '/images/44-songbird-design-studio-6000.jpg',
    '/images/projects/songbird/60-songbird-design-studio-11-1.webp': '/images/60-songbird-design-studio-11-1.jpg',

    // doaleite
    '/images/projects/doaleite/ultrawide imagem doaleite.webp': '/images/ultrawide imagem doaleite.jpg',
    '/images/projects/doaleite/sobre o projeto.webp': '/images/sobre o projeto.png',
    '/images/projects/doaleite/gif logo doaleite.gif': '/images/gif logo doaleite.gif',
    '/images/projects/doaleite/paleta de cores d.webp': '/images/paleta de cores d.jpg',
    '/images/projects/doaleite/tipografia.webp': '/images/tipografia.png',
    '/images/projects/doaleite/Ilustrações.webp': '/images/Ilustrações.png',
    '/images/projects/doaleite/53a997149768183.62ed293c64dbe.gif': '/images/53a997149768183.62ed293c64dbe.gif',
    '/images/projects/doaleite/aplicação na rede social.webp': '/images/aplicação na rede social.png',
    '/images/projects/doaleite/aplicação na rede social 2.webp': '/images/aplicação na rede social 2.png',

    // matcha-mojo
    '/images/projects/matcha-mojo/matcha mojo imagem principal 1.webp': '/images/matcha mojo imagem principal 1.jpg',
    '/images/projects/matcha-mojo/matchoAtivo 1.webp': '/images/matchoAtivo 1.png',
    '/images/projects/matcha-mojo/matchoAtivo 3.webp': '/images/matchoAtivo 3.png',
    '/images/projects/matcha-mojo/matchoAtivo 4.webp': '/images/matchoAtivo 4.png',
    '/images/projects/matcha-mojo/matchoAtivo 5.webp': '/images/matchoAtivo 5.png',
    '/images/projects/matcha-mojo/matchoAtivo 6.webp': '/images/matchoAtivo 6.png',
    '/images/projects/matcha-mojo/matchoAtivo 7.webp': '/images/matchoAtivo 7.png',
    '/images/projects/matcha-mojo/mockup matcha mojo 1.webp': '/images/mockup matcha mojo 1.jpg',
    '/images/projects/matcha-mojo/mockup matcha mojo 2.webp': '/images/mockup matcha mojo 2.jpg',
    '/images/projects/matcha-mojo/mockup matcha mojo 3.webp': '/images/mockup matcha mojo 3.jpg',
    '/images/projects/matcha-mojo/mockup matcha mojo 4.webp': '/images/mockup matcha mojo 4.jpg',
    '/images/projects/matcha-mojo/mockup matcha mojo 5.webp': '/images/mockup matcha mojo 5.jpg',

    // projeto-cacau
    '/images/projects/projeto-cacau/eu com troféu.webp': '/images/eu com troféu.jpg',
    '/images/projects/projeto-cacau/troféu.webp': '/images/troféu.jpg',
    '/images/projects/projeto-cacau/logo CACAU SHOW.webp': '/images/logo CACAU SHOW.png',
    '/images/projects/projeto-cacau/logo principal CACAU PARQUE.webp': '/images/logo principal CACAU PARQUE.png',
    '/images/projects/projeto-cacau/paleta de cores c.webp': '/images/paleta de cores c.png',
    '/images/projects/projeto-cacau/hirarquia tipografica (1).webp': '/images/hirarquia tipografica (1).png',
    '/images/projects/projeto-cacau/hirarquia tipografica (2).webp': '/images/hirarquia tipografica (2).png',
    '/images/projects/projeto-cacau/brinquedo MONTANHA-RUSSA GIRA CHOCOMONSTROS.webp': '/images/brinquedo MONTANHA-RUSSA GIRA CHOCOMONSTROS.png',
    '/images/projects/projeto-cacau/brinquedo RODA GIGABYTES.webp': '/images/brinquedo RODA GIGABYTES.png',
    '/images/projects/projeto-cacau/brinquedo BENDITO KAMIKAZE.webp': '/images/brinquedo BENDITO KAMIKAZE.png',
    '/images/projects/projeto-cacau/brinquedo CHOCOBICHOS CARROSSEL.webp': '/images/brinquedo CHOCOBICHOS CARROSSEL.png',
    '/images/projects/projeto-cacau/brinquedo ESPAÇO MIAU KIDS.webp': '/images/brinquedo ESPAÇO MIAU KIDS.png',
    '/images/projects/projeto-cacau/brinquedo EXPRESSO CHOCOLATE.webp': '/images/brinquedo EXPRESSO CHOCOLATE.png',
    '/images/projects/projeto-cacau/brinquedo JARDIM DA BELLA.webp': '/images/brinquedo JARDIM DA BELLA.png',
    '/images/projects/projeto-cacau/brinquedo MONTANHA RUSSA MONTEBELLO.webp': '/images/brinquedo MONTANHA RUSSA MONTEBELLO.png',
    '/images/projects/projeto-cacau/ultrawide imagem cacau parque.webp': '/images/ultrawide imagem cacau parque.jpg',
    '/images/projects/projeto-cacau/embalagem na gondula mockup.webp': '/images/embalagem na gondula mockup.png',
    '/images/projects/projeto-cacau/poster mockup sem fundo.webp': '/images/poster mockup sem fundo.png',
    '/images/projects/projeto-cacau/bilhete dourado.webp': '/images/bilhete dourado.png',
    '/images/projects/projeto-cacau/foto bilhete saindo da embalagem.webp': '/images/foto bilhete saindo da embalagem.png',
    '/images/projects/projeto-cacau/varios bilhetes dourados foto.webp': '/images/varios bilhetes dourados foto.png',
    '/images/projects/projeto-cacau/mapa projetado do cacau parque.webp': '/images/mapa projetado do cacau parque.png',
    
    // projeto-hq
    '/images/projects/projeto-hq/Além do Céu imagem principal 1.webp': '/images/Além do Céu imagem principal 1.jpg',
    '/images/Cover.webp': '/images/Cover.png',
    '/images/projects/projeto-hq/P38-39.webp': '/images/P38-39.png',
    '/images/projects/projeto-hq/Back Cover.webp': '/images/Back Cover.png',
    '/images/projects/projeto-hq/imagem HQ e Sketch.webp': '/images/imagem HQ e Sketch.jpg',
    '/images/projects/projeto-hq/1768425642299.webp': '/images/1768425642299.jpg',
    '/images/projects/projeto-hq/1768425642365.webp': '/images/1768425642365.jpg',
    '/images/projects/projeto-hq/1768425645964.webp': '/images/1768425645964.jpg',
    '/images/projects/projeto-hq/cards.webp': '/images/cards.jpg',
    '/images/projects/projeto-hq/1768425644019.webp': '/images/1768425644019.jpg',
    '/images/projects/projeto-hq/1768425644264.webp': '/images/1768425644264.jpg',
    '/images/projects/projeto-hq/bottons.webp': '/images/bottons.jpg',
};

function replaceInFile(filePath) {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    for (const [oldPath, newPath] of Object.entries(mappings)) {
        if (content.includes(oldPath)) {
            // Note: Use split/join to replace all occurrences globally without regex escaping issues
            content = content.split(oldPath).join(newPath);
            modified = true;
        }
    }

    // Dynamic templated replacements
    // /images/projects/projeto-cacau/embalagem ${num}.webp -> /images/embalagem ${num}.png
    if (content.includes('/images/projects/projeto-cacau/embalagem ${num}.webp')) {
        content = content.split('/images/projects/projeto-cacau/embalagem ${num}.webp').join('/images/embalagem ${num}.png');
        modified = true;
    }

    // /images/projects/projeto-hq/P${i+1}.webp -> /images/P${i+1}.png
    if (content.includes('/images/projects/projeto-hq/P${i+1}.webp')) {
        content = content.split('/images/projects/projeto-hq/P${i+1}.webp').join('/images/P${i+1}.png');
        modified = true;
    }

    // /images/projects/projeto-hq/P${i+40}.webp -> /images/P${i+40}.png
    if (content.includes('/images/projects/projeto-hq/P${i+40}.webp')) {
        content = content.split('/images/projects/projeto-hq/P${i+40}.webp').join('/images/P${i+40}.png');
        modified = true;
    }

    if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Updated ' + filePath);
    }
}

function traverseAndReplace(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            traverseAndReplace(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            replaceInFile(fullPath);
        }
    }
}

traverseAndReplace('./app');
