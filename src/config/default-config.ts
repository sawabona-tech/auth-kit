import { z } from "zod";

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
  validation?: {
    register?: z.ZodSchema;
    login?: z.ZodSchema;
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

