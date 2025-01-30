import { BaseEntity } from './common.types';

export interface User extends BaseEntity {
  email: string;
  nickname?: string;
  thumbnailImageUrl?: string;
}

export interface UserProfile
  extends Pick<User, 'id' | 'name' | 'thumbnailImageUrl'> {
  // 프로필에만 필요한 추가 필드
  bio?: string;
}
