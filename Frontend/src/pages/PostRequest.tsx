import { useEffect, useState } from "react";

function PostRequest() {
  const [sampleResponse, setSampleResponse] = useState<any>(null);
  const [backendResponse, setBackendResponse] = useState<string | null>(null);

  const handlePostRequest = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      }
    })
    const data = await response.json()
    setSampleResponse(data)
  }

  const handlePostRequestToBackend = async () => {
    const response = await fetch("/api/form", {
      method: 'POST',
    })
    const data = await response.text()
    setBackendResponse(data)
  }


  useEffect(() => {
    handlePostRequest()
    handlePostRequestToBackend()
  }, []);

  const JsonplaceholderComponent = () => {
    return <>
      <div>
        <span>Response from jsonplaceholder.typicode.com: </span>
        <strong>{JSON.stringify(sampleResponse)}</strong>
      </div>
    </>
  }

  const SpringBootBackendComponent = () => {
    return <>
      <div>
        <span>Response from SpringBoot Backend: </span>
        <strong>{backendResponse}</strong>
      </div>
    </>
  }

  return <>
    <div>
      Home
    </div>
    {sampleResponse && <JsonplaceholderComponent />}
    {backendResponse && <SpringBootBackendComponent />}
  </>;
}

export default PostRequest;