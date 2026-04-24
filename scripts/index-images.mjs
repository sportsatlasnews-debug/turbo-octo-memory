import fs from 'fs';
import path from 'path';

const imagesDirectory = path.join(process.cwd(), 'public/images');
const outputFile = path.join(process.cwd(), 'data/photos.json');

// Listat e kategorive zyrtare
const officialCategories = [
  "Mike ndër vite", 
  "15 vjetori i Mike", 
  "Aktivitete", 
  "Projekte"
];

const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];

const getImages = (dir) => {
    let results = [];
    const list = fs.readdirSync(dir);

    list.forEach((file) => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat && stat.isFile() && imageExtensions.includes(path.extname(file).toLowerCase())) {
            // Zgjidh një kategori rastësore nga lista
            const randomCategory = officialCategories[Math.floor(Math.random() * officialCategories.length)];
            
            results.push({
                id: Math.random().toString(36).substr(2, 9),
                url: `/images/${file}`,
                category: randomCategory, // Këtu bëhet caktimi rastësor
                title: file.split('.')[0].replace(/-/g, ' ')
            });
        }
    });
    return results;
};

const imageData = getImages(imagesDirectory);
fs.writeFileSync(outputFile, JSON.stringify(imageData, null, 2));
console.log(`🎲 U indeksuan ${imageData.length} foto me kategori rastësore.`);