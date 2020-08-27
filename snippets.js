import styled, { keyframes, css } from "styled-components";

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}

export const device = {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
    laptopL: `(max-width: ${size.laptopL})`,
    desktop: `(max-width: ${size.desktop})`,
    desktopL: `(max-width: ${size.desktop})`
};








export const HeaderBody = styled.div`
    background-color: #1B2330;
    width: 100%;
    position: fixed;
    min-height: 80px;
    padding: 10px 0;
    display: flex;
    flex-direction: row;
    z-index: 10000;
    top: 0;

    @media ${device.tablet} {
        flex-direction: column;
    }
`

export const NavLeft = styled.div`
    width: 30%;
    // height: 100%;
    padding: 0 40px;

    @media ${device.tablet} {
        padding: 0 0 0 20px;
        height: 60px;
    }

`
export const LogoDiv = styled.div`
    width: 152px;
    height: 100%;
    background-image: url("static/images/logo.svg");
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;

    @media ${device.mobileS} {
        width: 100px;
    }
`

export const NavRight = styled.div`
    width: 70%;
    // height: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 0 40px;

    @media ${device.tablet} {
        display: none;
    }
`

export const NavbarToggle = styled.span`
    position: absolute;
    top: 10px;
    right: 20px;
    cursor: pointer; 
    color: #FFF;
    font-size: 40px;
    display: none;

    @media ${device.tablet} {
        display: block;     
    }

    @media ${device.mobileS} {
        font-size: 35px;
    }
`

export const MobileNavRight = styled.div`
    width: 100%;
    height: 200px;
    padding: 0 10px;
    background-color: #171e2b;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const NavLinks = styled.a`
    width: 82px;
    height: 100%;
    cursor: pointer;
    color: #FFF;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    &:hover {
        color: #4CC1D4;
        font-weight: 900;
    }

    @media ${device.tablet} {
        height: 60px;
        width: 100%;
    }
