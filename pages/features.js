import React, { Component, Fragment } from "react";
import Layout from '../components/Layout';
import styled, { css } from "styled-components";
import Footer from "../components/Footer";
import { 
    BaseDiv,
    ServicesDiv,
    ServicesSegment,
    ServicesItem,
    ItemImageContainer,
    ItemImage,
    ItemHeading,
    ItemText
} from "./snippets";

export const AboutDiv = styled.div`
    margin: 0 10%;
    background-color: pink;
    min-height: 100px;
`


class About extends Component {
    render() {
        return (
            <Layout>
                <BaseDiv>
                    <ServicesDiv style={{marginBottom: '50px'}}>
                        <ServicesSegment>
                            <ServicesItem>
                                <ItemImageContainer>
                                    <ItemImage src="static/images/icon-access-anywhere.svg" />
                                </ItemImageContainer>
                                <ItemHeading>Access your files anywhere</ItemHeading>
                                <ItemText>The ability to use a smartphone, tablet or a computer to access your account means your files follow you everywhere.</ItemText>
                            </ServicesItem>

                            <ServicesItem>
                                <ItemImageContainer>
                                    <ItemImage src="static/images/icon-security.svg" />
                                </ItemImageContainer>
                                <ItemHeading>Security you can trust</ItemHeading>
                                <ItemText>2-factor authentication and user controlled encryption are just a couple of the security features we allow to help secure your files.</ItemText>
                            </ServicesItem>
                        </ServicesSegment>

                        <ServicesSegment>
                            <ServicesItem>
                                <ItemImageContainer>
                                    <ItemImage src="static/images/icon-collaboration.svg" />
                                </ItemImageContainer>
                                <ItemHeading>Real time collaboration</ItemHeading>
                                <ItemText>Securely share files and folders with friends, family and colleagues for life collaboration. No email attachments required.</ItemText>
                            </ServicesItem>

                            <ServicesItem>
                                <ItemImageContainer>
                                    <ItemImage src="static/images/icon-any-file.svg" />
                                </ItemImageContainer>
                                <ItemHeading>Store any type of file</ItemHeading>
                                <ItemText>Whether you are sharing holiday photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.</ItemText>
                            </ServicesItem>
                        </ServicesSegment>
                    </ServicesDiv>
                    <Footer />
                </BaseDiv>
            </Layout>                
        )
    }

}

export default About;