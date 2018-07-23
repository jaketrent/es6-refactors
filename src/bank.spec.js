import { Bank } from './bank'

describe('#constructor', () => {
  it('begins with amount', () => {
    const bank = new Bank('12.34')
    expect(bank.balance).toEqual('$12.34')
  })
})

describe('#deposit', () => {
  it('adds the amount', () => {
    const bank = new Bank('12.34')
    bank.deposit('56.78')
    expect(bank.balance).toEqual('$69.12')
  })
})

describe('#withdraw', () => {
  it('removes the amount', () => {
    const bank = new Bank('12.34')
    bank.withdraw('56.78')
    expect(bank.balance).toEqual('$-44.44')
  })
})
