import { request } from '@/utils/request';
import { User } from '../types';
import UserInfo from './partials/UserInfo';
import Followers from './partials/Followers';
import { UserPageProps } from './types';

const UserPage = async ({ params }: UserPageProps) => {
  const { username } = await params;
  const user = await request<User>(`https://api.github.com/users/${username}`);

  return (
    <div className="max-w-3xl mx-auto mt-8 bg-white shadow-md rounded-lg overflow-hidden">
      <UserInfo user={user} />
      <Followers user={user} />
    </div>
  );
};

export default UserPage;
