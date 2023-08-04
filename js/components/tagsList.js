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
        this.searchAppliancesInput = document.getElementById('search-appliances-input')
        this.searchUtensilsInput = document.getElementById('search-utensils-input')

        this.searchIngredientsContainer = document.getElementById('search-ingredients-container')
        this.searchAppliancesContainer = document.getElementById('search-appliances-container')
        this.searchUtensilsContainer = document.getElementById('search-utensils-container')
        
        // Components
        // ..........
        this.dataFactoryTags = new DataFactoryTags()
        this.dataFactoryIngredientsList = new DataFactoryIngredientsList()
        this.dataFactoryAppliancesList = new DataFactoryAppliancesList()
        this.dataFactoryUtensilsList = new DataFactoryUtensilsList()
        this.dataFactoryReceipt = new DataFactoryReceipt()

        // Other
        this.isRollIngredients = false
        this.isRollAppliances = false
        this.isRollUtensils = false

        // Modification
        // ............
        this.ingredientsList = []
        this.applianceList = []
        this.utensilsList = []
        this.tagsSelected = []
        this.checkMatchData = []
        this.checkMatchIngredients = []
        this.checkMatchAppliances = []
        this.checkMatchUtensils = []
        this.matchData

        this.matchDataSearchIngredients = []
        this.matchDataSearchAppliances = []
        this.matchDataSearchUtensils = []
        this.ingredients = 'ingredients'
        this.appliances = 'appliances'
        this.utensils = 'utensils'
    }

    searchEvent () {
        this.searchIngredientsInput.addEventListener('keyup', () => {
            this.searchInputList(this.ingredients)
        })

        this.searchAppliancesInput.addEventListener('keyup', () => {
            this.searchInputList(this.appliances)
        })

        this.searchUtensilsInput.addEventListener('keyup', () => {
            this.searchInputList(this.utensils)
        })
    }

    searchInputList (searchName) {

        // Check ingredients to filter
        if (searchName === this.ingredients) {

            // Reinitialize the matchDataSearch
            this.matchDataSearchIngredients = []

            // Filter ingredient by input value
            this.matchDataSearchIngredients = this.filterByInput(this.checkMatchIngredients, this.searchIngredientsInput, this.matchDataSearchIngredients)
        
            // Refresh ingredients
            this.list(this.matchDataSearchIngredients, this.searchIngredientsContainer, this.dataFactoryIngredientsList)
        
        // Check appliances to filter
        } else if (searchName === this.appliances) {

            // Reinitialize the matchDataSearch
            this.matchDataSearchAppliances = []
            
            // Filter appliances by input value
            this.matchDataSearchAppliances = this.filterByInput(this.checkMatchAppliances, this.searchAppliancesInput, this.matchDataSearchAppliances)

            // Refresh appliances
            this.list(this.matchDataSearchAppliances, this.searchAppliancesContainer, this.dataFactoryAppliancesList)
        
        // Check utensils to filter
        } else if (searchName === this.utensils) {
            
            // Reinitialize the matchDataSearch
            this.matchDataSearchUtensils = []

            // Filter ingredient by input value
            this.matchDataSearchUtensils = this.filterByInput(this.checkMatchUtensils, this.searchUtensilsInput, this.matchDataSearchUtensils)
        
            // Refresh ingredients
            this.list(this.matchDataSearchUtensils, this.searchUtensilsContainer, this.dataFactoryUtensilsList)
        }
    }

    filterByInput (listArray, searchInput, matchDataSearch) {

        // build the define list
        listArray.forEach((element) => {
            const rule = searchInput.value.toLowerCase()
            const regEx = RegExp(rule, 'gm')

            const checkDataSearch = element.toLowerCase()
            const listResult = checkDataSearch.match(regEx)

            if (listResult != null) {
                matchDataSearch = matchDataSearch.filter(element => element.toLowerCase() != checkDataSearch)
                matchDataSearch.push(element)
            }
        })

        // Filter list with the selected tags
        this.tagsSelected.forEach((element) => {
            matchDataSearch = matchDataSearch.filter(arrayElement => arrayElement.toLowerCase() !== element.toLowerCase())
        })
        
        return matchDataSearch
    }

    refreshReceipts (data) {
        // Update the data
        this.matchData = data

        // Reinitialize match data check
        this.checkMatchData = []
        this.checkMatchIngredients = []
        this.checkMatchAppliances = []
        this.checkMatchUtensils = []

        // Define new data array in tags comparison called checkMatchData
        this.matchData.forEach((element) => {

            let matchDataSpecificLine = element
            let tagsSelectedtoCheck = this.tagsSelected

            // Verify if all tags match with ingredients
            element.ingredients.forEach((element) => {
                tagsSelectedtoCheck = tagsSelectedtoCheck.filter(tag => tag.toLowerCase() !== element.ingredient.toLowerCase())
            })

            // Verify if all tags match with appliances
            tagsSelectedtoCheck = tagsSelectedtoCheck.filter(tag => tag.toLowerCase() !== element.appliance.toLowerCase())

            // Verify if all tags match with utensils
            element.ustensils.forEach((element) => {
                tagsSelectedtoCheck = tagsSelectedtoCheck.filter(tag => tag.toLowerCase() !== element.toLowerCase())
            })

            // All tags match
            if (tagsSelectedtoCheck.length === 0) {
                // We add to a new array with the specific data
                this.checkMatchData.push(matchDataSpecificLine)
            }
        })

        // Define specifc list
        this.checkMatchData.forEach((element) => {

            // Ingredients list
            element.ingredients.forEach((element) => {
                this.checkMatchIngredients.push(element.ingredient)
            })

            // Appliances list
            this.checkMatchAppliances.push(element.appliance)

            // Utensils list
            element.ustensils.forEach((element) => {
                this.checkMatchUtensils.push(element)
            })
        })

        // Filter lists with the selected tags
        this.tagsSelected.forEach((element) => {
            this.checkMatchIngredients = this.checkMatchIngredients.filter(arrayElement => arrayElement.toLowerCase() !== element.toLowerCase())
            this.checkMatchAppliances = this.checkMatchAppliances.filter(arrayElement => arrayElement.toLowerCase() !== element.toLowerCase())
            this.checkMatchUtensils = this.checkMatchUtensils.filter(arrayElement => arrayElement.toLowerCase() !== element.toLowerCase())
        })

        // Define new lists
        this.ingredientsList = this.checkMatchIngredients
        this.applianceList = this.checkMatchAppliances
        this.utensilsList = this.checkMatchUtensils


        // Reinitialize the matchDataSearch
        this.matchDataSearchIngredients = []
        this.matchDataSearchAppliances = []
        this.matchDataSearchUtensils = []

        // console.log(this.utensilsList)
        // Filter new lists by input value
        this.ingredientsList = this.filterByInput(this.ingredientsList, this.searchIngredientsInput, this.matchDataSearchIngredients)        
        this.applianceList = this.filterByInput(this.applianceList, this.searchAppliancesInput, this.matchDataSearchAppliances)
        this.utensilsList = this.filterByInput(this.utensilsList, this.searchUtensilsInput, this.matchDataSearchUtensils)

        // Refresh receipt
        this.dataFactoryReceipt.display(this.checkMatchData)

        // Refresh ingredient
        this.list(this.ingredientsList, this.searchIngredientsContainer, this.dataFactoryIngredientsList)

        // Refresh appliances
        this.list(this.applianceList, this.searchAppliancesContainer, this.dataFactoryAppliancesList)

        // Refresh utensils
        this.list(this.utensilsList, this.searchUtensilsContainer, this.dataFactoryUtensilsList)
    }

    list (specificData, searchContainer, dataFactory) {
        
        // Delete the old list
        searchContainer.textContent = ''

        specificData.forEach((element) => {
            // Create ingredient list Dom element
            dataFactory.createList(element)

            // Event : create tags
            dataFactory.li.addEventListener('click', () => {
                // Create tag
                this.dataFactoryTags.createTags(element)

                // Define the specific tag
                let specificTags = this.dataFactoryTags.tags

                // Event : Delete tags
                this.dataFactoryTags.iconColse.addEventListener('click', () => {
                    specificTags.remove()
                    this.tagsSelected = this.tagsSelected.filter(arrayElement => arrayElement !== element)

                    // Update the main search (receipt) and list
                    this.refreshReceipts(this.matchData)
                })

                // Array will contain all tags selected
                this.tagsSelected.push(element)

                // Update the main search (receipt) and list
                this.refreshReceipts(this.matchData)
            })
        })
    }

    roll () {
        this.rollRun(this.chevronDownIngredients, this.chevronUpIngredients, this.isRollIngredients, this.searchCompIngredients)
        this.rollRun(this.chevronDownAppliances, this.chevronUpAppliances, this.isRollAppliances, this.searchCompAppliances)
        this.rollRun(this.chevronDownUtensils, this.chevronUpUtensils, this.isRollUtensils, this.searchCompUtensils)
    }

    rollRun (chevronDown, chevronUp, isRoll, searchComp) {
        
        // Event : show
        chevronDown.addEventListener('click', () => {

            // Show list
            if (!isRoll) {
                searchComp.classList.remove('search-secondary-default-comp')
                searchComp.classList.remove('overflow-hidden')
                searchComp.classList.add('overflow-auto')
                chevronDown.classList.add('d-none')
                chevronUp.classList.remove('d-none')
                isRoll = true
            }
        })

        // Event : hide
        chevronUp.addEventListener('click', () => {

            // Hide list
            if (isRoll) {
                searchComp.classList.add('class', 'search-secondary-default-comp')
                searchComp.classList.add('overflow-hidden')
                searchComp.classList.remove('overflow-auto')
                chevronDown.classList.remove('d-none')
                chevronUp.classList.add('d-none')
                isRoll = false
            }
        })
    }
} // End class
