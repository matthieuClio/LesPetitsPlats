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
            for (let i = 0; i < this.data.length -1; i++) {
                const rule = this.searchInputText.value.toLowerCase()
                const regex = new RegExp(rule, 'gm')

                // Regex for name
                const checkDataName = this.data[i].name.toLowerCase()
                const nameResult = checkDataName.match(regex)

                // Regex for description
                const checkDataDescription = this.data[i].description.toLowerCase()
                const descriptionResult = checkDataDescription.match(regex)

                // If the name match we push the result
                if (nameResult !== null) {
                    this.matchData.push(this.data[i])

                // If the description match we push the result
                } else if (descriptionResult !== null) {
                    this.matchData.push(this.data[i])

                // Check ingredients
                } else {

                    // Stock data specific element
                    const dataElement = this.data[i]
                    
                    // Check all ingredients
                    for (let i = 0; i < dataElement.ingredients.length -1; i++) {
                        // Regex for ingredients
                        const checkDataIngredients = dataElement.ingredients[i].ingredient.toLowerCase()
                        const ingredientsResult = checkDataIngredients.match(regex)

                        // If the ingredients match we push the result if isn't already pushed
                        if (ingredientsResult !== null) {
                            console.log(checkDataIngredients)
                            this.matchData.push(dataElement)
                            break
                        }
                    }
                }
            }

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
