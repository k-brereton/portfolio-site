import Head from 'next/head'
import {UNIVERSITY_OF_CALGARY_DATA,NBC_INTERNSHIP_DATA,SCHULICH_IGNITE_DATA} from "../components/ExperienceComponents";
import {InitialPageAnimations} from "../components/CommonComponents";
import {Container} from "react-bootstrap";
import {ProjectComponent} from "../components/ProjectComponents";

export default function ExperiencePage() {
    return <InitialPageAnimations>
        <Head>
            <title>Kevin Brereton's Portfolio | Experience</title>
        </Head>
        <Container>
            <h1 className="display-1 mainTitle">Experience</h1>
            {[UNIVERSITY_OF_CALGARY_DATA,NBC_INTERNSHIP_DATA,SCHULICH_IGNITE_DATA].map(data=>{
                return <ProjectComponent projectData={data}/>;
            })}
        </Container>
    </InitialPageAnimations>
}