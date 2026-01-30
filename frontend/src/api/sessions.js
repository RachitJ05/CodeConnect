import axios from "axios";
import { useAuth } from "@clerk/clerk-react";

const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
});

export const useSessionApi = () => {
    const { getToken } = useAuth();

    const withAuth = async () => {
        const token = await getToken();
        return {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
    };

    return {
        createSession: async (data) => {
            const res = await api.post("/sessions", data, await withAuth());
            return res.data;
        },

        getActiveSessions: async () => {
            const res = await api.get("/sessions/active", await withAuth());
            return res.data;
        },

        getMyRecentSessions: async () => {
            const res = await api.get("/sessions/my-recent", await withAuth());
            return res.data;
        },

        getSessionById: async (id) => {
            const res = await api.get(`/sessions/${id}`, await withAuth());
            return res.data;
        },

        joinSession: async (id) => {
            const res = await api.post(`/sessions/${id}/join`, {}, await withAuth());
            return res.data;
        },

        endSession: async (id) => {
            const res = await api.post(`/sessions/${id}/end`, {}, await withAuth());
            return res.data;
        },

        getStreamToken: async () => {
            const res = await api.get(`/chat/token`, await withAuth());
            return res.data;
        },
    };
};
