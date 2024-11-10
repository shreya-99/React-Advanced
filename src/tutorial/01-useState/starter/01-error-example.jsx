const ErrorExample = () => {
  let count = 0;
  let increaseCount = () => {
    count++;
    console.log(count);
  }
  return (
    <div>
      <h2>{count}</h2>
      <button type="button" onClick={increaseCount}
      className="btn">
        increase
      </button>
    </div>
  );
};

export default ErrorExample;
