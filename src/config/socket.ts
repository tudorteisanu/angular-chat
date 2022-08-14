import {SocketIoConfig} from "ngx-socket-io";
import {environment} from "../environments/environment";

export const socketIoConfig: SocketIoConfig = { url: environment.apiWsUrl, options: {
  autoConnect: true,
    forceBase64: true,
    onlyBinaryUpgrades: true,
    reconnectionDelay: 2000,
  } };
