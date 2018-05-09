class Carousel{

  /**
  * @param {HTMLElement} element
  * @param {Object} options
  * @param {Object} options.slidesToScroll Nombre d'élément à faire défiler
  * @param {Object} options.slidesVisible Nombre d'élément visible dans un slide
  */

  constructor( element, options = {} ){

    this.element = element
    this.options = Object.assign({}, {
      slidesToScroll : 1,
      slidesVisible : 1
    }, options)

    this.children = [].slice.call(element.children)

    let ratio = this.children.length / this.options.slidesVisible
    let root = this.createDivWithClass('carousel')
    let container = this.createDivWithClass('carousel__container')

    container.style.width = (ratio * 100) + "%"
    root.appendChild(container)
    this.element.appendChild(root)

    this.children.forEach((child) => {
      let item = this.createDivWithClass('carousel__item')
      item.appendChild(child)
      container.appendChild(item)
    })
    debugger
  }


  /**
  *@param {string} Classname
  *@returns {HTMLElement}
  */

  createDivWithClass (className){
    let div = document.createElement('div')
    div.setAttribute('class', className)
    return div
  }

}

document.addEventListener('DOMContentLoaded', function() {

  new Carousel(document.querySelector('#carousel1'),{
    slidesToScroll : 3,
    slidesVisible : 3
  })

})
