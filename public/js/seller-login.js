

document.addEventListener('DOMContentLoaded', function() {
    // For index.html LOGIN button
    const sellerregistryBtn = document.querySelector('#seller-regis');
    if(sellerregistryBtn){
        sellerregistryBtn.addEventListener('click', function() {
            window.location.href = 'seller-register.html';
        });
    }
})