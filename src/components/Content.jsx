import { Component } from 'react'

// let's write Content in the other form of React Components
// 1) functional Component (basically a function returning JSX)
// 2) the Class Component (much more powerful, a little more verbose to write)

// what is a Class? think about it as a blueprint
// every time you're going to use the class, you're creating an INSTANCE of the class
// class HumanBeing
// class StriveStudent extends HumanBeing

class Content extends Component {
    // we're extending Component (the main component of react) for getting automatically some abilities
    render() {
        return (
            <div>
                <h2>CONTENT OF THE PAGE</h2>
                <p>this component is made from a class</p>
            </div>
        )
    }
}

export default Content