# myNotebook Project Overview

A personal knowledge management system and link dashboard built with Jekyll and Vanilla JavaScript. It serves as a centralized hub for organizing technical notes, useful links, keyboard shortcuts, and software recommendations.

## Core Technologies

- **Jekyll**: Static site generator used for layout templating and page management.
- **Bootstrap 5**: CSS framework used for responsive design, navigation components, and overall styling.
- **Vanilla JavaScript**: Handles dynamic data rendering, client-side pagination, and search functionality.
- **Data Storage**: `notes.js` acts as a central repository for all links and notes, stored as a global JavaScript array of objects.

## Key Files & Directory Structure

- `_config.yml`: Basic Jekyll configuration settings.
- `_layouts/default.html`: The primary layout template defining the site structure (sidebar, header, content area).
- `_includes/`: Contains reusable HTML components:
    - `header.html`: Navigation bar and search input.
    - `footer.html`: Common footer content.
- `notes.js`: The "database" of the project. Contains the `notes` array which is used across various pages.
- `index.html`: The main dashboard displaying a paginated list of all notes.
- `search.html`: Implements search logic to filter notes based on user input.
- `viewrecord.html`: Displays detailed information (including comments) for a specific note using its unique ID from the URL parameters.
- **Topic Pages**: Standalone HTML files (e.g., `aiinfo.html`, `javascript.html`, `cybersecurity.html`) that provide categorized views or specific technical information.

## Architecture & Data Flow

The project follows a hybrid approach:
1.  **Static Templating**: Jekyll processes front matter and applies the `default` layout to HTML files, injecting site-wide components via `_includes`.
2.  **Dynamic Rendering**: At runtime, `notes.js` is loaded. Client-side scripts on pages like `index.html` or `search.html` iterate through the `notes` array to dynamically build the UI (tables, lists).
3.  **Routing**: Navigation is handled via standard HTML links. State (like the specific note being viewed) is passed via URL query parameters (e.g., `viewrecord.html?id=...`).

## Building and Running

### Prerequisites
- Ruby and Jekyll (optional, but required for local development with full layout support).

### Local Development
To run the project with Jekyll's auto-regeneration and local server:
```bash
jekyll serve
```
Alternatively, if Jekyll is not used, the site can be viewed by opening `index.html` in a browser, though Jekyll-specific features (layouts and includes) will not render correctly unless processed.

## Deployment

- **GitHub Pages**: The application is designed to be hosted directly from a GitHub repository using GitHub Pages. Any changes pushed to the `main` (or designated) branch are automatically built and deployed.

## Development Conventions

- **Adding New Entries**: To add a new note or link, append a new object to the `notes` array in `notes.js`. Ensure it includes a unique `id` (UUID format), `title`, `category`, `link`, and `comment`.
- **UI Consistency**: Use Bootstrap 5 utility classes for layout and spacing. Icons should be sourced from Bootstrap Icons (already included via CDN).
- **Modularity**: When creating new pages, use Jekyll front matter to specify the layout and title:
  ```yaml
  ---
  layout: default
  title: Your Page Title
  ---
  ```
- **Search Logic**: Any new fields added to the `notes` objects should be accounted for in the search filtering logic within `search.html` or relevant scripts.
