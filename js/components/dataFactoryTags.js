class DataFactoryTags {
    constructor() {
        // Dom elements
        this.searchIngredientsContainer = document.getElementById('search-ingredients-container')
        this.liIngredients
        this.ingredientsTags = []
    }

    displayIngredients (data) {
        // Reset the result for the new search
        this.ingredientsTags = []

        // Build a array with sort ingredients
        data.forEach((element) => {

            element.ingredients.forEach((element) => {
                
                this.ingredientsTags = this.ingredientsTags.filter(ingredient => ingredient != element.ingredient);
                this.ingredientsTags.push(element.ingredient)
            })
        })

        console.log(this.ingredientsTags)

        this.ingredientsTags.forEach((element) => {
            this.liIngredients = document.createElement('li')

            this.liIngredients.setAttribute('class', 'search-secondary-comp__items-comp mb-1')
            this.liIngredients.textContent = element
            this.searchIngredientsContainer.appendChild(this.liIngredients)
        })
    }
}