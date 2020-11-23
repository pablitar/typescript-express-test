import { Person } from '../src/person'
import { expect } from 'chai'

describe('person', () => {
    it('should calculate its full name', () => {
        const aPerson = new Person('Pepe', 'Grillote')
        expect(aPerson.fullName()).to.eq('Pepe Grillote')
    })
})