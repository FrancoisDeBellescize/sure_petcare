export interface SurePetcareConfig {
  email_address: string;
  password: string;
}

export interface SurePetcareStatuses {
  data: SurePetcareStatusesData;
}

export interface SurePetcareStatusesData {
  devices: SurePetcareDevice[];
  households: SurePetcareHousehold[];
  pets: SurePetcarePet[];
  photos: SurePetcarePhoto[];
  tags: SurePetcareTags[];
  user: SurePetcareUser;
}

export interface SurePetcareDevice {
  id: number;
  product_id: number;
  household_id: number;
  name: string;
  serial_number: string;
  mac_address: string;
  version: string;
  created_at: string;
  updated_at: string;
  control: SurePetcareDeviceControl;
  status: SurePetcareDeviceStatus;
}

export interface SurePetcareDeviceControl {
  led_mode: number;
  pairing_mode: number;
}

export interface SurePetcareDeviceStatus extends SurePetcareDeviceControl {
  online: boolean;
  version: {
    device: SurePetcareDeviceVersion;
  };
}

export interface SurePetcareDeviceVersion {
  hardware: number;
  firmware: number;
}

export interface SurePetcareHousehold {
  id: number;
  name: string;
  share_code: string;
  timezone_id: number;
  version: string;
  created_at: string;
  updated_at: string;
  users: SurePetcareUser[];
}

export interface SurePetcareUser {
  id: number;
  owner: boolean;
  write: boolean;
  version: string;
  created_at: string;
  updated_at: string;
  user: {
    id: number;
    name: string;
  };
}

export interface SurePetcarePet {
  id: number;
  name: string;
  gender: 1;
  date_of_birth: string;
  weight: number;
  comments: string;
  household_id: string;
  spayed: number;
  breed_id: number;
  food_type_id: number;
  photo_id: number;
  species_id: number;
  tag_id: number;
  version: string;
  created_at: string;
  updated_at: string;
  conditions: SurePetcarePetCondition[];
  photo: SurePetcarePhoto;
  position: SurePetcarePosition;
  status: {
    activity: SurePetcarePosition;
  };
}

export interface SurePetcarePetCondition {
  id: number;
  version: string;
  created_at: string;
  updated_at: string;
}

export interface SurePetcarePhoto {
  id: number;
  location: string;
  uploading_user_id: number;
  version: string;
  created_at: string;
  updated_at: string;
}

export interface SurePetcarePosition {
  tag_id: number;
  device_id: number;
  where: SurePetcarePositionWhere;
  since: string;
}

export enum SurePetcarePositionWhere {
  Unknown = 0,
  Inside = 1,
  Outside = 2,
}

export interface SurePetcareTags {
  id: number;
  tag: string;
  version: string;
  created_at: string;
  updated_at: string;
  supported_product_ids: number[];
}

export enum SurePetcareLockState {
  Unlocked = 0,
  LockPetsIn = 1,
  LockPetsOut = 2,
  LockBothWays = 3,
}
