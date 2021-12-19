import("../pkg/index.js").catch(console.error);
import("./app").then(() => {
    console.log("loaded...");
  })