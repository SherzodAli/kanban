export default function BestComponent(props: { a: string }) {
  return (
    <div className="text-4xl text-t3-purple-600">
      Hello there
      <h1>{props.a}</h1>
    </div>
  );
}
