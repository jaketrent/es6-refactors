// TODO: use default param for origColor
// TODO: use computed property name
// TODO: use object spread operator
// TODO: remove all return statements
export function blend(origColor, newColor) {
  if (!origColor) origColor = { r: 255, g: 255, b: 255 }

  if ('r' in newColor) {
    origColor.r = (origColor.r + newColor.r) / 2
  }
  if ('g' in newColor) {
    origColor.g = (origColor.g + newColor.g) / 2
  }
  if ('b' in newColor) {
    origColor.b = (origColor.b + newColor.b) / 2
  }

  return origColor
}
