
export function setFavorite() {
    document.addEventListener('click', function (event) {
        if (event.target.classList.contains('favorite')) {
            const cityName = event.target.closest('.card').querySelector('.city').textContent;
            localStorage.removeItem('favoriteCity');
            localStorage.setItem('favoriteCity', cityName);
        }
    });
}