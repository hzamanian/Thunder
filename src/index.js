import './styles/reset.css'
import './styles/main.scss'
import { growTree, drawTree, random } from './Tree'

const canvas = document.createElement('canvas')
const canvas2 = document.createElement('canvas')
const music = document.createElement('audio')
music.src = 'assets/sound.mp3'
music.autoplay = true
music.controls = false
document.body.appendChild(music)
document.body.appendChild(canvas)
canvas.width = window.innerWidth
canvas.height = window.innerHeight - 3
document.body.appendChild(canvas2)
canvas2.width = window.innerWidth
canvas2.height = window.innerHeight - 3
const ctx = canvas.getContext('2d', { alpha: false })
let postCtx = canvas2.getContext('2d')
const colors = ['#FFFFFF','#8585FF']
ctx.strokeStyle = colors[Math.floor(random(0, colors.length))]

let tree = {
  angle: 45,
  width: 5,
  children: []
}

for (let i = 0; i < 30; i++) {
  growTree(tree)
}
drawTree(ctx, postCtx, tree)
