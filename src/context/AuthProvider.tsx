import { createContext, useState, ReactNode } from "react";

const AuthContext = createContext({});

interface IProps {
  children: ReactNode;
}

export const AuthProvider = (props: IProps) => {
  const [auth, setAuth] = useState<any>({});

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
