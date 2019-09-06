import groupBy from 'lodash/groupBy'

export const P_Split = 0.05
export const P_Sub = 0.1
export const P_continue = 0.8
export const P_Nothing = 0.05

export function random (f, e) {
  return Math.random() * (e - f) + f
}

export function chose (probabilities, choices) {
  let rand = Math.random()
  let sum = 0
  for (let index = 0; index < probabilities.length; index++) {
    let probability = probabilities[index]
    let end = sum + probability
    if (rand >= sum && rand < end) {
      return choices[index]
    }
    sum = end
  }
}

export function growTree (tree) {
  if (tree.children.length === 0) {
    let angle
    let width
    switch (chose([P_Split, P_Sub, P_continue, P_Nothing], ['split', 'sub', 'continue', 'nothing'])) {
      case 'split':
        angle = tree.angle + random(5, 50)
        width = tree.width - 0.25
        if (angle > -30 && angle < 210) {
          tree.children.push({
            width: (width > 0) ? width : tree.width,
            children: [],
            angle
          })
        }

        angle = tree.angle - random(5, 50)
        if (angle > -30 && angle < 210) {
          tree.children.push({
            width: (width > 0) ? width : tree.width,
            children: [],
            angle
          })
        }
        break
      case 'sub':
        angle = tree.angle + (((Math.round(Math.random()) === 0) ? -1 : 1) * random(0, 5))
        width = tree.width - 0.15
        if (angle > -30 && angle < 210) {
          tree.children.push({
            width: (width > 0) ? width : tree.width,
            children: [],
            angle
          })
        }
        width = tree.width - 0.35
        if (angle > -30 && angle < 210) {
          angle = tree.angle + ((Math.round(Math.random()) === 0) ? -1 : 1) * random(10, 40)
          tree.children.push({
            width: (width > 0) ? width : tree.width,
            children: [],
            angle
          })
        }
        break
      case 'continue':
        width = tree.width - 0.15
        angle = tree.angle + (((Math.round(Math.random()) === 0) ? -1 : 1) * random(0, 20))
        if (angle > -30 && angle < 210) {
          tree.children.push({
            width: (width > 0) ? width : tree.width,
            children: [],
            angle
          })
        }
        break
    }
  } else {
    tree.children.forEach(child => growTree(child))
  }
}

export function toDegrees (angle) {
  return angle * (180 / Math.PI)
}

export function toRadians (angle) {
  return angle * (Math.PI / 180)
}

export function drawLine (ctx, line) {
  ctx.lineWidth = line.width
  ctx.beginPath()
  ctx.moveTo(line.start.x, line.start.y)
  ctx.lineTo(line.end.x, line.end.y)
  ctx.closePath()
  ctx.stroke()
}

export function lineByAngle (start, width, length, angle) {
  let y = start.y - Math.sin(toRadians(angle)) * length
  let x = start.x + Math.cos(toRadians(angle)) * length
  return { start, length, width, end: { y, x } }
}

function makeTreePath (start, index, tree, result) {
  let line = lineByAngle(start, tree.width, 30, tree.angle)
  line.index = index
  result.push(line)
  for (let i = 0; i < tree.children.length; i++) {
    makeTreePath(line.end, index + i.toString(), tree.children[i], result)
  }
}

function onSegment (p, q, r) {
  return q.x <= Math.max(p.x, r.x) && q.x >= Math.min(p.x, r.x) &&
    q.y <= Math.max(p.y, r.y) && q.y >= Math.min(p.y, r.y)
}

function orientation (p, q, r) {
  let val = (q.y - p.y) * (r.x - q.x) -
    (q.x - p.x) * (r.y - q.y)
  if (val === 0) return 0
  return (val > 0) ? 1 : 2
}

function doIntersect (p1, q1, p2, q2) {

  let o1 = orientation(p1, q1, p2)
  let o2 = orientation(p1, q1, q2)
  let o3 = orientation(p2, q2, p1)
  let o4 = orientation(p2, q2, q1)

  if (o1 !== o2 && o3 !== o4)
    return true

  if (o1 === 0 && onSegment(p1, p2, q1)) return true

  if (o2 === 0 && onSegment(p1, q2, q1)) return true

  if (o3 === 0 && onSegment(p2, p1, q2)) return true

  if (o4 === 0 && onSegment(p2, q1, q2)) return true

  return false
}

function clearPaths (paths) {
  for (let i = 0; i < paths.length; i++) {
    for (let j = i + 1; j < paths.length; j++) {
      if (paths[i] && paths[j]) {
        if (paths[i].end === paths[j].start || paths[i].start === paths[j].start || paths[i].end === paths[j].end || paths[i].start === paths[j].end) continue
        if (doIntersect(paths[i].start, paths[i].end, paths[j].start, paths[j].end)) {
          let index = paths[j].index
          paths[j] = false
          let l = paths.findIndex(r => !!r && r.index.startsWith(index))
          while (l !== -1) {
            paths[l] = false
            l = paths.findIndex((r, ll) => {
              if (ll > l) {
                if (r) {
                  return r.index.startsWith(index)
                }
              }
              return false
            })
          }
        }
      }
    }
  }
}

export function drawTree (ctx, postCtx, tree) {
  const height = ctx.canvas.height
  let paths = []
  makeTreePath({ x: 0, y: height }, '0', tree, paths)
  clearPaths(paths)
  paths = paths.filter(p => p !== false)
  paths = groupBy(paths, p => p.index.length)
  for (let key in paths) {
    setTimeout(() => {
      paths[key].forEach(path => {
        drawLine(ctx, path)
      })
      postCtx.drawImage(ctx.canvas, 0, 0)
      postCtx.globalCompositeOperation = 'screen'
      postCtx.filter = 'blur(36px) brightness(200%)'
      postCtx.drawImage(ctx.canvas, 0, 0)
      postCtx.filter = 'blur(0)'
      postCtx.globalCompositeOperation = 'source-over'
    }, key * 10)
  }
}