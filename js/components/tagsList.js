class TagsList {
    constructor () {
        // Dom elements
        this.chevronDownIngredients = document.getElementById('icon-chevron-down-ingredients')
        this.chevronUpIngredients = document.getElementById('icon-chevron-up-ingredients')
        this.chevronDownAppliances = document.getElementById('icon-chevron-down-appliances')
        this.chevronUpAppliances = document.getElementById('icon-chevron-up-appliances')
        this.chevronDownUtensils = document.getElementById('icon-chevron-down-utensils')
        this.chevronUpUtensils = document.getElementById('icon-chevron-up-utensils')

        this.searchCompIngredients = document.getElementById('search-ingredients')
        this.searchCompAppliances = document.getElementById('search-appliances')
        this.searchCompUtensils = document.getElementById('search-utensils')

        this.searchIngredientsInput = document.getElementById('search-ingredients-input')
        this.searchIngredientsContainer = document.getElementById('search-ingredients-container')

        // Components
        // ..........
        this.dataFactoryTagsList = new DataFactoryTagsList()
        this.dataFactoryTags = new DataFactoryTags()
        this.dataFactoryReceipt = new DataFactoryReceipt()

        // Other
        this.isRollIngredients = false
        this.isRollAppliances = false
        this.isRollUtensils = false

        // Modification
        // ............
        this.ingredientsTagsList = []
        this.tagsSelected = []
        this.checkMatchData = []
        this.checkMatchIngredient = []
        this.matchData

        this.matchDataSearch
    }

    // MODIFICATIONS
    // Methods define in dataFactoryTags
    // ...

    searchEvent () {
        this.searchIngredientsInput.addEventListener('keyup', () => {
            this.searchTagsInput()
        })
    }

    searchTagsInput () {
        // Filter by input value
        this.filterByInput()
        this.ingredientList(this.matchDataSearch)
    }

    filterByInput () {
        // Reinitialize the matchDataSearch
        this.matchDataSearch = []

        // Get the define tags list
        this.ingredientsTagsList.forEach((element) => {
            const rule = this.searchIngredientsInput.value.toLowerCase()
            const regEx = RegExp(rule, 'gm')

            const checkDataSearch = element.toLowerCase()
            const ingredientResult = checkDataSearch.match(regEx)

            if (ingredientResult != null) {
                this.matchDataSearch = this.matchDataSearch.filter(ingredient => ingredient.toLowerCase() != checkDataSearch)
                
                this.matchDataSearch.push(element)
            }
        })

        // Filter ingredients list with the selected tags
        this.tagsSelected.forEach((element) => {
            this.matchDataSearch = this.matchDataSearch.filter(arrayElement => arrayElement !== element)
        })
    }

    refreshReceiptsTags (data) {
        // Update the data
        this.matchData = data

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
                // We add to a new array with the specific data
                this.checkMatchData.push(matchDataSpecificLine)
            }
        })
        console.log(this.checkMatchData)

        // Define specifc ingredients list
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
        this.ingredientList(this.matchDataSearch)
    }

    ingredientList (specificData) {
        // Delete the old Ingredients list
        this.searchIngredientsContainer.textContent = ''

        specificData.forEach((element) => {
            // Create ingredient list Dom element
            this.dataFactoryTagsList.createIngredientList(element)

            // Event : create tags
            this.dataFactoryTagsList.liIngredients.addEventListener('click', () => {
                this.dataFactoryTags.createTags(element)

                // Define a specific tag
                let specificTags = this.dataFactoryTags.tags

                // Event : Delete tags
                this.dataFactoryTags.iconColse.addEventListener('click', () => {
                    specificTags.remove()
                    this.tagsSelected = this.tagsSelected.filter(arrayElement => arrayElement !== element)

                    // Update the main search (receipt)
                    this.refreshReceiptsTags(this.matchData)
                })

                // Array will contain all tags selected
                this.tagsSelected.push(element)

                // Update the main search (receipt) and ingredients list
                this.refreshReceiptsTags(this.matchData)
            })
        })
    }

    roll () {
        // Ingredients
        this.chevronDownIngredients.addEventListener('click', () => {

            // Show ingredients list
            if (!this.isRollIngredients) {
                this.searchCompIngredients.classList.remove('search-secondary-default-comp')
                this.searchCompIngredients.classList.remove('overflow-hidden')
                this.searchCompIngredients.classList.add('overflow-auto')
                this.chevronDownIngredients.classList.add('d-none')
                this.chevronUpIngredients.classList.remove('d-none')
                this.isRollIngredients = true
            }
        })
        this.chevronUpIngredients.addEventListener('click', () => {
            // Hide ingredients list
            if (this.isRollIngredients) {
                this.searchCompIngredients.classList.add('class', 'search-secondary-default-comp')
                this.searchCompIngredients.classList.add('overflow-hidden')
                this.searchCompIngredients.classList.remove('overflow-auto')
                this.chevronDownIngredients.classList.remove('d-none')
                this.chevronUpIngredients.classList.add('d-none')
                this.isRollIngredients = false
            }
        })

        // Appliances
        this.chevronDownAppliances.addEventListener('click', () => {

            // Show appliances list
            if (!this.isRollAppliances) {
                this.searchCompAppliances.classList.remove('search-secondary-default-comp')
                this.searchCompAppliances.classList.remove('overflow-hidden')
                this.searchCompAppliances.classList.add('overflow-auto')
                this.chevronDownAppliances.classList.add('d-none')
                this.chevronUpAppliances.classList.remove('d-none')
                this.isRollAppliances = true

            }
        })
        this.chevronUpAppliances.addEventListener('click', () => {

            // Hide appliances list
            if (this.isRollAppliances) {
                this.searchCompAppliances.classList.add('class', 'search-secondary-default-comp')
                this.searchCompAppliances.classList.add('overflow-hidden')
                this.searchCompAppliances.classList.remove('overflow-auto')
                this.chevronDownAppliances.classList.remove('d-none')
                this.chevronUpAppliances.classList.add('d-none')
                this.isRollAppliances = false

            }
        })

        // Utensils
        this.chevronDownUtensils.addEventListener('click', () => {

            // Show appliances list
            if (!this.isRollUtensils) {
                this.searchCompUtensils.classList.remove('search-secondary-default-comp')
                this.searchCompUtensils.classList.remove('overflow-hidden')
                this.searchCompUtensils.classList.add('overflow-auto')
                this.chevronDownUtensils.classList.add('d-none')
                this.chevronUpUtensils.classList.remove('d-none')
                this.isRollUtensils = true

            }
        })
        this.chevronUpUtensils.addEventListener('click', () => {

            // Hide appliances list
            if (this.isRollUtensils) {
                this.searchCompUtensils.classList.add('class', 'search-secondary-default-comp')
                this.searchCompUtensils.classList.add('overflow-hidden')
                this.searchCompUtensils.classList.remove('overflow-auto')
                this.chevronDownUtensils.classList.remove('d-none')
                this.chevronUpUtensils.classList.add('d-none')
                this.isRollUtensils = false
            }
        })
    }
}