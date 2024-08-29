import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

const Terminal: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [input, setInput] = useState<string>('');
    const [output, setOutput] = useState<string[]>(['Welcome to Abdullatif\'s terminal. Type "help" for a list of commands.']);
    const [isProcessing, setIsProcessing] = useState<boolean>(false);
    const [commandHistory, setCommandHistory] = useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = useState<number>(-1);

    const inputRef = useRef<HTMLInputElement>(null);
    const terminalRef = useRef<HTMLDivElement>(null);
    const outputEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === '/' || (e.ctrlKey && e.altKey && e.key === 't') || (e.ctrlKey && e.key === 'c')) {
                e.preventDefault();
                setIsOpen(true);
            } else if (e.key === 'Escape') {
                setIsOpen(false);
            }
        };

        const handleContextMenu = (e: MouseEvent) => {
            e.preventDefault();
            setIsOpen(true);
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('contextmenu', handleContextMenu);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('contextmenu', handleContextMenu);
        };
    }, []);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    useEffect(() => {
        if (outputEndRef.current) {
            outputEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [output]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (input.trim()) {
            setCommandHistory(prev => [...prev, input]);
            setHistoryIndex(-1);
            setIsProcessing(true);
            await processCommand(input);
            setInput('');
            setIsProcessing(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (historyIndex < commandHistory.length - 1) {
                const newIndex = historyIndex + 1;
                setHistoryIndex(newIndex);
                setInput(commandHistory[commandHistory.length - 1 - newIndex]);
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex > 0) {
                const newIndex = historyIndex - 1;
                setHistoryIndex(newIndex);
                setInput(commandHistory[commandHistory.length - 1 - newIndex]);
            } else if (historyIndex === 0) {
                setHistoryIndex(-1);
                setInput('');
            }
        }
    };

    const processCommand = async (cmd: string): Promise<void> => {
        const command = cmd.trim().toLowerCase();
        let response = '';

        switch (command) {
            case 'help':
                response = `
Available commands:
- list skills: Display a list of my technical skills
- list projects: Show a list of my notable projects
- show contact info: Display my contact information
- hack nasa: Attempt to hack NASA (just for fun!)
- do a barrel roll: Spin the page!
- exit or quit: Close the terminal
                `;
                break;
            case 'list skills':
                response = `
My Technical Skills:

Programming Languages:
- JavaScript
- PHP
- Python
- Go

Frameworks:
- TailwindCSS
- ReactJS
- VueJS
- NextJS
- Laravel
- QwikJS
- Flask
- AlpineJS

Databases:
- MySQL
- PostgreSQL
- MongoDB

Technologies:
- AWS
- Git
- GitHub
- Docker

Graphic Design:
- Figma
- Adobe Illustrator
- Adobe Photoshop
                `;
                break;
            case 'list projects':
                response = `
┌───────────┬───────────────────────────────────────┬──────────────────────────────────────────────────────────────────┬───────────────────────┐
│ Title     │ Tech Stack                            │ Description                                                      │ Visit                 │
├───────────┼───────────────────────────────────────┼──────────────────────────────────────────────────────────────────┼───────────────────────┤
│ LSC       │ NextJS, TypeScript, GSAP,             │ Website for interior design / constructions company              │ https://lsc-uae.com   │
│           │ TailwindCSS, Prisma, AWS              │ (heavy in animations)                                            │                       │
├───────────┼───────────────────────────────────────┼──────────────────────────────────────────────────────────────────┼───────────────────────┤
│LuxRenov   │ NextJS, TypeScript, GSAP,             │ Website for home renovation company (heavy in animations)        │https://luxrenov.com   │
│           │ TailwindCSS, AWS                      │                                                                  │                       │
├───────────┼───────────────────────────────────────┼──────────────────────────────────────────────────────────────────┼───────────────────────┤
|STONESTOX  │ PHP, Laravel, MySQL, AlpineJS         │ The site is an e-commerce platform with an integrated            │https://stonestox.com  │
│           │ TailwindCSS, AWS                      │  inquiry system for seamless customer interaction.               │                       │
├───────────┼───────────────────────────────────────┼──────────────────────────────────────────────────────────────────┼───────────────────────┤
|yalayisboat| PHP, Laravel, AlpineJS                │ The site is an e-commerce platform with an integrated            │https://yalayisboat.com│
│           │ TailwindCSS, AWS                      │  inquiry system for seamless customer interaction.               │                       │
└───────────┴───────────────────────────────────────┴──────────────────────────────────────────────────────────────────┴───────────────────────┘
                `;
                break;
            case 'show contact info':
                response = `
┌───────────┬──────────────────────────────────────────────────┐
│ Contact   │ Information                                      │
├───────────┼──────────────────────────────────────────────────┤
│ Email     │ abdullatif.treifi@gmail.com                      │
│ Phone     │ +971501579362                                    │
│ LinkedIn  │ https://linkedin.com/in/abdullatif-treifi/       │
│ Instagram │ @treifi98                                        │
└───────────┴──────────────────────────────────────────────────┘
                `;
                break;
            case 'send message':
                response = 'Opening message form...';
                // Implement logic to open message form
                break;
            case 'about':
                response = 'I am a full-stack engineer and UI/UX designer based in Dubai...';
                break;
            case 'hack nasa':
                await hackNASA();
                return;
            case 'do a barrel roll':
                response = 'Initiating barrel roll...';
                setOutput([...output, `> ${cmd}`, response]);
                setIsOpen(false);
                setTimeout(() => doBarrelRoll(), 500);
                return;
            case 'askew':
                response = 'Tilting the page...';
                setOutput([...output, `> ${cmd}`, response]);
                setIsOpen(false);
                setTimeout(() => makeAskew(), 500);
                return;
            case 'exit':
            case 'quit':
                response = 'Closing terminal...';
                setOutput([...output, `> ${cmd}`, response]);
                setTimeout(() => setIsOpen(false), 1000);
                return;
            default:
                response = `Unknown command: ${command}. Type "help" for a list of commands.`;
        }

        setOutput([...output, `> ${cmd}`, response]);
    };

    const hackNASA = async (): Promise<void> => {
        const steps = [
            "Initializing NASA hack sequence...",
            "[==                  ] 10% - Bypassing firewall...",
            "[====                ] 20% - Cracking encryption...",
            "[======              ] 30% - Accessing main frame...",
            "[========            ] 40% - Downloading top secret files...",
            "[==========          ] 50% - Deleting search history...",
            "[============        ] 60% - Planting easter eggs...",
            "[==============      ] 70% - Redirecting satellites...",
            "[================    ] 80% - Photoshopping aliens into Mars rover pics...",
            "[==================  ] 90% - Changing all passwords to \"password123\"...",
            "[====================] 100% - Hack complete! (I'm in!)",
            "\nJust kidding! I would never actually hack NASA. I'm a law-abiding developer who respects digital boundaries.",
            "Plus, I'm pretty sure real hacking doesn't involve progress bars. 😉"
        ];

        setOutput(prev => [...prev, `> hack nasa`]);

        for (let step of steps) {
            await new Promise(resolve => setTimeout(resolve, 500));
            setOutput(prev => [...prev, step]);
        }
    };

    const doBarrelRoll = () => {
        document.body.style.transition = 'transform 4s';
        document.body.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            document.body.style.transition = 'none';
            document.body.style.transform = 'none';
        }, 4000);
    };

    const makeAskew = () => {
        document.body.style.transition = 'transform 1s';
        document.body.style.transform = 'rotate(-2deg)';
    };

    const handleScroll = useCallback((e: React.WheelEvent<HTMLDivElement>) => {
        if (terminalRef.current) {
            e.stopPropagation();
            terminalRef.current.scrollTop += e.deltaY;
        }
    }, []);

    const handleTerminalClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        if (!(e.target as HTMLElement).closest('button') && inputRef.current) {
            inputRef.current.focus();
        }
    };

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            setIsOpen(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[999]"
            onClick={handleOverlayClick}
        >
            <div
                ref={terminalRef}
                className="bg-gray-900 text-green-400 p-4 rounded-lg w-full max-w-[1200px] h-96 flex flex-col overflow-y-auto"
                onClick={handleTerminalClick}
                onWheel={handleScroll}
            >
                <div className="flex justify-between items-center mb-2">
                    <TerminalIcon size={24} />
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-gray-500 hover:text-white"
                    >
                        ×
                    </button>
                </div>
                <div className="flex-1 overflow-y-auto mb-2 font-mono text-sm">
                    {output.map((line, index) => (
                        <pre key={index} className="mb-1 whitespace-pre-wrap">{line}</pre>
                    ))}
                    <div ref={outputEndRef} />
                </div>
                <form onSubmit={handleSubmit} className="flex">
                    <span className="mr-2">{'>'}</span>
                    <input
                        type="text"
                        value={input}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        ref={inputRef}
                        className="flex-1 bg-transparent outline-none"
                        disabled={isProcessing}
                    />
                </form>
            </div>
        </div>
    );

};

export default Terminal;