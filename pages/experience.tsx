import Head from 'next/head'
import {NBCInternship, SchulichIgnite, UniversityOfCalgary} from "../components/ExperienceComponents";
import {InitialPageAnimations} from "../components/CommonComponents";
import {Container} from "react-bootstrap";

export default function ExperiencePage() {
    return <InitialPageAnimations>
        <Head>
            <title>Kevin Brereton's Portfolio | Experience</title>
        </Head>
        <Container>
            <h1 className="display-1 mainTitle">Experience</h1>
            <UniversityOfCalgary/>
            <NBCInternship />
            <SchulichIgnite />
        </Container>
    </InitialPageAnimations>
}