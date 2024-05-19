const mainTitle = document.getElementById('main-title')
mainTitle.textContent = 'Welcome to Our Cat Adoption Center'

const description = document.getElementById('description')
description.textContent = 'Find your purrfect companion!'

document.getElementById('cat-1-button').addEventListener('click', () => {
  const cat = document.getElementById('cat-1')
  alert('Congrats on adopting your new friend!')
  cat.remove()
})

document.getElementById('cat-2-button').addEventListener('click', () => {
  const cat = document.getElementById('cat-2')
  alert('Congrats on adopting your new friend!')
  cat.remove()
})

document.getElementById('cat-3-button').addEventListener('click', () => {
  const cat = document.getElementById('cat-3')
  alert('Congrats on adopting your new friend!')
  cat.remove()
})