document.addEventListener('DOMContentLoaded', function() {
    const dropoffAddress = document.getElementById('dropoff-address');
    const additionalFields = document.getElementById('additional-fields');

    dropoffAddress.addEventListener('input', function() {
        if (dropoffAddress.value.trim() !== '') {
            additionalFields.style.display = 'block';
        } else {
            additionalFields.style.display = 'none';
        }
    });
});
