import { useEffect, useState } from "react";

function Home() {
  const [response, setResponse] = useState(null);
  const handlePostRequest = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      }
    })
    const data = await response.json()
    setResponse(data)
  }

  useEffect(() => {
    handlePostRequest()
  }, []);

  return <>
    <div>
      Home
    </div>
    <div>
      {JSON.stringify(response, null, 2)}
    </div>
  </>;
}

export default Home;