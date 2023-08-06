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

            const rule = this.searchInputText.value.toLowerCase()

            // Check name, ingredients and description
            this.data.forEach((element) => {

                // If the name match we push the result
                if (element.name.toLowerCase().includes(rule)) {
                    this.matchData.push(element)

                // If the description match we push the result
                } else if (element.description.toLowerCase().includes(rule)) {
                    this.matchData.push(element)

                // Check ingredients
                } else {

                    // Stock data specific element
                    const dataElement = element
                    
                    // Check ingredients
                    let isIngredientMatch = element.ingredients.some((element) => {
                        const checkDataIngredients = element.ingredient.toLowerCase()
                        return checkDataIngredients.includes(rule);
                    })

                    if (isIngredientMatch) {
                        this.matchData.push(dataElement)
                    }
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
