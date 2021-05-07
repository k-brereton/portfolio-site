import Image from 'next/image'
import {PropsWithChildren} from "react";
import {Container, Jumbotron, Media} from "react-bootstrap";

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
        <Container>
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

function JobExplanation({children}:PropsWithChildren<{}>){
    return <div>
        {children}
    </div>
}

export function NBCInternship() {
    return <>
        <JobComponent title="Software Developer Intern"
                   company="National Bank of Canada"
                   company_logo="/images/nbc_logo.png"
                   start="2019-06-01" end="2020-08-01">
            <div>blah blah blah blah</div>
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
        <JobExplanation>Explained complicated programming concepts to students so they could program games</JobExplanation>
        </JobComponent>
    </>
}

export function UniversityOfCalgary() {
    return <>
        <JobComponent title="Batchelor of Science in Software Engineering"
                   company="University of Calgary"
                   company_logo="/images/UCalgary.png"
                   start="2015-09-01" end="2021-05-01">
            <div>blah blah blah blah</div>
        </JobComponent>
    </>
}
