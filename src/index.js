//react dom
import ReactDOM from "react-dom/client";

//router dom v6
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//confg
import reportWebVitals from "./reportWebVitals";

//redux
import { Provider } from "react-redux";
import store from "./Store";


//style
import "./index.css";

//import
import "./Localization"



import Login from "./Components/Auth/login";

//pages - Main page
//index
import MainMemberPage from "./Components/Members/mainPage";
//children
import MembersTable from "./Components/Members/membersTable";
import ViewMember from "./Components/Members/viewMember"
import EditMember from "./Components/Members/editMember"




//routing
const routes = createBrowserRouter([
  {
    errorElement: <h1 className="m-auto text-center">no page found</h1>,
    path: "members",
    element: <MainMemberPage />,
    children: [
      { index: true, element: <MembersTable /> },
      { path: 'viewMember/:id', element: <ViewMember /> },
      { path: 'editMember/:id', element: <EditMember /> },
      { path: 'addMember', element: <EditMember /> }
    ]
  },

  { path: 'login', element: <Login /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={routes} />
  </Provider>
);


reportWebVitals();
