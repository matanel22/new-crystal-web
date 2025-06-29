const url = "http://localhost:8000";

export const getAllMissions = async () => {
  try {
    const response = await fetch(url + "/api/missions", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
      },
    });
    console.log(response);
    if (!response.ok) {
      throw new Error("Fetching missions failed");
    }
    const missions = await response.json();

    return missions;
  } catch (error) {
    console.log("Error fetching missions:\n" + error);
    throw error;
  }
};
