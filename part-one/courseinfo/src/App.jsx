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
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header course={course}></Header>
      <Content
        parts={[parts[0].name, parts[1].name, parts[2].name]}
        numbers={[parts[0].exercises, parts[1].exercises, parts[2].exercises]}
      ></Content>

      <Total
        total={parts[0].exercises + parts[1].exercises + parts[2].exercises}
      ></Total>
    </div>
  );
};

export default App;
