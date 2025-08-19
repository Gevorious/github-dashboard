import { FaSpinner } from 'react-icons/fa';

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-full min-h-screen">
      <FaSpinner size={50} className="text-gray-900 text-4xl animate-spin" />
    </div>
  );
};

export default Loading;
