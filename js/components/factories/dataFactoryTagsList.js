class DataFactoryTagsList {
    constructor () {
        // Dom elements
        this.searchIngredientsContainer = document.getElementById('search-ingredients-container')
        this.liIngredients
    }

    createIngredientList (element) {
        this.liIngredients = document.createElement('li')
        this.liIngredients.setAttribute('class', 'search-secondary-comp__items-comp mb-1')
        this.liIngredients.textContent = element

        this.searchIngredientsContainer.appendChild(this.liIngredients)
    }
}
