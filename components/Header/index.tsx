'use client';

import { useSearchStore } from '@/store/useSearchStore';
import { debounce } from '@/utils/debounce';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useMemo } from 'react';

const Header = () => {
  const { setSearchTerm } = useSearchStore();
  const [inputValue, setInputValue] = useState('');
  const router = useRouter();
  const pathname = usePathname();

  const debouncedSetSearch = useMemo(
    () => debounce((val: string) => setSearchTerm(val), 300),
    [setSearchTerm],
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInputValue(val);
    debouncedSetSearch(val);
  };

  const redirectToUserList = () => {
    if (inputValue && pathname !== '/users') {
      router.push('/users');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      redirectToUserList();
    }
  };

  return (
    <header className="header">
      <div className="flex-1 max-w-lg w-full">
        <input
          type="text"
          name="header-search"
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onBlur={redirectToUserList}
          placeholder="Search users..."
          className="header-search"
        />
      </div>
    </header>
  );
};

export default Header;
