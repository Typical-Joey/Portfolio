import React from "react";
import { Greeting, GreetingText } from "./styles/greetings.styles";


export default function Hello() {
  return (
    <Greeting>
      <GreetingText>
        <h1>Hi, I'm Joseph</h1>
        <h2>A Full-Stack Software Engineer</h2>
      </GreetingText>
    </Greeting>
  );
}
