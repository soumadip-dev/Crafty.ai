import { assets } from '../assets/assets';
export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-red-50 to-white text-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center">
        <div className="flex items-center space-x-3 mb-6">
          <img alt="" className="h-11" src={assets.logo} />
        </div>
        <p className="text-center max-w-xl text-sm font-normal leading-relaxed">
          Empowering creators worldwide with the most advanced AI content creation tools. Transform
          your ideas into reality.
        </p>
      </div>
      <div className="border-t border-green-200">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm font-normal">
          Crafty.ai ©2025. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
