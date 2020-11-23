export class Person {
    constructor(public name: string, public lastName: string) {

    }

    fullName() {
        return `${this.name} ${this.lastName}`
    }
}