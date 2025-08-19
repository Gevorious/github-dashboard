import React from 'react';
import { User } from '../../types';

const Followers = ({ user }: { user: User }) => {
  return (
    <div className="flex justify-around p-6 bg-gray-50">
      <div className="text-center">
        <p className="text-lg font-semibold text-gray-900">{user.followers}</p>
        <p className="text-gray-500">Followers</p>
      </div>
      <div className="text-center">
        <p className="text-lg font-semibold text-gray-900">{user.following}</p>
        <p className="text-gray-500">Following</p>
      </div>
    </div>
  );
};

export default Followers;
