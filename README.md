# Atlas — iPhone Media Library

This build extends the previous Atlas Embedded Reference Cards build, preserving its Journal, Entities, Bestiary, Nexus, Systems, themes, layouts, project manager, internal links, and offline PWA shell.

## New features
- `＋ Add photo` opens a mobile-friendly image sheet with Photo Library, Camera, Files, and HTTPS URL options. The first three use native browser file pickers.
- Photos are resized to a maximum of 2048 pixels on the longest side and encoded as JPEG at 83% quality; supported HEIC photos are converted if the browser can decode them. Photos up to 35 MB input size.
- Media is stored as binary Blobs in a separate IndexedDB database, scoped by project ID.
- Add the same photo to multiple journal entries or entities; attach and detach without duplicating the stored image.
- Media Library navigation lists project photos, with deletion controls.
- **Data > Export world + images** creates a portable JSON backup containing the images. **Import world + images** restores it to the current project. These backups can be large; avoid enormous photo collections on iPhone.
- Existing legacy journal images are still displayed. Existing JSON-only backups still work, but do not include images stored in the new media library.

## Run
`python3 -m http.server 8000` from this folder, then open the forwarded HTTPS port. On iPhone, open the site in Safari or your installed home-screen web app.

## Notes
- Images are local to the browser installation; there is no automatic cross-device sync.
- HEIC support depends on browser decoding capabilities; unsupported images require conversion to JPEG/PNG first.
- Camera capture prompts and photo-library selection are controlled by iOS and may vary by browser.
- Image URLs require connectivity and are not guaranteed to work offline.
- Export your existing Atlas JSON backup before replacing any files. Preserve the same origin to retain your IndexedDB worlds.
- Code syntax and archive integrity can be checked automatically; physical iPhone testing is still required.


## Image Studio extension

In an entity or journal, add images from the Media Library, then tap **Edit** below an attached image. Set its caption, frame ratio (square, portrait, landscape, wide), zoom and horizontal/vertical framing. Use the left/right controls to reorder gallery images, or Remove to detach them. All framing is non-destructive and saved per attachment in the world data, including media-inclusive backups. Original image blobs stay in IndexedDB. This is a framing/crop-preview tool, not destructive pixel editing.


## Polish update

- Consistent theme-aware spacing, cards, focus outlines, contrast and touch targets.
- Global project search: Search button or Ctrl+K / Command+K, then Enter to open a result.
- Search covers sections, entities, journals, narrative systems and universes.
- Reduced-motion support and mobile command search.
- No data schema changes. Existing project storage and media are retained.

This update is not a substitute for real-device browser QA. Back up worlds with images before deployment.
