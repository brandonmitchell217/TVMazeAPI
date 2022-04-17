const container = document.querySelector('.container')
const button = document.querySelector('button')
let divArr = Array.from(document.querySelectorAll('.card'))
const noImg =
  'https://cdn-5fcbf5c4c1ac1a221c18568d.closte.com/wp-content/themes/ryse/assets/images/no-image/No-Image-Found-400x264.png'

class MakeDiv {
  constructor(image, text) {
    this.image = image
    this.text = text
  }
  get div() {
    return this.addElementDiv
  }

  addElementDiv(image, text) {
    this.element = document.createElement('div')
    this.element.classList.add('card')
    this.img = document.createElement('img')
    this.element.appendChild(this.img)
    this.img.src = image ? image.medium : noImg
    this.title = document.createElement('h1')
    this.element.appendChild(this.title)
    this.title.innerText = text
    container.insertAdjacentElement('afterbegin', this.element)
  }

  randomize() {
    console.log(Array.from(document.querySelectorAll('.card')).length)
  }
}

const init = async () => {
  const url = 'https://api.tvmaze.com/shows'

  await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      create(data)
      // data.slice(rnd, (rnd += 8)).forEach((dat) => {
      //   const initData = new MakeDiv()
      //   initData.div(dat.image, dat.name)
      //   initData.randomize()
      // })

      // if (cards.length > 8) {
      //   cards.slice(0, 8).forEach((crd) => {
      //     crd.style.display = 'none'
      //   })
      // } else {
      //   console.log('?', cards)
      // }
    })
    .catch((err) => {
      console.log(`error ${err}`)
    })
}

function create(data) {
  let rnd = Math.floor(Math.random() * data.length)
  data.slice(rnd, (rnd += 8)).forEach((dat) => {
    const initData = new MakeDiv()
    initData.div(dat.image, dat.name)
    initData.randomize()
  })
}

const random = document.addEventListener('DOMContentLoaded', init)
button.addEventListener('click', init)
