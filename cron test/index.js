export default {
  async scheduled(event) {
    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbyLX6KYqmF_fhs4ocxVk7Hovbw3Q__4dcVpNXQ_ueS6G4rz1_GePa5y5ko6rqJn1lYrQQ/exec", {
        method: "GET",
      });
      
      if (!response.ok) {
        console.error("Failed to trigger App Script", response.statusText);
      } else {
        console.log("App Script triggered successfully");
      }
    } catch (error) {
      console.error("Error triggering App Script", error);
    }
  },
};
