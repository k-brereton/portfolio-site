import { motion } from 'framer-motion';
import Head from 'next/head'
import {SkillsBox} from "../../components/CommonComponents";
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
        <Head>
            <title>Kevin Brereton's Portfolio | Skills</title>
        </Head>
        <motion.h1 className="display-2 mainTitle" variants={createDisappearingVariant(0.5,undefined,{delay:0.3})}>Skills</motion.h1>
        <div className="skill_index_skillsBox1"> <SkillsBox title="Main Skills" skills={MAIN_SKILLS} delay={0}/></div>
        <div className="skill_index_skillsBox2"> <SkillsBox title="Additional Skills" skills={ADDITIONAL_SKILLS} delay={0}/> </div>
    </>
}