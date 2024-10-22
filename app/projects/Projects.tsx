"use client";

import { useState } from 'react';

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const toggleProjectDetails = (project: string) => {
    setExpandedProject(expandedProject === project ? null : project);
  };

  return (
    <div>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Projects</h1>

      <div className="mb-4 p-4 border border-gray-700 rounded-lg hover:shadow-lg transition-shadow duration-200">
        <h2 
          className="text-xl font-semibold cursor-pointer flex items-center justify-between"
          onClick={() => toggleProjectDetails('theo')}
        >
          <span>Theo (WIP Chess Engine)</span>
          <span>{expandedProject === 'theo' ? '▼' : '▶'}</span>
        </h2>
        {expandedProject === 'theo' && (
          <div className="ml-4 mt-2">
            <p className="mb-2">
              A terminal-based chess engine. Highly WIP.
            </p>
            <p className="mb-4">
              <strong>Technologies:</strong> Rust
            </p>
            <p className="mb-4">
              <strong>Highlights:</strong>
              <ul className="list-disc list-inside">
                <li>None yet!</li>
              </ul>
            </p>
            <p className="mb-4">
              <strong><a href="https://github.com/patchydev/theo" className="text-blue-400" rel="noopener noreferrer" target="_blank">https://github.com/patchydev/theo</a></strong>
            </p>
          </div>
        )}
      </div>

      <div className="mb-4 p-4 border border-gray-700 rounded-lg hover:shadow-lg transition-shadow duration-200">
        <h2 
          className="text-xl font-semibold cursor-pointer flex items-center justify-between"
          onClick={() => toggleProjectDetails('ticTacToe')}
        >
          <span>Tic-Tac-Toe Bot (Terminal-based)</span>
          <span>{expandedProject === 'ticTacToe' ? '▼' : '▶'}</span>
        </h2>
        {expandedProject === 'ticTacToe' && (
          <div className="ml-4 mt-2">
            <p className="mb-2">
              A simple bot that plays Tic-Tac-Toe in the terminal, with multiple difficulty levels.
            </p>
            <p className="mb-4">
              <strong>Technologies:</strong> C++
            </p>
            <p className="mb-4">
              <strong>Highlights:</strong>
              <ul className="list-disc list-inside">
                <li>Implemented using basic game theory.</li>
                <li>Runs entirely in the terminal.</li>
              </ul>
            </p>
            <p className="mb-4">
              <strong><a href="https://github.com/patchydev/tictactoe" className="text-blue-400" rel="noopener noreferrer" target="_blank">https://github.com/patchydev/tictactoe</a></strong>
            </p>
          </div>
        )}
      </div>

      <div className="mb-4 p-4 border border-gray-700 rounded-lg hover:shadow-lg transition-shadow duration-200">
        <h2 
          className="text-xl font-semibold cursor-pointer flex items-center justify-between"
          onClick={() => toggleProjectDetails('rustWebServer')}
        >
          <span>Basic Rust Web Server</span>
          <span>{expandedProject === 'rustWebServer' ? '▼' : '▶'}</span>
        </h2>
        {expandedProject === 'rustWebServer' && (
          <div className="ml-4 mt-2">
            <p className="mb-2">
              A simple web server built from scratch using Rust. It handles HTTP requests and serves static content.
            </p>
            <p className="mb-4">
              <strong>Technologies:</strong> Rust
            </p>
            <p className="mb-4">
              <strong>Highlights:</strong>
              <ul className="list-disc list-inside">
                <li>Low-level control of HTTP request handling.</li>
                <li>Created a basic router for managing routes.</li>
              </ul>
            </p>
            <p className="mb-4">
              <strong><a href="https://github.com/patchydev/web-server" className="text-blue-400" rel="noopener noreferrer" target="_blank">https://github.com/patchydev/web-server</a></strong>
            </p>
          </div>
        )}
      </div>

      <div className="mb-4 p-4 border border-gray-700 rounded-lg hover:shadow-lg transition-shadow duration-200">
        <h2 
          className="text-xl font-semibold cursor-pointer flex items-center justify-between"
          onClick={() => toggleProjectDetails('guiCalculator')}
        >
          <span>GUI Calculator App (Rust + Slint)</span>
          <span>{expandedProject === 'guiCalculator' ? '▼' : '▶'}</span>
        </h2>
        {expandedProject === 'guiCalculator' && (
          <div className="ml-4 mt-2">
            <p className="mb-2">
              A graphical calculator application created using Rust and Slint.
            </p>
            <p className="mb-4">
              <strong>Technologies:</strong> Rust, Slint
            </p>
            <p className="mb-4">
              <strong>Highlights:</strong>
              <ul className="list-disc list-inside">
                <li>Designed a clean, user-friendly interface with Slint.</li>
                <li>Performs basic arithmetic operations.</li>
              </ul>
            </p>
            <p className="mb-4">
              <strong><a href="https://github.com/patchydev/slint-calculator-app" className="text-blue-400" rel="noopener noreferrer" target="_blank">https://github.com/patchydev/slint-calculator-app</a></strong>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
