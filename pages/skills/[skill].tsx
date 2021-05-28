import {ALL_PROJECT_TAGS, PROJECT_DATA, ProjectComponent, ProjectTag} from "../../components/ExperienceComponents"
import {EXP_PAGE_TITLE_VARIANT, PageHead} from "../../components/CommonComponents";
import {motion} from "framer-motion";
import {Container} from "react-bootstrap";

export default function SkillComponent({skill}:{skill:ProjectTag}) {
    const dataToShow=PROJECT_DATA.filter(data=>data.tags.includes(skill))
        .map((data,index)=>(<ProjectComponent key={index} projectData={data}/>));

    return <>
        <PageHead description={`Kevin Brereton's experience with ${skill}`} title={`Kevin Brereton | ${skill}`}/>
        <Container>
            <motion.h1 className="display-2 mainTitle" variants={EXP_PAGE_TITLE_VARIANT}>{skill} Experience</motion.h1>
            {dataToShow}
        </Container>
    </>
}

export async function getStaticProps({params}:{params:{skill:ProjectTag}}) {
    return {props:{skill:params.skill}}
}
export async function getStaticPaths() {
    return {
        paths: ALL_PROJECT_TAGS.map(skill=>({params: {skill}})),
        fallback:false
    }
}