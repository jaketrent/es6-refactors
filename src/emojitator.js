// TODO: convert to class syntax
// TODO: use concise method syntax
// TODO: avoid manual function binding
// TODO: destructure when accessing opts
export function Emojitator(opts) {
  this.index = 0
  this.opts = opts
}
Emojitator.prototype.start = function() {
  function rotate() {
    this.index =
      this.index + 1 > this.opts.emoji.length - 1 ? 0 : this.index + 1
  }
  setInterval(rotate.bind(this), this.opts.interval)
}
Emojitator.prototype.getActive = function() {
  return this.opts.emoji[this.index]
}
