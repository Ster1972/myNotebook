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
    const totalPages = Math.ceil(totalItems / perPage);
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
