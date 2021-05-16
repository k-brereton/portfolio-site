import {ALL_PROJECT_TAGS, PROJECT_DATA, ProjectComponent, ProjectTag} from "../../components/ProjectComponents"
import {PageHead} from "../../components/CommonComponents";

export default function SkillComponent({skill}:{skill:ProjectTag}) {
    const dataToShow=PROJECT_DATA.filter(data=>data.tags.includes(skill))
        .map((data,index)=>(<ProjectComponent key={index} projectData={data}/>));

    return <>
        <PageHead  description={`Kevin Brereton's experience with ${skill}`} title={`Kevin Brereton | ${skill}`}/>
        <h1>{skill}</h1>
        {dataToShow}
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