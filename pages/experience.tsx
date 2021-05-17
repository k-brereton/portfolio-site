import Head from 'next/head'
import {NBCInternship, SchulichIgnite, UniversityOfCalgary} from "../components/ExperienceComponents";
import {InitialPageAnimations} from "../components/CommonComponents";

export default function ExperiencePage() {
    return <InitialPageAnimations>
        <Head>
            <title>Kevin Brereton's Portfolio | Experience</title>
        </Head>

        <h1 className="display-3">Education</h1>
        <UniversityOfCalgary/>
        <h1 className="display-3">Job</h1>
        <NBCInternship />
        <SchulichIgnite />
    </InitialPageAnimations>
}