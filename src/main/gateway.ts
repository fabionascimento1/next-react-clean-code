import AuthGatewayImpl from "@/adapter/gateway/AuthGateway";

import { axios, fetch } from "./http-client";

export const authGateway = new AuthGatewayImpl(axios);
