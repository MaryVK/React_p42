import { useContext, useState } from 'react';
import './Profile.css';
import AppContext from '../../../../features/_context/AppContext';

export default function Profile() {
    const {user, setUser} = useContext(AppContext);
    const [confirmDelete, setConfirmDelete] = useState(false);   // положение чекбокса

    // функция выхода
    function logout() {
        setUser(undefined);
        localStorage.removeItem("user");
    }

    function deleteProfile() {
        if(!confirmDelete) {
            return;
        }

        if(confirm("Delete profile ?")) {
            setUser(undefined);
            localStorage.removeItem("user");
        }
    }

    return <div className="profile-container">
           <h2>Profile</h2>

           <p>{user?.login}</p>

    <button className="btn btn-primary logout-btn" onClick={logout}>
        Logout
    </button>

    <div className="delete-section">
        <label>
            <input
                type="checkbox"
                checked={confirmDelete}
                onChange={(e) => setConfirmDelete(e.target.checked)}
            />
            {" "}I agree to delete my profile
        </label>

        <button
            className="btn btn-danger delete-btn"
            disabled={!confirmDelete}
            onClick={deleteProfile}
        >
            Delete profile
        </button>
    </div>
</div>
}


