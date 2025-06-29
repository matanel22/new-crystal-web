"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/UseAuth";
import { useAuthContext } from "../../hooks/AuthContext";

export default function Login() {
  const router = useRouter();
  const { user, login } = useAuth({ middleware: "guest" });
  const { setUser } = useAuthContext();

  const [errors, setErrors] = useState(null);

  useEffect(() => {
    if (user) {
      router.push("/calender");
      console.log(user);
      setUser(user);
    } else {
      login(setErrors, { employee_number: "1111111" });
      setUser(null);
    }
  }, [user]);

  return (
    <div className="login_page h-full w-full flex justify-center items-center z-50 ">
      {" "}
      test
    </div>
  );
}
