import { useEffect, useState } from "react";

function Home() {
  const [response, setResponse] = useState<any>(null);
  const [response2, setResponse2] = useState<string | null>(null);

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

  const handlePostRequestToBackend = async () => {
    const response = await fetch("/api/form", {
      method: 'POST',
    })
    const data = await response.text()
    setResponse2(data)
  }


  useEffect(() => {
    handlePostRequest()
    handlePostRequestToBackend()
  }, []);

  return <>
    <div>
      Home
    </div>
    {response &&
    <div>
      <h2>Response from jsonplaceholder.typicode.com</h2>
      <pre>{JSON.stringify(response, null, 2)}</pre>
    </div>
    }
        {response2 &&
    <div>
      <h2>Response from SpringBoot Backend</h2>
      {response2}
    </div>
    }

  </>;
}

export default Home;