import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Chrome, Github } from "lucide-react";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

async function handleGoogleSignIn() {
  "use server";
  await signIn(
    "google",
    { redirectTo: DEFAULT_LOGIN_REDIRECT },
    {
      prompt: "select_account",
    }
  );
}

async function handleGithubSignIn() {
  "use server";
  await signIn("github", { redirectTo: DEFAULT_LOGIN_REDIRECT });
}

const SignInFormClient = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900 px-4">
      <Card className="w-full max-w-lg p-6 md:p-8 shadow-lg rounded-2xl">
        <CardHeader className="space-y-2 text-center">
          <CardTitle className="text-3xl font-extrabold">Sign In</CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-300">
            Choose your preferred sign-in method
          </CardDescription>
        </CardHeader>

        <CardContent className="grid gap-5 mt-4">
          <form action={handleGoogleSignIn}>
            <Button
              type="submit"
              variant="outline"
              className="w-full py-3 flex items-center justify-center space-x-2 text-lg font-medium"
            >
              <Chrome className="h-5 w-5" />
              <span>Sign in with Google</span>
            </Button>
          </form>

          <form action={handleGithubSignIn}>
            <Button
              type="submit"
              variant="outline"
              className="w-full py-3 flex items-center justify-center space-x-2 text-lg font-medium"
            >
              <Github className="h-5 w-5" />
              <span>Sign in with GitHub</span>
            </Button>
          </form>
        </CardContent>

        <CardFooter className="mt-6">
          <p className="text-sm text-center text-gray-500 dark:text-gray-400 w-full">
            By signing in, you agree to our{" "}
            <a href="#" className="underline hover:text-primary">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="underline hover:text-primary">
              Privacy Policy
            </a>
            .
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignInFormClient;
