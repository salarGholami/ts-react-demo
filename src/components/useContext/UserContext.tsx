import { createContext, useContext, useState } from "react";

type UserContextProviderProps = {
  children: React.ReactNode;
};

type AuthUser = {
  user: string;
  email: string;
};

type UserContextType = {
  user: null | AuthUser;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};

const UserContext = createContext({} as UserContextType);

const UserContextProvider: React.FC<UserContextProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState<null | AuthUser>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);

export default UserContextProvider;
