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
        this.searchIngredientsInput = document.getElementById('search-ingredients-input')

        // Components
        // ..........
        this.dataFactoryReceipt = new DataFactoryReceipt()
        
        // Other
        this.ingredientsTagsList = []
        this.tagsSelected = []
        this.checkMatchData = []
        this.checkMatchIngredient = []
        this.matchData

        this.dataSearch
        this.matchDataSearch
    }

    updateData (data) {
        this.matchData = data
    }

    // TO MODIFY AND DELETE
    displayIngredients (data) {
        // Reset the result for the new search
        this.ingredientsTagsList = []

        // Build a array with sort ingredients
        data.forEach((element) => {

            element.ingredients.forEach((element) => {

                // Pass the items in lower case and filter duplicates
                this.ingredientsTagsList = this.ingredientsTagsList.filter(ingredient => ingredient.toLowerCase() != element.ingredient.toLowerCase())
                this.ingredientsTagsList.push(element.ingredient)
            })
        })

        // Update matchData
        this.matchData = data

        // console.log(this.ingredientsTags)
        this.createIngredient(this.ingredientsTagsList)
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

                    // Update the main search (receipt)
                    this.refreshReceipt()
                })

                this.tagContainer.appendChild(this.tags)
                this.tags.appendChild(this.iconColse)

                // Array will contain all tags selected
                this.tagsSelected.push(element)

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
        this.ingredientsTagsList = this.checkMatchIngredient

        // Filter the new ingredients list by input value
        this.filterByInput()

        // Refresh receipt
        this.dataFactoryReceipt.display(this.checkMatchData)

        // Refresh ingredient
        // this.createIngredient(this.checkMatchIngredient) - TO DELETE
        this.createIngredient(this.matchDataSearch)
    }

    searchTagsInput () {
        // Filter by input value
        this.filterByInput()


        // // Get the define tags list
        // this.dataSearch = this.ingredientsTagsList

        // console.log(this.dataSearch)
        // this.dataSearch.forEach((element) => {
        //     const rule = this.searchIngredientsInput.value.toLowerCase()
        //     const regEx = RegExp(rule, 'gm')

        //     const checkDataSearch = element.toLowerCase()
        //     const ingredientResult = checkDataSearch.match(regEx)

        //     if (ingredientResult != null) {
        //         this.matchDataSearch = this.matchDataSearch.filter(ingredient => ingredient.toLowerCase() != checkDataSearch)
                
        //         this.matchDataSearch.push(element)
        //     }
        // })

        // // Filter Ingredients list with the selected tags
        // this.tagsSelected.forEach((element) => {
        //     this.matchDataSearch = this.matchDataSearch.filter(arrayElement => arrayElement !== element)
        // })
        
        this.createIngredient(this.matchDataSearch)
        // console.log(this.matchDataSearch)
    }

    filterByInput () {
        // Reinitialize the matchDataSearch
        this.matchDataSearch = []

        // Get the define tags list
        this.dataSearch = this.ingredientsTagsList

        console.log(this.dataSearch)
        this.dataSearch.forEach((element) => {
            const rule = this.searchIngredientsInput.value.toLowerCase()
            const regEx = RegExp(rule, 'gm')

            const checkDataSearch = element.toLowerCase()
            const ingredientResult = checkDataSearch.match(regEx)

            if (ingredientResult != null) {
                this.matchDataSearch = this.matchDataSearch.filter(ingredient => ingredient.toLowerCase() != checkDataSearch)
                
                this.matchDataSearch.push(element)
            }
        })

        // Filter Ingredients list with the selected tags
        this.tagsSelected.forEach((element) => {
            this.matchDataSearch = this.matchDataSearch.filter(arrayElement => arrayElement !== element)
        })
    }
}
