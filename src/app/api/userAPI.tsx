import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
});

// Get user profile
export const getUserInfo = async (id: string) => {
    try {
        const response = await api.get(`/users/${id}`);
        console.log(response.status);
        return response.data;
    } catch (error) {
        console.error("Error fetching user profile:", error);
        throw error;
    }
};

// Get user streak
export const getUserstreak = async (username: string) => {
    try {
        const response = await api.get(`/users/${username}/streak`);
        console.log(response.status);
        return response.data.current_streak;
    } catch (error) {
        console.error("Error fetching user streak:", error);
        throw error;
    }
};