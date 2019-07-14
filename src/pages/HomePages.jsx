import React from "react";
import DefaultLayout from "../layouts/defaultLayout";

class HomePages extends React.Component {
    state = {}
    componentWillMount() {
        console.log("HomePages::componentWillMount");

    }
    componentDidMount() {
        console.log("HomePage::componentDidMount");
    }

    render() {
        return (
            <DefaultLayout>
                hello OOdles
            </DefaultLayout>
        );
    }
}

export default HomePages;        