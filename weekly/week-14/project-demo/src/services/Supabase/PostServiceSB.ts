import { supabase } from "./SupabaseConfig";
import { PostType } from "../../utils/types/Types";

export async function getPostByUserId(userId: string): Promise<PostType[]> {
    const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("user_id", userId);

    if (error) {
        console.error("Error fetching posts:", error);
        throw new Error("Failed to fetch posts");
    }

    const posts: PostType[] = data.map(post => ({
        ...post,
        id: post.id,
        content: post.content || "No content",
        createdAt: post["created_at"] || "No date",
        userId: post.userId || userId,
    }));

    return posts;
}

export async function addPost(post: PostType): Promise<string | null> {
    const { data, error } = await supabase
        .from("posts")
        .insert([
            {
                "user_id": post.userId,
                content: post.content,
                "created_at": new Date().toISOString(),
            },
        ])
        .select();

    if (error) {
        console.error("Error adding post:", error);
        return null;
    }

    console.log("Post added with ID:", data[0]?.id);
    return data[0]?.id || null;
}