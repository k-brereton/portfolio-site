import Image from "next/image";

import {ContactMediaBar, PageHead} from "../components/CommonComponents";
import Link from "next/link"
import {motion, Variants} from 'framer-motion';
import {createDisappearingVariant, createMovingVariant} from "../components/animations";

const DISAPPEARING_VARIANT=createDisappearingVariant(0.5);

function SingleHomeLink({link, variants}:{link:string, variants:Variants}){
    return <div className="index_linkOuterDiv">
        <Link scroll={false} href={`/${link}`} passHref>
            <motion.a className="index_singleHomeLink" variants={variants}>
                {link[0].toUpperCase()}{link.slice(1)}
            </motion.a>
        </Link>
    </div>
}

const X_VARIANTS=createMovingVariant("x",-1000, 0.5);
const Y_VARIANTS=createMovingVariant("y",-1000, 0.5);

function HomeLinks(){
    return <div className="index_homeLinks">
        <SingleHomeLink link="experience" variants={X_VARIANTS}/>
        <SingleHomeLink link="projects" variants={Y_VARIANTS}/>
        <SingleHomeLink link="skills" variants={Y_VARIANTS}/>
        <SingleHomeLink link="about" variants={X_VARIANTS}/>
    </div>
}

const MAIN_IMAGE_DEFAULT_SIZE_PX=175;

const ABOUT_LINKS_VARIANT=createMovingVariant("y", 100, 0.5);

function HomeContactInfo(){
    return <div className="index_homeContactColumn">
        <motion.div className="index_mainImage" variants={DISAPPEARING_VARIANT}>
            <Image src={"/images/logo.png"} width={MAIN_IMAGE_DEFAULT_SIZE_PX} height={MAIN_IMAGE_DEFAULT_SIZE_PX}  />
        </motion.div>
        <motion.div variants={ABOUT_LINKS_VARIANT}>
            <ContactMediaBar iconClassName="index_iconClass" showAboutLink/>
        </motion.div>
    </div>
}

export default function Home() {
  return (
      <>
          {/*MODIFICATION AREA*/}
          <PageHead description={"Kevin Brereton is a freshly graduated developer, who previously worked with the National Bank of Canada"} title={"Kevin Brereton's Portfolio"}/>
          <motion.div className="index_overallDiv" >
              <div className="index_overallColumn1">
                  <HomeLinks />
              </div>
              <div className="index_overallColumn2">
                  <HomeContactInfo />
              </div>
          </motion.div>
      </>
  )
}
