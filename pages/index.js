import React, { Component, Fragment } from "react";
import Layout from '../components/Layout';
import HomePage from "../components/Home";













class Index extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <HomePage />
                </Layout>                
            </div>
        )
    }

}

export default Index;