import Dashboard from "./pages/Dashboard.js";
import Posts from "./pages/Posts.js";
import Products from "./pages/Products.js";
import NotFound from "./pages/NotFound.js";

// what view show to user based on route ?
function router() {
  const routes = [
    { path: "/", view: () => Dashboard() },
    { path: "/posts", view: () => Posts() },
    { path: "/products", view: () => Products() },
  ];

  const potentialRoutes = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname === route.path,
    };
  });

  let match = potentialRoutes.find((route) => route.isMatch);

  if (!match) {
    match = {
      route: { path: "/not-found", view: () => NotFound() },
      isMatch: true,
    };
  }

  document.querySelector("#app").innerHTML = match.route.view();
}

// push user to new url
function navigateTo(url) {
  history.pushState(null, null, url);
  router();
}

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.hasAttribute("data-link")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });

  router();
});

// sidebar toggler
const sidebarToggler = document.querySelector(".sidebar-toggler");
const sidebar = document.querySelector(".nav");

sidebarToggler.addEventListener("click", () => {
  sidebar.classList.toggle("mini-sidebar");
});
