import { BrowserRouter } from "react-router-dom";
import {Hero, Navbar} from "./components/index.js";
import {
  SkillsSectionWrapper,
  ProjectsSectionWrapper,
  WorkExperienceSectionWrapper,
  SocialMediaSectionWrapper,
  ContactsSectionWrapper
} from "./components/index.js";

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-center bg-no-repeat bg-cover ">
            <Navbar />
            <Hero />
          </div>

          <div className="relative z-0">
            <SkillsSectionWrapper />
            <ProjectsSectionWrapper />
            <WorkExperienceSectionWrapper />
            <SocialMediaSectionWrapper />
            <ContactsSectionWrapper />
          </div>
          <div className="footer bg-black h-[50px] align-middle text-center">
            © 2024 Hariom Shivhare | Lets connect & grow
          </div>

        </div>
      </BrowserRouter>
    </>
  )
}

export default App
