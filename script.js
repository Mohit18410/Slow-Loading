'use strict'

const loadingNum = document.querySelector('.content')
const bg = document.querySelector('.bg')

let load = 0

const timer = setInterval(clearImage, 30)

function clearImage() {
  load++

  if (load > 99) clearInterval(timer)

  loadingNum.innerText = `${load}%`
  loadingNum.style.opacity = scale(load, 0, 100, 1, 0)
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}
