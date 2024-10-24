import React from 'react';
import { CircuitBoard, Brain, Cpu } from 'lucide-react';

const features = [
  {
    icon: <CircuitBoard className="w-12 h-12 text-blue-400" />,
    title: "Robótica Industrial",
    description: "Automatización avanzada para la industria 4.0"
  },
  {
    icon: <Brain className="w-12 h-12 text-purple-400" />,
    title: "Inteligencia Artificial",
    description: "Sistemas inteligentes y aprendizaje automático"
  },
  {
    icon: <Cpu className="w-12 h-12 text-green-400" />,
    title: "Control Automatizado",
    description: "Sistemas de control precisos y eficientes"
  }
];

export function Features() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Áreas de Especialización</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-xl hover:transform hover:-translate-y-2 transition-all">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}