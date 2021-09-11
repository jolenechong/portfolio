import "./CTASection.css";

export default function HeroSection() {
  return (
    <>
      <section id="CTASection">
        <div id="CTAContainer">
          <div style={{ flex: 1, margin: "auto", padding: "30px" }}>
            <h3>
              You know your business is great
              <br />
              You just need a website that works for you
              <br />
              And I can make that for you
            </h3>
            <p
              style={{
                maxWidth: "500px",
                textAlign: "center",
                fontSize: "16px",
                margin: "15px auto",
              }}
            >
              For any webdesign/webdev related projects, contact me at
              <a href="mailto:jolenechong7@gmail.com">
                {" "}
                jolenechong7@gmail.com
              </a>
            </p>
          </div>
          <div style={{ flex: 1 }}>
            <form name="contact" method="POST" data-netlify="true" onSubmit='submit'>
              <input type="hidden" name="form-name" value="contact"/>

              <input type="text" placeholder="Name" name='first-name' required />
              <input type="email" placeholder="Email" name='email' required />
              <textarea placeholder="Type your message here..." name='message' required />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
