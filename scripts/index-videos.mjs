import fs from 'fs';
import path from 'path';

const videoDirectory = path.join(process.cwd(), 'public/videos');
const outputFile = path.join(process.cwd(), 'data/videos.json');

const videoExtensions = ['.mp4', '.webm', '.mov'];

const getVideos = (dir) => {
    if (!fs.existsSync(dir)) return [];
    const list = fs.readdirSync(dir);
    return list
        .filter(file => videoExtensions.includes(path.extname(file).toLowerCase()))
        .map(file => ({
            id: Math.random().toString(36).substr(2, 9),
            url: `/videos/${file}`,
            title: file.split('.')[0].replace(/-/g, ' '),
            // Përcaktojmë tipin bazuar në emrin e skedarit (p.sh. video-p-1.mp4 për portrait)
            type: file.includes('-p-') ? 'portrait' : 'landscape'
        }));
};

const videoData = getVideos(videoDirectory);
fs.writeFileSync(outputFile, JSON.stringify(videoData, null, 2));
console.log(`🎥 U indeksuan ${videoData.length} video.`);