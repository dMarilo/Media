import { Picture } from "./picture";

export interface Member {

  id: number;

  pictureUrl: string;

  username: string;

  bio: string;

  firstName: string;

  lastName: string;

  email: string;

  nickname: string;

  gender: string;

  interests: string;

  lookingFor: string;

  location: string;

  country: string;

  age: number;

  createdAt: Date;

  lastActiveAt: Date;

  pictures: Picture[];

}
