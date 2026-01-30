import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useSessionApi } from "../api/sessions";

export const useCreateSession = () => {
    const sessionApi = useSessionApi();
    const result = useMutation({
        mutationKey: ["createSession"],
        mutationFn: sessionApi.createSession,
        onSuccess: () => toast.success("Session created successfully!"),
        onError: (error) => toast.error(error.response?.data?.message || "Failed to create sessions"),
    });

    return result;
};

export const useActiveSessions = () => {
    const sessionApi = useSessionApi();
    const result = useQuery({
        queryKey: ["activeSessions"],
        queryFn: sessionApi.getActiveSessions,
    });

    return result;
};

export const useMyRecentSessions = () => {
    const sessionApi = useSessionApi();
    const result = useQuery({
        queryKey: ["myRecentSessions"],
        queryFn: sessionApi.getMyRecentSessions,
    });

    return result;
};

export const useSessionById = (id) => {
    const sessionApi = useSessionApi();
    const result = useQuery({
        queryKey: ["session", id],
        queryFn: () => sessionApi.getSessionById(id),
        enabled: !!id,
        refetchInterval: 5000, // refetch every 5 seconds to detect session status changes
    });

    return result;
};

export const useJoinSession = () => {
    const sessionApi = useSessionApi();
    const result = useMutation({
        mutationKey: ["joinSession"],
        mutationFn: sessionApi.joinSession,
        onSuccess: () => toast.success("Joined session successfully!"),
        onError: (error) => toast.error(error.response?.data?.message || "Failed to join session"),
    });

    return result;
};

export const useEndSession = () => {
    const sessionApi = useSessionApi();
    const result = useMutation({
        mutationKey: ["endSession"],
        mutationFn: sessionApi.endSession,
        onSuccess: () => toast.success("Session ended successfully!"),
        onError: (error) => toast.error(error.response?.data?.message || "Failed to end session"),
    });

    return result;
};