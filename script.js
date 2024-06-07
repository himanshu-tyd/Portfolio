import roles from "./assets/data/card.js";
import activities from "./assets/data/workData.js";
import technologies from "./assets/data/techStack.js";
// import email from "./.js";

document.addEventListener("DOMContentLoaded", () => {
  

  const observerOptions = {
    threshold: 0.1,
  };

  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target);
      } else {
        entry.target.classList.remove("fade-in");
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  const sections = document.querySelectorAll("section");

  sections.forEach((element) => {
    observer.observe(element);
  });


  const links = document.querySelectorAll(".link");

  links.forEach((element) => {
    element.addEventListener("click", (e) => {
      links.forEach((link) => {
        link.classList.remove("active");
      });
      e.target.classList.add("active");
    });
  });

  const workData1 = document.querySelector(".desc");
  const workData2 = document.querySelector(".desc-2");

  if ((workData1, workData2)) {
    activities[0].details.map((item) => {
      workData1.insertAdjacentHTML(
        "beforeend",
        `<li class="list">${item}</li>`
      );
    });

    activities[1].details.map((item) => {
      workData2.insertAdjacentHTML(
        "beforeend",
        `<li class="list">${item}</li>`
      );
    });
  } else {
    console.log("workData element not found");
  }

  

  //toggle menu

  const menuOpenE1 = document.querySelector(".menu__icon");
  const menuCloseE1 = document.querySelector(".menu__close");
  const linksE1 = document.querySelector(".links");

  menuOpenE1.addEventListener("click", (e) => {
    linksE1.classList.add("show__menu");
    menuCloseE1.classList.add("show__close");
    menuOpenE1.classList.add("hide__open");
  });

  menuCloseE1.addEventListener("click", (e) => {
    linksE1.classList.remove("show__menu");
    menuCloseE1.classList.remove("show__close");
    menuOpenE1.classList.remove("hide__open");
  });

  const navLinksE1 = document.querySelectorAll(".link");

  navLinksE1.forEach((link) => {
    link.addEventListener("click", () => {
      linksE1.classList.remove("show__menu");
      linksE1.classList.add("hide__nav");
      menuCloseE1.classList.remove("show__close");
      menuOpenE1.classList.remove("hide__open");
    });
  });

  //smooth Scroll

  const target = document.querySelectorAll('.link[href^="#"]');
  target.forEach((key) => {
    key.addEventListener("click", (e) => {
      e.preventDefault();
      const href = key.getAttribute("href");
      document.querySelector(href).scrollIntoView({
        behavior: "smooth",
      });
    });
  });



  //form submition

  const contactFormEl = document.querySelector(".contact__form");
  let loading = false;
  
  contactFormEl.addEventListener("submit", (e) => {
    loading = true;
    const submitBtnEl = contactFormEl.querySelector("button[type='submit']");
    if (submitBtnEl) {
      submitBtnEl.disabled = true;
      submitBtnEl.textContent = "Sending...";
    }
    e.preventDefault();
  
    const formData = new FormData(contactFormEl);
    const formObject = Object.fromEntries(formData.entries());
    console.log(formObject.name);
    console.log(formObject.gmail);

  
    emailjs.send(
      "service_w8ns52l",
      "template_y0yn1cv",
      {
        from_name: formObject.name,
        to_name: 'Himanshu',
        from_email: formObject.email,
        to_email: 'himanshutaviyad0072@gmail.com', // Replace with the recipient's email address
        reply_to:formObject.email
      },
      "BBfLJSEtap9hhsFzt"
    )
    .then(
      () => {
        alert("Thank you. I will get back to you as soon as possible.");
        console.log("Thank you. I will get back to you as soon as possible.");
        contactFormEl.reset();
        loading = false;
  
        if (submitBtnEl) {
          submitBtnEl.disabled = false;
          submitBtnEl.textContent = "Send";
        }
      },
      (err) => {
        alert('Failed to send the message. Please try again.');
        console.error('Failed to send the message:', err);
        loading = false;
        if (submitBtnEl) {
          submitBtnEl.disabled = false;
          submitBtnEl.textContent = "Send";
        }
      }
    );
  });
  






});
