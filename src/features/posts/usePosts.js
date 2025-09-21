import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getPosts } from './postsApi';

export const usePosts = () => {
    return useQuery({
        queryKey:["posts"],
        queryFn:getPosts
    });
}