import { useContextGemini } from "../Context/GeminiContext";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import Footer from "../Components/Footer";

const Homepage = () => {
  const { setShowMenu } = useContextGemini();

  return (
    <>
      <div className="duration-300 ">
        <Navbar />

        <div onClick={() => setShowMenu(false)}>
          <HeroSection />

          <div className=" bg-white text-black dark:bg-black dark:text-white">
            <div className="flex flex-col gap-10 p-7 justify-center text-center items-center  text-2xl">
              <div>
                <span>
                  The Gemini ecosystem <br /> represents Google's{" "}
                </span>
                <span className="text-bg2">most capable AI</span>
              </div>

              <div className="md:pl-7">
                Our Gemini models are built from the ground up for{" "}
                <span className="text-bg2">multimodality</span> - reasoning
                seamlessly across text, images, audio, video and code
              </div>
            </div>
          </div>

          {/* page ends */}
          <div className="bg-gray-900 h-[1px]" />
          <div className="h-auto bg-white dark:bg-black dark:text-white">
            <div className="flex flex-col gap-10 p-7 justify-center text-center items-center text-black  ">
              <p className="text-3xl dark:text-white">The Gemini era</p>
              <p className="font-extralight text-gray-400">
                Gemini represents a significant leap forward in how AI can help
                improve our daily lives.
              </p>

              <iframe
                src="https://www.youtube.com/embed/ZHmVeQrFf8s?si=7c9sySwqfxdFR8Be"
                title="YouTube video player"
                frameBorder="0"
                className="rounded-xl w-[300px] h-[300px] md:w-[700px] md:h-[400px] lg:h-[500px] lg:w-[800px]"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>

            <Footer />
          </div>
        </div>
        {/* footer */}
      </div>
    </>
  );
};

export default Homepage;
