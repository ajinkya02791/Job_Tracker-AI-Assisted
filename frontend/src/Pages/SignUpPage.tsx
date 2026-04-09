import { signupUser } from '../queryOptions/signup'
import { useMutation } from '@tanstack/react-query'
import { useAuth } from '../context/AuthContext';
import NameInputLogin from '../components/NameInputLogin'
import EmailInputLogin from '../components/EmailInputLogin';
import PasswordInputLogin from '../components/PasswordInputLogin';

const SignupPage = () => {

  const { form , error, setError, goTo } = useAuth();

    const mutation = useMutation({
    mutationFn: signupUser,
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      goTo("dashboard")
    },
    onError: (err: any) => {
      setError(err.message);
    },
  });
  
  
  const handleSubmit = (e: React.SubmitEvent) : void => {
    e.preventDefault();
    setError("");

    // Basic validation
    if (!form.name || !form.email || !form.password) {
      setError("All fields are required");
      return;
    }
    if (form.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    mutation.mutate(form);
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Sign Up
        </h2>

        {error && (
          <p className="text-red-400 text-sm mb-4 text-center">
            {error}
          </p>
        )}

        <NameInputLogin />

       <EmailInputLogin />

       <PasswordInputLogin />

        {/* Button */}
        <button
          type="submit"
          disabled={mutation.isPending}
          className="w-full bg-green-600 hover:bg-green-700 transition p-3 rounded-lg text-white font-semibold"
        >
          {mutation.isPending ? "Creating account..." : "Sign Up"}
        </button>

        {/* Footer */}
        <p className="text-gray-400 text-sm mt-4 text-center">
          Already have an account?{" "}
          <span
            className="text-blue-400 cursor-pointer hover:underline"
            onClick={() => (goTo("login"))}
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default SignupPage;