import { useEffect, useState } from "react";

function PostRequest() {
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
      <span>Response from jsonplaceholder.typicode.com: </span>
      <strong>{JSON.stringify(response)}</strong>
    </div>
    }
        {response2 &&
    <div>
      <span>Response from SpringBoot Backend: </span>
      <strong>{response2}</strong>
    </div>
    }

  </>;
}

export default PostRequest;