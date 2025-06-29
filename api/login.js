const url = "http://localhost:8000";

export const login = async (username) => {
  try {
    const response = await fetch(url + "/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(username),
    });

    if (!response.ok) {
      throw new Error("Login failed");
    }

    const data = await response.json();
    console.info(data[0].message);
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};
