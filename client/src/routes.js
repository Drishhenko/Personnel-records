import DepartmenPage from "./pages.js/DepartmenPage";
import EmployeePage from "./pages.js/EmployeePage";
import MainPage from "./pages.js/MainPage";

export const routes = [
    {
        path: '/main_page',
        Component: MainPage
    },

    {
        path: '/departmen',
        Component: DepartmenPage
    },

    {
        path: '/employee',
        Component: EmployeePage
    }
    
]