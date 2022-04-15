const container = document.querySelector('.container')
const searchForm = document.getElementById('searchForm')
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
    container.appendChild(this.element)
  }
}

const init = async () => {
  const url = 'https://api.tvmaze.com/shows'

  await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      data.slice(0, 8).forEach((dat) => {
        const initData = new MakeDiv()
        initData.div(dat.image, dat.name)
      })
    })
    .catch((err) => {
      console.log(`error ${err}`)
    })
}

document.addEventListener('DOMContentLoaded', init)
searchForm.addEventListener('submit', (e) => {
  e.preventDefault()
  search()
})

async function search(e) {
  let inpVal = searchForm[0].value
  const url = `https://api.tvmaze.com/search/shows?q=${inpVal}`
  await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      data.slice(0, 8).map((dat) => {
        const searchData = new MakeDiv()
        searchData.div(dat.show.image, dat.show.name)
      })
    })
}
