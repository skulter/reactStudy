import React, { Component } from 'react';

class MyComponent extends Component {
    id = 5
    setId = (n) =>{
        this.id = n;
    }
    printId = () =>{
        console.log(this.id)
    }
    render() {
        return (
            <div>
                {Component }
            </div>
        );
    }
}

export default MyComponent;