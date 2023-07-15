class DataFactoryTags {
    constructor() {
        // Dom elements
        this.searchIngredientsContainer = document.getElementById('search-ingredients-container')
        this.tagContainer = document.getElementById('tags-container')
        this.liIngredients
        this.tags
        this.iconColse
        this.ingredientsTags = []
        this.tagsSelected = []
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

            // Create event
            this.liIngredients.addEventListener('click', () => {
                this.tags = document.createElement('div')
                this.iconColse = document.createElement('span')

                this.tags.setAttribute('class', 'tag-comp pt-2 pb-2 rounded-3 me-4 mb-2')
                this.iconColse.setAttribute('class', 'bi bi-x-lg ms-3')
                this.tags.textContent = element

                this.tagContainer.appendChild(this.tags)
                this.tags.appendChild(this.iconColse)

                // Array will contain all tags selected
                this.tagsSelected.push(element)
                console.log(this.tagsSelected)
            })

            this.searchIngredientsContainer.appendChild(this.liIngredients)
        })

    }
}