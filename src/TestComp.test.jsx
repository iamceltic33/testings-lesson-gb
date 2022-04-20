const { render } = require("@testing-library/react")
const { default: TestComp } = require("./TestComp")

describe("markup test", () => {
    test("Component has input", () => {
        const component = render(<TestComp />)
        const input = component.getByRole("textbox")
        expect(input).toBeInTheDocument();
    })

    test("Component has button", () => {
        const component = render(<TestComp />)
        const button = component.getByRole("button")
        expect(button).toBeInTheDocument();
    })

    test("Component has text", () => {
        const component = render(<TestComp />)
        const text = component.getByText("Введите ваше имя")
        expect(text).toBeInTheDocument();
    })
})