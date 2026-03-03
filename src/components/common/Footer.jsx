import { Twitter, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Social Icons */}
        <div className="flex justify-left gap-2 mb-6">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        {/* Copyright & Links */}
        <div className="text-left text-sm">
          <p>
            © 2026 Sauce Labs. All Rights Reserved.{' '}
            <a href="#" className="hover:text-white transition">Terms of Service</a> |{' '}
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
}