class PrimarySearch {
    constructor() {
        // Dom elements
        this.searchInputText = document.getElementById('search-input-text')
    }

    handleChange() {
        

        this.searchInputText.addEventListener('keyup', (event) => {
            // var name = event.key;
            // var code = event.code;
            // console.log(name)
            // console.log(code)

            // console.log(event)
            console.log(this.searchInputText.value)
        })
    }

    change() {
        // this.searchInputText.addEventListener('change', (event) => {
        //     console.log('change')
        // })
    }
}