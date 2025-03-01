import React, { Component }  from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null
        };
    }

    static getDerivedStateFromError(error) {
        return {error};
    }

    componentDidCatch(error) {
        console.log(error);
    }

    render() {
        if (this.state.error) {
            return (
                <img className="error-img" src="/images/errorImage.jpg" alt="Error-Image"/>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
