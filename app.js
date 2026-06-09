/**
 * Shared utility functions and core logic for myNotebook
 */

/**
 * Escapes HTML special characters to prevent XSS.
 * @param {string} str 
 * @returns {string}
 */
function escapeHTML(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

/**
 * Common pagination and rendering logic.
 * @param {Array} data - The array of objects to paginate.
 * @param {number} page - Current page number.
 * @param {number} perPage - Items per page.
 * @param {Function} renderFn - Function that returns HTML for the paginated subset.
 * @param {string} containerId - ID of the element to inject HTML into.
 */
function paginate(data, page, perPage, renderFn, containerId) {
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    const paginatedSubset = data.slice(startIndex, endIndex);

    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = renderFn(paginatedSubset);
    }
}

/**
 * Shared pagination UI generation.
 * @param {number} totalItems 
 * @param {number} perPage 
 * @param {number} currentPage 
 * @param {string} paginationId 
 * @param {Function} onPageChange 
 */
function setupPaginationUI(totalItems, perPage, currentPage, paginationId, onPageChange) {
    const totalPages = Math.max(1, Math.ceil(totalItems / perPage));
    const pagination = document.getElementById(paginationId);
    if (!pagination) return;
    
    pagination.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const li = document.createElement('li');
        li.classList.add('page-item');
        if (i === currentPage) {
            li.classList.add('active');
        }
        const a = document.createElement('a');
        a.classList.add('page-link');
        a.href = `#`;
        a.textContent = i;
        a.addEventListener('click', (e) => {
            e.preventDefault();
            onPageChange(i);
        });
        li.appendChild(a);
        pagination.appendChild(li);
    }
}

/**
 * Generate table rows HTML for a subset of notes.
 * Used by list pages (dashboard, search).
 */
function renderNotesTableRows(paginatedSubset) {
    return paginatedSubset.map(note => `
      <tr class="align-middle">
        <td>${escapeHTML(note.title)}</td>
        <td>${escapeHTML(note.category)}</td>
        <td>${note.link ? `<a href="${encodeURI(note.link)}" target="_blank" rel="noopener noreferrer" type="button" class="btn btn-primary btn-small"><i class="bi bi-link-45deg"></i></a>` : ''}</td>
        <td><a href="viewrecord.html?id=${encodeURIComponent(note.id)}" type="button" class="btn btn-primary btn-small"><i class="bi bi-eye"></i></a></td>
      </tr>
    `).join('');
}

/**
 * Initialize a generic list page (handles pagination + rendering).
 * @param {Array} data - array of note objects
 * @param {number} perPage
 * @param {string} bodyId - tbody element ID
 * @param {string} paginationId - ul pagination element ID
 */
function initListPage(data, perPage, bodyId, paginationId, renderFn) {
    let currentPage = 1;
    const renderer = (typeof renderFn === 'function') ? renderFn : renderNotesTableRows;

    function updateDisplay(page) {
        currentPage = page;
        paginate(data, currentPage, perPage, renderer, bodyId);
        setupPaginationUI(data.length, perPage, currentPage, paginationId, updateDisplay);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            updateDisplay(1);
        });
    } else {
        updateDisplay(1);
    }
}

/**
 * Render a single record as HTML (used by viewrecord page).
 */
function renderRecordHTML(rec) {
    if (!rec) return `
        <div class="alert alert-warning" role="alert">
            Record not found. <a href="index.html" class="alert-link">Return to Dashboard</a>.
        </div>
    `;

    return `
        <ul class="list-group">
            <li class="list-group-item"> 
                <div class="row">
                    <div class="col" style="max-width: 140px"> <b>Title:</b></div>
                    <div class="col">${escapeHTML(rec.title)}</div>
                </div>
            </li>
            <li class="list-group-item"> 
                <div class="row">
                    <div class="col" style="max-width: 140px"> <b>Category:</b></div>
                    <div class="col">${escapeHTML(rec.category)}</div>
                </div>
            </li>
            <li class="list-group-item"> 
                <div class="row">
                    <div class="col" style="max-width: 140px"> <b>URL:</b></div>
                    <div class="col">${rec.link ? `<a href="${encodeURI(rec.link)}" target="_blank" rel="noopener noreferrer">${escapeHTML(rec.link)}</a>` : ''}</div>
                </div>
            </li>
            <li class="list-group-item"> 
                <div class="row">
                    <div class="col" style="max-width: 140px"> <b>Comments:</b></div>
                    <div class="col">${escapeHTML(rec.comment)}</div>
                </div>
            </li>
        </ul>
    `;
}

/**
 * Find a record by id and render it into containerId.
 */
function showRecordById(id, containerId) {
    const record = (Array.isArray(notes) && id) ? notes.find(note => note.id == id) : null;
    const container = document.getElementById(containerId);
    if (container) container.innerHTML = renderRecordHTML(record);
}

/**
 * Load notes from a JSON file and expose them as `window.notes`.
 * @param {string} url - path to notes.json (default 'notes.json')
 * @returns {Promise<Array>} resolves to notes array
 */
function loadNotes(url = 'notes.json') {
    return fetch(url, { cache: 'no-cache' })
        .then(response => {
            if (!response.ok) throw new Error(`Failed to load notes: ${response.status}`);
            return response.json();
        })
        .then(data => {
            // store as global for backwards compatibility
            window.notes = data;
            return data;
        });
}
