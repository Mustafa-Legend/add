
  document.addEventListener("DOMContentLoaded", () => {
    const intervalId = setInterval(() => {
      const links = document.querySelectorAll("a.gs-title");

      for (const link of links) {
        // Skip if already clicked
        if (link.dataset.clicked === "true") continue;

        const dataCturl = link.getAttribute("data-cturl");
        if (dataCturl) {
          link.setAttribute("href", dataCturl);
        }

        const href = link.getAttribute("href");
        if (href && href.includes("https://digitalwd1.blogspot.com")) {
          console.log("Found target link:", href);

          link.dataset.clicked = "true";
          console.log("Auto-clicking immediately:", href);
          link.click();

          // Stop the interval after clicking the first match
          clearInterval(intervalId);
          break;
        }
      }
    }, 1000); 
  });
