import "./landingContentBannerTemplate.scss";


const LandingContentBannerTemplate = ({ children }) => {


    return (
        <div className="fixed w-full z-0 top-2 md:top-0 lg:top-0 left-0 w-auto sm:w-full h-full px-0 flex flex-row justify-start items-start lg:justify-end lg:items-center flex-wrap overflow-clip">
            <img src={"https://res.cloudinary.com/dfez8ez2g/image/upload/q_auto/f_auto/v1775484678/droopy_e_fvyf3s.png"} className="fixed w-full aspect-square bg-contain lg:w-ful l bottom-20 lg:top-96 lg:top-9 -right-24 lg:-right-48 rotate-270 lg:rotate-0 -z-20 opacity-50 blur-md"></img>
            <div className="z-0 left-0 w-full h-full sm:w-full px-4 pt-1 lg:pt-20 lg:px-44 flex flex-col justify-start items-start lg:justify-center lg:items-center bg-opacity-70 overflow-clip">
                {children}
            </div>

        </div>
    )
}

export { LandingContentBannerTemplate }