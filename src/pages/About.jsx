import {CheckCircleFilled, SlackCircleFilled, StarFilled} from "@ant-design/icons";
import { useContext } from "react";
import { themeContext } from "../context/ThemeContext";


function AppAbout() {
  const contextTheme = useContext(themeContext)
  const { appTheme, setAppTheme } = contextTheme

  return (
    
    <section className=" container body-font ">
      <div className="px-3 py-10 mx-auto">
        <div className="text-center mb-20 ">
          <h1 className="sm:text-5xl text-2xl font-medium title-font  mb-4">
            Why Choose Us
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
            Discover the magic of GlowUp Cosmetics, where beauty meets innovation. Our carefully curated range of cosmetics is crafted with high-quality ingredients to bring out your natural glow.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex" />
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 ">
          <div  className="aboutCard p-4 md:w-1/3 flex flex-col text-center items-center  ">
            <div className="w-20 h-20 inline-flex  items-center justify-center rounded-full text-white mb-3 flex-shrink-0">
            <StarFilled style={{fontSize:40}} />
              
            </div>
            <div className="flex-grow">
              <h2 className=" text-white text-lg title-font font-medium mb-3">
              Dermotologist Test
              </h2>
              <p className="leading-relaxed text-base">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi
                pug VHS try-hard.
              </p>

            </div>
          </div>
          <div style={{borderLeft: appTheme == "light"  ? "3px solid white" : "3px solid black",
  borderRight: appTheme == "light"  ? "3px solid white" : "3px solid black"}} className=" aboutCard p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full  text-white mb-3 flex-shrink-0">
             
            <SlackCircleFilled style={{fontSize:40}} />
            </div>
            <div className="flex-grow">
              <h2 className=" text-white text-lg title-font font-medium mb-3">
                Allergy Tested
              </h2>
              <p className="leading-relaxed text-base">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi
                pug VHS try-hard.
              </p>

            </div>
          </div>
          <div className="aboutCard p-4 md:w-1/3 flex flex-col text-center items-center ">
            <div className=" w-20 h-20 inline-flex items-center justify-center rounded-full  text-white mb-3 flex-shrink-0">
            <CheckCircleFilled style={{fontSize:40}} />
            </div>
            <div className="flex-grow">
              <h2 className=" text-white text-lg title-font font-medium mb-3">
                Non-comedogenic
              </h2>
              <p className="leading-relaxed text-base">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi
                pug VHS try-hard.
              </p>

            </div>
          </div>
        </div>
      </div>
    </section>


  )
}

export default AppAbout;