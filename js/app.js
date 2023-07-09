"use strict";

class App {
    constructor () {
        // Data
        this.data = recipes // ./js/data/recipes/js - const recipes
        
        // Component PrimarySearch
        this.primarySearch = new PrimarySearch(this.data)
    }

    mainSearch () {
        this.primarySearch.default() // Display all receipts
        this.primarySearch.handleChange()
        this.primarySearch.tagChange()
    }
}

let app = new App()
app.mainSearch()