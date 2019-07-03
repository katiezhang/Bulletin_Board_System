import React from 'react';
import {Route} from 'react-router-dom';
import Header from './Header';
import PostList from './PostList';
import PostDetail from './PostDetail';

class Home extends React.Component {
    render(){
        const {match} = this.props;
        // console.log(match)
        return(
            <div>
                <Header></Header>
                <Route exact path={match.url} component={PostList}></Route>
                <Route path={`${match.url}/:id`} component={PostDetail}></Route>
            </div>
        )
    }
}

export default Home;