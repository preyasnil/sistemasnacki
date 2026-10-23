const columns = ['id', 'codbarras', 'descripcion', 'stock', 'precio_unitario', 'fecha_registro'];
export function renderProductTable(products = []) {
    const tableBody = document.getElementById('productsTableBody');
    if (!tableBody) return;
    tableBody.replaceChildren();
    if (products.length === 0) {
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.colSpan = columns.length;
        cell.className = 'products-empty';
        cell.textContent = 'No hay productos registrados';
        row.appendChild(cell);
        tableBody.appendChild(row);
        return;
    }
    products.forEach(product => {
        const row = document.createElement('tr');
        columns.forEach(key => {
            const cell = document.createElement('td');
            cell.textContent = product[key] ?? '—';
            row.appendChild(cell);
        });
        tableBody.appendChild(row);
    });
}
export function initProductList() {
    renderProductTable();
    document.getElementById('refreshProducts')?.addEventListener('click', () => renderProductTable());
}
