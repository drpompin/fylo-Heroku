import React, { Component, Fragment } from "react";

import {
    StartButton,
    ReviewText,
    FooterDiv,
    FooterTop,
    ContactDiv,
    ContactHeading,
    ContactText,
    ContactForm,
    ContactInput,
    FooterBottom,
    FooterBottomColumn,
    FooterMid,
    FooterLogoDiv,
    FooterLogo,
    AddressDiv,
    FooterItemDiv,
    SocialMediaImg,
} from "../pages/snippets";

class Footer extends Component {
    render() {
        return (
            <FooterDiv>
                <FooterTop id="signInId">
                    <ContactDiv>
                        <ContactHeading>Get early access today</ContactHeading>

                        <ContactText>It only takes a minute to signup and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</ContactText>

                        <ContactForm>
                            <ContactInput></ContactInput>
                            <StartButton style={{ width: '35%' }}>Get Started for free</StartButton>
                        </ContactForm>
                    </ContactDiv>
                </FooterTop>

                <FooterMid>
                    <FooterLogoDiv>
                        <FooterLogo src="static/images/logo.svg" />
                    </FooterLogoDiv>
                </FooterMid>

                <FooterBottom>
                    <FooterBottomColumn style={{ color: '#FFF' }}>
                        <img src="static/images/icon-location.svg" style={{ marginRight: '20px', height: '15px' }} />
                        <ReviewText style={{ margin: '0' }}>Nigerian Defence Academy, Postgraduate School, Nigeria, Africa.</ReviewText>
                    </FooterBottomColumn>

                    <FooterBottomColumn style={{ flexDirection: 'column' }}>
                        <AddressDiv>
                            <img src="static/images/icon-phone.svg" style={{ height: '15px', marginRight: '20px' }} />
                            <ReviewText style={{ margin: '0' }}>+234 70-649-903-34</ReviewText>
                        </AddressDiv>

                        <AddressDiv>
                            <img src="static/images/icon-email.svg" style={{ height: '15px', marginRight: '20px' }} />
                            <ReviewText style={{ margin: '0' }}>ayo4oyo@gmail.com</ReviewText>
                        </AddressDiv>
                    </FooterBottomColumn>

                    <FooterBottomColumn style={{ justifyContent: 'space-between' }}>
                        <FooterItemDiv>
                            <ReviewText style={{ marginTop: '0' }}>About us</ReviewText>
                            <ReviewText style={{ marginTop: '0' }}>jobs</ReviewText>
                            <ReviewText style={{ marginTop: '0' }}>Press</ReviewText>
                            <ReviewText style={{ marginTop: '0' }}>Blog</ReviewText>
                        </FooterItemDiv>

                        <FooterItemDiv>
                            <ReviewText style={{ marginTop: '0' }}>Contact Us</ReviewText>
                            <ReviewText style={{ marginTop: '0' }}>Terms</ReviewText>
                            <ReviewText style={{ marginTop: '0' }}>Privacy</ReviewText>
                        </FooterItemDiv>
                    </FooterBottomColumn>

                    <FooterBottomColumn>
                        <FooterItemDiv style={{ alignItems: 'center', alignItems: 'flex-start', justifyContent: 'flex-end', width: '100%', flexDirection: 'row' }}>
                            <SocialMediaImg src="static/images/facebook-white.png" />
                            <SocialMediaImg src="static/images/twitter-white.png" />
                            <SocialMediaImg src="static/images/instagram-white.png" />
                            <SocialMediaImg src="static/images/linkedin-white.png" />
                        </FooterItemDiv>
                    </FooterBottomColumn>
                </FooterBottom>
            </FooterDiv>
        )
    }
}

export default Footer;

