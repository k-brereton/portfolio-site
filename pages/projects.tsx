import Head from 'next/head'
import {PROJECT_DATA, ProjectComponent} from "../components/ExperienceComponents";
import {AnimateSharedLayout} from "framer-motion";
import {InitialPageAnimations} from "../components/CommonComponents";
import {Container} from "react-bootstrap";

export default function ProjectPage() {
    const dataToShow=PROJECT_DATA.map((data,index)=>(<ProjectComponent key={index} projectData={data}/>))
    return <InitialPageAnimations>
        <Head>
            <title>Kevin Brereton's Portfolio | Projects</title>
        </Head>
        <Container>
            <h1 className="display-2 mainTitle">Projects</h1>
                {dataToShow}
        </Container>
    </InitialPageAnimations>
}