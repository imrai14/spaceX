import Loader from 'react-loader-spinner';

const LoadingIndicator = props => {

    return props.promiseInProgress &&
    <div
        style={ {
            width: "100%",
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        } }
    >
        <Loader type="ThreeDots" color="#2BAD60" height="100" width="100" />
    </div>
}


export default LoadingIndicator;