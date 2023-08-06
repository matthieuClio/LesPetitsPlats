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
            for (let i = 0; i < this.data.length -1; i++) {

                // If the name match we push the result
                if (this.data[i].name.toLowerCase().includes(rule)) {
                    this.matchData.push(this.data[i])

                // If the description match we push the result
                } else if (this.data[i].description.toLowerCase().includes(rule)) {
                    this.matchData.push(this.data[i])

                // Check ingredients
                } else {

                    // Stock data specific element
                    const dataElement = this.data[i]

                     // Check ingredients
                    let isIngredientMatch = this.data[i].ingredients.some((element) => {
                        const checkDataIngredients = element.ingredient.toLowerCase()
                        return checkDataIngredients.includes(rule);
                    })

                    if (isIngredientMatch) {
                        this.matchData.push(dataElement)
                    }
                }
            }

            // Display the new search
            this.run(this.matchData)

            // Reset the result for the new search
            this.matchData = []

        // Make a default search if input is empty
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
