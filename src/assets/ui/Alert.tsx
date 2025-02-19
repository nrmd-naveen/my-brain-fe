import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { alertState } from '../../recoil/atom';

const Alert = () => {
  const [alert, setAlert] = useRecoilState(alertState);

  // Automatically hide the alert after 3 seconds
  useEffect(() => {
    if (alert.isVisible) {
      const timer = setTimeout(() => {
        setAlert({ ...alert, isVisible: false });
      }, 3000); // Hide after 3 seconds

      return () => clearTimeout(timer); // Clean up the timer
    }
  }, [alert, setAlert]);

  // If no alert is visible, return null (don't render anything)
  if (!alert.isVisible) return null;

  return (
    <div
      className={`z-[1000] fixed top-4 right-4 p-4 rounded-lg shadow-lg transition-opacity duration-500 ${
        alert.type === 'success' ? 'bg-green-500' : 'bg-red-500'
      } text-white opacity-100`}
      style={{ opacity: alert.isVisible ? 1 : 0 }} // Control fade-out
    >
      <div className="flex justify-between items-center">
        <span>{alert.message}</span>
        <button
          onClick={() => setAlert({ ...alert, isVisible: false })}
          className="ml-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Alert;
