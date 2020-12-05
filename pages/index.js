/********************************************/

import React from "react";
import GlobalStyles from "../styles/global.style";
import {
    NavContainer,
    Nav,
    Header,
    NavItem,
    Logo,
    LogoDescription,
    Banner,
    Details,
    DeveloperImage,
    Professional,
    Image,
    Experience,
    Portfolio,
    Contact,
    ProfessionalHeading,
    ProfessionalHeadingDescription,
    ExperienceHeading,
    ExperienceHeadingDescription,
    PortfolioHeading,
    PortfolioHeadingDescription,
    ContactHeading,
    ContactHeadingDescription,
    ProfessionalImage,
    ListHeading,
    ListDetails,
    LanguageDetails,
    FrameworkDetails,
    ListItem,
    LogoSubHeading,
    OtherPackages,
    OtherListItem,
    PortfolioImage,
    PortfolioImageLink,
    PortfolioImages,
    PortfolioImageTitle,
    PortfolioImageDescription,
    ResumeDownload,
    ContactImage,
    ContactSocialLinks,
    ContactDetailsContainer,
    ContactDetail,
    ContactDetailsList, ContactDetailsHeading, Main, NavItemLink, HamburgerIcon
} from "../styles/home.style";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdWork, MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub, FaBars, FaTimes } from "react-icons/fa";

/********************************************/

