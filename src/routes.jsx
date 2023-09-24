import IndexAdminPage from "./pages/Home/IndexAdminPage/IndexAdminPage";
import Home from "./pages/Home/Home";
import Comments from "./pages/AdminPanel/Comments/Comments";
import Dashboard from "./pages/AdminPanel/Dashboard/Dashboard";
import AddGroup from "./pages/AdminPanel/AddGroup/AddGroup";
import Users from "./pages/AdminPanel/Users/Users";
import ListGroup from "./pages/AdminPanel/ListGroup/ListGroup";
import Level from "./pages/AdminPanel/Level/Level";
import AddFilm from "./pages/AdminPanel/AddFilm/AddFilm";
import ListFilm from "./pages/AdminPanel/ListFilm/ListFilm";
import AddDisplay from "./pages/AdminPanel/AddDisplay/AddDisplay";
import ListDisplay from "./pages/AdminPanel/ListDisplay/ListDisplay";

let routes = [
  { path: "/", element: <Home /> },
  {
    path: "/P-admin/*",
    element: <IndexAdminPage />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "level", element: <Level /> },
      { path: "comments", element: <Comments /> },
      { path: "users", element: <Users /> },
      { path: "add-group", element: <AddGroup /> },
      { path: "list-group", element: <ListGroup /> },
      { path: "add-film", element: <AddFilm /> },
      { path: "list-film", element: <ListFilm /> },
      { path: "add-display", element: <AddDisplay /> },
      { path: "list-display", element: <ListDisplay /> },
    ],
  },
];

export default routes;
