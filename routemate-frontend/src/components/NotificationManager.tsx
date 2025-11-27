import { useState, useEffect, useContext } from 'react';
import NotificationPopup, { type Notification } from './NotificationPopup';
import { AppContext } from '../App';

export default function NotificationManager() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [hasShownWelcome, setHasShownWelcome] = useState(false);
  const context = useContext(AppContext);

  // Show notifications after user signs in
  useEffect(() => {
    if (context?.user && !hasShownWelcome) {
      setHasShownWelcome(true);
      
      // Welcome notification
      const userName = context?.user?.name ?? 'User';
      setTimeout(() => {
        addNotification({
          id: Date.now().toString(),
          title: 'Welcome Back!',
          message: `Hello ${userName}! Track your buses in real-time.`,
          type: 'success'
        });
      }, 1000);

      // Bus update notification
      setTimeout(() => {
        addNotification({
          id: (Date.now() + 1).toString(),
          title: 'Bus Update',
          message: 'EV3 is delayed by 5 minutes',
          type: 'warning'
        });
      }, 5000);

      // Route notification
      setTimeout(() => {
        addNotification({
          id: (Date.now() + 2).toString(),
          title: 'Route Change',
          message: 'Bus 55 is now running on schedule',
          type: 'success'
        });
      }, 10000);
    }
  }, [context?.user, hasShownWelcome]);

  // Reset when user logs out
  useEffect(() => {
    if (!context?.user && !context?.isGuest) {
      setHasShownWelcome(false);
      setNotifications([]);
    }
  }, [context?.user, context?.isGuest]);

  const addNotification = (notification: Notification) => {
    setNotifications(prev => [...prev, notification]);
  };

  const removeNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  // Expose addNotification globally for other components to use
  useEffect(() => {
    (window as any).addNotification = addNotification;
    return () => {
      delete (window as any).addNotification;
    };
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-3 pointer-events-none">
      {notifications.map(notification => (
        <div key={notification.id} className="pointer-events-auto">
          <NotificationPopup
            notification={notification}
            onDismiss={removeNotification}
          />
        </div>
      ))}
    </div>
  );
}
