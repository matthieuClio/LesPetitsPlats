class PrimarySearch {
    constructor (data) {
        // Data
        this.data = data
        // Dom elements
        this.searchInputText = document.getElementById('search-input-text')
        this.chevronDown = document.getElementById('icon-chevron-down')

        // Data factory
        this.dataFactory = new DataFactory()
    }

    default () {
        this.dataFactory.display(this.data)
    }

    handleChange () {
        this.searchInputText.addEventListener('keyup', (event) => {

            // Start the search after 3 characters
            if (this.searchInputText.value.length > 2) {

                // Check the correspondence of the name, ingredients and description compared to the data
                this.data.forEach((element) => {

                    let rule = this.searchInputText.value.toLowerCase()
                    let regex = new RegExp(rule, 'gm')

                    // Regex for name
                    let checkDataName = element.name.toLowerCase()
                    let nameResult = checkDataName.match(regex)
                    console.log(nameResult)

                    // Regex for description
                    let checkDataDescription = element.name.toLowerCase()
                    let descriptionResult = checkDataDescription.match(regex)
                    console.log(descriptionResult)

                    // Regex for ingredients


                    // The name matches
                    if(nameResult !== null) {
                        console.log(checkDataName)

                    // The description matches
                    } else if (descriptionResult !== null) {
                        console.log(checkDataDescription)
                    }

                    // The ingredients matches
                    element.ingredients.forEach((element) => {

                        if (this.searchInputText.value === element.ingredient) {
                            console.log('ingredients')
                        }
                    })
                })
            } // End condition search after 3 characters

        }) //End event keyup
    }

    tagChange() {
        this.chevronDown.addEventListener('click', () => {
            console.log(this.searchInputText.value)
        })
    }

    // No need for now - to delete
    change() {
        // this.searchInputText.addEventListener('change', (event) => {
        //     console.log('change')
        // })
    }
}
