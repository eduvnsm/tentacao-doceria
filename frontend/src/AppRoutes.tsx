import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "@/layouts/Layout";
import Principal from "@/pages/Principal";

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<Layout><Principal /></Layout>} />
            <Route path="/clientes" element={<span>CLIENTES</span>} />
            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    );
}

export default AppRoutes;