`

export const BaseDiv = styled.div`
    // min-height: 100%;
    position: absolute;
    margin-top: 80px;
    width: 100%;
    background-image: url("static/images/bg-curvy-desktop.svg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: left 62% bottom;
`



export const StartDiv = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 10% 20px;
    align-items: center;
`

export const StartImage = styled.img`
    width: 60%;
    height: 450px;

    @media ${device.tablet} {
        width: 100%;
        height: auto;     
    }
`

export const StartHeading = styled.p`
    color: #FFF;
    font-weight: 500;
    text-align: center;
    font-size: 40px;
    width: 62%;
    margin-top: 20px;

    @media ${device.tablet} {
        width: 100%;     
    }
`

export const StartText = styled.p`
    color: #FFF;
    text-align: center;
    width: 50%;
    font-size: 18px;
    margin: 30px 0;

    @media ${device.tablet} {
        width: 100%;     
    }
`

export const StartButton = styled.div`
    width: 20%;
    color: #FFF;
    border-radius: 20px;
    text-align: center;
    background-color: #4CC1D4;
    padding: 10px 0;
    cursor: pointer;
    box-shadow: 0px 0px 5px 0.5px #5a5f69;

    &:hover {
        font-weight: 600;
        color: #181E2A;
        box-shadow: 0px 0px 3px 0px #e5f4f7;
    }

    @media ${device.tablet} {
        width: 200px !important;
        padding: 10px 30px;     
    }
`

export const ServicesDiv = styled.div`
    display: flex;
    flex-direction: column;
    padding: 100px 10%;
    align-items: center;

    @media ${device.tablet} {
        padding: 50px 10%;     
    }
`

export const ServicesSegment = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 50px;
    // &:first-child {
    //     margin-bottom: 50px;
    // }

    @media ${device.mobileL} {
        flex-direction: column;
        align-items: center;     
    }
`



export const ServicesItem = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    align-items: center;

    @media ${device.tablet} {
        width: 40%;     
    }

    @media ${device.mobileL} {
        width: 80%;
        &:first-child {
            margin-bottom: 50px;
        }
    }
`

export const ItemImageContainer = styled.div`
    width: 100%;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ItemImage = styled.img`
    width: 25%;
`

export const ItemHeading = styled.p`
    font-size: 20px;
    color: #FFF;
    text-align: center;
    font-weight: 500;
    margin: 15px 0;
`

export const ItemText = styled.p`
    color: #FFF;
    text-align: center;
    font-weight: 100 !important;
    font-size: 14px;

    @media ${device.tablet} {
        text-align: center !important;
    }
`

export const WorksDiv = styled.div`
    display: flex;
    padding: 0 10% 20px;
    align-items: center;
    justify-content: space-between;

    @media ${device.tablet} {
        flex-direction: column;
    }
`

export const WorksDivLeft = styled.div`
    width: 48%;

    @media ${device.tablet} {
        width: 100%;
    }
`

export const mover = keyframes`
  0% {
    transform: translate(0, 0);    
  }
  100% {
    transform: translate(0px, 15px);
  }
`;

export const WorksImage = styled.img`
    width: 100%;

    &:hover {
        animation: ${mover} 1s infinite;
        animation-direction: alternate;
    }
`

export const WorksDivRight = styled.div`
    width: 48%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media ${device.tablet} {
        width: 100%;
        margin-top: 50px;
        align-items: center;
    }
`

export const WorksHeading = styled.p`
    font-size: 30px;
    text-align: left;
    color: #FFF;
    font-weight: 600;
    width: 60%;
    margin-bottom: 0;

    @media ${device.tablet} {
        width: 100%;
        margin-top: 30px;
        text-align: center;
    }
`

export const WorksTextLink = styled.p`
    text-align: left;
    display: flex;
    color: #4CC1D4;
    border-bottom: 2px solid #4CC1D4;
    font-size: 14px;
    cursor: pointer;
    margin: 0;
    font-weight: 500;
`

export const ReviewDiv = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 100px 10% 200px;

    @media ${device.tablet} {
        flex-direction: column;
        padding: 50px 10%;
    }
`
export const ReviewIcon = styled.img`
    width: 40px;
    height: 40px;
    position: absolute;
`

export const ReviewCards = styled.div`
    width: 25%;
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin: 30px 10px;
    background-color: #21293E;
    border-radius: 3px;
    z-index: 10;
    box-shadow: 1px 1px 4px #444c5d;

    transition: box-shadow .3s ease,transform .3s ease,border .3s ease;

    &:hover {
        border-color: #c6ccd2;
        box-shadow: 0 10px 25px -8px rgba(68,76,93,.3);
        transform: translateY(-4px);
    }

    @media ${device.tablet} {
        width: 100%;
    }
`

export const ReviewText = styled.p`
    font-size: 12px;
    color: #FFF;
    font-weight: 500;
    cursor: pointer;
    margin-bottom: 10px;

    &:hover {
        color: #4CC1D4;

    }
`

export const ReviewProfile = styled.div`
    display: flex;
    
`

export const ReviewImageContainer = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;

`

export const ReviewImage = styled.img`
    width: 100%;
`

export const ReviewDetail = styled.div`
    margin: 0 0 0 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const ReviewName = styled.i`
    font-size: 10px;
    color: #FFF;
    margin: 0;
    font-weight: 600;
`
export const ReviewTitle = styled.i`
    font-size: 10px;
    color: #FFF;
`

export const FooterDiv = styled.div`
    width: 100%;
    // height: 500px;
    display: flex;
    justify-content: center;
    background-color: #0C1524;
    padding: 100px 0;
    flex-direction: column;

    @media ${device.tablet} {
        margin-top: 150px;
    }
`

export const FooterTop = styled.div`
    padding: 0px 10%;
    display: flex;
    justify-content: center;    
`

export const ContactDiv = styled.div`
    width: 60%;
    // position: absolute;
    // top: -50%;
    padding: 20px 30px;
    display: flex;
    flex-direction: column;
    background-color: #1C2230;
    margin-top: -218px;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 0.5px #e5f4f7;

    @media ${device.tablet} {
        width: 100%;
    }
`

export const ContactHeading = styled.p`
    color: #FFF;
    font-size: 30px;
    text-align: center;
    font-weight: 600;
    margin: 10px 0;
`

export const ContactText = styled.p`
    color: #FFF;
    text-align: center;
    font-size: 14px;
`

export const ContactForm = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding: 20px 0;

    @media ${device.tablet} {
        flex-direction: column;
        align-items: center;
    }
`

export const ContactInput = styled.input`
    width: 60%;
    border-radius: 5px;
    font-size: 20px;

    &:focus {
        outline: none;
    }

    @media ${device.tablet} {
        height: 38px;
        margin: 0 0 15px;
        width: auto;
    }
`

export const FooterBottom = styled.div`
    padding: 0 10%;
    display: flex;
    justify-content: space-between;

    @media ${device.tablet} {
        flex-direction: column;
    }
`

export const FooterBottomColumn = styled.div`
    width: 20%;
    display: flex;

    @media ${device.tablet} {
        width: 100%;
        margin: 15px 0;
        justify-content: flex-start !important;
    }
`

export const FooterMid = styled.div`
    padding: 100px 10% 20px;

    @media ${device.tablet} {
        padding-top: 50px;
    }
`

export const FooterLogoDiv = styled.div`
    width: 15%;

    @media ${device.tablet} {
        width: 100%;
    }
`

export const FooterLogo = styled.img`
    width: 100%;

    @media ${device.tablet} {
        width: 100px;
    }
`

export const AddressDiv = styled.div`
    display: flex;
    margin-bottom: 20px;
`

export const FooterItemDiv = styled.div`
    display: flex;
    flex-direction: column;

    @media ${device.tablet} {
        justify-content: flex-start !important;
        &:first-child {
            margin: 0 50px 0 0;
        }
    }
`

export const SocialMediaImg = styled.img`
    width: 25px;
    margin-right: 10px;
    padding: 5px;
    border: 2px solid #FFF;
    border-radius: 50%;

    &:last-child {
        margin-right: 0px;
    }
`
















