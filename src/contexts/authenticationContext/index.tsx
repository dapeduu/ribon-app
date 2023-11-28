import { userAuthenticationApi } from "@ribon.io/shared/services";
import { useCurrentUser } from "contexts/currentUserContext";
import {
  getLocalStorageItem,
  removeLocalStorageItem,
  setLocalStorageItem,
} from "lib/localStorage";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "lib/localStorage/constants";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

export interface IAuthenticationContext {
  accessToken: string | null;
  logout: () => void;
  signInWithGoogle: (response: any) => void;
}

export type Props = {
  children: JSX.Element[] | JSX.Element;
};

export const AuthenticationContext = createContext<IAuthenticationContext>(
  {} as IAuthenticationContext,
);

function AuthenticationProvider({ children }: Props) {
  const [accessToken, setAccessToken] = useState("");
  const { setCurrentUser } = useCurrentUser();

  function logout() {
    removeLocalStorageItem(ACCESS_TOKEN_KEY);
    removeLocalStorageItem(REFRESH_TOKEN_KEY);
  }

  const fetchAcessToken = async () => {
    const accessTokenKey = await getLocalStorageItem(ACCESS_TOKEN_KEY);
    if (accessTokenKey) setAccessToken(accessTokenKey);
  };

  function signIn(response: any) {
    const token = response.headers["access-token"];
    const refreshToken = response.headers["refresh-token"];

    setLocalStorageItem(ACCESS_TOKEN_KEY, token);
    setLocalStorageItem(REFRESH_TOKEN_KEY, refreshToken);
    setAccessToken(token);
    setCurrentUser(response.data.user);
  }

  async function signInWithGoogle(response: any) {
    try {
      const authResponse = await userAuthenticationApi.postAuthenticate(
        response.access_token,
        "google_oauth2_access",
      );

      signIn(authResponse);
    } catch (error) {
      throw new Error("google auth error");
    }
  }

  useEffect(() => {
    fetchAcessToken();
  }, []);

  useEffect(() => {
    if (!accessToken) {
      logout();
    }
  }, [accessToken]);

  const authenticationObject: IAuthenticationContext = useMemo(
    () => ({
      logout,
      accessToken,
      signInWithGoogle,
    }),
    [accessToken],
  );

  return (
    <AuthenticationContext.Provider value={authenticationObject}>
      {children}
    </AuthenticationContext.Provider>
  );
}

export default AuthenticationProvider;

export const useAuthentication = () => {
  const context = useContext(AuthenticationContext);

  if (!context) {
    throw new Error(
      "useAuthentication must be used within AuthenticationProvider",
    );
  }

  return context;
};
