"use client";
import useSWR from "swr";
import axios from "../lib/axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
export default function useAuth({ middleware } = {}) {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const {
    data: user,
    error,
    mutate,
  } = useSWR("/user", () => axios.get("/user").then((res) => res.data));
  useEffect(() => {
    if (user || error) {
      setIsLoading(false);
    }
    if (middleware === "auth" && !user && error) {
      router.push("/login");
    }
  }, [user, error, middleware, router]);

  const login = async (setErrors, credentials) => {
    try {
      await axios.post("/login", credentials);
      mutate();
    } catch (error) {
      setErrors(error.response.data);
    }
  };

  return {
    user,
    login,
    isLoading,
  };
}
