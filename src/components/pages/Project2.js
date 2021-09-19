import Page from "../IndivProjectPages";
import thecosypawsIMG1 from "../../images/TheCosyPaws_img1.png";
import thecosypawsIMG2 from "../../images/TheCosyPaws_img2.png";
import thecosypawsIMG3 from "../../images/TheCosyPaws_img3.png";

export default function Project1() {
  window.scrollTo(0, 0);

  return (
    <>
      <Page
        title="The Cosy Paws"
        description="A 5 page website built on Shopify for a client, with custom pages. Teams Page and Links Page were designed on Figma and built with custom code. Categories on home page make it easier for users to navigate around the site. Teams page was made to be fun and inviting for potential customers to feel more connected to the brand."
        src={thecosypawsIMG1}
        src1={thecosypawsIMG3}
        src2={thecosypawsIMG2}
        site="https://thecosypaws.com.sg/"
        code="https://github.com/jolenechong/TheCosyPaws"
        stack="Shopify, HTML/CSS, Javsscript and Figma"
        role="Freelance Developer and Designer"
        date="May 2021"
      />
    </>
  );
}
