import { useState } from 'preact/hooks';

export default function Greeting({messages}) {
var i = Math.floor(messages.length * Math.random());
  const [greeting, setGreeting] = useState(messages[i]);

  return (
    <div>
      <h3>{greeting}! Thank you for visiting!</h3>
    </div>
  );
}