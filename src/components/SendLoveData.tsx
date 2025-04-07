const sendLoveData = async (name: string, crush: string, result: number) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/love`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        crush,
        result,
      }),
    });

  } catch (error) {
    console.error("Error saving data:", error);
  }
};

export default sendLoveData;
