
if (window.localStorage['light'] == "false" ) {
  document.querySelector('body').style.backgroundColor = "yellow"
} else {
  document.querySelector('body').style.backgroundColor = "red"
}


const toggleTheme = () => {
  if (window.localStorage['light'] == "true" ) {
    window.localStorage.setItem('light', false)
    document.querySelector('body').style.backgroundColor = "yellow"
  } else {
    window.localStorage.setItem('light', true)
    document.querySelector('body').style.backgroundColor = "red"
  }
}