import { NavbarAuth } from "../components";
// import { database } from "../data";
import { FaHeartPulse, FaTemperatureHigh } from "react-icons/fa6";
import { SiOxygen } from "react-icons/si";
//
import { database as data } from "../services/firebase";
import { ref, onValue } from "firebase/database";
import { useEffect, useState, useRef } from "react";

/* 
const db = data;
const vitalsRef = ref(db, `users`);

onValue(vitalsRef, (snapshot) => {
  const data = snapshot.val();
  console.log(data);
});
*/

interface vitals {
  heartRate: number;
  spO2: number;
  tempC: number;
}

const Dashboard = () => {
  const db = data;
  const vitalsRef = ref(db, `users/John Doe/vitals`);

  const [vitals, setVitals] = useState<vitals | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  // original working code
  useEffect(() => {
    const listener = onValue(
      vitalsRef,
      (snapshot) => {
        const fetchedData = snapshot.val();
        setVitals(fetchedData);
        console.log(fetchedData);
        setIsLoading(false);
      },
      (error) => {
        console.error(error);
        setError("Failed to fetch data");
      }
    );
    return () => listener();
  }, []);

  if (isLoading)
    return (
      <div className="backdrop-blur-sm flex items-center h-screen justify-center text-xl font-semibold bg-[#F4FCFF]">
        <div className="bg-[rgba(244,252,255,0.9)] backdrop-filter backdrop-blur-md p-8 rounded-md">
          Loading Patient Vitals...
        </div>
      </div>
    );

  return (
    <div className="relative h-full">
      <NavbarAuth />
      <div className="flex flex-col  items-center justify-center h-screen w-full gap-5 bg-[#F4FCFF]">
        <p className="font-semibold text-2xl text-center pt-8 md:py-0 mt-24">
          Health Vitals Obtained from Li-Fi Based Patient Monitoring System
        </p>
        {error && <p className="text-red-500 text-lg">{error}</p>}
        <div className="  bg-[#CCE0FF] rounded-lg w-full h-full">
          <div className="flex flex-col lg:flex-row items-center justify-center  gap-5 p-10 lg:p-20 h-full w-full lg:min-w-fit">
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

            <div className="flex flex-col items-center justify-center bg-[#F4FCFF] gap-3 p-6 rounded-lg w-full h-full">
              <FaTemperatureHigh className="text-7xl text-[#478CF7]" />
              <div className=" text-center">
                <p className=" font-bold pb-2">Temperature: </p>
                <p className="font-medium text-[#478CF7]">
                  {vitals?.tempC} <span className="text-black">°C</span>
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
