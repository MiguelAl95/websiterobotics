import React from 'react';
import { Github, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Contacto</h2>
        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" className="hover:text-blue-400 transition-colors">
            <Github className="w-8 h-8" />
          </a>
          <a href="#" className="hover:text-blue-400 transition-colors">
            <Linkedin className="w-8 h-8" />
          </a>
        </div>
        <p className="text-gray-400">© 2024 Robótica Futurista. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}