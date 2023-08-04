class DataFactoryIngredientsList {
    constructor () {
        // Dom elements
        this.searchIngredientsContainer = document.getElementById('search-ingredients-container')
        this.li
    }

    createList (element) {
        this.li = document.createElement('li')
        this.li.setAttribute('class', 'search-secondary-comp__items-comp mb-1')
        this.li.textContent = element

        this.searchIngredientsContainer.appendChild(this.li)
    }
}
