const songList = document.querySelector('form#songList')

function renderListItem(fieldName, value) {
  const li = document.createElement('li')
  li.innerHTML = `${fieldName}: ${value}`
  return li
}

function renderList(songData) {
  const list = document.createElement('ul')

  Object.keys(songData).map(function(fieldName) {
    const li = renderListItem(fieldName, songData[fieldName])
    list.appendChild(li)
  })

  return list
}

function handleSubmit(ev) {
  ev.preventDefault()
  const f = ev.target
  const details = document.querySelector('#details')

  const song = {
    song: f.songInput.value,
  }



  details.appendChild(renderList(song))
}

songList.addEventListener('submit', handleSubmit)