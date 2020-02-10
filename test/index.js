const assert = require('assert')
const Tag = require('../dist/site-hungry')

describe('Class Tag', function() {

	let tag

  describe('Constructor', function() {	

    it('Creates object', function() {
			tag = new Tag('div')
      assert.equal(typeof tag, 'object')
    })

		it('Sets name property', function() {
      assert.equal(tag.name, 'div')
    })

  })

	describe('Getters', function() {

		it('valid', function() {
      assert.equal(tag.valid, true)
    })

		it('iterableContainer', function() {
      assert.equal(tag.iterableContainer, false)
    })

		it('iterable', function() {
      assert.equal(tag.iterable, false)
    })

		it('category', function() {
      assert.equal(tag.category, 'Container')
    })

	})

})