import {Transition, Variants} from "framer-motion";

export function createMovingVariant(axis: "x" | "y", initialPosition: number): Variants {
    return {
        beforePageLoad: {[axis]: initialPosition, opacity: 0},
        pageLoaded: {
            [axis]: 0,
            opacity: 1,
            transition: {
                when:"beforeChildren",
                duration: 0.5,
            }
        },
        pageExit: {
            [axis]: initialPosition,
            opacity: 0,
            transition: {
                when:"afterChildren",
                duration: 0.5
            }
        },
    }
}

export function createDisappearingVariant(duration:number,startTransitionProps:Transition={},exitTransitionProps:Transition={}):Variants{
    return {
        beforePageLoad: {opacity: 0},
        pageLoaded: {
            opacity: 1,
            transition: {
                // @ts-ignore
                duration,
                when:"beforeChildren",
                ...startTransitionProps
            }
        },
        pageExit: {
            opacity: 0,
            transition: {
                when:"afterChildren",
                // @ts-ignore
                duration,
                ...exitTransitionProps
            }
        },
    }
}
export function createVerticalExpandingVariant(staggerChildren:number):Variants{
    return {
        beforePageLoad: { height:0 },
        pageLoaded: {
            // @ts-ignore
            height:null,
            transition: {
                when:"beforeChildren",
                duration: 0.5,
                staggerChildren,
            }
        },
        pageExit: {
            height:0,
            transition: {
                when:"afterChildren",
                duration: 0.5,
                staggerChildren,
                staggerDirection:-1
            }
        },
    }
}

export function createExpandingHorizontalVariant(width:string,padding:number, staggerChildren:number):Variants{
    return {
        beforePageLoad: { width:0, padding:0 },
        pageLoaded: {
            width,
            padding,
            transition: {
                duration: 0.5,
                when:"beforeChildren",
                staggerChildren,
            }
        },
        pageExit: {
            width:0,
            padding:0,
            transition: {
                when:"afterChildren",
                duration: 0.5,
                staggerChildren,
                staggerDirection:-1
            }
        },
    }
}