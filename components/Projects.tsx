import {PropsWithChildren} from "react";

interface ProjectComponentProps {
    title:string;
    company_logo:string|null;
    start:string;
    end:string;
    images:string[];
}
function ProjectComponent({}:PropsWithChildren<ProjectComponentProps>){

}