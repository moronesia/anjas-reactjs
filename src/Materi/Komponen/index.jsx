import React from "react";
import ClassComponent from "./Pembahasan/ClassComponent";
import FunctionalComponent from "./Pembahasan/FunctionalComponent";
import House from "./Pembahasan/House";

class Komponen extends React.Component {
    render() {
        return (
            <div>
                <ClassComponent nama="John"/>
                <FunctionalComponent nama="John"/>
                <House />
            </div>
        )
    }
}

export default Komponen;