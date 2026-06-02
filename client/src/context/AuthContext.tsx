import { createContext, useContext, useEffect, useState, useCallback } from "react";
import type { IUser } from "../assets/assets";
import api from "../configs/api";
import toast from "react-hot-toast";

interface AuthContextProps {
    isLoggedIn: boolean;
    user: IUser | null;
    login: (credentials: { email: string; password: string }) => Promise<void>;
    signUp: (userData: { name: string; email: string; password: string }) => Promise<void>;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({
    isLoggedIn: false,
    user: null,
    login: async () => {},
    signUp: async () => {},
    logout: async () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<IUser | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true); // Added loading state

    // Use useCallback to prevent unnecessary re-renders
    const fetchUser = useCallback(async () => {
        try {
            const { data } = await api.get('/api/auth/verify');
            if (data.user) {
                setUser(data.user as IUser);
                setIsLoggedIn(true);
            }
        } catch (error) {
            console.error("Auth check failed:", error);
            setIsLoggedIn(false);
            setUser(null);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchUser();
    }, [fetchUser]);

    const signUp = async ({ name, email, password }: { name: string, email: string, password: string }) => {
        try {
            const { data } = await api.post('/api/auth/register', { name, email, password });
            setUser(data.user as IUser);
            setIsLoggedIn(true);
            toast.success(data.message || "Account created!");
        } catch (error: any) {
            toast.error(error.response?.data?.message || "Sign up failed");
            throw error;
        }
    };

    const login = async ({ email, password }: { email: string; password: string }) => {
        try {
            const { data } = await api.post('/api/auth/login', { email, password });
            setUser(data.user as IUser);
            setIsLoggedIn(true);
            toast.success(data.message || "Logged in!");
        } catch (error: any) {
            toast.error(error.response?.data?.message || "Invalid credentials");
            throw error;
        }
    };

    const logout = async () => {
        try {
            await api.post('/api/auth/logout');
            setUser(null);
            setIsLoggedIn(false);
            toast.success("Logged out successfully");
        } catch (error: any) {
            toast.error("Logout failed");
        }
    };

    return (
        <AuthContext.Provider value={{ user, isLoggedIn, login, signUp, logout }}>
            {!loading && children} {/* Only render children once auth check finishes */}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);