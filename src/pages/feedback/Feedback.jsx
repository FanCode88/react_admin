import "./feedback.css";

export const Feedback = () => {
  return (
    <div className="feedback">
    <section class="contact">
      <h2>Contact Me!</h2>

      <form action="#">
        <div class="input-box">
          <div class="input-field field">
            <input
              type="text"
              placeholder="Full Name"
              id="name"
              class="item"
              autocomplete="off"
            />
            <div class="error-txt">Full Name can't be blank</div>
          </div>
          <div class="input-field field">
            <input
              type="text"
              placeholder="Email Adress"
              id="email"
              class="item"
              autocomplete="off"
            />
            <div class="error-txt email">Email Address can't be blank</div>
          </div>
        </div>

        <div class="input-box">
          <div class="input-field field">
            <input
              type="text"
              placeholder="Phone Number"
              id="phone"
              class="item"
              autocomplete="off"
            />
            <div class="error-txt">Phone Number can't be blank</div>
          </div>
          <div class="input-field field">
            <input
              type="text"
              placeholder="Subject"
              id="subject"
              class="item"
              autocomplete="off"
            />
            <div class="error-txt">Subject can't be blank</div>
          </div>
        </div>

        <div class="textarea-field field">
          <textarea
            name=""
            id="message"
            cols="30"
            rows="10"
            placeholder="Your Message"
            class="item"
            autocomplete="off"
          ></textarea>
          <div class="error-txt">Message can't be blank</div>
        </div>

        <button type="submit">Send Message</button>
      </form>
    </section>
  </div>
  )
}
