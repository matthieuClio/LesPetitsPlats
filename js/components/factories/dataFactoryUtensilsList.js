class DataFactoryUtensilsList {
    constructor () {
        // Dom elements
        this.searchUtensilsContainer = document.getElementById('search-utensils-container')
        this.li
    }

    createList (element) {
        this.li = document.createElement('li')
        this.li.setAttribute('class', 'search-secondary-comp__items-comp mb-1')
        this.li.textContent = element

        this.searchUtensilsContainer.appendChild(this.li)
    }
}
