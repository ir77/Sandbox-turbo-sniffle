import { useState } from "react";

function ComponentSample() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}

function ComponentVSFunction() {
  const [showFirst, setShowFirst] = useState(true)
  const [showSecond, setShowSecond] = useState(true)

  return (
    <>
      <h1>Component VS Function</h1>
      <h2>ComponentSample as Component</h2>
      <ol>
        <li><button onClick={() => setShowFirst(!showFirst)}>Toggle First</button></li>
        <li>{showFirst && <ComponentSample />}</li>
        <li><ComponentSample /></li>
      </ol>
      <h2>ComponentSample as Function</h2>
      <ol>

        {/* Uncaught Error: Rendered fewer hooks than expected.*/}
        {/* 親コンポーネントにhooksが登録されてしまい、要素が消えるとクラッシュしてしまう。 */}
        <li><button onClick={() => setShowSecond(!showSecond)}>Toggle Second Cause Crash!</button></li>
        <li>{showSecond && ComponentSample()}</li>
        {/* ↑↓の独立性は保たれる */}
        <li>{ComponentSample()}</li>
      </ol>
    </>
  )
}

export default ComponentVSFunction;
