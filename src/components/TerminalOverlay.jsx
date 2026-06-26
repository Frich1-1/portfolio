import { useState, useRef, useEffect } from 'react';
import './TerminalOverlay.css';

// ── Fake Filesystem ──────────────────────────────────────────────────────────
const FS = {
  '~': {
    type: 'dir',
    children: ['readme.txt', 'photos', '.secret'],
  },
  '~/readme.txt': {
    type: 'file',
    content: [
      'Welcome to RF-OS v2.1.0',
      'This system is property of Richie Frederico Wong.',
      '',
      'Hint: hidden files start with a dot.',
      'Try:  ls -a',
    ],
  },
  '~/photos': {
    type: 'dir',
    children: ['ctf_logo.png', 'richie_cert.png'],
  },
  '~/photos/ctf_logo.png': {
    type: 'file',
    content: ['[Binary image — use  get ctf_logo  to download]'],
  },
  '~/photos/richie_cert.png': {
    type: 'file',
    content: ['[Binary image — only accessible as root]'],
  },
  '~/.secret': {
    type: 'file',
    content: [
      'Encoded payload found:',
      '  cGFzc3dvcmQ6IHIxY2gxZV9yMDB0',
      '',
      'Decode it to proceed.',
    ],
  },
  '~/flag.txt': {
    type: 'file',
    content: [
      '╔══════════════════════════════════════╗',
      '║  FLAG{r1ch1e_15_4_l3g1t_h4ck3r}     ║',
      '╚══════════════════════════════════════╝',
      '',
      'You have full root access. Respect.',
      'Run  get richie_cert  to claim your certificate.',
    ],
    rootOnly: true,
  },
};

const ENCODED_SECRET = 'cGFzc3dvcmQ6IHIxY2gxZV9yMDB0'; // password: r1ch1e_r00t
const CORRECT_PASSWORD = 'r1ch1e_r00t';

