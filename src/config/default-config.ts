export interface AuthKitConfig {
  providers: ("google" | "github" | "credentials")[];
  baseUrl: string;
  theme?: {
    primaryColor?: string;
    fontFamily?: string;
    logoUrl?: string;
  };
  redirects?: {
    afterLogin?: string;
    afterLogout?: string;
  };
}

export const defaultConfig: AuthKitConfig = {
  providers: ["credentials"],
  baseUrl: "",
  theme: {
    primaryColor: "#716C4A",
    fontFamily: "Yeseva One",
  },
  redirects: {
    afterLogin: "/dashboard",
    afterLogout: "/",
  },
};
