// what view show to user based on route ?
function router() {
  const routes = [
    { path: "/", view: () => console.log("dasboard page") },
    { path: "/posts", view: () => console.log("posts page") },
    { path: "/products", view: () => console.log("products page") },
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
      route: { path: "/not-found", view: () => console.log("not-found page") },
      isMatch: true,
    };
  }

  match.route.view();
}

document.addEventListener("DOMContentLoaded", () => {
  router();
});