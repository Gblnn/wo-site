import { useAuth } from "@/components/AuthProvider";
import { Checkbox } from "@/components/ui/checkbox";
import { auth } from "@/firebase";
import { message } from "antd";
import {
  browserLocalPersistence,
  browserSessionPersistence,
  setPersistence,
} from "firebase/auth";
import { motion } from "framer-motion";
import { ChevronRight, Eye, EyeOff, LoaderCircle } from "lucide-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { loginUser } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [stayLoggedIn, setStayLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLoginIn = async () => {
    if (!email || !password) {
      message.error("Please enter both email and password.");
      console.log("Login attempt blocked: missing email or password.");
      return;
    }
    try {
      setLoading(true);
      // Set persistence before login attempt
      await setPersistence(
        auth,
        stayLoggedIn ? browserLocalPersistence : browserSessionPersistence
      );

      console.log("Calling loginUser with:", { email, password });
      const result = await loginUser(email, password);
      console.log("loginUser result:", result);
      if (!result || !result.userData) {
        let errorMessage = "Login failed. Please try again.";
        if (result?.error) {
          console.error("loginUser error:", result.error);
        }
        if (result?.error?.code === "auth/user-not-found") {
          errorMessage = "No user found with this email.";
        } else if (result?.error?.code === "auth/wrong-password") {
          errorMessage = "Incorrect password.";
        } else if (result?.error?.code === "auth/invalid-email") {
          errorMessage = "Invalid email address.";
        } else if (result?.error?.message) {
          errorMessage = result.error.message;
        }
        message.error(errorMessage);
        return;
      }
      const user = result.userData;
      console.log("Login successful, user:", user);

      // Store user data in localStorage for components that still rely on it
      localStorage.setItem("userEmail", user.email);

      // Force persistence check after successful login
      if (stayLoggedIn) {
        await setPersistence(auth, browserLocalPersistence);
      }

      // Navigate to the return path or index, using replace to avoid history stack
      const returnPath = location.state?.returnPath || "/index";
      console.log("Navigating to:", returnPath);
      navigate(returnPath, { replace: true });
    } catch (err: any) {
      const errorMessage = err.message || "Login failed. Please try again.";
      console.error("Login error (catch block):", err);
      message.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      <div style={{ display: "flex", padding: "1.25rem", height: "100svh" }}>
        <div
          className="desktop-only"
          style={{
            border: "",
            flex: 1,
            background: "linear-gradient(orangered, brown)",
            alignItems: "flex-end",
            borderRadius: "1rem",
          }}
        >
          <div
            style={{
              display: "flex",
              border: "",
              alignItems: "center",
              margin: "2rem",
              gap: "0.5rem",
            }}
          >
            <img src="/logo.png" style={{ width: "4rem", border: "" }} />

            <div
              style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
            >
              <p
                style={{
                  fontWeight: 500,
                  fontSize: "2.25rem",
                  textTransform: "uppercase",
                }}
              >
                Wahat Oman
              </p>
              {/* <p>v1.1</p> */}
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flex: 1,
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            flexFlow: "column",
            border: "",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexFlow: "column",
              border: "",
              borderRadius: "1rem",
              width: "32ch",
            }}
          >
            <div
              style={{
                display: "flex",
                border: "",
                borderRadius: "1rem",
                padding: "",
                flexFlow: "column",
                width: "100%",
                gap: "0.75rem",
                marginTop: "2rem",
              }}
            >
              <p
                style={{
                  top: 0,
                  left: 0,
                  fontSize: "2rem",
                  fontWeight: "600",
                  border: "",
                  width: "100%",
                  paddingLeft: "0.5rem",
                  marginTop: "",
                }}
              >
                LOGIN
              </p>
              <br />

              <input
                autoComplete="email"
                id="email"
                onChange={(e: any) => {
                  setEmail(e.target.value);
                  console.log();
                }}
                type="email"
                placeholder="Email Address"
              />

              <div style={{ position: "relative", width: "100%" }}>
                <input
                  id="password"
                  onChange={(e: any) => {
                    setPassword(e.target.value);
                  }}
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  style={{ width: "100%" }}
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: "absolute",
                    right: "0.75rem",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "none",
                    border: "none",
                    padding: "0.25rem",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                  }}
                  type="button"
                >
                  {showPassword ? (
                    <EyeOff size={18} color="gray" />
                  ) : (
                    <Eye size={18} color="gray" />
                  )}
                </button>
              </div>
              <p />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  width: "100%",
                  justifyContent: "",
                  paddingRight: "1rem",
                  paddingLeft: "1rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    border: "",
                    width: "100%",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    <Checkbox
                      checked={stayLoggedIn}
                      onCheckedChange={(checked) =>
                        setStayLoggedIn(checked === true)
                      }
                    />
                    <p style={{ fontSize: "0.75rem" }}>Stay logged in</p>
                  </div>

                  <Link
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: "600",
                      color: "orangered",
                      cursor: "pointer",
                    }}
                    to={"/user-reset"}
                  >
                    Forgot Password?
                  </Link>
                </div>
              </div>

              <p />
              <button
                onClick={handleLoginIn}
                className={loading ? "disabled" : ""}
                style={{
                  background: "orangered",
                  display: "flex",
                  gap: "0.75rem",
                }}
              >
                {loading ? (
                  <LoaderCircle className="animate-spin" width={"1rem"} />
                ) : (
                  ""
                )}
                LOGIN
                <ChevronRight width={"0.75rem"} />
              </button>
            </div>

            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
