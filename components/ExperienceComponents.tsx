import Image from 'next/image'
import Link from "next/link";

import {PropsWithChildren, useState, MouseEvent} from "react";
import {Media, Modal} from "react-bootstrap";
// @ts-ignore
import style from "./ExpereienceComponents.module.scss";
import {JobTitle} from "./CommonComponents";
import {comOptionAnalyticsData, ProjectComponent} from "./ProjectComponents";
import {AnimateSharedLayout, motion} from "framer-motion";

interface JobHeaderProps{
    title:string;
    company:string;
    company_logo:string;
    company_url:string;
    start:string;
    end:string;
}

function JobComponent({company,company_logo,start,end,title, children, company_url}:PropsWithChildren<JobHeaderProps>) {
    //todo decide whether experience/job will share a component or not
    return <div className={style.jobComponent}>
            {/*<motion.div     initial={{x:100}} animate={{x:200}}*/}
            {/*                transition={{ type: 'spring', restSpeed: 0.5 }}*/}

            {/*>*/}

            <Media>
                <a href={company_url}><Image src={company_logo} width={64} height={64} alt={`${company} logo`}/></a>
                <Media.Body>
                    <JobTitle title={title} company={company} start={start} end={end}/>
                        {children}
                </Media.Body>
            </Media>
            {/*</motion.div>*/}
    </div>
}

export function NBCInternship() {
    const [isModalOpen,setIsModalOpen]=useState(false);
    const onComOptionAnalyticsClick=(event: MouseEvent<HTMLAnchorElement>)=> {
        event.preventDefault()
        setIsModalOpen(true);
    };
    return <JobComponent title="Software Developer Intern"
                      company="National Bank of Canada"
                      company_logo="/images/nbc_logo.png"
                      start="2019-06-01" end="2020-08-01"
                      company_url="https://www.nbc.ca/">
        <AnimateSharedLayout>
        <Modal size="xl" show={isModalOpen} onHide={()=>setIsModalOpen(false)}>
            <motion.div layout>

            <Modal.Body>
                    <ProjectComponent projectData={comOptionAnalyticsData} collapsable={false} />
            </Modal.Body>
            </motion.div>

         </Modal>

        </AnimateSharedLayout>

            <div className={style.jobExplanation}> Created the <a href="/projects" onClick={onComOptionAnalyticsClick}>ComOptionAnalytics system</a> for one of the banks hedge funds. This system analyzes option contracts, giving real time pricing and risk profiles</div>
            <div className={style.jobExplanation}> Refined his software architecture skills to create cohesive and high-quality code using the object-oriented and functional programming paradigms </div>
            <div className={style.jobExplanation}> Helped interview and analyze candidates for the next years internship</div>
        </JobComponent>
}

export function SchulichIgnite(){
    return <JobComponent title="Volunteer Teacher"
                      company="Schulich Ignite"
                      company_logo="/images/ignite.svg"
                      start="2018-02-01" end="2020-01-01"
                      company_url="https://schulichignite.com/">
            <div className={style.jobExplanation}>Explained complicated programming concepts to students so they could program games</div>
        </JobComponent>
}

export function UniversityOfCalgary() {
    return <JobComponent title="Bachelor of Science in Software Engineering"
                      company="University of Calgary"
                      company_logo="/images/UCalgary.png"
                      start="2015-09-01" end="2021-05-01"
                      company_url="https://www.ucalgary.ca/">
            <div className={style.jobExplanation}>GPA: 3.94 / 4</div>
            <div className={style.jobExplanation}>Created many <Link href="/projects" >projects</Link> for different courses</div>
        </JobComponent>
}
