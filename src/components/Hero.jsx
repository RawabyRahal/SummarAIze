import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />
        <button
          type="button"
          onClick={() =>
            window.open("https://github.com/RawabyRahal/SummarAIze", "_blank")
          }
          className="black_btn"
        >
          Github
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles using <br className="max-md:hidden" />
        <span className="orange_gradient ">AI Technology</span>
      </h1>

      <h2 className="desc">
        Make reading easier with SummarAIze, an AI tool that converts lengthy
        articles into clear, concise summaries.{" "}
      </h2>
    </header>
  );
};

export default Hero;
