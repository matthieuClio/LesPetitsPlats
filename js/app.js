"use strict";

class App {
    constructor() {
        // Data
        this.data = recipes // ./js/data/recipes/js - const recipes

        // Data factory
        this.dataFactory = new DataFactory()

        // Main search
        this.primarySearch = new PrimarySearch()
    }

    displayData() {
        this.dataFactory.display(this.data)
    }

    mainSearch() {
        // console.log(this.search.searchInputText)
        this.primarySearch.handleChange()
    }
}

let app = new App()
app.displayData()
app.mainSearch()