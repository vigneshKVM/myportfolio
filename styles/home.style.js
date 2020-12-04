/********************************************/

import styled  from 'styled-components';
import ProfessionalSVG from "../public/components/professionalSVG";
import CodingSVGHome from "../public/components/CodingSVGHome";
import CodingSVGContactUs from "../public/components/codingSVGContactUs";

/********************************************/

export const Header = styled.header`
    max-width: 1400px;
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
`;

/********************************************/

export const NavItem = styled.a`
    padding: .5rem;
    border-bottom: 3px solid inherit;
    align-self: center;
    
    &:hover {
        border-bottom: 3px solid #6C63FF;
    }
`;

/********************************************/

export const Main = styled.main`
    
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
    
    
`;

/********************************************/

export const DeveloperImage = styled.div`
    padding-left: 6rem;
`;

/********************************************/

export const Image = styled.img`
    width: 500px;
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
`;

/********************************************/

export const Logo = styled.h1`
    font-size: 3rem;
    font-style: italic;
    //text-transform: uppercase;
    padding-bottom: 2rem;
`;

/********************************************/

export const LogoSubHeading = styled.h2`
    font-size: 2rem;
    padding-bottom: 1rem;
    font-style: italic;
    color: deeppink;
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
    height:1400px;
    background: #847dff;
    position: relative;
`;

/********************************************/

export const ProfessionalHeading = styled.h2`
    font-size: 3rem;
    padding: 8rem 0 1rem;
    text-align: center;
    color: white;
    text-transform: uppercase;
`;

/********************************************/

export const ProfessionalHeadingDescription = styled.h2`
    font-size: 1.6rem;
    text-align: center;
    font-style: italic;
    color: white;
`;

/********************************************/

export const ProfessionalImage = styled(ProfessionalSVG)`
    position: absolute;
    width: 600px;
    top: 8rem;
    left: 4rem;
`;

/********************************************/

export const LanguageDetails = styled.div`
    position: absolute;
    right: 20rem;
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
    position: absolute;
    right: 5rem;
    padding-top: 4rem;
`;

/********************************************/

export const OtherPackages = styled.div`
    position: absolute;
    bottom: 8rem;
    left: 4rem;
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
    background: url("mountainRanges.jpg") center center;
`;

/********************************************/

export const ExperienceHeading = styled.h2`
    font-size: 3rem;
    padding: 8rem 0 1rem;
    text-align: center;
    color: white;
    text-transform: uppercase;
`;

/********************************************/

export const ExperienceHeadingDescription = styled.h2`
    font-size: 1.6rem;
    text-align: center;
    color: white;
    font-style: italic;
    padding-bottom: 2rem;
`;

/********************************************/

export const Portfolio = styled.section`
    height: 800px;
    background: white;
`;

/********************************************/

export const PortfolioHeading = styled.h2`
    font-size: 3rem;
    padding: 8rem 0 1rem;
    text-align: center;
    color: #6C63FF;
    text-transform: uppercase;
`;

/********************************************/

export const PortfolioHeadingDescription = styled.h2`
    font-size: 1.6rem;
    text-align: center;
    color: deeppink;
    font-style: italic;
`;

/********************************************/

export const PortfolioImages = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2rem;
`

/********************************************/

export const PortfolioImageLink = styled.a`
    display: flex;
    flex-direction: column;
    width: 400px;
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
    
    padding: 1rem;
`;

/********************************************/

export const Contact = styled.section`
    height: 1000px;
    background: #eaeaea;
    position: relative;
`;

/********************************************/

export const ContactHeading = styled.h2`
    font-size: 3rem;
    padding: 8rem 0 1rem;
    text-align: center;
    color: #6C63FF;
    text-transform: uppercase;
`;

/********************************************/

export const ContactHeadingDescription = styled.h2`
    font-size: 1.6rem;
    text-align: center;
    color: deeppink;
    font-style: italic;
`;

/********************************************/

export const ContactImage = styled(CodingSVGContactUs)`
    position: absolute;
    width: 600px;
    top: 12rem;
    left: 20rem;
`;

/********************************************/

export const ContactDetailsContainer = styled.div`
    position: absolute;
    padding: 0 4rem;
    bottom: 8rem;
`;

/********************************************/

export const ContactDetailsHeading = styled.a`
    font-size: 1.6rem;
    color: deeppink;
    font-weight: bold;
    margin: 1rem;
`;

/********************************************/

export const ContactDetailsList = styled.div`
    display: flex;
    justify-content: center;
`;

/********************************************/

export const ContactDetail = styled.p`
    font-size: 1.2rem;
    text-align: center;
    padding: 0 1rem;
`;

/********************************************/

export const ContactSocialLinks = styled.div`
    float: bottom;
    height: 5rem;
    z-index: 1;
    background: black;
`;

/********************************************/
