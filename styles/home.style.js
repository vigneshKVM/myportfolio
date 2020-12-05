/********************************************/

import styled  from 'styled-components';
import ProfessionalSVG from "../public/components/professionalSVG";
import CodingSVGHome from "../public/components/CodingSVGHome";
import CodingSVGContactUs from "../public/components/codingSVGContactUs";

/********************************************/

export const Header = styled.header`
    max-width: 1500px;
    margin-right: auto;
    margin-left: auto;
    background: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 60px;
    box-shadow: 0 2px 20px -2px rgba(0,0,0,.2);
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 999;
    
    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
        height: 3.6rem;
        position: inherit;
    }
`;

/********************************************/

export const HamburgerIcon = styled.div`
  display: none;

@media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.4rem;
    cursor: pointer;
}
`;

/********************************************/

export const NavContainer = styled.nav`
    align-items: center;
    padding: .3rem;
    z-index: 999;
`;

/********************************************/

export const Nav = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    list-style-type: none;
    color: #6C63FF;
    
    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 3.6rem;
        left: ${({click}) => (click ? 0 : '-100%')};
        opacity: 1;
        transition: all 0.5s ease;
        background: white;
    }
`;

/********************************************/

export const NavItem = styled.li`
    @media screen and (max-width: 960px) {
      width: 100%;
      
      &:hover {
        border: none;
      }
    }
`

/********************************************/

export const NavItemLink = styled.a`
    padding: .5rem;
    border-bottom: 3px solid inherit;
    align-self: center;
    
    &:hover {
        border-bottom: 3px solid #6C63FF;
    }
    
   @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    font-size: 2rem;
    color: var(--deepPink);
    border: none;
    
    &:hover {
      color: var(--lightPink);
      transition: all 0.3s ease;
      border-bottom: none;
    }
  }
`;

/********************************************/

export const Main = styled.main`
    max-width: 1500px;
`;

/********************************************/

export const Banner = styled.section`
    display: flex;
    position: relative;
    z-index: 0;
    flex-direction: row;
    align-items: center;
    background: #f8eeff;
    color: #6C63FF;
    padding: 1rem;
    height: 700px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    
    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
        height: auto;
        padding: 2rem;
    }
`;

/********************************************/

export const DeveloperImage = styled.div`
    padding-left: 6rem;
    
    @media screen and (max-width: 960px) {
        padding-left: 0;
        
    }
`;

/********************************************/

export const Image = styled.img`
    width: 26rem;
    
    @media screen and (max-width: 960px) {
        width: 60%;
        display: block;
        margin-right: auto;
        margin-left: auto;
    }
    
    @media screen and (max-width: 500px) {
        width: 100%;
    }
`;

/********************************************/

export const DetailsBackground = styled(CodingSVGHome)`
    position: absolute;
    width: 400px;
    z-index: -1;
    right: 60px;
    bottom: -80px;
`;

/********************************************/

export const Details = styled.div`
    padding: 0 3rem;
    text-align: center;
    width: 700px;
    
    @media screen and (max-width: 960px) {
        height: auto;
        padding: 2rem;
        width: auto;
    }
`;

/********************************************/

export const Logo = styled.h1`
    font-size: 3rem;
    font-style: italic;
    padding-bottom: 2rem;
    
    @media screen and (max-width: 1085px) {
        font-size: 2rem;
    }
`;

/********************************************/

export const LogoSubHeading = styled.h2`
    font-size: 2rem;
    padding-bottom: 1rem;
    font-style: italic;
    color: deeppink;
    
    @media screen and (max-width: 1085px) {
        font-size: 1.8rem;
    }
`;

/********************************************/

export const LogoDescription = styled.p`
    font-size: 1.4rem;
    padding-bottom: 1rem;
    font-style: italic;
    color: #6C63FF;
    margin-bottom: 2rem;
`;

/********************************************/

export const ResumeDownload = styled.a`
    background: deeppink;
    color: white;
    padding: .8rem;
    border-radius: 25px;
    font-style: italic;
    font-weight: bold;
`

/********************************************/

export const Professional = styled.section`
    height:auto;
    background: #847dff;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-bottom: 8rem;
    
    
    @media screen and (max-width: 1085px) {
        height: auto;
        width: auto;
        position: inherit;
        padding: 0 2rem;
    }
`;

/********************************************/

export const ProfessionalHeading = styled.h2`
    font-size: 3rem;
    padding: 8rem 0 1rem;
    text-align: center;
    color: white;
    text-transform: uppercase;
    width: 100%;
    
    @media screen and (max-width: 1085px) {
        font-size: 2rem;
        width: 100%;
    }
`;

/********************************************/

export const ProfessionalHeadingDescription = styled.h2`
    font-size: 1.6rem;
    text-align: center;
    font-style: italic;
    color: white;
    width: 100%;
    
    @media screen and (max-width: 1085px) {
        padding: 1rem;
        font-size: 1.4rem;
        width: 100%;
    }
`;

/********************************************/

export const ProfessionalImage = styled(ProfessionalSVG)`
    display: block;
    width: 600px;
    top: 15rem;
    left: 4rem;
    
    @media screen and (max-width: 1085px) {
        width: 100%;
        position: inherit;
    }
`;

/********************************************/

export const LanguageDetails = styled.div`
    width: 300px;
    display: block;
    padding-top: 4rem;
`;

/********************************************/

export const ListHeading = styled.h3`
    font-size: 1.2rem;
    color: white;
    padding: 1rem;
    text-transform: uppercase;
