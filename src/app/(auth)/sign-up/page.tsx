import { Button, Input } from "~/components/ui";
import { signUpAction } from "~/server/queries-auth";

export default async function SignUpPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">Sign Up</h1>
      <form action={signUpAction} className="flex w-64 flex-col gap-3">
        {/* <Input type="text" name="name" placeholder="Name" required /> */}
        <Input type="email" name="email" placeholder="Email" required />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
}
