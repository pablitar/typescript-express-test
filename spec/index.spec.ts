import { expect } from "chai"
import "mocha"
import { helperFunction } from "./test.helper"

describe("a test", () => {
    it("should calculate 1 + 1", () => {
        expect(1 + 1).to.eq(2)
    })

    it("should be able to import helper function", () => {
        expect(helperFunction()).to.eq("foobar")
    })
})