class DataFactoryReceipt {
    constructor () {
        // Dom elements
        this.rowReceipt = document.getElementById('row-receipts')
        this.colReceipt
        this.containerReceipt
        this.figureReceipt
        this.imgReceipt
        this.timeReceipt
        this.infoReceipt
        this.h3Receipt
        this.h4Receipt
        this.descriptionReceipt
        this.h4SecondaryReceipt
        this.ingredientsReceipt
        this.infoDetailsReceipt
        this.infoDetailsH4Receipt
    }

    display (data) {
        this.rowReceipt.innerHTML = ''

        data.forEach(element => {
            this.colReceipt = document.createElement('div')
            this.containerReceipt = document.createElement('div')
            this.figureReceipt = document.createElement('figure')
            this.imgReceipt = document.createElement('img')
            this.timeReceipt = document.createElement('span')
            this.infoReceipt = document.createElement('div')
            this.h3Receipt = document.createElement('h3')
            this.h4Receipt = document.createElement('h4')
            this.descriptionReceipt = document.createElement('p')
            this.h4SecondaryReceipt = document.createElement('h4')
            this.ingredientsReceipt = document.createElement('div')

            this.colReceipt.setAttribute('class', 'col-4 no-padding')
            this.containerReceipt.setAttribute('class', 'receipt-comp rounded-3 position-relative')
            this.figureReceipt.setAttribute('class', 'receipt-comp__figure')
            this.imgReceipt.setAttribute('class', 'receipt-comp__figure__image')
            this.timeReceipt.setAttribute('class', 'receipt-comp__time position-absolute mt-3 me-3 rounded-5 pt-1 pb-1 ps-2 pe-2')
            this.infoReceipt.setAttribute('class', 'receipt-comp__info ps-3 pe-3')
            this.h3Receipt.setAttribute('class', 'mt-4')
            this.h4Receipt.setAttribute('class', 'receipt-comp__info__h4 fw-bold mt-4 mb-2')
            this.descriptionReceipt.setAttribute('class', 'font-size-13')
            this.h4SecondaryReceipt.setAttribute('class', 'receipt-comp__info__h4 fw-bold mt-4 mb-2')
            this.ingredientsReceipt.setAttribute('class', 'd-flex flex-wrap')

            this.imgReceipt.src = `./public/assets/photos/${element.image}`
            this.timeReceipt.textContent = `${element.time} min`
            this.h3Receipt.textContent = element.name
            this.h4Receipt.textContent = 'RECETTE'
            this.descriptionReceipt.textContent = element.description
            this.h4SecondaryReceipt.textContent = 'INGRÉDIENTS'

            // Ingredients names and quantity
            element.ingredients.forEach(element => {
                this.infoDetailsReceipt = document.createElement('span')
                this.infoDetailsH4Receipt = document.createElement('h4')

                this.infoDetailsReceipt.setAttribute('class', 'receipt-comp__info__details font-size-13 d-flex flex-column fw-bold mb-3') 
                this.infoDetailsH4Receipt.setAttribute('class', 'receipt-comp__info__h4')

                this.infoDetailsReceipt.textContent = element.ingredient
                this.infoDetailsH4Receipt.textContent = element.quantity

                this.ingredientsReceipt.appendChild(this.infoDetailsReceipt)
                this.infoDetailsReceipt.appendChild(this.infoDetailsH4Receipt)
            });

            this.rowReceipt.appendChild(this.colReceipt)
            this.colReceipt.appendChild(this.containerReceipt)
            this.containerReceipt.appendChild(this.figureReceipt)
            this.figureReceipt.appendChild(this.imgReceipt)
            this.containerReceipt.appendChild(this.timeReceipt)
            this.containerReceipt.appendChild(this.infoReceipt)
            this.infoReceipt.appendChild(this.h3Receipt)
            this.infoReceipt.appendChild(this.h4Receipt)
            this.infoReceipt.appendChild(this.descriptionReceipt)
            this.infoReceipt.appendChild(this.h4SecondaryReceipt)
            this.infoReceipt.appendChild(this.ingredientsReceipt)
        })
    } // End method display
}
