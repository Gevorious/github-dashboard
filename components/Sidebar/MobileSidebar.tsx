'use client';

import { useState } from 'react';
import Content from './Content';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <aside
        className={`sidebar-container__mobile ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex-1 flex flex-col mt-10">
          <Content onLinkClick={() => setIsOpen(false)} />
        </div>

        <button
          className={`absolute ${
            isOpen ? 'right-3' : '-right-10'
          } top-3 p-2 rounded-full z-50`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <FaTimes size={24} className="text-gray-100" />
          ) : (
            <FaBars size={24} className="text-gray-900" />
          )}
        </button>
      </aside>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
