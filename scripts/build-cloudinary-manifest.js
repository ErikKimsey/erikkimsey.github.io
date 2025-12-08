#!/usr/bin/env node
/*
  Build a JSON manifest of images from a Cloudinary folder.
  Usage:
    node scripts/build-cloudinary-manifest.js --folder ek-portfolio

  Requires env vars (in .env.local or environment):
    CLOUDINARY_CLOUD_NAME
    CLOUDINARY_API_KEY
    CLOUDINARY_API_SECRET
*/

const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

// Load env from .env.local first, then fallback to .env
const envLocalPath = path.resolve(process.cwd(), '.env.local');
if (fs.existsSync(envLocalPath)) {
  dotenv.config({ path: envLocalPath });
} else {
  const envPath = path.resolve(process.cwd(), '.env');
  if (fs.existsSync(envPath)) dotenv.config({ path: envPath });
}

const { v2: cloudinary } = require('cloudinary');

const CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
const API_KEY = process.env.CLOUDINARY_API_KEY;
const API_SECRET = process.env.CLOUDINARY_API_SECRET;

if (!CLOUD_NAME || !API_KEY || !API_SECRET) {
  console.error('Missing Cloudinary env vars. Please set CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET');
  process.exit(1);
}

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRET,
});

function parseArgs() {
  const args = process.argv.slice(2);
  const res = { folder: 'ek-portfolio' };
  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (a === '--folder' && args[i + 1]) {
      res.folder = args[i + 1];
      i++;
    }
  }
  return res;
}

async function listAllResources({ folder }) {
  const all = [];
  let next_cursor = undefined;
  do {
    // Use Admin API to list by prefix (folder path)
    const resp = await cloudinary.api.resources({
      type: 'upload',
      resource_type: 'image',
      prefix: folder,
      max_results: 500,
      next_cursor,
    });

    const items = (resp.resources || []).map((r) => ({
      public_id: r.public_id,
      format: r.format,
      width: r.width,
      height: r.height,
      bytes: r.bytes,
      secure_url: r.secure_url,
      created_at: r.created_at,
      folder: r.folder,
    }));
    all.push(...items);
    next_cursor = resp.next_cursor;
  } while (next_cursor);

  return all;
}

async function main() {
  const { folder } = parseArgs();
  console.log(`Building Cloudinary manifest for folder: ${folder}`);
  try {
    const resources = await listAllResources({ folder });
    const outDir = path.resolve(process.cwd(), 'public', '__data');
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
    const outPath = path.join(outDir, `cloudinary_${folder.replace(/\//g, '_')}.json`);
    const manifest = {
      folder,
      generatedAt: new Date().toISOString(),
      count: resources.length,
      resources,
    };
    fs.writeFileSync(outPath, JSON.stringify(manifest, null, 2));
    console.log(`✔ Wrote manifest: ${path.relative(process.cwd(), outPath)} (${resources.length} images)`);
  } catch (err) {
    console.error('Failed to build manifest:', err.message || err);
    process.exit(1);
  }
}

main();
