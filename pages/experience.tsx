import { motion } from 'framer-motion';
import {Container} from "react-bootstrap";
import {NBC_INTERNSHIP_DATA, ProjectComponent, SCHULICH_IGNITE_DATA, UNIVERSITY_OF_CALGARY_DATA} from "../components/ExperienceComponents";
import {EXP_PAGE_TITLE_VARIANT, PageHead} from "../components/CommonComponents";

export default function ExperiencePage() {
    return <>
        {/*MODIFICATION AREA*/}
        <PageHead description={"Kevin Brereton's work experience. This includes his work with the National Bank of Canada, and his work with other organizations"} title={"Kevin Brereton | Experience"}/>
        <Container>
            <motion.h1 className="display-2 mainTitle" variants={EXP_PAGE_TITLE_VARIANT} >Experience</motion.h1>
            {[UNIVERSITY_OF_CALGARY_DATA,NBC_INTERNSHIP_DATA,SCHULICH_IGNITE_DATA].map((data, idx)=>{
                return <ProjectComponent key={idx} projectData={data}/>;
            })}
        </Container>
    </>
}