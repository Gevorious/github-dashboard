'use client';

import Avatar from '@/components/Avatar';
import { User } from '../../types';
import { useEffect } from 'react';
import { useRecentStore } from '@/store/useRecentStore';

const UserInfo = ({ user }: { user: User }) => {
  const addUser = useRecentStore((state) => state.addUser);

  const { name, login, avatar_url, location, bio } = user;

  useEffect(() => {
    addUser({ username: login, avatar: avatar_url });
  }, [login, avatar_url, addUser]);

  return (
    <div className="flex items-center p-6 border-b border-gray-200">
      <Avatar src={avatar_url} size={80} />
      <div className="ml-6">
        <h1 className="text-2xl font-bold text-gray-900">{name || login}</h1>
        {location && <p className="text-gray-500 mt-1">📍 {location}</p>}

        <p className="text-gray-600 mt-2">{bio || 'Bio not provided'}</p>
      </div>
    </div>
  );
};

export default UserInfo;
