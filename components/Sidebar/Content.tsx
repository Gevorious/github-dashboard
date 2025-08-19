'use client';

import { FaHome, FaUsers } from 'react-icons/fa';
import type { ContentProps } from './types';
import Link from 'next/link';
import {
  useRecentStore,
  useLoadRecentFromStorage,
} from '@/store/useRecentStore';
import Avatar from '../Avatar';

const Content = ({ onLinkClick }: ContentProps) => {
  useLoadRecentFromStorage();
  const { recent } = useRecentStore();

  return (
    <div className="flex flex-col h-full">
      <nav className="flex-1 p-4 mt-12 ml-4 space-y-1 overflow-y-auto">
        <Link href="/" className="sidebar-link" onClick={onLinkClick}>
          <FaHome className="text-gray-400" />
          <span>Home</span>
        </Link>
        <Link href="/users" className="sidebar-link" onClick={onLinkClick}>
          <FaUsers className="text-gray-400" />
          <span>Users</span>
        </Link>
        <div className="mt-6 ml-6">
          <h4 className="text-gray-400 uppercase text-xs mb-4">
            Recently Viewed
          </h4>
          {recent.length > 0 &&
            recent.map(({ username, avatar }) => (
              <Link
                key={username}
                href={`/users/${username}`}
                className="sidebar-link flex items-center gap-2 text-sm"
                onClick={onLinkClick}
              >
                <Avatar src={avatar} size={24} />
                <span>@{username}</span>
              </Link>
            ))}
        </div>
      </nav>

      <div className="p-4 border-t border-gray-700 text-sm text-gray-500">
        © 2025
      </div>
    </div>
  );
};

export default Content;
