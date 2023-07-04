"use strict";

class App {
    constructor() {
        // Data
        this.data = recipes // ./js/data/recipes/js - const recipes
        // Component PrimarySearch
        this.primarySearch = new PrimarySearch()
    }

    mainSearch() {
        this.primarySearch.default(this.data)
        this.primarySearch.handleChange()
    }
}

let app = new App()
app.mainSearch()