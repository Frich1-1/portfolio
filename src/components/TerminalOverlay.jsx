import { useState, useRef, useEffect } from 'react';
import './TerminalOverlay.css';

export default function TerminalOverlay({ isOpen, onClose }) {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([
    { type: 'system', text: 'Welcome to RF-OS v1.0.0' },
    { type: 'system', text: 'Type "help" to see available commands.' },
    { type: 'system', text: 'HINT: There might be a hidden base64 string somewhere in this terminal...' }
  ]);
  const [hasBadge, setHasBadge] = useState(false);
  const endRef = useRef(null);
  
  const base64Secret = 'aGFja2VyX21vZGU='; // "hacker_mode"

  useEffect(() => {
    if (endRef.current) {
      endRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [output]);

  if (!isOpen) return null;

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase();
      let newOutput = [...output, { type: 'user', text: `user@rf-os:~$ ${input}` }];
      
      switch (cmd) {
        case 'help':
          newOutput.push({ type: 'system', text: 'Available commands: help, whoami, clear, decode [string]' });
          newOutput.push({ type: 'system', text: `Psst... ${base64Secret}` });
          break;
        case 'whoami':
          newOutput.push({ type: 'system', text: 'guest_user' });
          break;
        case 'clear':
          newOutput = [];
          break;
        case 'decode hacker_mode':
        case `decode ${base64Secret}`.toLowerCase():
          newOutput.push({ type: 'success', text: 'DECODING SUCCESSFUL. ACCESS GRANTED.' });
          newOutput.push({ type: 'badge', text: '🏆 You earned the [HACKER BADGE]! You are now root.' });
          setHasBadge(true);
          break;
        case '':
          break;
        default:
          if (cmd.startsWith('decode ')) {
            newOutput.push({ type: 'error', text: 'Invalid base64 string.' });
          } else {
            newOutput.push({ type: 'error', text: `Command not found: ${cmd}` });
          }
      }

      setOutput(newOutput);
      setInput('');
    }
  };

  return (
    <div className="terminal-overlay">
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-buttons">
            <span className="term-btn close" onClick={onClose}></span>
            <span className="term-btn minimize"></span>
            <span className="term-btn maximize"></span>
          </div>
          <div className="terminal-title">rf-os@terminal</div>
        </div>
        <div className="terminal-body">
          {output.map((line, index) => (
            <div key={index} className={`terminal-line ${line.type}`}>
              {line.text}
            </div>
          ))}
          {hasBadge && (
            <div className="terminal-badge-display">
              <h2>👨‍💻 ROOT ACCESS UNLOCKED</h2>
              <p>You found the secret! Welcome to the elite club.</p>
            </div>
          )}
          <div className="terminal-input-line">
            <span className="prompt">user@rf-os:~$</span>
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleCommand}
              autoFocus
              className="terminal-input"
              autoComplete="off"
              spellCheck="false"
            />
          </div>
          <div ref={endRef} />
        </div>
      </div>
    </div>
  );
}
