import Head from 'next/head'
import {PROJECT_DATA, ProjectComponent} from "../components/ExperienceComponents";
import {Container} from "react-bootstrap";
import {createDisappearingVariant} from "../components/animations";
import { motion } from 'framer-motion';
import {EXP_PAGE_TITLE_VARIANT} from "../components/CommonComponents";

export default function ProjectPage() {
    const dataToShow=PROJECT_DATA.map((data,index)=>(<ProjectComponent key={index} projectData={data}/>))
    return <>
        <Head>
            <title>Kevin Brereton's Portfolio | Projects</title>
        </Head>
        <Container>
            <motion.h1 className="display-2 mainTitle" variants={EXP_PAGE_TITLE_VARIANT}>Projects</motion.h1>
            {dataToShow}
        </Container>
    </>
}