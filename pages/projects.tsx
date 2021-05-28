import {PROJECT_DATA, ProjectComponent} from "../components/ExperienceComponents";
import {Container} from "react-bootstrap";
import { motion } from 'framer-motion';
import {EXP_PAGE_TITLE_VARIANT, PageHead} from "../components/CommonComponents";

export default function ProjectPage() {
    const dataToShow=PROJECT_DATA.map((data,index)=>(<ProjectComponent key={index} projectData={data}/>))
    return <>

        <PageHead description={"Kevin has worked on many different projects over the years. This includes various work-related and personal projects"} title={"Kevin Brereton | Projects"}/>
        <Container>
            <motion.h1 className="display-2 mainTitle" variants={EXP_PAGE_TITLE_VARIANT}>Projects</motion.h1>
            {dataToShow}
        </Container>
    </>
}