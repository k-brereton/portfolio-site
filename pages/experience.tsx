import Head from 'next/head'
import Layout from "../components/layout";
import {NBCInternship, SchulichIgnite, UniversityOfCalgary} from "../components/ExperienceComponents";

export default function ExperiencePage() {
    return     <Layout home={false}>
        <Head>
            <title>Kevin Brereton's Portfolio | Experience</title>
        </Head>

        <h1>Education</h1>
        <UniversityOfCalgary/>
        <h1>Job</h1>
        <NBCInternship />
        <SchulichIgnite />
    </Layout>
}