console.log("Hello world from app.js")
window.addEventListener('load', () => {
  const external = document.getElementById('external')
  external.innerHTML = '<h1 class="text-blue-600 mt-11">Hello there from app.js</h1>'
})