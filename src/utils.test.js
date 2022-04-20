const { transformDate, fetchData } = require("./utils")

describe("date tests", () => {
    test("check date", () => {
        let date = new Date(2022, 3, 20);
        expect(transformDate(date)).toEqual("20 апреля 2022 года")
    })

    test("check not date", () => {
        expect(transformDate(2022)).toBeNull()
    })

    test("check string date", () => {
        expect(transformDate("2022-04-20")).toEqual("20 апреля 2022 года")
    })

    test("check string date wrong format", () => {
        expect(transformDate("hello world")).toBeNull()
    })
})

describe('async tests', () => {
    test("fetch data", () => {
        fetchData()
            .then(response => response.json())
            .then(data => {
                expect(data).toHaveProperty("data")
            })
    })
})