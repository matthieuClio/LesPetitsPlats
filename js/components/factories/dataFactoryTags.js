class DataFactoryTags {
    constructor () {
        this.tags
        this.iconColse
        this.tagContainer = document.getElementById('tags-container')
    }

    createTags (element) {
        this.tags = document.createElement('div')
        this.iconColse = document.createElement('span')

        this.tags.setAttribute('class', 'tag-comp pt-2 pb-2 rounded-3 me-4 mb-2')
        this.iconColse.setAttribute('class', 'bi bi-x-lg ms-3')
        this.tags.textContent = element

        this.tagContainer.appendChild(this.tags)
        this.tags.appendChild(this.iconColse)
    }
}
