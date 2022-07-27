import React from "react";

class House extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            street: "jalan kemuning No.1",
            home: "warna biru",
            years: 1987
        };
    }

    render() {
        return (
            <div>
                <h1>{this.state.street}</h1>
                <h1>{this.state.home}</h1>
                <h1>{this.state.years}</h1>
            </div>
        )
    }
}

export default House;