const Home = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const prefix = '/myportfolio';

  return (
      <>
        <GlobalStyles/>
        <Header>
            <NavContainer>
                <HamburgerIcon onClick={handleClick}>
                    {click ? <FaTimes/> : <FaBars/>}
                </HamburgerIcon>
                <Nav onClick={handleClick} click={click}>
                    <NavItem><NavItemLink href="#home"> Home</NavItemLink></NavItem>
                    <NavItem><NavItemLink href="#professional">Professional </NavItemLink></NavItem>
                    <NavItem><NavItemLink href="#experience">Experience</NavItemLink></NavItem>
                    <NavItem><NavItemLink href="#portfolio">Portfolio</NavItemLink></NavItem>
                    <NavItem><NavItemLink href="#contact">Contact</NavItemLink></NavItem>
                </Nav>
            </NavContainer>
        </Header>
          <Main>
              <Banner id='home'>
                  <DeveloperImage>
                      <Image src="vignesh.png" alt="Profile Pic"/>
                  </DeveloperImage>
                  <Details>
                      <Logo>Hi, I'm <br/> Vignesh Moorthy,</Logo>
                      <LogoSubHeading>A FullStack Web Developer.</LogoSubHeading>
                      <LogoDescription>"With passion for Web App, Mobile Applications Development and SEO Optimization of the Applications Developed."</LogoDescription>
                      <ResumeDownload href='/myportfolio/VigneshMoorthy.pdf' download>Download Resume</ResumeDownload>
                  </Details>
              </Banner>
              <Professional id='professional'>
                  <ProfessionalHeading>01. Professional</ProfessionalHeading>
                  <ProfessionalHeadingDescription>My Knowledge Level in Coding</ProfessionalHeadingDescription>
                  <ProfessionalImage/>
                  <LanguageDetails>
                      <ListHeading>Web Languages:</ListHeading>
                      <ListDetails>
                          <ListItem>Html </ListItem>
                          <ListItem>CSS</ListItem>
                          <ListItem>Javascript</ListItem>
                          <ListItem>Typescript</ListItem>
                          <ListItem>PHP</ListItem>
                      </ListDetails>
                  </LanguageDetails>
                  <FrameworkDetails>
                      <ListHeading>Frameworks:</ListHeading>
                      <ListDetails>
                          <ListItem>ReactJS</ListItem>
                          <ListItem>Angular</ListItem>
                          <ListItem>NextJS</ListItem>
                          <ListItem>Gatsby</ListItem>
                          <ListItem>ExpressJS</ListItem>
                          <ListItem>Laravel</ListItem>
                          <ListItem>Wordpress</ListItem>
                          <ListItem>Blogger</ListItem>
                      </ListDetails>
                  </FrameworkDetails>
                  <OtherPackages>
                      <ListHeading>Other Packages</ListHeading>
                      <ListDetails>
                          <OtherListItem>OTHERS: &#8594;  React Redux, React Hooks, React Testing, React Routing, SVG </OtherListItem>
                          <OtherListItem>PACKAGE MANAGERS: &#8594;  Yarn, npm, Composer </OtherListItem>
                          <OtherListItem>JS PACKAGES: &#8594;  Formik, Yup, Axios, jsPDF, React Styled Components, React Storybook, GraphQL</OtherListItem>
                          <OtherListItem>VERSION CONTROL: &#8594;  Git, Github</OtherListItem>
                          <OtherListItem>DATABASES: &#8594;  Firebase, MySQL, SQL Server, phpmyadmin MongoDB, GraphQL</OtherListItem>
                          <OtherListItem>KNOWN SOFTWARES: &#8594;  MS Office, Illustrator, Photoshop</OtherListItem>
                          <OtherListItem>CODE EDITORS: &#8594;  VScode, PhpStorm, WebStorm, InteliJ Idea</OtherListItem>
                      </ListDetails>
                  </OtherPackages>
              </Professional>
              <Experience id='experience'>
                  <ExperienceHeading>02. Experience</ExperienceHeading>
                  <ExperienceHeadingDescription>My Experience in Coding Projects</ExperienceHeadingDescription>
                  <VerticalTimeline>
                      <VerticalTimelineElement
                          className="vertical-timeline-element--work"
                          contentStyle={{ color: 'white', background: '#6C63FF' }}
                          contentArrowStyle={{ borderRight: '7px solid #6C63FF' }}
                          date="Jan-Feb 2020"
                          iconStyle={{ background: 'rgb(33, 150, 243)', color: 'black' }}
                          icon={<MdWork />}
                      >
                          <h3 className="vertical-timeline-element-title">Software Engineer</h3>
                          <h4 className="vertical-timeline-element-subtitle">Winze Technologies Pvt Ltd, Bangalore.</h4>
                          <p>
                              As a Only Developer in the Company, Created CRM (Customer Relationship Management) from Scrach for the Winze Technologies with Google App Scripts.
                          </p>
                      </VerticalTimelineElement>
                      <VerticalTimelineElement
                          className="vertical-timeline-element--work"
                          contentStyle={{ color: 'white', background: '#6C63FF' }}
                          contentArrowStyle={{ borderRight: '7px solid #6C63FF' }}
                          date="Mar-May 2020"
                          iconStyle={{ background: 'rgb(33, 150, 243)', color: 'black' }}
                          icon={<MdWork />}
                      >
                          <p>
                              Because of high execution time with Google Scripts with google Spreadsheet as database, I moved CRM to mysql with HTML, CSS, and PHP as Backend.
                          </p>
                      </VerticalTimelineElement>
                      <VerticalTimelineElement
                          className="vertical-timeline-element--work"
                          contentStyle={{ color: 'white', background: '#6C63FF' }}
                          contentArrowStyle={{ borderRight: '7px solid #6C63FF' }}
                          date="May-Jun 2020"
                          iconStyle={{ background: 'rgb(33, 150, 243)', color: 'black' }}
                          icon={<MdWork />}
                      >
                          <p>
                              Then Created a React Version for the CRM with firebase hosting, firebase functions, and firebase firestore (JSON Data) as database which will be integrated with Project Tracking System in the future.
                          </p>
                      </VerticalTimelineElement>
                      <VerticalTimelineElement
                          className="vertical-timeline-element--work"
                          contentStyle={{ color: 'white', background: '#6C63FF' }}
                          contentArrowStyle={{ borderRight: '7px solid #6C63FF' }}
                          date="Jul-Oct 2020"
                          iconStyle={{ background: 'rgb(33, 150, 243)', color: 'black' }}
                          icon={<MdWork />}
                      >
                          <p>
                              Winze Technology deals with installs full building communicaton system such as landline, CCTV, WIFI etc... which is hard to track, as each project has different building layouts. Thus Created a single Project Tracking Application, with this we can create different layouts of different buildings once the data is given also tracks the daily activities with individuals login.
                          </p>
                      </VerticalTimelineElement>
                      <VerticalTimelineElement
                          className="vertical-timeline-element--work"
                          contentStyle={{ color: 'white', background: '#6C63FF' }}
                          contentArrowStyle={{ borderRight: '7px solid #6C63FF' }}
                          date="Nov-Dec 2020"
                          iconStyle={{ background: 'rgb(33, 150, 243)', color: 'black' }}
                          icon={<MdWork />}
                      >
                          <p>
                              Created PO and Invoice Management System Which helps the company to track invoices to raise on the particular month and thus reduces the mistake of missing any invoice on the Particular Month.
                          </p>
                      </VerticalTimelineElement>
                  </VerticalTimeline>
              </Experience>
              <Portfolio id='portfolio'>
                  <PortfolioHeading>03. Portfolio</PortfolioHeading>
                  <PortfolioHeadingDescription>All Sites Developed By Me.</PortfolioHeadingDescription>
                  <PortfolioImages>
                      <PortfolioImageLink href='https://kdramafuns.com/' target="_blank" >
                          <PortfolioImage src='kdramafuns.png' alt='kdramafuns'/>
                          <PortfolioImageTitle>Kdramafuns.com</PortfolioImageTitle>
                          <PortfolioImageDescription>This Website has been developed using PHP, and MySQL as the Database.</PortfolioImageDescription>
                      </PortfolioImageLink>
                      <PortfolioImageLink href='https://kdramaviewer.com/' target="_blank" >
                          <PortfolioImage src='kdramaviewer.png' alt='kdramaviewer'/>
                          <PortfolioImageTitle>Kdramaviewer.com</PortfolioImageTitle>
                          <PortfolioImageDescription>This Website has been developed using WordPress.</PortfolioImageDescription>
                      </PortfolioImageLink>
                  </PortfolioImages>
              </Portfolio>
              <Contact id='contact'>
                  <ContactHeading>04. Contacts</ContactHeading>
                  <ContactHeadingDescription>How to Contact Me</ContactHeadingDescription>
                  <ContactImage/>
                  <ContactDetailsContainer>
                      <ContactDetailsList>
                          <ContactDetail>
                              <ContactDetailsHeading><MdEmail/> Email</ContactDetailsHeading>
                              <br/> vigneshmoorthykvm@gmail.com
                          </ContactDetail>
                          <ContactDetail>
                              <ContactDetailsHeading  href='https://www.linkedin.com/in/vignesh-moorthy' target='_blank'>
                                  <FaLinkedin/> Linkedin
                              </ContactDetailsHeading>
                              <br/> www.linkedin.com/in/vignesh-moorthy
                          </ContactDetail>
                          <ContactDetail>
                              <ContactDetailsHeading href='https://github.com/vigneshKVM' target='_blank'>
                                  <FaGithub/> Github
                              </ContactDetailsHeading>
                              <br/> https://github.com/vigneshKVM
                          </ContactDetail>
                      </ContactDetailsList>
                  </ContactDetailsContainer>
              </Contact>
              <ContactSocialLinks>

              </ContactSocialLinks>
          </Main>
      </>
  )
}

/********************************************/
export default Home;
/********************************************/