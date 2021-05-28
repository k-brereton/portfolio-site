import Image from "next/image";
import {ContactMediaBar, ICON_SIZE, PageHead} from "../components/CommonComponents";

import {RiPhoneFill} from "react-icons/ri";
import {HiOutlineMail} from "react-icons/hi";
import {Container, Row} from "react-bootstrap";
import {motion, Variants} from "framer-motion";
import {createDisappearingVariant, createExpandingHorizontalVariant} from "../components/animations";

const MY_IMAGE_SIZE=175;

const OUTER_VARIANT:Variants=createExpandingHorizontalVariant(0.1);

const TITLE_VARIANT:Variants=createDisappearingVariant(0.5,undefined, {delay:0.6});
const FAST_DISAPPEARING_VARIANT=createDisappearingVariant(0.3);

export default function About() {
    return <>
        {/*MODIFICATION AREA*/}
        <PageHead description={"Kevin Brereton is a freshly graduated developer, who previously worked with the National Bank of Canada"} title={"Kevin Brereton | About"}/>

        <motion.h1 className="display-2 mainTitle" variants={TITLE_VARIANT}>About</motion.h1>
        <Container>
            <div className="centering">
                <motion.div layout className="about_mainArea" variants={OUTER_VARIANT}>
                    <motion.div variants={FAST_DISAPPEARING_VARIANT}><Image src="/images/kevin_picture.jpg" className="about_myImage" height={MY_IMAGE_SIZE} width={MY_IMAGE_SIZE}/></motion.div>
                    <motion.div variants={FAST_DISAPPEARING_VARIANT}><ContactMediaBar showAboutLink={false} iconClassName="about_iconClass"/></motion.div>
                    <motion.h2 className="display-4 about_name" variants={FAST_DISAPPEARING_VARIANT}>Kevin Brereton</motion.h2>
                    <motion.div className="about_textArea" variants={FAST_DISAPPEARING_VARIANT}>
                        {/*MODIFICATION AREA*/}
                        Hi, I am a freshly graduated software developer from Calgary, Alberta. I am passionate about coding, and design principles. While I have stellar grades and impressive projects, my largest source of experience is from the year I spent on internship developing applications for one of the National Bank of Canada's hedge funds. I am also an avid chess player, and fan of cats.
                    </motion.div>
                    <motion.div className="about_contactArea" variants={FAST_DISAPPEARING_VARIANT}>
                        {/*email/phone basic obfuscation. Nothing complex but good enough for most spammers*/}
                        <Row><RiPhoneFill size={ICON_SIZE} className="about_aboutContactIcon"/> 403 <span className="about_hidden"> plz no spam</span>- 400 <span className="about_hidden"> plz</span> - 0901 </Row>
                        <Row><HiOutlineMail size={ICON_SIZE} className="about_aboutContactIcon"/> kevin<span className="about_hidden"> kldas;jfa</span>.brereton1<span className="about_hidden"> daaasc</span>@gmail<span className="about_hidden"> .ca</span>.com </Row>
                    </motion.div>
                </motion.div>
            </div>
        </Container>
    </>
}