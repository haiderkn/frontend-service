import { useState, useEffect } from "react";
import api from "../api";  // Using the configured Axios instance from api.js
import "../styles/Profile.css";

function Profile() {
    const [profileData, setProfileData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const res = await api.get("/api/profile/");
                setProfileData(res.data);
            } catch (err) {
                setError("Failed to load profile data");
            } finally {
                setLoading(false);
            }
        };

        fetchProfileData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="profile-container">
            <h1>Assalamu Alaikum</h1>
            <h3>from Haider Ali Khan.</h3>
            <h5>This simple application is developed for practice purposes only.</h5>
            {profileData && (
                <div className="profile-details">
                    <h2>Profile Details</h2>
                    <p><strong>ID:</strong> {profileData.id}</p>
                    <p><strong>Name:</strong> {profileData.name}</p>
                    <p><strong>Email:</strong> {profileData.email}</p>
                    
                    {/* Add more fields as necessary */}
                </div>
            )}
        </div>
    );
}

export default Profile;
