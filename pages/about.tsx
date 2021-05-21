import Image from "next/image";
import {ContactMediaBar, ICON_SIZE, InitialPageAnimations, PageHead} from "../components/CommonComponents";

// @ts-ignore
import style from "./about.module.scss"
import {RiPhoneFill} from "react-icons/ri";
import {HiOutlineMail} from "react-icons/hi";
import {Container, Row} from "react-bootstrap";

const MY_IMAGE_SIZE=175;

export default function  About() {
    return <InitialPageAnimations>
        <PageHead description={"Kevin Brereton Contact Information"} title={"Kevin Brereton's Portfolio | About"}/>

        <h1 className="display-2 mainTitle">About</h1>
        <div className="centering">
            <Container className={style.mainArea}>
                <Image src="/images/kevin_picture.jpg" className={style.myImage} height={MY_IMAGE_SIZE} width={MY_IMAGE_SIZE}/>
                <ContactMediaBar showAboutLink={false} iconClassName={style.iconClass}/>
                <h2 className={`display-4 ${style.name}`}>Kevin Brereton</h2>
                <div className={style.textArea}>
                    Hi, I am a freshly graduated software developer from Calgary, Alberta. I am passionate about coding, and design principles. While I have stellar grades and impressive projects, my largest source of experience is from the year I spent on internship developing applications for one of the National Bank of Canada's hedge funds. I am also an avid chess player, and fan of cats.
                </div>
                <div className={style.contactArea}>
                    {/*email/phone basic obfuscation. Nothing complex but good enough for most spammers*/}
                    <Row><RiPhoneFill size={ICON_SIZE} className={style.aboutContactIcon}/> 403 <span className={style.hidden}> plz no spam</span>- 400 <span className={style.hidden}> plz</span> - 0901 </Row>
                    <Row><HiOutlineMail size={ICON_SIZE} className={style.aboutContactIcon}/> kevin<span className={style.hidden}> kldas;jfa</span>.brereton1<span className={style.hidden}> daaasc</span>@gmail<span className={style.hidden}> .ca</span>.com </Row>
                </div>
            </Container>
        </div>
    </InitialPageAnimations>
}