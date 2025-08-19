'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import InfiniteScroll from 'react-infinite-scroll-component';
import Link from 'next/link';
import { useSearchStore } from '@/store/useSearchStore';
import Avatar from '@/components/Avatar';
import type { User } from '../types';
import { request } from '@/utils/request';

const UserList = () => {
  const { searchTerm } = useSearchStore();

  const { data, fetchNextPage, hasNextPage, isLoading, error } =
    useInfiniteQuery({
      queryKey: ['users'],
      queryFn: ({ pageParam = 0 }) =>
        request<User[]>(`/users?per_page=20&since=${pageParam}`),
      getNextPageParam: (lastPage) =>
        lastPage.length ? lastPage[lastPage.length - 1].id : undefined,
      initialPageParam: 0,
    });

  if (isLoading)
    return <p className="text-center py-4 text-gray-500">Loading...</p>;

  if (error) throw error;

  const users = data?.pages.flat() ?? [];

  const filtered = users.filter((u) =>
    u.login.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  if (!filtered.length)
    return <p className="text-center py-4 text-gray-500">No user found</p>;

  console.log(users);

  return (
    <div className="max-w-3xl mx-auto mt-6">
      <InfiniteScroll
        dataLength={filtered.length}
        next={fetchNextPage}
        hasMore={!!hasNextPage}
        loader={
          <p className="text-center py-4 text-gray-500">
            {!searchTerm ? 'Loading more users...' : ''}
          </p>
        }
        endMessage={
          <p className="text-center py-4 text-gray-500">No more users</p>
        }
      >
        <ul className="divide-y divide-gray-200 bg-white rounded-lg shadow-sm overflow-hidden">
          {filtered.map((user) => (
            <li
              key={user.id}
              className="flex items-center justify-between gap-4 px-4 py-3 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <Avatar src={user.avatar_url} size={40} />
                <Link
                  href={`/users/${user.login}`}
                  className="font-medium hover:underline"
                >
                  @{user.login}
                </Link>
              </div>
              <Link
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline text-sm"
              >
                GitHub
              </Link>
            </li>
          ))}
        </ul>
      </InfiniteScroll>
    </div>
  );
};

export default UserList;
