import React, { Component, Fragment } from "react";
import styled, { css } from "styled-components";
import Link from "next/link";
import {
    HeaderBody,
    NavLeft,
    LogoDiv,
    NavRight,
    NavLinks,
    MobileNavRight,
    NavbarToggle
} from "../pages/snippets";




class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navOpen: false,
        }
        this.showMobileNav = this.showMobileNav.bind(this);
    }

    showMobileNav() {
        this.setState(state => ({
            navOpen: !this.state.navOpen, 
        }));
    }

    scrollToTeams() {
        document.getElementById("teamsId").scrollIntoView({
            behavior: 'smooth'
        });
    }

    scrollToFeatures() {
        document.getElementById("featuresId").scrollIntoView({
            behavior: 'smooth'
        });
    }

    scrollToSignIn() {
        document.getElementById("signInId").scrollIntoView({
            behavior: 'smooth'
        });
    }
    


    render() {
        return (
            <HeaderBody>
                
                <NavLeft>
                    <Link href="/">
                        <LogoDiv />
                    </Link>
                </NavLeft>

                <NavRight>
                    <NavLinks onClick={this.scrollToFeatures.bind(this)}>Features</NavLinks>
                    
                    <NavLinks onClick={this.scrollToTeams.bind(this)}>Team</NavLinks>
                    
                    <NavLinks onClick={this.scrollToSignIn.bind(this)}>Sign in</NavLinks>
                </NavRight>

                <NavbarToggle onClick={this.showMobileNav}>
                    &#9776;
                </NavbarToggle>

                {
                    this.state.navOpen ? 
                        <MobileNavRight>
                            <NavLinks onClick={this.scrollToFeatures.bind(this)} style={{ justifyContent: 'center', fontWeight: '600' }}>Features</NavLinks>

                            {/* <Link href="/about">
                                <NavLinks style={{justifyContent: 'center', fontWeight: '600'}}>Features</NavLinks>
                            </Link> */}

                            <NavLinks onClick={this.scrollToTeams.bind(this)} style={{ justifyContent: 'center', fontWeight: '600' }}>Team</NavLinks>
                            
                            <NavLinks onClick={this.scrollToSignIn.bind(this)} style={{ justifyContent: 'center', fontWeight: '600' }}>Sign in</NavLinks>
                            
                        </MobileNavRight>
                        :
                        ""
                }

                
                
            </HeaderBody>
        )
    }
}

export default Header;