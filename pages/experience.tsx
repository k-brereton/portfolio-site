import Head from 'next/head'
import {Container} from "react-bootstrap";
import {NBC_INTERNSHIP_DATA, ProjectComponent, SCHULICH_IGNITE_DATA, UNIVERSITY_OF_CALGARY_DATA} from "../components/ExperienceComponents";

export default function ExperiencePage() {
    return <>
        <Head>
            <title>Kevin Brereton's Portfolio | Experience</title>
        </Head>
        <Container>
            <h1 className="display-2 mainTitle">Experience</h1>
            {[UNIVERSITY_OF_CALGARY_DATA,NBC_INTERNSHIP_DATA,SCHULICH_IGNITE_DATA].map((data, idx)=>{
                return <ProjectComponent key={idx} projectData={data}/>;
            })}
        </Container>
    </>
}