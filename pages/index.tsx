import Head from 'next/head'
import Image from "next/image";

import {ContactMediaBar} from "../components/CommonComponents";
// @ts-ignore
import style from "./index.module.css"
import Link from "next/link"

function SingleHomeLink({link}:{link:string}){

    return <Link href={`/${link}`} passHref>
        <a className={style.singleHomeLink}>
            {/*capitalize first letter*/}
            {link[0].toUpperCase()}{link.slice(1)}
        </a>
    </Link>
}


function HomeLinks(){

    return <div className={style.homeLinks}>
        <SingleHomeLink link="experience"/>
        <SingleHomeLink link="projects"/>
        <SingleHomeLink link="skills"/>
        <SingleHomeLink link="about"/>
    </div>
}

const MAIN_IMAGE_DEFAULT_SIZE_PX=175

function HomeContactInfo(){
    return <div className={style.homeContactColumn}>
        <div className={style.mainImage} >
            <Image src={"/images/logo.png"} width={MAIN_IMAGE_DEFAULT_SIZE_PX} height={MAIN_IMAGE_DEFAULT_SIZE_PX}  />
        </div>
        <ContactMediaBar showAboutLink/>
    </div>
}

export default function Home() {
  return (
      <>
          <Head>
          <title>Kevin Brereton's Portfolio</title>
        </Head>
          <div className={style.overallDiv} >
              <div className={style.overallColumn1}>
                  <HomeLinks />
              </div>
              <div className={style.overallColumn2}>
                  <HomeContactInfo />
              </div>
          </div>
      </>
  )
}
