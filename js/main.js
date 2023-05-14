// Variables para Drowpdowns
function open(){
    return{
        open: false,
        timeout: null,
        // Abrir o cerrar menú en móvil
        isOpen(){
            this.open =  !this.open
        },
        // Abrir menú mediante mouseenter o cuando el mouse entra
        enterOpen(){
            this.open = true
            clearTimeout(this.timeout)
        },
        // Cerrar menú mediante mouseleave o cuando el mouse sale
        leaveOpen(){
            this.timeout = setTimeout(() => { this.open = false }, 200)
        }

    }
}
// Carrusel del final de la página
function getCarouselData() {
    return {
        currentIndex: 0,
        images: [
            'img/800x800/img_example1.jpg',
            'img/800x800/img_example2.jpg',
            'img/800x800/img_example3.jpg',
            'img/800x800/img_example4.jpg',
            'img/800x800/img_example5.jpg',
            'img/800x800/img_example6.jpg',
            'img/800x800/img_example7.jpg',
            'img/800x800/img_example8.jpg',
            'img/800x800/img_example9.jpg'
        ],
        increment() {
            this.currentIndex = this.currentIndex === this.images.length - 6 ? 0 : this.currentIndex + 1;
        },
        decrement() {
            this.currentIndex = this.currentIndex === this.images.length - 6 ? 0 : this.currentIndex - 1;
        },
    }
}