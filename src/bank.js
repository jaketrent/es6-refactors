// TODO: convert to class
// TODO: convert to concise methods
// TODO: convert balance to a getter
// TODO: convert to string template
export function Bank(amount) {
  this.amount = parseFloat(amount)
  this.balance = '$' + this.amount
}
Bank.prototype.deposit = function(amount) {
  this.amount = this.amount + parseFloat(amount)
  this.balance = '$' + this.amount
}
Bank.prototype.withdraw = function(amount) {
  this.amount = this.amount - parseFloat(amount)
  this.balance = '$' + this.amount
}
