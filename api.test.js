const assert = require("assert")
const { request } = require('@mattcbaker/blip')

describe("api test", () => {
    let actual = {}
    const expected = "hello world!"

    before(async () => {
        actual = await sayHelloToApi()
            })

    it("actual should equal expected", () => assert.ok(actual == expected, `Expected ${expected}, got ${actual}`))
})

async function sayHelloToApi() {
    const httpResult = await request({ url: 'http://localhost:3000/hello'})
    return httpResult.body.toString()
}