import {Variants} from "framer-motion";

export function createMovingVariant(axis: "x" | "y", initialPosition: number): Variants {
    return {
        beforePageLoad: {[axis]: initialPosition, opacity: 0},
        pageLoaded: {
            [axis]: 0,
            opacity: 1,
            transition: {
                duration: 0.5
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

export const DISAPPEARING_VARIANT: Variants = {
    beforePageLoad: {opacity: 0},
    pageLoaded: {
        opacity: 1,
        transition: {
            duration: 0.5
        }
    },
    pageExit: {
        opacity: 0,
        transition: {
            when:"afterChildren",
            duration: 0.5
        }
    },
}

export const FAST_DISAPPEARING_VARIANT: Variants = {
    beforePageLoad: {opacity: 0},
    pageLoaded: {
        opacity: 1,
        transition: {
            duration: 0.3
        }
    },
    pageExit: {
        opacity: 0,
        transition: {
            when:"afterChildren",
            duration: 0.3
        }
    },
}

export function createExpandingHorizontalVariant(width:string,padding:number, staggerChildren:number|undefined):Variants{
    return {
        beforePageLoad: { width:0, padding:0 },
        pageLoaded: {
            width,
            padding,
            transition: {
                duration: 0.5,
                delayChildren:0.5,
                staggerChildren,
            }
        },
        pageExit: {
            width:0,
            padding:0,
            transition: {
                when:"afterChildren",
                duration: 0.5,
            }
        },
    }
}