import Image from 'next/image'
import Link from "next/link";

import {PropsWithChildren} from "react";
import {Container, Jumbotron, Media} from "react-bootstrap";
// @ts-ignore
import style from "./ExpereienceComponents.module.scss";

interface JobHeaderProps{
    title:string;
    company:string;
    company_logo:string;
    start:string;
    end:string;
}

function JobComponent({company,company_logo,start,end,title, children}:PropsWithChildren<JobHeaderProps>) {
    const options:Intl.DateTimeFormatOptions={month:"long",year:"numeric"}
    const startTimeStr=(new Date(start)).toLocaleDateString(undefined,options);
    const endTimeStr=(new Date(end)).toLocaleDateString(undefined,options);

    return <Jumbotron>
        <Container className={style.experienceContainer}>
            {/*<motion.div     initial={{x:100}} animate={{x:200}}*/}
            {/*                transition={{ type: 'spring', restSpeed: 0.5 }}*/}

            {/*>*/}

            <Media>
                <Image src={company_logo} width={64} height={64} alt={`${company} logo`}/>

                <Media.Body>
                    <h2>{title}</h2>
                    <h3>{company}</h3>
                    <h4>{startTimeStr} - {endTimeStr}</h4>
                    {children}
                </Media.Body>
            </Media>
            {/*</motion.div>*/}

        </Container>
    </Jumbotron>
}

export function NBCInternship() {
    return <>
        <JobComponent title="Software Developer Intern"
                   company="National Bank of Canada"
                   company_logo="/images/nbc_logo.png"
                   start="2019-06-01" end="2020-08-01">
            {/*    todo add in link/modal to ComOptionAnalyitcsSystem*/}
            <div className={style.jobExplanation}> Created the ComOptionAnalytics system, which is a software system for one of the National Bank of Canada’s hedge funds. This system analyzes option contracts, giving real time pricing and risk profiles for options across various markets</div>
            <div className={style.jobExplanation}> Refined his software architecture skills to create cohesive and high-quality code using the object-oriented and functional programming paradigms </div>
            <div className={style.jobExplanation}> Applied his knowledge of test-driven development, requirements engineering, and MVC architecture to make the ComOptionAnalytics system fast, accurate and easy to use. </div>
            <div className={style.jobExplanation}> Helped interview and analyze candidates for the next years internship</div>
        </JobComponent>
    </>
}

export function SchulichIgnite(){
    return <>
        <JobComponent title="Teacher"
                   company="Schulich Ignite"
                   company_logo="/images/ignite.svg"
                   start="2018-02-01"
                   end="2020-01-01">
            <div className={style.jobExplanation}>Volunteered to help teach high school students programming</div>
            <div className={style.jobExplanation}>Collaborated with a team of 20 people to create a fun, engaging and highly educational experience for the students</div>
        </JobComponent>
    </>
}

export function UniversityOfCalgary() {
    return <>
        <JobComponent title="Batchelor of Science in Software Engineering"
                   company="University of Calgary"
                   company_logo="/images/UCalgary.png"
                   start="2015-09-01" end="2021-05-01">
            <div className={style.jobExplanation}>GPA: 3.94 / 4</div>
            <div className={style.jobExplanation}>Created many <Link href="/projects" > projects</Link> for different courses</div>
        </JobComponent>
    </>
}