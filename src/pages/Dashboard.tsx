import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Loader, NavbarAuth } from "../components";
import { FaHeartPulse, FaTemperatureHigh } from "react-icons/fa6";
import { SiOxygen } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import { database, auth } from "../services/firebase";
import { ref, onValue } from "firebase/database";
import { useAuthState } from "react-firebase-hooks/auth";
import { useAuth } from "../services/AuthContex";
import emailjs from "@emailjs/browser";

interface vitals {
  heartRate: number;
  spO2: number;
  tempC: number;
}

const Dashboard = () => {
  const navigate = useNavigate();
  const [vitals, setVitals] = useState<vitals | null>(null);
  const [user, loading] = useAuthState(auth);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const { userProp, fetching } = useAuth();

  // working code that fetches, checks and send notifications of patient vitals
  useEffect(() => {
    if (!user) return navigate("/login");
    const vitalsRef = ref(database, `users/John Doe/vitals`);
    // const vitalsRef = ref(database, `users/${userProp?.name}/vitals`);

    // vitals signs checker
    const checkTemperature = (tempC: number) => {
      if (tempC > 37.5) {
        toast.error("Fever: Temperature above 37.5°C");
        sendEmail("Fever: Temperature above 37.5°C");
      } else if (tempC < 32) {
        toast.error("Hypothermia: Temperature below 35°C");
        sendEmail("Hypothermia: Temperature below 35°C");
      }
    };

    const checkHeartRate = (heartRate: number) => {
      if (heartRate > 100) {
        toast.error("Tachycardia: Heart rate above 100 bpm");
        sendEmail("Tachycardia: Heart rate above 100 bpm");
      } else if (heartRate < 60) {
        toast.error("Bradycardia: Heart rate below 60 bpm");
        sendEmail("Bradycardia: Heart rate below 60 bpm");
      }
    };

    const checkOxygenSaturation = (spO2: number) => {
      if (spO2 < 92) {
        toast.error(
          "Oxygen Saturation Below 92%: May require supplemental oxygen"
        );
        sendEmail(
          "Oxygen Saturation Below 92%: May require supplemental oxygen"
        );
      }
    };

    // vitals sign listener
    const listener = onValue(
      vitalsRef,
      (snapshot) => {
        const fetchedData = snapshot.val();
        setVitals(fetchedData);
        console.log(fetchedData);

        if (fetchedData) {
          // Check vitals against normal ranges and show notifications
          checkTemperature(fetchedData.tempC);
          checkHeartRate(fetchedData.heartRate);
          checkOxygenSaturation(fetchedData.spO2);
        }
      },
      (error) => {
        console.error(error);
        setError("Failed to fetch data");
      }
    );

    // email and notification content

    setIsLoading(false);
    return () => listener();
  }, [user, userProp, database]);

  if (isLoading || loading || fetching) return <Loader text="Loading..." />;

  const sendEmail = (vital: any) => {
    // Replace these values with your Email.js credentials
    const userId = "fiE10GsuCfFXx-3VY";
    const serviceId = "service_fl2wkae";
    const templateId = "template_2fli3dp";

    const emailParams = {
      to_name: userProp?.name || "Patient",
      message: vital,
      heartRate: vitals?.heartRate,
      temp: vitals?.tempC,
      oxy: vitals?.spO2,
    };

    emailjs
      .send(serviceId, templateId, emailParams, userId)
      .then((response) => {
        toast.success("Email sent successfully");
        console.log("Email sent successfully:", response);
      })
      .catch((error) => {
        toast.error("Error sending email:", error);
      });
  };

  return (
    <div className="relative h-full">
      <NavbarAuth />
      <div className="flex flex-col  items-center justify-center h-screen w-full gap-5 bg-[#F4FCFF]">
        <p className="font-semibold text-2xl text-center pt-8 md:py-0 mt-24">
          Health Vitals Obtained from Li-Fi Based Patient Monitoring System
        </p>

        <ToastContainer />
        {error && <p className="text-red-500 text-lg">{error}</p>}
        <div className="  bg-[#CCE0FF] rounded-lg w-full h-full">
          <div className="flex flex-col lg:flex-row items-center justify-center  gap-5 p-10 lg:p-20 h-full w-full lg:min-w-fit">
            <div className="flex flex-col items-center justify-center bg-[#F4FCFF] gap-3 p-6 rounded-lg w-full h-full">
              <FaTemperatureHigh className="text-7xl text-[#478CF7]" />
              <div className=" text-center">
                <p className=" font-bold pb-2">Temperature: </p>
                <p className="font-medium text-[#478CF7]">
                  {vitals?.tempC} <span className="text-black">°C</span>
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center bg-[#F4FCFF] gap-3  p-6 rounded-lg w-full h-full">
              <FaHeartPulse className="text-7xl text-[#478CF7]" />
              <div className=" text-center">
                <p className=" font-bold pb-2">Heart Rate:</p>
                <p className="font-medium text-[#478CF7]">
                  {vitals?.heartRate} <span className="text-black">BPM</span>
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center bg-[#F4FCFF] gap-4 p-6 rounded-lg w-full h-full">
              <SiOxygen className="text-7xl text-[#478CF7]" />
              <div className=" text-center">
                <p className=" font-bold pb-2">Oxygen Saturation Level: </p>
                <p className="font-medium text-[#478CF7]">
                  {vitals?.spO2} <span className="text-black">SpO₂</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
