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
        this.dataFactory = new DataFactoryReceipt()
        // Tag
        this.tags = new Tags()
    }

    run (data) {
        this.dataFactory.display(data)
    }

    handleChange () {
        // Display all receipts
        this.run(this.data)

        this.searchInputText.addEventListener('keyup', () => {

            // Start the search after 3 characters
            if (this.searchInputText.value.length > 2) {

                // Erase the previous search
                this.reinitialized()

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

                    // If the name matches we push the result
                    if (nameResult !== null) {
                        // console.log(checkDataName)
                        this.matchData.push(element)

                    // If the description matches we push the result
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

                            // If the ingredients matches we push the result if isn't already pushed
                            if (ingredientsResult !== null) {
                                console.log(checkDataIngredients)
                                this.matchData.push(dataElement)
                                
                                // array.length = index + 1 // We stop the loop <- Issue with this line
                            }
                        })
                    }
                })

                // Display the new search
                this.run(this.matchData)

                // Update tags
                this.tags.autoUpdate(this.matchData)

                // Update tags with input specific value already writed
                this.tags.searchTagsInput()

                // Reset the result for the new search
                this.matchData = []

            // make a default search if input is empty
            } else if (this.searchInputText.value === '') {
                this.run(this.data)

                // Update tags
                this.tags.autoUpdate(this.data)

                // Update tags with input specific value already writed
                this.tags.searchTagsInput()
            }

        }) //End event keyup
    }

    reinitialized () {
        this.rowReceipt.innerHTML = ""
    }

    tag () {
        this.tags.run(this.data)
        this.tags.searchEvent()
        this.tags.roll()
    }
}
