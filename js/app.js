"use strict";

class App {
    constructor() {
        // Data
        this.data = recipes // ./js/data/recipes/js - const recipes

        // Data factory
        this.dataFactory = new DataFactory()

        // Main search
        this.search = new PrimarySearch()
    }

    displayData() {
        this.dataFactory.display(this.data)
    }

    mainSearch() {
        // console.log(this.search.searchInputText)
        this.search.handleChange()
    }
}

let app = new App()
app.displayData()
app.mainSearch()