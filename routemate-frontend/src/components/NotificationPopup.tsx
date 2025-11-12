import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

export interface Notification {
  id: string;
  title: string;
  message: string;
  type?: 'info' | 'warning' | 'success' | 'error';
}

interface NotificationPopupProps {
  notification: Notification;
  onDismiss: (id: string) => void;
}

export default function NotificationPopup({ notification, onDismiss }: NotificationPopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Fade in animation
    setTimeout(() => setIsVisible(true), 10);

    // Auto dismiss after 7 seconds
    const timer = setTimeout(() => {
      handleDismiss();
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setTimeout(() => {
      onDismiss(notification.id);
    }, 300);
  };

  const handleViewDetails = () => {
    // Navigate to relevant page based on notification content
    const message = notification.message.toLowerCase();
    const title = notification.title.toLowerCase();
    
    // Extract bus number if mentioned in notification
    const busMatch = notification.message.match(/Bus\s+(\w+)/i);
    
    if (message.includes('bus') && busMatch) {
      // If it's about a specific bus, go to live tracking with bus number
      const busNumber = busMatch[1];
      navigate(`/live-tracking/${busNumber}`);
      toast.success(`Opening Live Tracking for Bus ${busNumber}...`);
    } else if (message.includes('track') || title.includes('track')) {
      // Go to live tracking
      navigate('/live-tracking');
      toast.success('Opening Live Tracking...');
    } else if (message.includes('route') || title.includes('route')) {
      // If it's about routes, go to timetables
      navigate('/timetables');
      toast.success('Opening Bus Timetables...');
    } else {
      // Default to home page
      navigate('/home');
      toast.success('Opening details...');
    }
    
    handleDismiss();
  };

  const getTypeColor = () => {
    switch (notification.type) {
      case 'warning':
        return {
          bg: '#ffd5a0',
          border: '#ffd6a7',
          text: '#9f2d00'
        };
      case 'success':
        return {
          bg: '#d4f4dd',
          border: '#b8e6c4',
          text: '#0f5c2e'
        };
      case 'error':
        return {
          bg: '#fecaca',
          border: '#fca5a5',
          text: '#991b1b'
        };
      default:
        return {
          bg: '#dbeafe',
          border: '#bfdbfe',
          text: '#1e3a8a'
        };
    }
  };

  const colors = getTypeColor();

  return (
    <div
      className={`relative rounded-[20px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] min-w-[280px] max-w-sm transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
      }`}
      style={{ 
        backgroundColor: colors.bg,
        border: `0.889px solid ${colors.border}`
      }}
    >
      <div className="flex flex-col gap-3 p-4">
        {/* Header with Title, Message and Close */}
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <h4 
              className="text-[16px] font-semibold leading-[24px] mb-1"
              style={{ color: colors.text }}
            >
              {notification.title}
            </h4>
            <p 
              className="text-[14px] leading-[20px] opacity-90"
              style={{ color: colors.text }}
            >
              {notification.message}
            </p>
          </div>
          <button
            onClick={handleDismiss}
            className="flex-shrink-0 w-4 h-4 flex items-center justify-center hover:opacity-70 transition-opacity"
            aria-label="Close notification"
          >
            <svg className="w-3 h-3" viewBox="0 0 9 9" fill="none">
              <path d="M8.4714 0.471405L0.471405 8.4714" stroke="#99A1AF" strokeWidth="1.33333" />
              <path d="M0.471405 0.471405L8.4714 8.4714" stroke="#99A1AF" strokeWidth="1.33333" />
            </svg>
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button
            onClick={handleViewDetails}
            className="bg-white bg-opacity-50 hover:bg-opacity-75 px-3 py-1 rounded-[16px] text-[12px] font-medium leading-[16px] transition-all"
            style={{ color: colors.text }}
          >
            View Details
          </button>
          <button
            onClick={() => {
              toast.info('Notification dismissed');
              handleDismiss();
            }}
            className="bg-white bg-opacity-50 hover:bg-opacity-75 px-3 py-1 rounded-[16px] text-[12px] font-medium leading-[16px] transition-all"
            style={{ color: colors.text }}
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
}
