import HttpClient from "./HttpClient";

import LoginRequest from "@/adapter/model/dto/request/LoginRequest";
import LoginResponse from "@/adapter/model/dto/response/LoginResponse";

export interface AuthGateway {
  login(request: LoginRequest): Promise<LoginResponse>;
}

class AuthGatewayImpl implements AuthGateway {
  constructor(private readonly client: HttpClient) {}

  async login(request: LoginRequest): Promise<LoginResponse> {
    const response = await this.client.request<LoginResponse>({
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      url: "http://localhost:3000/api/login",
      body: request,
    });

    return new LoginResponse(response.status, response.data);
  }
}

export default AuthGatewayImpl;
