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
        scope="The Cosy Paws is a ECommerce B2C business targeting pet owners. Since the target audience
        is people with pets, the site is designed to fit that.>>>

        They mainly sell 2 categories of products hence we decided to put them on the home page, along with a
        teams page and many photos to capture the users attention and stand out from other sites."
        outcome="Categories on home page make it easier for users to navigate around the site. Teams page was made to be fun and inviting for potential customers to feel more connected to the brand."
        src={thecosypawsIMG1}
        src1={thecosypawsIMG3}
        src2={thecosypawsIMG2}
        site="https://thecosypaws.com.sg/"
        code="https://github.com/jolenechong/TheCosyPaws"
        stack="Shopify, HTML/CSS, Javascript and Figma"
        role="Freelance Developer and Designer"
        date="May 2021"
        alt="The Cosy Paws Project Description"
      />
    </>
  );
}
