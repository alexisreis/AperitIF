import "./Loading.css";
const Loading = () => {
return (
        <div className="loading-container">
            <div className="loading-overlay"/>
            <div className="loading-content">
                <img src="https://i.giphy.com/media/Qsgiz05mtyEeqOp6sV/giphy.gif" alt="Loading..."/>
                <strong>Preparing a banger...</strong>
            </div>
        </div>
    )
}

export default Loading;