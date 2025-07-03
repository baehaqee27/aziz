"use client";

import React, { useState, useEffect } from "react";
import { auth } from "../../../lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { LogIn } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        router.push("/admin/news");
      }
    });
    return () => unsubscribe();
  }, [router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(null);
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/admin/news");
    } catch (err) {
      setAuthError("Login gagal. Periksa email dan password Anda.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-gradient-to-b from-teal-50 to-teal-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-teal-200 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6 text-center text-teal-800">
          Login Admin
        </h1>
        {authError && (
          <p className="text-red-600 mb-4 text-center">{authError}</p>
        )}
        <form onSubmit={handleLogin} className="space-y-4 text-teal-800">
          <div>
            <label className="block text-teal-700 mb-1 font-medium">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Masukkan email"
              required
            />
          </div>
          <div>
            <label className="block text-teal-700 mb-1 font-medium">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Masukkan password"
              required
            />
          </div>
          <button
            type="submit"
            className={`w-full py-2 px-4 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            <LogIn className="inline mr-2" size={18} />
            {loading ? "Memproses..." : "Masuk"}
          </button>
        </form>
      </div>
    </div>
  );
}
