class PrimarySearch {
    constructor (data) {
        // Data
        this.data = data
        this.matchData = []

        // Dom elements
        this.rowReceipt = document.getElementById('row-receipts')
        this.searchInputText = document.getElementById('search-input-text')
        this.chevronDown = document.getElementById('icon-chevron-down')

        // Data factory
        this.dataFactory = new DataFactory()
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
                        console.log(checkDataName)
                        this.matchData.push(element)

                    // If the description matches we push the result
                    } else if (descriptionResult !== null) {
                        console.log(checkDataDescription)
                        this.matchData.push(element)
                    }

                    // Stock data specific element
                    const dataElement = element

                    element.ingredients.forEach((element) => {

                        // Regex for ingredients
                        const checkDataIngredients = element.ingredient.toLowerCase()
                        const ingredientsResult = checkDataIngredients.match(regex)

                        // If the ingredients matches we push the result if isn't already pushed
                        if (nameResult === null && descriptionResult === null && ingredientsResult !== null) {
                            console.log(checkDataIngredients)
                            this.matchData.push(dataElement)
                        }
                    })
                })
                // Display the new search
                this.run(this.matchData)

                // Reset the result for the new search
                this.matchData = []

            // make a default search if input is empty
            } else if (this.searchInputText.value === '') {
                this.run(this.data)
            }

        }) //End event keyup
    }

    tagChange() {
        this.chevronDown.addEventListener('click', () => {
            console.log(this.searchInputText.value)
        })
    }

    reinitialized() {
        this.rowReceipt.innerHTML = ""
    }
}
