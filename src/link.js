// TODO: use rest operator in function parameters
// TODO: use let
// TODO: don't mutate any variable
// TODO: remove return statements
function wrapUrl(string) {
  return string.replace(/(https:\/\/([\w\.]+))/, '<a href="$1">$2</a>')
}

export function link() {
  const strings = arguments[0]
  const values = [].slice.call(arguments).slice(1)

  var str = ''
  strings.forEach((string, i) => {
    str += wrapUrl(string) + (values[i] ? wrapUrl(values[i]) : '')
  })
  return str
}
