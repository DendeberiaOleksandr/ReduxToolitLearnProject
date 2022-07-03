import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    selectPostIds,
    selectPostsError,
    selectPostsStatus
} from "../features/posts/postsSlice";
import PostsExcerpt from "./PostsExcerpt";

function PostsList(props) {

    const orderedPostIds = useSelector(selectPostIds)
    const postsStatus = useSelector(selectPostsStatus)
    const postsError = useSelector(selectPostsError)

    let content;
    if (postsStatus === 'loading'){
        content = <p>"Loading..."</p>
    } else if (postsStatus === 'succeeded'){
        content = orderedPostIds.map(postId => <PostsExcerpt key={postId} postId={postId}/>)
    } else if (postsStatus === 'failed'){
        content = <p>{postsError}</p>
    }

    return (
        <section>
            {content}
        </section>
    );
}

export default PostsList;