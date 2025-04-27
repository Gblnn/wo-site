import { useState } from "react";
import { auth } from "../firebase/config";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [resetSuccess, setResetSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isResetting, setIsResetting] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setResetSuccess(false);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/admin-index", { state: { from: location.pathname } });
    } catch (err: any) {
      setError(
        err.message || "Failed to login. Please check your credentials."
      );
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      setError("Please enter your email address first");
      return;
    }

    setIsResetting(true);
    setError("");
    setResetSuccess(false);

    try {
      await sendPasswordResetEmail(auth, email);
      setResetSuccess(true);
    } catch (err: any) {
      setError(err.message || "Failed to send reset email. Please try again.");
      console.error(err);
    } finally {
      setIsResetting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-orange-600/20 rounded-full blur-[80px] -top-20 -right-20" />
        <div className="absolute w-[500px] h-[500px] bg-orange-900/20 rounded-full blur-[100px] -bottom-40 -left-20" />
        <div className="absolute inset-0 backdrop-blur-[100px]" />
      </div>

      {/* Login Card */}
      <div className="max-w-md w-full p-8 bg-[#1a1a1a]/40 backdrop-blur-xl rounded-2xl shadow-2xl relative z-10 border border-white/[0.05]">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-white tracking-tight">
            LOGIN
          </h2>
          {/* <p className="mt-2 text-gray-400 text-sm">
            Please Log in to continue
          </p> */}
        </div>

        <form className="space-y-6" onSubmit={handleLogin}>
          <AnimatePresence mode="wait">
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="bg-red-500/10 backdrop-blur-md text-red-400 p-4 rounded-xl text-sm font-medium border border-red-500/20"
              >
                {error}
              </motion.div>
            )}
            {resetSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="bg-green-500/10 text-green-400 p-4 rounded-xl text-sm font-medium border border-green-500/20"
              >
                Password reset email sent! Please check your inbox.
              </motion.div>
            )}
          </AnimatePresence>

          <div className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-200 mb-1.5"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none rounded-xl relative block w-full px-4 py-3.5 border border-white/[0.05] bg-white/[0.05] placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 hover:border-white/[0.1]"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-200 mb-1.5"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-xl relative block w-full px-4 py-3.5 border border-white/[0.05] bg-white/[0.05] placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 hover:border-white/[0.1]"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-4 pt-2">
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full flex justify-center py-3.5 px-4 border border-transparent rounded-xl text-sm font-medium text-white bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-200 shadow-lg shadow-orange-600/20 hover:shadow-orange-600/30 ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Signing in...</span>
                </div>
              ) : (
                "SIGN IN"
              )}
            </button>

            <div className="text-center">
              <button
                type="button"
                onClick={handleForgotPassword}
                disabled={isResetting}
                className="text-sm text-gray-400 hover:text-orange-500 hover:font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isResetting ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-3 h-3 border-2 border-gray-400/30 border-t-gray-400 rounded-full animate-spin" />
                    <span>Sending reset email...</span>
                  </div>
                ) : (
                  "Forgot your password?"
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
