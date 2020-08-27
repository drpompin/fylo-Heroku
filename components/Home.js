import React, { Component, Fragment } from "react";

import {
    BaseDiv,
    StartDiv,
    StartImage,
    StartHeading,
    StartText,
    StartButton,
    ServicesDiv,
    ServicesSegment,
    ServicesItem,
    ItemImageContainer,
    ItemImage,
    ItemHeading,
    ItemText,
    WorksDiv,
    WorksDivLeft,
    WorksImage,
    WorksDivRight,
    WorksHeading,
    WorksTextLink,
    ReviewDiv,
    ReviewIcon,
    ReviewCards,
    ReviewText,
    ReviewProfile,
    ReviewImageContainer,
    ReviewImage,
    ReviewDetail,
    ReviewName,
    ReviewTitle,

} from "../pages/snippets";
import Footer from "./Footer";


class HomePage extends Component {

    render() {
        return (
            <BaseDiv>
                <StartDiv>
                    <StartImage src="static/images/illustration-intro.png" />

                    <StartHeading>
                        All your files in one secure location, accessible anywhere.
                            </StartHeading>

                    <StartText>Fylo stores all your most important files in one secure location. Access them whenever you need; share and collaborate with friends, family and co-workers.</StartText>

                    <StartButton>Get Started</StartButton>
                </StartDiv>

                <ServicesDiv id="featuresId">
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

                <WorksDiv>
                    <WorksDivLeft>
                        <WorksImage src="static/images/illustration-stay-productive.png" />
                    </WorksDivLeft>

                    <WorksDivRight>
                        <WorksHeading>Stay productive, wherever you are.</WorksHeading>
                        <ItemText style={{ textAlign: 'left', margin: '20px 0' }}>
                            Never let location be an issue when accessing your files. Fylo has you covered for all of your storage needs.
                                    <br /><br />
                            Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.
                                </ItemText>
                        <WorksTextLink>See how Fylo works  <img src="static/images/icon-arrow.svg" style={{ marginLeft: '10px' }} /></WorksTextLink>
                    </WorksDivRight>
                </WorksDiv>

                <ReviewDiv id="teamsId">
                    <ReviewIcon src="static/images/bg-quotes.png" />
                    <ReviewCards>
                        <ReviewText><i>Fylo has improved our team productivity by an order of magnitude. Since making the switch, our team has become a well oiled collaboration machine</i></ReviewText>
                        <ReviewProfile>
                            <ReviewImageContainer>
                                <ReviewImage src="static/images/image2.png" />
                            </ReviewImageContainer>

                            <ReviewDetail>
                                <ReviewName>Ayodele Gbenga</ReviewName>
                                <ReviewTitle>Founder & CEO; Teka</ReviewTitle>
                            </ReviewDetail>
                        </ReviewProfile>
                    </ReviewCards>

                    <ReviewCards>
                        <ReviewText><i>Fylo has improved our team productivity by an order of magnitude. Since making the switch, our team has become a well oiled collaboration machine</i></ReviewText>
                        <ReviewProfile>
                            <ReviewImageContainer>
                                <ReviewImage src="static/images/image2.png" />
                            </ReviewImageContainer>

                            <ReviewDetail>
                                <ReviewName>Ayodele Gbenga</ReviewName>
                                <ReviewTitle>Founder & CEO; Addas</ReviewTitle>
                            </ReviewDetail>
                        </ReviewProfile>
                    </ReviewCards>

                    <ReviewCards>
                        <ReviewText><i>Fylo has improved our team productivity by an order of magnitude. Since making the switch, our team has become a well oiled collaboration machine</i></ReviewText>
                        <ReviewProfile>
                            <ReviewImageContainer>
                                <ReviewImage src="static/images/image2.png" />
                            </ReviewImageContainer>

                            <ReviewDetail>
                                <ReviewName>Ayodele Gbenga</ReviewName>
                                <ReviewTitle>Founder & CEO; Addas</ReviewTitle>
                            </ReviewDetail>
                        </ReviewProfile>
                    </ReviewCards>
                </ReviewDiv>

                <Footer/>
                
            </BaseDiv>
        );
    }
}

export default HomePage;