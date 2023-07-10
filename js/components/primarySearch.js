class PrimarySearch {
    constructor() {
        // Dom elements
        this.rowReceipt = document.getElementById('row-receipts')
        this.searchInputText = document.getElementById('search-input-text')
        this.chevronDown = document.getElementById('icon-chevron-down')

        // Data factory
        this.dataFactory = new DataFactory()
    }

    default(data) {
        this.dataFactory.display(data)
    }

    handleChange() {
        this.searchInputText.addEventListener('keyup', (event) => {
            // Start the search after 3 characters
            if(this.searchInputText.value.length > 2) {
                console.log(this.searchInputText.value)
            }
            // var name = event.key;
            // var code = event.code;
            // console.log(name)
            // console.log(code)

    tagChange() {
        this.chevronDown.addEventListener('click', () => {
            console.log(this.searchInputText.value)
        })
    }

    change() {
        // this.searchInputText.addEventListener('change', (event) => {
        //     console.log('change')
        // })
    }
}
