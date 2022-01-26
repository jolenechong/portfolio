import Page from "../IndivProjectPages";
import NYPLIT_img1 from "../../images/NYPLIT_img1.png";
import NYPLIT_img2 from "../../images/NYPLIT_img2.png";
import NYPLIT_img3 from "../../images/NYPLIT_img3.png";

export default function Project1() {
  window.scrollTo(0, 0);

  return (
    <>
      <Page
        title="NYP LIT Website"
        scope="NYP LIT is a Special Interest Group from NYP aiming to promote Information Technology skills to more female students,
         through hosting workshops, webinars and talks.>>>

        To achieve that, we needed a place to showcase the current and past events we hold in order to
         let people get a better feel of what we're here for and what we do."
        src={NYPLIT_img1}
        src1={NYPLIT_img2}
        src2={NYPLIT_img3}
        outcome="Based on the goal of NYP LIT, I built a design system along with a logo, then designed the landing page
        website on Figma taking into consideration user experience and easy navigation. Finally, I built it with HTML/CSS and Javascript.>>>

        With a clean look and feel to the website, users are able to filter easily through current and past events and also understand what NYP
        LIT is about."
        site="https://nyp-lit.github.io"
        code="https://github.com/nyp-lit/nyp-lit.github.io"
        stack="HTML/CSS, Javascript and Figma"
        role="Freelance Developer and Designer"
        date="August 2021"
        alt="NYP Ladies in Tech Website Screenshot"
      />
    </>
  );
}
