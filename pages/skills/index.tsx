import { motion } from 'framer-motion';
import Head from 'next/head'
import {PageHead, SkillsBox} from "../../components/CommonComponents";
import {ProjectTag} from "../../components/ExperienceComponents";
import {createDisappearingVariant} from "../../components/animations";


const MAIN_SKILLS:ReadonlyArray<ProjectTag>=[
    "Python",   "SQL",      "React.js",
    "NumPy",    "MySQL",    "TypeScript",
    "Pandas.py","REST API", "CSS",
    "Java",     "Git",      "JavaScript",
    "C++",      "GitHub"
]

const ADDITIONAL_SKILLS:ReadonlyArray<ProjectTag>=[
    "PHP",                  "Unit Testing", "Apache Spark",
    "Laravel",              "PostgreSQL",   "Machine Learning",
    "Node.js",              "MongoDB",      "Natural Language Processing",
    "Django",               "C",            "Next.js",
    "Django Rest Framework","Android",      "SASS",
];

export default function SkillsPage() {
    return <>
        <PageHead description={"Kevin has developed many skills over the years. This includes..."} title={"Kevin Brereton | Skills"}/>
        <motion.h1 className="display-2 mainTitle" variants={createDisappearingVariant(0.5,undefined,{delay:0.3})}>Skills</motion.h1>
        <section className="skill_index_skillsBox1"> <SkillsBox title="Main Skills" skills={MAIN_SKILLS} delay={0}/></section>
        <section className="skill_index_skillsBox2"> <SkillsBox title="Additional Skills" skills={ADDITIONAL_SKILLS} delay={0}/> </section>
    </>
}