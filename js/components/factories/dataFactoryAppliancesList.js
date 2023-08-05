class DataFactoryAppliancesList {
    constructor () {
        // Dom elements
        this.searchAppliancesContainer = document.getElementById('search-appliances-container')
        this.li
    }

    createList (element) {
        this.li = document.createElement('li')
        this.li.setAttribute('class', 'search-secondary-comp__items-comp mb-1')
        this.li.textContent = element

        this.searchAppliancesContainer.appendChild(this.li)
    }
}
