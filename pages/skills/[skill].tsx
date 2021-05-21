import {ALL_PROJECT_TAGS, PROJECT_DATA, ProjectComponent, ProjectTag} from "../../components/ExperienceComponents"
import {InitialPageAnimations, PageHead} from "../../components/CommonComponents";
import {AnimateSharedLayout} from "framer-motion";
import {Container} from "react-bootstrap";

export default function SkillComponent({skill}:{skill:ProjectTag}) {
    const dataToShow=PROJECT_DATA.filter(data=>data.tags.includes(skill))
        .map((data,index)=>(<ProjectComponent key={index} projectData={data}/>));

    return <InitialPageAnimations>
        <PageHead description={`Kevin Brereton's experience with ${skill}`} title={`Kevin Brereton | ${skill}`}/>
        <Container>
            <h1 className="display-2 mainTitle">{skill} Experience</h1>
            <AnimateSharedLayout>{dataToShow}</AnimateSharedLayout>
        </Container>
    </InitialPageAnimations>

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