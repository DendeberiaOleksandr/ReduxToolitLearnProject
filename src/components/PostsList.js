import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts, selectAllPosts, selectPostsError, selectPostsStatus} from "../features/posts/postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import PostsExcerpt from "./PostsExcerpt";

function PostsList(props) {

    const dispatch = useDispatch()

    const posts = useSelector(selectAllPosts)
    const postsStatus = useSelector(selectPostsStatus)
    const postsError = useSelector(selectPostsError)

    useEffect(() => {
        if (postsStatus === 'idle'){
            dispatch(fetchPosts())
        }
    }, [postsStatus, postsError])

    let content;
    if (postsStatus === 'loading'){
        content = <p>"Loading..."</p>
    } else if (postsStatus === 'succeeded'){
        const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
        content = orderedPosts.map(post => <PostsExcerpt key={post.id} post={post}/>)
    } else if (postsStatus === 'failed'){
        content = <p>{postsError}</p>
    }

    return (
        <section>
            <h2>Posts</h2>
            {content}
        </section>
    );
}

export default PostsList;