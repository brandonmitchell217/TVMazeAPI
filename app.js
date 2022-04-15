const form = document.querySelector('#searchForm')
const container = document.querySelector('.container')

const initData = async (shows) => {
  try {
    const res = await axios.get(`https://api.tvmaze.com/shows`)

    for (let i = 0; i < 8; i++) {
      makeDiv(res.data[i])
    }
  } catch {
    console.log('error')
  }
}
const searchForm = async (e) => {
  e.preventDefault()
  try {
    const val = document.querySelector('input').value
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${val}`)
    // console.log(res.data[0].show)

    for (let i = 0; i < 8; i++) {
      makeDiv(res.data[i].show)
    }
  } catch {
    console.log('Error')
  }
}

document.addEventListener('DOMContentLoaded', initData)
form.addEventListener('submit', searchForm)

function makeDiv(results) {
  const imageRes = results.image.medium
  const imageResOri = results.image.original
  const nameRes = results.name
  const div = document.createElement('div')
  const image = document.createElement('img')
  const title = document.createElement('h1')
  div.append(image)
  div.append(title)
  // console.log(results.image)
  image.src = imageRes

  title.innerText = nameRes
  container.append(div)
}
