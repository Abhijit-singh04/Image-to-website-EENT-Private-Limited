const search = document.querySelector('.search')

search.addEventListener('click', function () {
    search.classList.add("search-box");
    search.classList.remove("search");
})