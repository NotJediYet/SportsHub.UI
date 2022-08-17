import { Navigate, Outlet} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { withAuthenticationRequired } from '@auth0/auth0-react';

function RequireAuth({ allowedRoles }) {
    const { user } = useAuth0();
    const role = user['https://sportshub.com/roles'];

    return (
        allowedRoles.includes(role) ? <Outlet /> : <Navigate to="/" replace={true} />
    );
}

export default withAuthenticationRequired(RequireAuth);