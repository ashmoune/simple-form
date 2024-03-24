const StepTwo = (props) => {
  return (
    <form>
      <h2>Results</h2>
      <div>
        <p>Name : {props.name}</p>
        <p>Mail : {props.email}</p>
        <p>Password : hidden</p>
      </div>
    </form>
  );
};

export default StepTwo;
