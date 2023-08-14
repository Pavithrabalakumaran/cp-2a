const Button = (props) => {
  const { className, buttonText } = props;
  return <button className={`button ${className}`}>{buttonText}</button>;
};

const element = (
  <div className="social-button-container">
    <div className="content-container">
      <h1 className="heading"> Social Buttons </h1>
      <div className="button-container">
        <button className="button button-1"> Like </button>
        <button className="button button-2">Comment</button>
        <button className="button button-3">Share</button>
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
