import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function ComponentSample() {
  const [count, setCount] = useState(0);
  return (
    <Button onClick={() => setCount(count + 1)}>
      Count: {count}
    </Button>
  );
}

function ComponentVSFunction() {
  const [showFirst, setShowFirst] = useState(true)
  const [showSecond, setShowSecond] = useState(true)

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>ComponentSample as Component</CardTitle>
        </CardHeader>
        <CardContent>
          <ol>
            <li><Button onClick={() => setShowFirst(!showFirst)}>Toggle First</Button></li>
            <li>{showFirst && <ComponentSample />}</li>
            <li><ComponentSample /></li>
          </ol>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>ComponentSample as Function</CardTitle>
        </CardHeader>
        <CardContent>
          <ol>
            {/* Uncaught Error: Rendered fewer hooks than expected.*/}
            {/* 親コンポーネントにhooksが登録されてしまい、要素が消えるとクラッシュしてしまう。 */}
            <li><Button onClick={() => setShowSecond(!showSecond)}>Toggle Second Cause Crash!</Button></li>
            <li>{showSecond && ComponentSample()}</li>
            {/* ↑↓の独立性は保たれる */}
            <li>{ComponentSample()}</li>
          </ol>
        </CardContent>
      </Card>
    </>
  )
}

export default ComponentVSFunction;
