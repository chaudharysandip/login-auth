import { Button, Container } from "@mui/material";
import { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);
  const multiplyValue = value * 5;
  const handleClick = () => {
    setValue(value + 1);
  };
  return (
    <Container className="counter">
      <h1>Main Value: {value}</h1>
      <Button variant="contained" onClick={handleClick}>
        Click Multiply by 5
      </Button>
      <p>Multiplied Value: {multiplyValue}</p>
    </Container>
  );
};

export default Counter;
