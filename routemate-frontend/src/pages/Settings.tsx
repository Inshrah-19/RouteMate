import { useState, useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { AppContext } from '../App';
import { 
  User, Mail, Bell, Lock, Globe, Moon, Sun, Smartphone, 
  Shield, MapPin, CreditCard, Save, Eye, EyeOff 
} from 'lucide-react';
import { toast } from 'sonner';

export default function Settings() {
  const context = useContext(AppContext);
  const [activeTab, setActiveTab] = useState('profile');
  
  // Profile settings
  const [fullName, setFullName] = useState(context?.user?.name || '');
  const [email, setEmail] = useState(context?.user?.email || '');
  const [phone, setPhone] = useState('+1 234 567 8900');
  
  // Notification settings
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [busUpdates, setBusUpdates] = useState(true);
  const [routeChanges, setRouteChanges] = useState(true);
  
  // Privacy settings
  const [locationSharing, setLocationSharing] = useState(true);
  const [activityTracking, setActivityTracking] = useState(false);
  
  // Appearance settings
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('English');
  
  // Security
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleSaveProfile = () => {
    toast.success('Profile updated successfully!');
  };

  const handleSaveNotifications = () => {
    toast.success('Notification preferences saved!');
  };

  const handleSavePrivacy = () => {
    toast.success('Privacy settings updated!');
  };

  const handleChangePassword = () => {
    if (currentPassword && newPassword) {
      toast.success('Password changed successfully!');
      setCurrentPassword('');
      setNewPassword('');
    } else {
      toast.error('Please fill in all password fields');
    }
  };

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'privacy', label: 'Privacy & Security', icon: Shield },
    { id: 'appearance', label: 'Appearance', icon: Sun }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#f7eaff] from-[62.5%] to-[#948c99]">
      <Header />

      <main className="flex-1 max-w-[1400px] mx-auto px-8 py-12 w-full">
        <div className="mb-10">
          <h1 className="text-[40px] font-extrabold text-[#2c084e] mb-2">Settings</h1>
          <p className="text-[18px] text-[#6a7282]">Manage your account preferences and settings</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Tabs */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl shadow-lg p-2 sticky top-24">
              {tabs.map(tab => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all text-left ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-[#6412b4] to-[#9333ea] text-white shadow-lg'
                        : 'text-[#2c084e] hover:bg-purple-50'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-[15px] font-semibold">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3">
            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <div className="flex items-center gap-6 mb-8 pb-6 border-b-2 border-gray-100">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#6412b4] to-[#9333ea] flex items-center justify-center shadow-xl">
                    <User className="w-12 h-12 text-white" />
                  </div>
                  <div>
                    <h2 className="text-[28px] font-bold text-[#2c084e] mb-1">Profile Information</h2>
                    <p className="text-[15px] text-[#6a7282]">Update your personal details</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-[14px] font-semibold text-[#2c084e] mb-2">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#9ca3af]" />
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl text-[15px] text-[#2c084e] focus:outline-none focus:border-[#6412b4] focus:bg-white focus:ring-4 focus:ring-purple-100 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[14px] font-semibold text-[#2c084e] mb-2">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#9ca3af]" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl text-[15px] text-[#2c084e] focus:outline-none focus:border-[#6412b4] focus:bg-white focus:ring-4 focus:ring-purple-100 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[14px] font-semibold text-[#2c084e] mb-2">Phone Number</label>
                    <div className="relative">
                      <Smartphone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#9ca3af]" />
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl text-[15px] text-[#2c084e] focus:outline-none focus:border-[#6412b4] focus:bg-white focus:ring-4 focus:ring-purple-100 transition-all"
                      />
                    </div>
                  </div>

                  {/* Change Password Section */}
                  <div className="pt-6 border-t-2 border-gray-100">
                    <h3 className="text-[20px] font-bold text-[#2c084e] mb-4">Change Password</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-[14px] font-semibold text-[#2c084e] mb-2">Current Password</label>
                        <div className="relative">
                          <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#9ca3af]" />
                          <input
                            type={showCurrentPassword ? 'text' : 'password'}
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                            className="w-full pl-12 pr-12 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl text-[15px] text-[#2c084e] focus:outline-none focus:border-[#6412b4] focus:bg-white focus:ring-4 focus:ring-purple-100 transition-all"
                          />
                          <button
                            type="button"
                            onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#6a7282]"
                          >
                            {showCurrentPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                          </button>
                        </div>
                      </div>

                      <div>
                        <label className="block text-[14px] font-semibold text-[#2c084e] mb-2">New Password</label>
                        <div className="relative">
                          <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#9ca3af]" />
                          <input
                            type={showNewPassword ? 'text' : 'password'}
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="w-full pl-12 pr-12 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl text-[15px] text-[#2c084e] focus:outline-none focus:border-[#6412b4] focus:bg-white focus:ring-4 focus:ring-purple-100 transition-all"
                          />
                          <button
                            type="button"
                            onClick={() => setShowNewPassword(!showNewPassword)}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#6a7282]"
                          >
                            {showNewPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                          </button>
                        </div>
                      </div>

                      <button
                        onClick={handleChangePassword}
                        className="bg-gradient-to-r from-[#6412b4] to-[#9333ea] text-white px-6 py-3 rounded-xl hover:shadow-xl transition-all font-semibold flex items-center gap-2"
                      >
                        <Lock className="w-5 h-5" />
                        <span>Update Password</span>
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={handleSaveProfile}
                    className="w-full bg-gradient-to-r from-[#6412b4] to-[#9333ea] text-white py-4 rounded-xl hover:shadow-xl hover:shadow-purple-500/40 transition-all font-semibold flex items-center justify-center gap-2 text-[16px]"
                  >
                    <Save className="w-5 h-5" />
                    <span>Save Profile Changes</span>
                  </button>
                </div>
              </div>
            )}

            {/* Notifications Tab */}
            {activeTab === 'notifications' && (
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <div className="flex items-center gap-6 mb-8 pb-6 border-b-2 border-gray-100">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-xl">
                    <Bell className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-[28px] font-bold text-[#2c084e] mb-1">Notification Preferences</h2>
                    <p className="text-[15px] text-[#6a7282]">Choose how you want to be notified</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-purple-50 rounded-2xl p-6">
                    <h3 className="text-[18px] font-bold text-[#2c084e] mb-4">Notification Channels</h3>
                    <div className="space-y-4">
                      <label className="flex items-center justify-between cursor-pointer group">
                        <div className="flex items-center gap-3">
                          <Mail className="w-5 h-5 text-[#6412b4]" />
                          <div>
                            <p className="text-[15px] font-semibold text-[#2c084e]">Email Notifications</p>
                            <p className="text-[13px] text-[#6a7282]">Receive updates via email</p>
                          </div>
                        </div>
                        <input
                          type="checkbox"
                          checked={emailNotifications}
                          onChange={(e) => setEmailNotifications(e.target.checked)}
                          className="w-5 h-5 rounded border-2 border-gray-300 text-[#6412b4] focus:ring-2 focus:ring-purple-200"
                        />
                      </label>

                      <label className="flex items-center justify-between cursor-pointer group">
                        <div className="flex items-center gap-3">
                          <Bell className="w-5 h-5 text-[#6412b4]" />
                          <div>
                            <p className="text-[15px] font-semibold text-[#2c084e]">Push Notifications</p>
                            <p className="text-[13px] text-[#6a7282]">Get instant push notifications</p>
                          </div>
                        </div>
                        <input
                          type="checkbox"
                          checked={pushNotifications}
                          onChange={(e) => setPushNotifications(e.target.checked)}
                          className="w-5 h-5 rounded border-2 border-gray-300 text-[#6412b4] focus:ring-2 focus:ring-purple-200"
                        />
                      </label>

                      <label className="flex items-center justify-between cursor-pointer group">
                        <div className="flex items-center gap-3">
                          <Smartphone className="w-5 h-5 text-[#6412b4]" />
                          <div>
                            <p className="text-[15px] font-semibold text-[#2c084e]">SMS Notifications</p>
                            <p className="text-[13px] text-[#6a7282]">Receive text message alerts</p>
                          </div>
                        </div>
                        <input
                          type="checkbox"
                          checked={smsNotifications}
                          onChange={(e) => setSmsNotifications(e.target.checked)}
                          className="w-5 h-5 rounded border-2 border-gray-300 text-[#6412b4] focus:ring-2 focus:ring-purple-200"
                        />
                      </label>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-2xl p-6">
                    <h3 className="text-[18px] font-bold text-[#2c084e] mb-4">Notification Types</h3>
                    <div className="space-y-4">
                      <label className="flex items-center justify-between cursor-pointer">
                        <div>
                          <p className="text-[15px] font-semibold text-[#2c084e]">Bus Updates</p>
                          <p className="text-[13px] text-[#6a7282]">Delays, cancellations, and arrival times</p>
                        </div>
                        <input
                          type="checkbox"
                          checked={busUpdates}
                          onChange={(e) => setBusUpdates(e.target.checked)}
                          className="w-5 h-5 rounded border-2 border-gray-300 text-[#6412b4] focus:ring-2 focus:ring-purple-200"
                        />
                      </label>

                      <label className="flex items-center justify-between cursor-pointer">
                        <div>
                          <p className="text-[15px] font-semibold text-[#2c084e]">Route Changes</p>
                          <p className="text-[13px] text-[#6a7282]">New routes and schedule modifications</p>
                        </div>
                        <input
                          type="checkbox"
                          checked={routeChanges}
                          onChange={(e) => setRouteChanges(e.target.checked)}
                          className="w-5 h-5 rounded border-2 border-gray-300 text-[#6412b4] focus:ring-2 focus:ring-purple-200"
                        />
                      </label>
                    </div>
                  </div>

                  <button
                    onClick={handleSaveNotifications}
                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-4 rounded-xl hover:shadow-xl transition-all font-semibold flex items-center justify-center gap-2 text-[16px]"
                  >
                    <Save className="w-5 h-5" />
                    <span>Save Notification Settings</span>
                  </button>
                </div>
              </div>
            )}

            {/* Privacy & Security Tab */}
            {activeTab === 'privacy' && (
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <div className="flex items-center gap-6 mb-8 pb-6 border-b-2 border-gray-100">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-xl">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-[28px] font-bold text-[#2c084e] mb-1">Privacy & Security</h2>
                    <p className="text-[15px] text-[#6a7282]">Control your data and privacy settings</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-green-50 rounded-2xl p-6">
                    <h3 className="text-[18px] font-bold text-[#2c084e] mb-4">Privacy Controls</h3>
                    <div className="space-y-4">
                      <label className="flex items-center justify-between cursor-pointer">
                        <div className="flex items-center gap-3">
                          <MapPin className="w-5 h-5 text-green-600" />
                          <div>
                            <p className="text-[15px] font-semibold text-[#2c084e]">Location Sharing</p>
                            <p className="text-[13px] text-[#6a7282]">Allow RouteMate to access your location</p>
                          </div>
                        </div>
                        <input
                          type="checkbox"
                          checked={locationSharing}
                          onChange={(e) => setLocationSharing(e.target.checked)}
                          className="w-5 h-5 rounded border-2 border-gray-300 text-green-600 focus:ring-2 focus:ring-green-200"
                        />
                      </label>

                      <label className="flex items-center justify-between cursor-pointer">
                        <div className="flex items-center gap-3">
                          <CreditCard className="w-5 h-5 text-green-600" />
                          <div>
                            <p className="text-[15px] font-semibold text-[#2c084e]">Activity Tracking</p>
                            <p className="text-[13px] text-[#6a7282]">Track travel history for better recommendations</p>
                          </div>
                        </div>
                        <input
                          type="checkbox"
                          checked={activityTracking}
                          onChange={(e) => setActivityTracking(e.target.checked)}
                          className="w-5 h-5 rounded border-2 border-gray-300 text-green-600 focus:ring-2 focus:ring-green-200"
                        />
                      </label>
                    </div>
                  </div>

                  <div className="bg-yellow-50 rounded-2xl p-6 border-2 border-yellow-200">
                    <div className="flex items-start gap-3">
                      <Shield className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-[16px] font-bold text-yellow-900 mb-2">Data Protection</h4>
                        <p className="text-[14px] text-yellow-800 leading-relaxed">
                          Your data is encrypted and stored securely. We never share your personal information with third parties without your consent.
                        </p>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleSavePrivacy}
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-4 rounded-xl hover:shadow-xl transition-all font-semibold flex items-center justify-center gap-2 text-[16px]"
                  >
                    <Save className="w-5 h-5" />
                    <span>Save Privacy Settings</span>
                  </button>
                </div>
              </div>
            )}

            {/* Appearance Tab */}
            {activeTab === 'appearance' && (
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <div className="flex items-center gap-6 mb-8 pb-6 border-b-2 border-gray-100">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center shadow-xl">
                    {darkMode ? <Moon className="w-8 h-8 text-white" /> : <Sun className="w-8 h-8 text-white" />}
                  </div>
                  <div>
                    <h2 className="text-[28px] font-bold text-[#2c084e] mb-1">Appearance</h2>
                    <p className="text-[15px] text-[#6a7282]">Customize how RouteMate looks</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
                    <h3 className="text-[18px] font-bold text-[#2c084e] mb-4">Theme</h3>
                    <label className="flex items-center justify-between cursor-pointer">
                      <div className="flex items-center gap-3">
                        {darkMode ? <Moon className="w-5 h-5 text-[#6412b4]" /> : <Sun className="w-5 h-5 text-[#6412b4]" />}
                        <div>
                          <p className="text-[15px] font-semibold text-[#2c084e]">Dark Mode</p>
                          <p className="text-[13px] text-[#6a7282]">Enable dark theme for better viewing at night</p>
                        </div>
                      </div>
                      <input
                        type="checkbox"
                        checked={darkMode}
                        onChange={(e) => setDarkMode(e.target.checked)}
                        className="w-5 h-5 rounded border-2 border-gray-300 text-[#6412b4] focus:ring-2 focus:ring-purple-200"
                      />
                    </label>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6">
                    <h3 className="text-[18px] font-bold text-[#2c084e] mb-4">Language</h3>
                    <div className="flex items-center gap-3">
                      <Globe className="w-5 h-5 text-[#6412b4]" />
                      <select
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        className="flex-1 px-4 py-3 bg-white border-2 border-gray-200 rounded-xl text-[15px] text-[#2c084e] focus:outline-none focus:border-[#6412b4] focus:ring-4 focus:ring-purple-100 transition-all"
                      >
                        <option>English</option>
                        <option>Spanish</option>
                        <option>French</option>
                        <option>German</option>
                        <option>Chinese</option>
                      </select>
                    </div>
                  </div>

                  <button
                    onClick={() => toast.success('Appearance settings saved!')}
                    className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-4 rounded-xl hover:shadow-xl transition-all font-semibold flex items-center justify-center gap-2 text-[16px]"
                  >
                    <Save className="w-5 h-5" />
                    <span>Save Appearance Settings</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
