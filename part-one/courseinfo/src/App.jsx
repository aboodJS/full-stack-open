const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
};

const Part = (props) => {
  return (
    <>
      <p>
        {props.part} {props.number}
      </p>
    </>
  );
};

const Content = (props) => {
  return (
    <>
      <div>
        <Part part={props.parts[0]} number={props.numbers[0]}></Part>
        <Part part={props.parts[1]} number={props.numbers[1]}></Part>
        <Part part={props.parts[2]} number={props.numbers[2]}></Part>
      </div>
    </>
  );
};

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.total}</p>
    </>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course}></Header>
      <Content
        parts={[part1, part2, part3]}
        numbers={[exercises1, exercises2, exercises3]}
      ></Content>

      <Total total={exercises1 + exercises2 + exercises3}></Total>
    </div>
  );
};

export default App;
