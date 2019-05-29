import React from 'react';
class Post extends React.Component{
    state={
        title:  'Post One',
        body: 'This is my post'
    }

    render(){
        return(
            <div>
                <h3>{this.state.title}</h3>
                <p>{this.state.body}</p>
            </div>
        )
    }
}

export default Post;