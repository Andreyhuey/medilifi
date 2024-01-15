// AuthContext.tsx
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "./firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

interface AuthContextProps {
  userProp: User | null;
  fetching: boolean;
}

interface User {
  name: string;
  // Add other user properties here
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, fetching] = useAuthState(auth);
  const [userData, setUserData] = useState<User | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (user) {
          const q = query(
            collection(db, "users"),
            where("uid", "==", user.uid)
          );
          const doc = await getDocs(q);
          const data = doc.docs[0]?.data();
          const userName = data?.fname + " " + data?.lname;

          setUserData({ name: userName.toLowerCase() });
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchUserData();
  }, [user]);

  const value: AuthContextProps = {
    userProp: userData,
    fetching,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
