import DepartmentPage from "./pages.js/DepartmentPage";
import EmployeePage from "./pages.js/EmployeePage";
import MainPage from "./pages.js/MainPage";

export const routes = [
    {
        path: '/',
        Component: MainPage
    },

    {
        path: '/department/:id',
        Component: DepartmentPage
    },

    {
        path: '/employee/:id',
        Component: EmployeePage
    }
    
]