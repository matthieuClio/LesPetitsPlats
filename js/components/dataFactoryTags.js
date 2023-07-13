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

                // Pass the items in lower case and after filter them
                this.ingredientsTags = this.ingredientsTags.filter(ingredient => ingredient.toLowerCase() != element.ingredient.toLowerCase())
                this.ingredientsTags.push(element.ingredient)
            })
        })

        // console.log(this.ingredientsTags)
        this.createIngredient(this.ingredientsTags)
    }

    createIngredient(specificData) {
        specificData.forEach((element) => {
            this.liIngredients = document.createElement('li')

            this.liIngredients.setAttribute('class', 'search-secondary-comp__items-comp mb-1')
            this.liIngredients.textContent = element
            this.searchIngredientsContainer.appendChild(this.liIngredients)
        })

    }
}