import React, {Component} from 'react';

class Parent extends Component{

    constructor(props) {
        super(props)
        this.state = {
            dataForFunctional: 'Aaron',
            dataForClass: [1,2,3,4,5]
        }
    }


    render(){
        return (
            <div>
                <nav>
                    <h1>Home</h1>
                    <h1>About</h1>
                    <h1>Products</h1>
                </nav>
                <section>
                    <h1>This is where my children go</h1>
                </section>
            </div>
        )
    }
}

export default Parent