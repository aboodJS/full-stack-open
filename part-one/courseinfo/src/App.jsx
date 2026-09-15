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
  const data = props.data.map((e) => (
    <Part part={e.name} number={e.exercises}></Part>
  ));
  return (
    <>
      <div>{data}</div>
    </>
  );
};

const Total = (props) => {
  const nums = [];
  props.data.map((e) => nums.push(e.exercises));
  console.log(nums);
  const Total = nums.reduce((e, em) => e + em, 0);
  console.log(Total);
  return (
    <>
      <p>Number of exercises {Total}</p>
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
      <Content data={parts}></Content>

      <Total data={parts}></Total>
    </div>
  );
};

export default App;
