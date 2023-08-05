class PrimarySearch {
    constructor (data) {
        // Data
        this.data = data
        this.matchData = []

        // Dom elements
        this.rowReceipt = document.getElementById('row-receipts')
        this.searchInputText = document.getElementById('search-input-text')

        // Components
        // ..........
        this.tags = new TagsList()
    }  

    run (data) {
        this.tags.refreshReceipts(data)
    }

    handleChange () {
        this.searchInputText.addEventListener('keyup', () => {
            this.search()
        })
    }

    search () {
        // Start the search after 3 characters
        if (this.searchInputText.value.length > 2) {

            // Check name, ingredients and description
            this.data.forEach((element) => {

                const rule = this.searchInputText.value.toLowerCase()
                const regex = new RegExp(rule, 'gm')

                // Regex for name
                const checkDataName = element.name.toLowerCase()
                const nameResult = checkDataName.match(regex)

                // Regex for description
                const checkDataDescription = element.description.toLowerCase()
                const descriptionResult = checkDataDescription.match(regex)

                // If the name match we push the result
                if (nameResult !== null) {
                    this.matchData.push(element)

                // If the description match we push the result
                } else if (descriptionResult !== null) {
                    this.matchData.push(element)

                // Check ingredients
                } else {

                    // Stock data specific element
                    const dataElement = element

                    // Change to simple loop for !! - To change
                    element.ingredients.forEach((element, index, array) => {
                        // Regex for ingredients
                        const checkDataIngredients = element.ingredient.toLowerCase()
                        const ingredientsResult = checkDataIngredients.match(regex)

                        // If the ingredients match we push the result if isn't already pushed
                        if (ingredientsResult !== null) {
                            // console.log(checkDataIngredients)
                            this.matchData.push(dataElement)
                            
                            array.length = index + 1 // We stop the loop <- Issue with this line
                        }
                    })
                }
            })

            // Display the new search
            this.run(this.matchData)

            // Reset the result for the new search
            this.matchData = []

        // make a default search if input is empty
        } else if (this.searchInputText.value === '') {

            // Make a search with the default data
            this.run(this.data)
        }
    }

    tag () {
        this.tags.searchEvent()
        this.tags.roll()
    }
}
