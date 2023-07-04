class PrimarySearch {
    constructor() {
        // Dom elements
        this.searchInputText = document.getElementById('search-input-text')
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

            // console.log(event)
        })
    }

    change() {
        // this.searchInputText.addEventListener('change', (event) => {
        //     console.log('change')
        // })
    }
}