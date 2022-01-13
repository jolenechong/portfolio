import Page from "../IndivProjectPages";
import NYPLIT_img1 from '../../images/NYPLIT_img1.png'
import NYPLIT_img2 from '../../images/NYPLIT_img2.png'
import NYPLIT_img3 from '../../images/NYPLIT_img3.png'


export default function Project1() {
  window.scrollTo(0, 0);

  return (
    <>
      <Page
        title="NYP LIT Website"
        description="A simple landing page website for a NYP LIT. Designed 
        on Figma and built with custom HTML/CSS and Javascript . With a clean
        look and feel to the website users are greeted with social proof and
        reasons why the company would stand out, making users more likely to want to
        rent the products. Made to be responsive on mobile."
        src={NYPLIT_img1}
        src1={NYPLIT_img2}
        src2={NYPLIT_img3}
        site="https://nyp-lit.github.io"
        code="https://github.com/nyp-lit/nyp-lit.github.io"
        stack="EditorX, HTML/CSS, Javsscript and Figma"
        role="Freelance Developer and Designer"
        date="August 2021"
        alt="NYP Ladies in Tech Website Screenshot"
      />
    </>
  );
}
