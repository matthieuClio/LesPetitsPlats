class DataFactoryTags {
    constructor () {
        // Dom elements
        this.searchIngredientsContainer = document.getElementById('search-ingredients-container')
        this.tagContainer = document.getElementById('tags-container')
        this.liIngredients
        this.tags
        this.iconColse
        this.searchInputText = document.getElementById('search-input-text')
        this.rowReceipt = document.getElementById('row-receipts')

        // Components
        // ..........
        this.dataFactoryReceipt = new DataFactoryReceipt()
        
        // Other
        this.ingredientsTags = []
        this.tagsSelected = []
        this.checkMatchData = []
        this.checkMatchIngredient = []
        this.matchData
    }

    updateData (data) {
        this.matchData = data
    }

    displayIngredients (data) {
        // Reset the result for the new search
        this.ingredientsTags = []

        // Build a array with sort ingredients
        data.forEach((element) => {

            element.ingredients.forEach((element) => {

                // Pass the items in lower case and filter duplicates
                this.ingredientsTags = this.ingredientsTags.filter(ingredient => ingredient.toLowerCase() != element.ingredient.toLowerCase())
                this.ingredientsTags.push(element.ingredient)
            })
        })

        // Update matchData
        this.matchData = data

        // console.log(this.ingredientsTags)
        this.createIngredient(this.ingredientsTags)
    }

    createIngredient (specificData) {
        // Delete the old Ingredients list
        this.searchIngredientsContainer.textContent = ''

        specificData.forEach((element) => {
            this.liIngredients = document.createElement('li')
            this.liIngredients.setAttribute('class', 'search-secondary-comp__items-comp mb-1')
            this.liIngredients.textContent = element

            // Event : create tags
            this.liIngredients.addEventListener('click', () => {
                this.tags = document.createElement('div')
                this.iconColse = document.createElement('span')

                this.tags.setAttribute('class', 'tag-comp pt-2 pb-2 rounded-3 me-4 mb-2')
                this.iconColse.setAttribute('class', 'bi bi-x-lg ms-3')
                this.tags.textContent = element

                // Define a specifig tag
                let specificTags = this.tags
                // let oldSpecificData = specificData

                // Event : Delete tags
                this.iconColse.addEventListener('click', () => {
                    specificTags.remove()
                    this.tagsSelected = this.tagsSelected.filter(arrayElement => arrayElement !== element)

                    // MOVE THIS IN REFRESHRECEIPT-----------
                    // Filter the Ingredients list with the selected tags
                    // this.tagsSelected.forEach((element) => {
                    //     oldSpecificData = oldSpecificData.filter(arrayElement => arrayElement !== element)
                    // })

                    // Update the Ingredients list
                    // this.createIngredient(oldSpecificData)
                    // console.log(oldSpecificData)

                    // Update the main search (receipt)
                    this.refreshReceipt()
                })

                this.tagContainer.appendChild(this.tags)
                this.tags.appendChild(this.iconColse)

                // Array will contain all tags selected
                this.tagsSelected.push(element)
                // console.log(this.tagsSelected)

                // MOVE THIS IN REFRESHRECEIPT-----------
                // Filter the Ingredients list with the selected tags
                // this.tagsSelected.forEach((element) => {
                //     specificData = specificData.filter(arrayElement => arrayElement !== element)
                // })

                // Update the Ingredients list
                // this.createIngredient(specificData)
                // console.log(specificData)

                // Update the main search (receipt) and ingredients list
                this.refreshReceipt()
            })
            this.searchIngredientsContainer.appendChild(this.liIngredients)
        }) // End loop specificData
    }

    refreshReceipt () {
        // Reinitialize match data check
        this.checkMatchData = []
        this.checkMatchIngredient = []

        // Define new data array in tags comparison called checkMatchData
        this.matchData.forEach((element) => {

            let matchDataSpecificLine = element
            let tagsSelectedtoCheck = this.tagsSelected

            // Verify if all tags match with element's ingredients
            element.ingredients.forEach((element) => {
                tagsSelectedtoCheck = tagsSelectedtoCheck.filter(tag => tag.toLowerCase() !== element.ingredient.toLowerCase())
            })

            // All tags match
            if (tagsSelectedtoCheck.length === 0) {
                // We add to a new array the specific data
                this.checkMatchData.push(matchDataSpecificLine)
            }
        })
        console.log(this.checkMatchData)

        // Define specifc ingredients
        this.checkMatchData.forEach((element) => {

            element.ingredients.forEach((element) => {
                this.checkMatchIngredient.push(element.ingredient)
            })
        })

        // Filter the Ingredients list with the selected tags
        this.tagsSelected.forEach((element) => {
            this.checkMatchIngredient = this.checkMatchIngredient.filter(arrayElement => arrayElement !== element)
        })

        // Define the new ingredients list
        this.ingredientsTags = this.checkMatchIngredient

        // Refresh receipt
        this.dataFactoryReceipt.display(this.checkMatchData)

        // Refresh ingredient
        this.createIngredient(this.checkMatchIngredient)
    }
}
