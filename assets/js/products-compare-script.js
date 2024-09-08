document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.remove-column').forEach((removeLink) => {
        removeLink.addEventListener('click', function () {
            const colIndex = this.getAttribute('data-col');

            // Remove the <th> in the header
            const headerCell = document.querySelector(`#compareTable thead tr th:nth-child(${parseInt(colIndex) + 1})`);
            if (headerCell) {
                headerCell.remove();
            }

            // Remove the corresponding <td> elements in each row
            document.querySelectorAll(`#compareTable tbody tr`).forEach((row) => {
                const bodyCell = row.querySelector(`td:nth-child(${parseInt(colIndex) + 1})`);
                if (bodyCell) {
                    bodyCell.remove();
                }
            });

            // Update the remaining columns' indices
            updateColumnIndices();

            // Check if all products are removed
            checkIfAllProductsRemoved();
        });
    });

    // Function to update the indices for "Remove" links after a column is removed
    function updateColumnIndices() {
        document.querySelectorAll('.remove-column').forEach((removeLink, index) => {
            removeLink.setAttribute('data-col', index + 1);
        });
    }

    // Function to check if all product columns are removed
    function checkIfAllProductsRemoved() {
        const remainingColumns = document.querySelectorAll('#compareTable thead tr th').length;

        // If only one column (Action) is left, hide the table and show the message
        if (remainingColumns === 1) {
            document.getElementById('compareTable').style.display = 'none';
            document.getElementById('emptyMessage').style.display = 'block';
        }
    }
});
