"use strict";

class App {
    constructor () {
        // Data
        this.data = recipes // ./js/data/recipes/js - const recipes
        
        // Component PrimarySearch
        this.primarySearch = new PrimarySearch(this.data)
    }

    mainSearch () {
        this.primarySearch.run(this.data)
        this.primarySearch.handleChange()
        this.primarySearch.tag()
    }
}

let app = new App()
app.mainSearch()
