import { supabase } from "./SupabaseConfig";
import { UserType } from "../../utils/types/Types";

export async function fetchUsers(): Promise<UserType[]> {
    const { data, error } = await supabase.from("users").select();

    if (error) {
        console.error("Error fetching users:", error);
        throw new Error("Failed to fetch users");
    }

    const users: UserType[] = data.map(user => ({
        ...user,
        id: user.id.toString(),
        username: user.username || "Unknown", 
    }));

    return users;
}