export interface ITokenResponse {
  data: {
    request_token: string;
  }
}

export interface ISessionResponse {
  data: {
    session_id: string;
  }
}
