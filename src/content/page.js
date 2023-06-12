import React from "react";
import { Link,Outlet } from "react-router-dom";
import Content from "./content";
import {Labpage,Teacherpage} from "./page/about";
import {Thesispage} from "./page/thesis";
import {Patentpage} from "./page/patent";
import {PopularSciencepage} from "./page/PopularSciencepage";
import {Planpage} from "./page/Planpage";
import {Competepage} from "./page/compete";
import {Activitypage} from "./page/activity";

export function Home(){
    return(
        <Content />
    )
}

export function Lab(){
    return(
        <div>
            
        <Labpage />
        </div>
    )
}export function Teacher(){
    return(
        <div>
        <Teacherpage />
        </div>
    )
}export function Published(){
    return(
        <Patentpage />
    )
}export function Patent(){
    return(
        <Patentpage />
    )
}export function Thesis(){
    return(
        <Thesispage />
    )
}export function PopularScience(){
    return(
        <PopularSciencepage />
    )
}export function Plan(){
    return(
        <Planpage />
    )
}
export function Compete(){
    return(
        <Competepage />
    )
}
export function Activity(){
    return(
        <Activitypage />
    )
}

