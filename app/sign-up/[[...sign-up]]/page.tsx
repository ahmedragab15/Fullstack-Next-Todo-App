import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="container mx-auto px-8 flex min-h-screen flex-col items-center mt-20">
      <SignUp />
    </main>
  );
}