`;

/********************************************/

export const ListDetails = styled.ul`
    font-size: 2.4rem;
    margin: 0 0 0 3rem;
    list-style-type: "»";
`;

/********************************************/

export const ListItem = styled.li`
    color: white;
    padding: .4rem 1rem;
    text-transform: uppercase;
    font-weight: bold;
`;

/********************************************/

export const FrameworkDetails = styled.div`
    width: 300px;
    display: block;
    padding-top: 4rem;
`;

/********************************************/

export const OtherPackages = styled.div`
    width: 100%;
    display: block;
    padding-bottom: 8rem;
`;

/********************************************/

export const OtherListItem = styled.li`
    color: white;
    padding: .4rem 1rem;
    //text-transform: uppercase;
    font-weight: bold;
`;

/********************************************/

export const Experience = styled.section`
    height: 2000px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("mountainRanges.jpg") center center no-repeat;
    background-size: cover;
    
    
    @media screen and (max-width: 960px) {
        height: auto;
        padding-bottom: 8rem;
    }
`;

/********************************************/

export const ExperienceHeading = styled.h2`
    font-size: 3rem;
    padding: 8rem 0 1rem;
    text-align: center;
    color: white;
    text-transform: uppercase;
    
    @media screen and (max-width: 960px) {
        font-size: 2rem;
    }
`;

/********************************************/

export const ExperienceHeadingDescription = styled.h2`
    font-size: 1.6rem;
    text-align: center;
    color: white;
    font-style: italic;
    padding-bottom: 2rem;
    
    @media screen and (max-width: 960px) {
        padding: 1rem;
        font-size: 1.4rem;
    }
`;

/********************************************/

export const Portfolio = styled.section`
    height: 800px;
    background: white;
    
    
    @media screen and (max-width: 960px) {
        height: auto;
        padding-bottom: 8rem;
    }
`;

/********************************************/

export const PortfolioHeading = styled.h2`
    font-size: 3rem;
    padding: 8rem 0 1rem;
    text-align: center;
    color: #6C63FF;
    text-transform: uppercase;
    
    @media screen and (max-width: 960px) {
        font-size: 2rem;
    }
`;

/********************************************/

export const PortfolioHeadingDescription = styled.h2`
    font-size: 1.6rem;
    text-align: center;
    color: deeppink;
    font-style: italic;
    
    @media screen and (max-width: 960px) {
        padding: 1rem;
        font-size: 1.4rem;
    }
`;

/********************************************/

export const PortfolioImages = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem;
    flex-wrap: wrap;
`;

/********************************************/

export const PortfolioImageSite = styled.div`
    @media screen and (max-width: 960px) {
        padding: 1rem 0;
        width: 100%;
        height: auto;
    }
`

/********************************************/

export const PortfolioImageLink = styled.a`
    display: flex;
    flex-direction: column;
    max-width: 400px;
`

/********************************************/

export const PortfolioImageTitle = styled.h3`
    font-size: 1.4rem;
    text-align: center;
`;

/********************************************/

export const PortfolioImageDescription = styled.p`
    text-align: center;
`;

/********************************************/

export const PortfolioImage = styled.img`
    max-width: 400px;
    padding: 1rem;
`;

/********************************************/

export const Contact = styled.section`
    height: 1000px;
    background: #eaeaea;
    position: relative;
    
    @media screen and (max-width: 960px) {
        position: inherit;
        height: auto;
        padding-bottom: 8rem;
    }
`;

/********************************************/

export const ContactHeading = styled.h2`
    font-size: 3rem;
    padding: 8rem 0 1rem;
    text-align: center;
    color: #6C63FF;
    text-transform: uppercase;
    
    @media screen and (max-width: 960px) {
        font-size: 2rem;
    }
`;

/********************************************/

export const ContactHeadingDescription = styled.h2`
    font-size: 1.6rem;
    text-align: center;
    color: deeppink;
    font-style: italic;
    
    @media screen and (max-width: 960px) {
        padding: 1rem;
        font-size: 1.4rem;
    }
`;

/********************************************/

export const ContactImage = styled(CodingSVGContactUs)`
    width: 600px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    
    @media screen and (max-width: 960px) {
        position: inherit;
        padding: 1rem;
        width: 100%;
        
    }
`;

/********************************************/

export const ContactDetailsContainer = styled.div`
    position: absolute;
    padding: 0 4rem;
    bottom: 8rem;
    
    @media screen and (max-width: 960px) {
        position: inherit;
        height: auto;
        padding: 0;
    }
`;

/********************************************/

export const ContactDetailsHeading = styled.a`
    font-size: 1.6rem;
    color: deeppink;
    font-weight: bold;
    margin: 1rem;
    
    @media screen and (max-width: 960px) {
        position: inherit;
        
    }
`;

/********************************************/

export const ContactDetailsList = styled.div`
    display: flex;
    justify-content: center;
    
    @media screen and (max-width: 960px) {
        position: inherit;
        display: flex;
        flex-direction: column;
        text-align: center;
    }
`;

/********************************************/

export const ContactDetail = styled.p`
    font-size: 1.2rem;
    text-align: center;
    padding: 0 1rem;
    
    @media screen and (max-width: 960px) {
        text-align: center;
    }
`;

/********************************************/

export const ContactSocialLinks = styled.div`
    height: 5rem;
    
    background: black;
    
    @media screen and (max-width: 960px) {
        position: inherit;
    }
`;

/********************************************/
