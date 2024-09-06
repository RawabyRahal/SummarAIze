import { logo, brain } from "../assets";
import { useTheme } from "../context/ThemeContext"; // Import useTheme

const Hero = () => {
  const { toggleTheme, isDarkTheme } = useTheme();

  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={brain} alt="sumz_logo" className="w-12 object-contain" />
        <div>
          {/* <button
            type="button"
            onClick={() =>
              window.open("https://github.com/RawabyRahal/SummarAIze", "_blank")
            }
            className="black_btn"
          >
            Github
          </button> */}
          <button
            type="button"
            onClick={toggleTheme}
            className="black_btn ml-4"
          >
            {isDarkTheme ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </nav>

      <h1 className="head_text">
        Summarize Articles using <br className="max-md:hidden" />
        <span className="chatgpt_gradient">AI Technology</span>
      </h1>

      <h2 className="desc">
        Make reading easier with SummarAIze, an AI tool that converts lengthy
        articles into clear, concise summaries.
      </h2>
    </header>
  );
};

export default Hero;
