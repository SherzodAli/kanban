import { env } from "~/env";
import BestComponent from "./compo";

export default function Home() {
  const a = env.DATABASE_URL;
  console.log(env);

  return (
    <div className="text-4xl text-t3-purple-600">
      <BestComponent a={a} />
      Hello there
    </div>
  );
}
