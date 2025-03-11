import React from "react";
import { User } from "lucide-react";

interface UserInfoProps {
  name: string;
  pin: string;
}

const UserInfo: React.FC<UserInfoProps> = ({ name, pin }) => {
  return (
    <div className="flex items-center space-x-4">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-[#8CA1D3] rounded-md flex items-center justify-center text-white shadow-sm">
          <User size={20} strokeWidth={2} />
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <h2 className="text-base font-medium text-gray-800 truncate">{name}</h2>
        <div className="flex items-center mt-1">
          <div className="px-2 py-1 bg-gray-100 rounded text-sm font-medium text-gray-700">
            {pin}
          </div>
          <div className="ml-2 text-xs text-gray-500 uppercase">JSHSHIR</div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
