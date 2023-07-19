class PrimarySearch {
    constructor (data) {
        // Data
        this.data = data
        this.matchData = []

        // Dom elements
        this.rowReceipt = document.getElementById('row-receipts')
        this.searchInputText = document.getElementById('search-input-text')
        this.chevronDown = document.getElementById('icon-chevron-down')

        // Components
        // ..........
        // Data factory
        // this.dataFactoryReceipt = new DataFactoryReceipt() // - TO DELETE
        this.tags = new Tags()
    }  

    run (data) {
        // this.dataFactoryReceipt.display(data) // - TO DELETE
        this.tags.callMethodOtherObject(data)
    }

    handleChange () {
        this.searchInputText.addEventListener('keyup', () => {
            this.search()
        })
    }

    search () {
        // Start the search after 3 characters
        if (this.searchInputText.value.length > 2) {

            // Check the correspondence of the name, ingredients and description compared to the data
            this.data.forEach((element) => {

                const rule = this.searchInputText.value.toLowerCase()
                const regex = new RegExp(rule, 'gm')

                // Regex for name
                const checkDataName = element.name.toLowerCase()
                const nameResult = checkDataName.match(regex)
                // console.log(nameResult)

                // Regex for description
                const checkDataDescription = element.description.toLowerCase()
                const descriptionResult = checkDataDescription.match(regex)
                // console.log(descriptionResult)

                // If the name match we push the result
                if (nameResult !== null) {
                    // console.log(checkDataName)
                    this.matchData.push(element)

                // If the description match we push the result
                } else if (descriptionResult !== null) {
                    // console.log(checkDataDescription)
                    this.matchData.push(element)
                } else {

                    // Stock data specific element
                    const dataElement = element

                    element.ingredients.forEach((element, index, array) => {
                        // Regex for ingredients
                        const checkDataIngredients = element.ingredient.toLowerCase()
                        const ingredientsResult = checkDataIngredients.match(regex)

                        // If the ingredients match we push the result if isn't already pushed
                        if (ingredientsResult !== null) {
                            // console.log(checkDataIngredients)
                            this.matchData.push(dataElement)
                            
                            // array.length = index + 1 // We stop the loop <- Issue with this line
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
        this.tags.run(this.data)
        this.tags.searchEvent()
        this.tags.roll()
    }
}
