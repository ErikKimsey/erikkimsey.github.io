import "./landingContentBannerTemplate.scss";


const LandingContentBannerTemplate = ({ children }) => {


    return (
        <div className="fixed z-0 top-16 lg:top-0 left-0 w-auto sm:w-full h-full px-2 lg:px-10 flex flex-row justify-start items-start lg:justify-end lg:items-center flex-wrap overflow-clip">
            <div className="z-0 left-0 w-auto sm:w-full px-2 lg:px-10 flex flex-col lg:flex-row justify-start items-start lg:justify-center lg:items-center overflow-clip">
                {children}
            </div>

        </div>
    )
}

export { LandingContentBannerTemplate }