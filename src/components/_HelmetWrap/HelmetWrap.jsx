import { Helmet } from "react-helmet";

function HelmetWrap() {
  return (
      <Helmet>
        <title>Prompt Generator</title>
        <meta
          name="description"
          content="text prompt generator for midjourney, a.i. art."
        />
        <meta
          name="keywords"
          content="midjourney, themes, art, prompt, creative prompts, generate, welcome"
        />
        <meta
          name="author"
          content="Eric Meinzer, landmeinz, zer made, tinker group"
        />
      </Helmet>
  );
}
export default HelmetWrap;
