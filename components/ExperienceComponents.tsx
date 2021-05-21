import Image from 'next/image'
import Link from "next/link";

import {useState, MouseEvent} from "react";
import {Media, Modal} from "react-bootstrap";
// @ts-ignore
import style from "./ExpereienceComponents.module.scss";
import {comOptionAnalyticsData, ProjectComponentBody, ProjectData} from "./ProjectComponents";
import {AnimateSharedLayout, motion} from "framer-motion";


export const NBC_INTERNSHIP_DATA:ProjectData={
    company_data:{logo:"/images/nbc_logo.png",url:"https://www.nbc.ca/"},
    title:"Software Developer Intern",
    start:"2019-06-01",
    end:"2020-08-01",
    company:"National Bank of Canada",
    tags:[],
    showTags:false,
    github_link:null,
    component:NBCInternship,
}

function NBCInternship() {
    const [isModalOpen,setIsModalOpen]=useState(false);
    const onComOptionAnalyticsClick=(event: MouseEvent<HTMLAnchorElement>)=> {
        event.preventDefault()
        setIsModalOpen(true);
    };

    return <>
        <AnimateSharedLayout>
            <Modal size="xl" show={isModalOpen} onHide={()=>setIsModalOpen(false)}>
                <motion.div layout>
                    <Modal.Body>
                            <ProjectComponentBody projectData={comOptionAnalyticsData} collapsable={false}/>
                    </Modal.Body>
                </motion.div>
             </Modal>
        </AnimateSharedLayout>
        <div className={style.jobExplanation}> Created the <a href="/projects" onClick={onComOptionAnalyticsClick}>ComOptionAnalytics system</a> for one of the banks hedge funds. This system analyzes option contracts, giving real time pricing and risk profiles</div>
        <div className={style.jobExplanation}> Refined his software architecture skills to create cohesive and high-quality code using the object-oriented and functional programming paradigms </div>
        <div className={style.jobExplanation}> Helped interview and analyze candidates for the next years internship</div>
        </>
}

export const SCHULICH_IGNITE_DATA:ProjectData={
    company_data:{logo:"/images/ignite.svg",url:"https://schulichignite.com/"},
    title:"Volunteer Teacher",
    start:"2018-02-01",
    end:"2020-01-01",
    company:"Schulich Ignite",
    tags:[],
    showTags:false,
    github_link:null,
    component:SchulichIgnite,

}

function SchulichIgnite(){
    return <div className={style.jobExplanation}>Explained complicated programming concepts to students so they could program games</div>
}

export const UNIVERSITY_OF_CALGARY_DATA:ProjectData={
    company_data:{logo:"/images/UCalgary.png",url:"https://www.ucalgary.ca/"},
    title:"Bachelor of Science in Software Engineering",
    start:"2015-09-01",
    end:"2021-05-01",
    company:"University of Calgary",
    tags:[],
    showTags:false,
    github_link:null,
    component:UniversityOfCalgary,
}

function UniversityOfCalgary() {
    return <>
            <div className={style.jobExplanation}>GPA: 3.94 / 4</div>
            <div className={style.jobExplanation}>Created many <Link href="/projects" >projects</Link> for different courses</div>
        </>
}
