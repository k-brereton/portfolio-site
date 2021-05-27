import {Transition, Variants} from "framer-motion";

export function createMovingVariant(axis: "x" | "y", initialPosition: number, duration:number,startTransitionProps:Transition={},exitTransitionProps:Transition={}): Variants {
    return {
        beforePageLoad: {[axis]: initialPosition, opacity: 0},
        pageLoaded: {
            [axis]: 0,
            opacity: 1,
            transition: {
                when:"beforeChildren",
                // @ts-ignore
                duration,
                ...startTransitionProps
            }
        },
        pageExit: {
            [axis]: initialPosition,
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
export function createVerticalExpandingVariant(startTransitionProps:Transition={},exitTransitionProps:Transition={}):Variants{
    return {
        beforePageLoad: { scaleY:0 },
        pageLoaded: {
            scaleY:1,
            transition: {
                when:"beforeChildren",
                // @ts-ignore
                duration: 0.5,
                ...startTransitionProps,
            }
        },
        pageExit: {
            scaleY:0,
            transition: {
                when:"afterChildren",
                // @ts-ignore
                duration: 0.5,
                ...exitTransitionProps
            }
        },
    }
}

export function createExpandingHorizontalVariant(staggerChildren:number):Variants{
    return {
        beforePageLoad: { scaleX:0 },
        pageLoaded: {
            scaleX:1,
            transition: {
                duration: 0.5,
                when:"beforeChildren",
                staggerChildren,
            }
        },
        pageExit: {
            scaleX:0,
            transition: {
                when:"afterChildren",
                duration: 0.5,
                staggerChildren,
                staggerDirection:-1
            }
        },
    }
}

export function createExpandingVariant(duration:number):Variants{
    return {
        beforePageLoad: { scale:0 },
        pageLoaded: {
            // @ts-ignore
            scale:1,
            transition: {
                duration,
                when:"beforeChildren",
            }
        },
        pageExit: {
            scale:0,
            transition: {
                when:"afterChildren",
                duration,
            }
        },
    }
}