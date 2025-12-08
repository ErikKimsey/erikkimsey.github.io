// server.js - Express API to list Cloudinary folder images
import express from 'express';
import cors from 'cors';
import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary using env vars (never expose secret to client bundle)
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express();
app.use(cors()); // allow local dev frontend to call this API

// Health check
app.get('/api/health', (_req, res) => res.json({ ok: true }));

// List images in a Cloudinary folder: /api/images/ek-portfolio
app.get('/api/images/:folder', async (req, res) => {
    try {
        const folder = req.params.folder;

        const { resources } = await cloudinary.search
            .expression(`folder:${folder}`)
            .sort_by('public_id', 'desc')
            .max_results(100)
            .execute();

        // Map to minimal client-friendly payload
        const images = resources.map(r => ({
            public_id: r.public_id,
            format: r.format,
            width: r.width,
            height: r.height,
            bytes: r.bytes,
            created_at: r.created_at,
            secure_url: r.secure_url,
            folder: r.folder,
        }));

        res.json({ folder, count: images.length, images });
    } catch (error) {
        console.error('Cloudinary fetch failed:', error);
        res.status(500).json({ error: 'Cloudinary fetch failed' });
    }
});

// Start server only if run directly (avoid starting during tests/imports)
const PORT = process.env.PORT || 5001;
if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => {
        console.log(`Cloudinary image API listening on port ${PORT}`);
    });
}

export default app;
