import { Navigate, Route, Routes } from "react-router-dom";

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<span>HOME</span>} />
            <Route path="/clientes" element={<span>CLIENTES</span>} />
            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    );
}

export default AppRoutes;