import IndexAdminPage from "./pages/AdminPanel/IndexAdminPage/IndexAdminPage";
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
  { path: "/P-admin", element: <IndexAdminPage />},
  { path: "/P-admin/dashboard", element: <Dashboard /> },
  { path: "/P-admin/level", element: <Level /> },
  { path: "/P-admin/comments", element: <Comments /> },
  { path: "/P-admin/users", element: <Users /> },
  { path: "/P-admin/add-group", element: <AddGroup /> },
  { path: "/P-admin/list-group", element: <ListGroup /> },
  { path: "/P-admin/add-film", element: <AddFilm /> },
  { path: "/P-admin/list-film", element: <ListFilm /> },
  { path: "/P-admin/add-display", element: <AddDisplay /> },
  { path: "/P-admin/list-display", element: <ListDisplay /> },
];

export default routes;
