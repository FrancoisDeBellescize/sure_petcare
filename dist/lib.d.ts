import { SurePetcareConfig, SurePetcareDevice, SurePetcareLockState, SurePetcareStatuses } from "./interfaces";
export declare class SurePetcareApi {
    private readonly email_address;
    private readonly password;
    private readonly baseURL;
    private _loginCompleteCallbacks;
    private _loggedIn;
    private _loggingIn;
    private token;
    private pullingStatuses;
    private getStatusCallbacks;
    constructor(config: SurePetcareConfig);
    login(callback: (err?: any) => void): void;
    _beginLogin(): void;
    _loginComplete(): void;
    getLockStatus(device_id: number, callback: (data: SurePetcareDevice) => void): void;
    setLock(device_id: number, lockState: SurePetcareLockState, callback: (data: any) => void): void;
    getStatuses(callback: (data: SurePetcareStatuses) => void): void;
    _makeAuthenticatedRequest(req: any, callback: (data: any, err?: any) => void): void;
    translateBatteryToPercent(value: number): number;
}
