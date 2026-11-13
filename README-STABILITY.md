# Atlas stability repair

This package preserves the supplied Atlas Polished app, its worldbuilding modules, themes, Nexus, media, and data model.

Repairs:
- Removed the conflicting local `panelTypes` declaration (the imported value is retained).
- Added the missing initial `render()` call after the module finishes registering features.
- Added a startup loading state and an on-screen error panel with a copyable error, including dynamic-import failures.
- Updated the service-worker cache version to force a new app-shell cache and included polish.css in precache.

Validation: JavaScript syntax and module parsing checks, referenced file existence, and ZIP integrity. A full browser runtime test could not be completed in this environment, so test on GitHub Pages before using it as your primary copy.

Deployment: Back up your data using the existing export tools if you have data. Copy the contents of this `atlas/` folder into the published repository root (not an extra nested `atlas/` folder), commit and push. Wait for the green GitHub Pages deployment. Do not clear Safari website data, as it may contain worlds and images.

GitHub Pages URL: https://8shawn8cyr8.github.io/AtlasP/
