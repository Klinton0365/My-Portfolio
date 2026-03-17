'use client'
import { API_URL } from "@/lib/config";
import { useEffect, useRef, useState, useCallback } from 'react'

export default function HumanVerify({ onVerified }) {
    const [status, setStatus] = useState('idle'); // idle | verifying | verified | failed | error
    const [token, setToken] = useState(null);
    const moveCount = useRef(0);
    const clickCount = useRef(0);
    const trail = useRef([]);
    const startTime = useRef(Date.now());

    const fetchChallenge = useCallback(async () => {
        try {
            const res = await fetch(`${API_URL}/contact/challenge`);
            if (!res.ok) throw new Error('API error');
            const data = await res.json();
            setToken(data.token);
            startTime.current = Date.now();
            moveCount.current = 0;
            clickCount.current = 0;
            trail.current = [];
        } catch {
            setToken(null);
            setStatus('error');
        }
    }, []);

    useEffect(() => {
        fetchChallenge();
    }, [fetchChallenge]);

    // Track mouse movement across entire page
    useEffect(() => {
        const handleMove = (e) => {
            moveCount.current++;
            if (moveCount.current % 5 === 0) {
                trail.current.push([e.clientX, e.clientY]);
                if (trail.current.length > 30) trail.current.shift();
            }
        };

        const handleClick = () => {
            clickCount.current++;
        };

        const handleTouch = (e) => {
            moveCount.current++;
            const touch = e.touches[0];
            if (touch) {
                trail.current.push([Math.round(touch.clientX), Math.round(touch.clientY)]);
                if (trail.current.length > 30) trail.current.shift();
            }
        };

        document.addEventListener('mousemove', handleMove);
        document.addEventListener('click', handleClick);
        document.addEventListener('touchmove', handleTouch);
        return () => {
            document.removeEventListener('mousemove', handleMove);
            document.removeEventListener('click', handleClick);
            document.removeEventListener('touchmove', handleTouch);
        };
    }, []);

    const handleCheck = async () => {
        if (status === 'verified' || status === 'verifying') return;

        if (!token) {
            setStatus('error');
            return;
        }

        setStatus('verifying');

        const elapsed = Date.now() - startTime.current;

        try {
            const res = await fetch(`${API_URL}/contact/verify`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    token,
                    elapsed,
                    moves: moveCount.current,
                    clicks: clickCount.current,
                    trail: trail.current.length >= 2 ? trail.current : [[0, 0], [1, 1]],
                }),
            });

            const data = await res.json();

            if (data.success) {
                setStatus('verified');
                onVerified?.(token);
            } else {
                setStatus('failed');
                setTimeout(() => {
                    setStatus('idle');
                    fetchChallenge();
                }, 2000);
            }
        } catch {
            setStatus('failed');
            setTimeout(() => {
                setStatus('idle');
                fetchChallenge();
            }, 2000);
        }
    };

    return (
        <div className="mb-6 rounded-[3px] border border-[#d3d3d3] dark:border-white/20 bg-[#f9f9f9] dark:bg-darkHover/30 shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3">
                {/* Left: checkbox + label */}
                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        onClick={handleCheck}
                        className={`w-[28px] h-[28px] rounded-sm border-2 flex items-center justify-center transition-all duration-300 shrink-0 ${
                            status === 'verified'
                                ? 'border-[#1b7fed] bg-[#1b7fed]'
                                : status === 'verifying'
                                ? 'border-[#1b7fed] bg-white dark:bg-gray-800'
                                : status === 'failed'
                                ? 'border-red-400 bg-white dark:bg-gray-800'
                                : status === 'error'
                                ? 'border-orange-400 bg-white dark:bg-gray-800'
                                : 'border-[#c1c1c1] dark:border-gray-500 bg-white dark:bg-gray-800 hover:border-[#1b7fed] cursor-pointer'
                        }`}
                    >
                        {status === 'verified' && (
                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        )}
                        {status === 'verifying' && (
                            <div className="w-4 h-4 border-2 border-[#1b7fed] border-t-transparent rounded-full animate-spin" />
                        )}
                        {status === 'failed' && (
                            <svg className="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        )}
                        {status === 'error' && (
                            <svg className="w-4 h-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 3h.01" />
                            </svg>
                        )}
                    </button>

                    <span className="text-[14px] text-gray-800 dark:text-gray-200">
                        {status === 'verified'
                            ? "Verified"
                            : status === 'verifying'
                            ? "Verifying..."
                            : status === 'failed'
                            ? "Verification failed, retrying..."
                            : status === 'error'
                            ? "Could not connect. Please reload."
                            : "I'm not a robot"}
                    </span>
                </div>

                {/* Right: branding */}
                <div className="flex flex-col items-center gap-0.5 pl-4">
                    <svg className="w-8 h-8 text-[#555] dark:text-gray-400" viewBox="0 0 64 64" fill="none">
                        <rect x="8" y="20" width="48" height="36" rx="4" stroke="currentColor" strokeWidth="2.5" />
                        <path d="M20 20V14a12 12 0 0124 0v6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                        <circle cx="32" cy="38" r="4" fill="currentColor" />
                        <path d="M32 42v6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                    <span className="text-[9px] text-gray-400 dark:text-gray-500 font-medium leading-none">Human Verify</span>
                    <span className="text-[8px] text-gray-400 dark:text-gray-500 leading-none">Privacy - Terms</span>
                </div>
            </div>

            {/* Bottom colored bar like reCAPTCHA */}
            <div className="h-[3px] w-full bg-gradient-to-r from-[#1b7fed] via-[#4caf50] to-[#1b7fed]" />
        </div>
    );
}
