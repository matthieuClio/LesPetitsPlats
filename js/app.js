"use strict";

class App {
    constructor () {
    constructor () {
        // Data
        this.data = recipes // ./js/data/recipes/js - const recipes
        
        
        // Component PrimarySearch
        this.primarySearch = new PrimarySearch(this.data)
        this.primarySearch = new PrimarySearch(this.data)
    }

    mainSearch () {
        this.primarySearch.handleChange()
        this.primarySearch.tagChange()
        this.primarySearch.tagChange()
    }
}

let app = new App()
app.mainSearch()