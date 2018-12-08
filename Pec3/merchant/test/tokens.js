var Tokens = artifacts.require('./Tokens.sol')

contract('Tokens', function (accounts) {

    it('should put 100000 Tokens in the first account', function () {
      return Tokens.deployed().then(function (instance) {
        return instance.balanceOf.call(accounts[0])
      }).then(function (balance) {
        assert.equal(balance.valueOf(), 100000, "100000 wasn't in the first account")
      })
    })

    it('should be 100000 Tokens as total supply', function () {
        return Tokens.deployed().then(function (instance) {
          return instance.totalSupply.call()
        }).then(function (balance) {
          assert.equal(balance.valueOf(), 100000, "100000 wasn't the total supply")
        })
    })

    it('should put RicToken as token name', function () {
        return Tokens.deployed().then(function (instance) {
          return instance.getName.call()
        }).then(function (name) {
          assert.equal(name.valueOf(), "RicToken", "RicToken wasn't the token name")
        })
    })

    it('should put RIC as token symbol', function () {
        return Tokens.deployed().then(function (instance) {
          return instance.getSymbol.call()
        }).then(function (name) {
          assert.equal(name.valueOf(), "RIC", "RIC wasn't the token symbol")
        })
    })

  
    it('should send tokens correctly', function () {
      var token
  
      // Get initial balances of first and second account.
      var accountOne = accounts[0]
      var accountTwo = accounts[1]
  
      var accountOneStartingBalance
      var accountTwoStartingBalance
      var accountOneEndingBalance
      var accountTwoEndingBalance
  
      var amount = 100
  
      return Tokens.deployed().then(function (instance) {
        token = instance
        return token.balanceOf.call(accountOne)
      }).then(function (balance) {
        accountOneStartingBalance = balance.toNumber()
        return token.balanceOf.call(accountTwo)
      }).then(function (balance) {
        accountTwoStartingBalance = balance.toNumber()
        return token.transfer(accountTwo, amount, { from: accountOne })
      }).then(function () {
        return token.balanceOf.call(accountOne)
      }).then(function (balance) {
        accountOneEndingBalance = balance.toNumber()
        return token.balanceOf.call(accountTwo)
      }).then(function (balance) {
        accountTwoEndingBalance = balance.toNumber()
  
        assert.equal(
          accountOneEndingBalance,
          accountOneStartingBalance - amount,
          "Amount wasn't correctly taken from the sender"
        )
        assert.equal(
          accountTwoEndingBalance,
          accountTwoStartingBalance + amount,
          "Amount wasn't correctly sent to the receiver"
        )
      })
    })

    it('should mint tokens correctly', function () {
        var token
        // Get initial balances of first and second account.
        var startingSupply
        var endingSupply

        var amount = 1000
    
        return Tokens.deployed().then(function (instance) {
          token = instance
          return token.totalSupply.call()
        }).then(function (supply) {
          startingSupply = supply.toNumber()
          return token.mint(amount)
        }).then(function () {
          return token.totalSupply.call()
        }).then(function (supply) {
          endingSupply = supply.toNumber()
    
          assert.equal(
            endingSupply,
            startingSupply + amount,
            "Amount wasn't correctly taken from the sender"
          )
        })
      })

      it('should burn tokens correctly', function () {
        var token
        // Get initial balances of first and second account.
        var startingSupply
        var endingSupply

        var amount = 1000
    
        return Tokens.deployed().then(function (instance) {
          token = instance
          return token.totalSupply.call()
        }).then(function (supply) {
          startingSupply = supply.toNumber()
          return token.burn(amount)
        }).then(function () {
          return token.totalSupply.call()
        }).then(function (supply) {
          endingSupply = supply.toNumber()
    
          assert.equal(
            endingSupply,
            startingSupply - amount,
            "Amount wasn't correctly taken from the sender"
          )
        })
      })


  })
  