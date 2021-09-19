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
            <form name="contact" method="POST">
              <input type="hidden" name="form-name" value="contact"/>
              <div hidden>
                <input name='bot-field'/>
              </div>

              <div className='formQuestion'>
                <input type="text" name='first-name' required />
                <label htmlFor='first-name'>Name</label>
              </div>
              <div className='formQuestion'>
                <input type="email" name='email' required />
                <label htmlFor='email'>Email</label>
              </div>
              <div className='formQuestion'>
                <textarea name='message' required />
                <label htmlFor='message'>Your Message</label>
              </div>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