// ── Canvas Certificate Generator ────────────────────────────────────────────
function generateCertificate() {
  const canvas = document.createElement('canvas');
  canvas.width = 900;
  canvas.height = 600;
  const ctx = canvas.getContext('2d');

  // Background gradient
  const grad = ctx.createLinearGradient(0, 0, 900, 600);
  grad.addColorStop(0, '#0a0a1a');
  grad.addColorStop(1, '#0d1b2a');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 900, 600);

  // Outer border
  ctx.strokeStyle = '#60A5FA';
  ctx.lineWidth = 4;
  ctx.strokeRect(20, 20, 860, 560);

  // Inner border
  ctx.strokeStyle = 'rgba(96,165,250,0.3)';
  ctx.lineWidth = 1;
  ctx.strokeRect(30, 30, 840, 540);

  // Corner accents
  const corners = [[30,30],[870,30],[30,570],[870,570]];
  corners.forEach(([x, y]) => {
    ctx.beginPath();
    ctx.arc(x, y, 8, 0, Math.PI * 2);
    ctx.fillStyle = '#60A5FA';
    ctx.fill();
  });

  // Glowing title bar
  const titleGrad = ctx.createLinearGradient(0, 80, 900, 130);
  titleGrad.addColorStop(0, 'rgba(96,165,250,0.15)');
  titleGrad.addColorStop(0.5, 'rgba(96,165,250,0.3)');
  titleGrad.addColorStop(1, 'rgba(96,165,250,0.15)');
  ctx.fillStyle = titleGrad;
  ctx.fillRect(30, 80, 840, 70);

  // Header
  ctx.textAlign = 'center';
  ctx.fillStyle = '#60A5FA';
  ctx.font = 'bold 14px monospace';
  ctx.fillText('RF-OS SECURITY DIVISION', 450, 68);

  // Main title
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 38px monospace';
  ctx.fillText('CERTIFICATE OF HACKING', 450, 127);

  // Subtitle
  ctx.fillStyle = '#60A5FA';
  ctx.font = '15px monospace';
  ctx.fillText('This certifies that the individual below has successfully breached RF-OS', 450, 175);

  // Divider line
  ctx.beginPath();
  ctx.moveTo(100, 200);
  ctx.lineTo(800, 200);
  ctx.strokeStyle = 'rgba(96,165,250,0.5)';
  ctx.lineWidth = 1;
  ctx.stroke();

  // Recipient name
  ctx.fillStyle = '#facc15';
  ctx.font = 'italic bold 48px Georgia, serif';
  ctx.fillText('Richie Frederico Wong', 450, 275);

  // Achievement text
  ctx.fillStyle = '#d1d5db';
  ctx.font = '16px monospace';
  ctx.fillText('has demonstrated exceptional skill in:', 450, 315);

  ctx.fillStyle = '#4ade80';
  ctx.font = 'bold 20px monospace';
  ctx.fillText('Filesystem Recon  ·  Base64 Decoding  ·  SSH Privilege Escalation', 450, 350);

  // Flag
  ctx.fillStyle = 'rgba(74,222,128,0.1)';
  ctx.fillRect(250, 375, 400, 50);
  ctx.strokeStyle = '#4ade80';
  ctx.lineWidth = 1;
  ctx.strokeRect(250, 375, 400, 50);
  ctx.fillStyle = '#4ade80';
  ctx.font = 'bold 18px monospace';
  ctx.fillText('FLAG{r1ch1e_15_4_l3g1t_h4ck3r}', 450, 406);

  // Date & issuer
  ctx.fillStyle = '#9ca3af';
  ctx.font = '13px monospace';
  const date = new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' });
  ctx.fillText(`Issued: ${date}`, 450, 465);

  // Decorative bits
  ctx.fillStyle = 'rgba(96,165,250,0.08)';
  ctx.font = '11px monospace';
  const bits = '01001000 01000001 01000011 01001011 01000101 01000100';
  ctx.fillText(bits, 450, 510);

  // Seal circle
  ctx.beginPath();
  ctx.arc(450, 540, 30, 0, Math.PI * 2);
  ctx.strokeStyle = '#facc15';
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.fillStyle = 'rgba(250,204,21,0.1)';
  ctx.fill();
  ctx.fillStyle = '#facc15';
  ctx.font = 'bold 10px monospace';
  ctx.fillText('VERIFIED', 450, 538);
  ctx.fillText('ROOT', 450, 550);

  return canvas;
}

