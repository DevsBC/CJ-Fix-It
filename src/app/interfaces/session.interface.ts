export interface ISession {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  access_token: string;
  email: string;
  fullName: string;
  id: string;
  mode: string;
  registrationDate: {
      unix: number;
      readable: string;
  }
  role: string;
  telephone: string;
  token: string;
  permissions: string[];
}
