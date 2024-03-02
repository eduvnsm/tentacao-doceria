import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<Layout>HOME</Layout>} />
            <Route path="/clientes" element={<span>CLIENTES</span>} />
            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    );
}

export default AppRoutes;