// ── Command History ──────────────────────────────────────────────────────────
export default function TerminalOverlay({ isOpen, onClose }) {
  const [input, setInput] = useState('');
  const [isRoot, setIsRoot] = useState(false);
  const [cwd, setCwd] = useState('~');
  const [history, setHistory] = useState([]);
  const [histIdx, setHistIdx] = useState(-1);
  const [output, setOutput] = useState([
    { type: 'system', text: '╔══════════════════════════════════════════╗' },
    { type: 'system', text: '║        RF-OS v2.1.0  — RESTRICTED        ║' },
    { type: 'system', text: '╚══════════════════════════════════════════╝' },
    { type: 'system', text: '' },
    { type: 'system', text: 'Last login: classified' },
    { type: 'warning', text: '⚠  Unauthorized access is monitored and logged.' },
    { type: 'system', text: '' },
    { type: 'hint',   text: 'Type  help  to list commands.' },
  ]);
  const endRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (endRef.current) endRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [output]);

  useEffect(() => {
    if (isOpen && inputRef.current) inputRef.current.focus();
  }, [isOpen]);

  if (!isOpen) return null;

  const push = (...lines) => lines.map(([type, text]) => ({ type, text }));

  const resolveDir = (target) => {
    if (!target || target === '~') return '~';
    if (target.startsWith('~/')) return target;
    return `${cwd}/${target}`;
  };

  const handleCommand = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      const next = Math.min(histIdx + 1, history.length - 1);
      setHistIdx(next);
      setInput(history[next] ?? '');
      return;
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = Math.max(histIdx - 1, -1);
      setHistIdx(next);
      setInput(next === -1 ? '' : history[next] ?? '');
      return;
    }
    if (e.key !== 'Enter') return;

    const raw = input.trim();
    const cmd = raw.toLowerCase();
    const parts = raw.split(' ');
    const verb = parts[0].toLowerCase();
    const args = parts.slice(1);

    const prompt = { type: 'user', text: `${isRoot ? 'root' : 'guest'}@rf-os:${cwd}$ ${raw}` };
    let newLines = [...output, prompt];
    setHistory(prev => [raw, ...prev]);
    setHistIdx(-1);

    if (!raw) { setOutput(newLines); setInput(''); return; }

    // ── Commands ────────────────────────────────────────────────────────────
    switch (verb) {

      case 'help':
        newLines.push(...push(
          ['system', ''],
          ['system', 'Core commands:'],
          ['cmd',    '  ls [-a]          List files in current directory'],
          ['cmd',    '  cat <file>       Read a file'],
          ['cmd',    '  cd <dir>         Change directory'],
          ['cmd',    '  pwd              Print working directory'],
          ['cmd',    '  clear            Clear terminal'],
          ['cmd',    '  whoami           Current user info'],
          ['cmd',    '  decode <string>  Base64 decode a string'],
          ['cmd',    '  ssh root@rf-os --password <pw>   Escalate privileges'],
          ['cmd',    '  get <name>       Download a file'],
          ['system', ''],
          ['hint',   'Goal: become root and retrieve the flag.'],
          ['system', ''],
        ));
        break;

      case 'whoami':
        newLines.push(...push(
          ['system', isRoot ? 'root — full system access' : 'guest — limited access'],
          ['system', `UID: ${isRoot ? '0' : '1000'}`],
        ));
        break;

      case 'pwd':
        newLines.push({ type: 'system', text: cwd.replace('~', '/home/guest') });
        break;

      case 'ls': {
        const showHidden = args.includes('-a') || args.includes('-la') || args.includes('-al');
        const node = FS[cwd];
        if (!node || node.type !== 'dir') {
          newLines.push({ type: 'error', text: `Not a directory: ${cwd}` });
        } else {
          const children = showHidden ? node.children : node.children.filter(c => !c.startsWith('.'));
          const formatted = children.map(c => {
            const fullPath = `${cwd}/${c}`;
            const child = FS[fullPath];
            return child?.type === 'dir' ? `\x1b[1;34m${c}/\x1b[0m` : c;
          });
          newLines.push({ type: 'ls', items: formatted, text: formatted.join('   ') });
          if (!showHidden && node.children.some(c => c.startsWith('.')))
            newLines.push({ type: 'hint', text: 'Hint: use  ls -a  to show hidden files.' });
        }
        break;
      }

      case 'cd': {
        const target = args[0] || '~';
        const resolved = resolveDir(target);
        if (FS[resolved] && FS[resolved].type === 'dir') {
          setCwd(resolved);
        } else {
          newLines.push({ type: 'error', text: `No such directory: ${target}` });
        }
        break;
      }

      case 'cat': {
        if (!args[0]) { newLines.push({ type: 'error', text: 'Usage: cat <file>' }); break; }
        const resolved = `${cwd}/${args[0]}`;
        const node = FS[resolved];
        if (!node) {
          newLines.push({ type: 'error', text: `No such file: ${args[0]}` });
        } else if (node.type === 'dir') {
          newLines.push({ type: 'error', text: `${args[0]}: Is a directory` });
        } else if (node.rootOnly && !isRoot) {
          newLines.push({ type: 'error', text: 'Permission denied. You need root access.' });
          newLines.push({ type: 'hint',  text: 'Try escalating with  ssh root@rf-os --password <pw>.' });
        } else {
          node.content.forEach(line => newLines.push({ type: 'file', text: line }));
        }
        break;
      }

      case 'decode': {
        if (!args[0]) { newLines.push({ type: 'error', text: 'Usage: decode <base64string>' }); break; }
        try {
          const decoded = atob(args[0]);
          newLines.push(...push(
            ['success', `Decoded: ${decoded}`],
          ));
          if (args[0] === ENCODED_SECRET) {
            newLines.push(...push(
              ['system', ''],
              ['success', '✓ Valid RF-OS payload detected.'],
              ['hint',    `Extracted credential → ${decoded}`],
              ['hint',    'Use:  ssh root@rf-os --password r1ch1e_r00t'],
              ['system', ''],
            ));
          }
        } catch {
          newLines.push({ type: 'error', text: 'Invalid base64 string.' });
        }
        break;
      }

      case 'ssh': {
        const pwFlag = raw.match(/--password\s+(\S+)/i);
        const pw = pwFlag?.[1];
        if (!pw) {
          newLines.push({ type: 'error', text: 'Usage: ssh root@rf-os --password <password>' });
          break;
        }
        if (pw === CORRECT_PASSWORD) {
          setIsRoot(true);
          newLines.push(...push(
            ['system', ''],
            ['success', '● Connecting to rf-os...'],
            ['success', '● Authenticating...'],
            ['success', '● Privilege escalation successful!'],
            ['system', ''],
            ['badge',   '🔓 ROOT ACCESS GRANTED'],
            ['system', 'Welcome, root. The system is yours.'],
            ['hint',    'Run:  cat flag.txt   to retrieve the flag.'],
            ['system', ''],
          ));
        } else {
          newLines.push(...push(
            ['error', 'Authentication failed.'],
            ['error', 'Permission denied (incorrect password).'],
          ));
        }
        break;
      }

      case 'get': {
        const target = args[0];
        if (!target) { newLines.push({ type: 'error', text: 'Usage: get <filename>' }); break; }

        if (target === 'richie_cert' || target === 'richie_cert.png') {
          if (!isRoot) {
            newLines.push({ type: 'error', text: 'Permission denied. Root access required.' });
            break;
          }
          newLines.push(...push(
            ['system', 'Generating certificate...'],
            ['success', '✓ Certificate rendered.'],
            ['success', 'Downloading richie_cert.png...'],
          ));
          // defer so DOM updates first
          setTimeout(() => {
            const canvas = generateCertificate();
            const link = document.createElement('a');
            link.download = 'richie_hacker_cert.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
          }, 100);
        } else if (target === 'ctf_logo' || target === 'ctf_logo.png') {
          newLines.push({ type: 'error', text: 'File not available for download. Try  richie_cert  instead (as root).' });
        } else {
          newLines.push({ type: 'error', text: `Unknown file: ${target}` });
        }
        break;
      }

      case 'clear':
        setOutput([]);
        setInput('');
        return;

      case 'sudo':
        newLines.push({ type: 'error', text: 'sudo: command not allowed for guest. Try SSH instead.' });
        break;

      case 'exit':
      case 'quit':
        onClose();
        return;

      default:
        newLines.push(...push(
          ['error', `Command not found: ${verb}`],
          ['hint',  'Type  help  for available commands.'],
        ));
    }

    setOutput(newLines);
    setInput('');
  };

  const promptStr = `${isRoot ? 'root' : 'guest'}@rf-os:${cwd}$`;

  return (
    <div className="terminal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-buttons">
            <span className="term-btn close" onClick={onClose} title="Close" />
            <span className="term-btn minimize" title="Minimize" />
            <span className="term-btn maximize" title="Maximize" />
          </div>
          <div className="terminal-title">
            {isRoot ? '⚡ root@rf-os — TERMINAL' : 'guest@rf-os — TERMINAL'}
          </div>
          {isRoot && <div className="terminal-root-badge">ROOT</div>}
        </div>

        <div className="terminal-body" onClick={() => inputRef.current?.focus()}>
          {output.map((line, i) => (
            <div key={i} className={`terminal-line ${line.type}`}>
              {line.text}
            </div>
          ))}

          <div className="terminal-input-line">
            <span className={`prompt ${isRoot ? 'prompt--root' : ''}`}>{promptStr}</span>
            <input
              ref={inputRef}
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
