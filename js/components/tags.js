class Tags {
    constructor () {
        // Dom elements
        this.chevronDownIngredients = document.getElementById('icon-chevron-down-ingredients')
        this.chevronUpIngredients = document.getElementById('icon-chevron-up-ingredients')
        this.chevronDownAppliances = document.getElementById('icon-chevron-down-appliances')
        this.chevronUpAppliances = document.getElementById('icon-chevron-up-appliances')
        this.chevronDownUtensils = document.getElementById('icon-chevron-down-utensils')
        this.chevronUpUtensils = document.getElementById('icon-chevron-up-utensils')

        this.searchCompIngredients = document.getElementById('search-ingredients')
        this.searchCompAppliances = document.getElementById('search-appliances')
        this.searchCompUtensils = document.getElementById('search-utensils')

        // Other
        this.isRollIngredients = false
        this.isRollAppliances = false
        this.isRollUtensils = false

        // Components
        // ..........
        this.dataFactoryTags = new DataFactoryTags()
    }

    run (data) {
        this.dataFactoryTags.displayIngredients(data)
    }

    roll () {
        // Ingredients
        this.chevronDownIngredients.addEventListener('click', () => {

            // Show ingredients list
            if (!this.isRollIngredients) {
                this.searchCompIngredients.classList.remove('search-secondary-default-comp')
                this.searchCompIngredients.classList.remove('overflow-hidden')
                this.searchCompIngredients.classList.add('overflow-auto')
                this.chevronDownIngredients.classList.add('d-none')
                this.chevronUpIngredients.classList.remove('d-none')
                this.isRollIngredients = true

            }
        })
        this.chevronUpIngredients.addEventListener('click', () => {
            // Hide ingredients list
            if (this.isRollIngredients) {
                this.searchCompIngredients.classList.add('class', 'search-secondary-default-comp')
                this.searchCompIngredients.classList.add('overflow-hidden')
                this.searchCompIngredients.classList.remove('overflow-auto')
                this.chevronDownIngredients.classList.remove('d-none')
                this.chevronUpIngredients.classList.add('d-none')
                this.isRollIngredients = false
            }
        })

        // Appliances
        this.chevronDownAppliances.addEventListener('click', () => {

            // Show appliances list
            if (!this.isRollAppliances) {
                this.searchCompAppliances.classList.remove('search-secondary-default-comp')
                this.searchCompAppliances.classList.remove('overflow-hidden')
                this.searchCompAppliances.classList.add('overflow-auto')
                this.chevronDownAppliances.classList.add('d-none')
                this.chevronUpAppliances.classList.remove('d-none')
                this.isRollAppliances = true

            }
        })
        this.chevronUpAppliances.addEventListener('click', () => {

            // Hide appliances list
            if (this.isRollAppliances) {
                this.searchCompAppliances.classList.add('class', 'search-secondary-default-comp')
                this.searchCompAppliances.classList.add('overflow-hidden')
                this.searchCompAppliances.classList.remove('overflow-auto')
                this.chevronDownAppliances.classList.remove('d-none')
                this.chevronUpAppliances.classList.add('d-none')
                this.isRollAppliances = false

            }
        })

        // Utensils
        this.chevronDownUtensils.addEventListener('click', () => {

            // Show appliances list
            if (!this.isRollUtensils) {
                this.searchCompUtensils.classList.remove('search-secondary-default-comp')
                this.searchCompUtensils.classList.remove('overflow-hidden')
                this.searchCompUtensils.classList.add('overflow-auto')
                this.chevronDownUtensils.classList.add('d-none')
                this.chevronUpUtensils.classList.remove('d-none')
                this.isRollUtensils = true

            }
        })
        this.chevronUpUtensils.addEventListener('click', () => {

            // Hide appliances list
            if (this.isRollUtensils) {
                this.searchCompUtensils.classList.add('class', 'search-secondary-default-comp')
                this.searchCompUtensils.classList.add('overflow-hidden')
                this.searchCompUtensils.classList.remove('overflow-auto')
                this.chevronDownUtensils.classList.remove('d-none')
                this.chevronUpUtensils.classList.add('d-none')
                this.isRollUtensils = false
            }
        })
    }
}