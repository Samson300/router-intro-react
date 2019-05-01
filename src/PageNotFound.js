import React from 'react';
import { Redirect, Link } from 'react-router-dom';

class PageNotFount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showRedirect: false
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                showRedirect: true
            });
        }, 2000);
    }

    render() {
    return (
        <div>
            <h1>Nope. Not found.</h1>
            <Link to="/">Click here to go home or you will be redirected in 2 seconds.</Link>
            { this.state.showRedirect ? <Redirect to="/" /> : null}
        </div>
    )
}
}

export default PageNotFount