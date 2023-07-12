class DataFactoryTags {
    constructor() {
        // Dom elements
        this.ulSearchIngredients
        this.liIngredients
        this.ingredientsTags = []
    }

    displayIngredients (data) {

        // Build a array with sort ingredients
        data.forEach((element) => {

            element.ingredients.forEach((element) => {
                
                this.ingredientsTags = this.ingredientsTags.filter(ingredient => ingredient != element.ingredient);
                this.ingredientsTags.push(element.ingredient)
            })
        })

        console.log(this.ingredientsTags)

        this.ingredientsTags.forEach((element) => {
            this.ulSearchIngredients = document.getElementById('search-ingredients')
            this.liIngredients = document.createElement('li')

            this.liIngredients.setAttribute('class', 'search-secondary-comp__items-comp mb-1')
            this.liIngredients.textContent = element
            this.ulSearchIngredients.appendChild(this.liIngredients)
        })
    }
}