import Head from 'next/head'
import {PROJECT_DATA, ProjectComponent} from "../components/ProjectComponents";

export default function ProjectPage() {
    const dataToShow=PROJECT_DATA.map((data,index)=>(<ProjectComponent key={index} projectData={data}/>))
    return <>
        <Head>
            <title>Kevin Brereton's Portfolio | Projects</title>
        </Head>
        <h1>Projects</h1>
        {dataToShow}
    </>
}