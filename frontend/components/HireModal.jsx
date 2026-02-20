'use client';
import { useState, useEffect, useRef } from 'react';
import { API_URL } from '@/lib/config';
import { X, Sparkles, Shield, Clock, Star, Send, CheckCircle2, ArrowRight } from 'lucide-react';

const services = [
    { id: 'fullstack', label: 'Full Stack Development', emoji: '🚀' },
    { id: 'frontend', label: 'Frontend / UI Development', emoji: '🎨' },
    { id: 'ecommerce', label: 'E-Commerce Solution', emoji: '🛒' },
    { id: 'saas', label: 'SaaS Product Build', emoji: '⚡' },
    { id: 'api', label: 'API & Integrations', emoji: '🔗' },
    { id: 'freelance', label: 'Freelance / Contract Work', emoji: '🤝' },
];

const trustPoints = [
    { icon: Clock, text: 'Fast Turnaround' },
    { icon: Shield, text: 'Secure & Reliable' },
    { icon: Star, text: 'Quality Code' },
    { icon: Sparkles, text: 'Modern Tech Stack' },
];

export default function HireModal({ isOpen, onClose }) {
    const [step, setStep] = useState(1);
    const [selectedService, setSelectedService] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        budget: '',
        message: '',
    });
    const [status, setStatus] = useState('idle'); // idle | sending | success | error
    const [errorMsg, setErrorMsg] = useState('');
    const modalRef = useRef(null);
    const [visible, setVisible] = useState(false);

    // Animate in + block wheel/touch events from reaching Lenis
    useEffect(() => {
        if (isOpen) {
            requestAnimationFrame(() => setVisible(true));
        } else {
            setVisible(false);
        }
    }, [isOpen]);

    // Block scroll events from leaking to Lenis while modal is open
    useEffect(() => {
        if (!isOpen) return;

        const blockScroll = (e) => {
            // If scrolling inside the modal content, allow it but stop propagation
            // If scrolling on the backdrop, prevent everything
            const modal = modalRef.current;
            if (!modal) return;

            const contentBox = modal.querySelector('[data-modal-content]');
            if (contentBox && contentBox.contains(e.target)) {
                // Inside modal content — allow native scroll, block Lenis
                e.stopPropagation();
            } else {
                // On backdrop — block all scroll
                e.preventDefault();
                e.stopPropagation();
            }
        };

        // Capture phase so we intercept before Lenis sees the events
        window.addEventListener('wheel', blockScroll, { capture: true, passive: false });
        window.addEventListener('touchmove', blockScroll, { capture: true, passive: false });

        return () => {
            window.removeEventListener('wheel', blockScroll, { capture: true });
            window.removeEventListener('touchmove', blockScroll, { capture: true });
        };
    }, [isOpen]);

    // Close on Escape
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [isOpen, onClose]);

    // Close on backdrop click
    const handleBackdrop = (e) => {
        if (e.target === modalRef.current) onClose();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        setErrorMsg('');

        try {
            const res = await fetch(`${API_URL}/hire`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    service: selectedService,
                }),
            });

            const data = await res.json();

            if (res.ok && data.success) {
                setStatus('success');
            } else {
                setStatus('error');
                // Handle Laravel validation errors
                if (data.errors) {
                    const firstError = Object.values(data.errors)[0];
                    setErrorMsg(Array.isArray(firstError) ? firstError[0] : firstError);
                } else {
                    setErrorMsg(data.message || 'Something went wrong. Please try again.');
                }
            }
        } catch {
            setStatus('error');
            setErrorMsg('Could not connect to server. Please try again later.');
        }
    };

    const resetAndClose = () => {
        setStep(1);
        setSelectedService('');
        setFormData({ name: '', email: '', phone: '', budget: '', message: '' });
        setStatus('idle');
        setErrorMsg('');
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div
            ref={modalRef}
            onClick={handleBackdrop}
            className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 transition-all duration-500 ${visible ? 'bg-black/60 backdrop-blur-sm' : 'bg-black/0'}`}
        >
            <div
                data-modal-content
                className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto overscroll-contain bg-white dark:bg-[#0f0f1a] rounded-2xl shadow-2xl shadow-[#4f46e5]/10 border border-gray-200 dark:border-white/10 transition-all duration-500 ${visible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-8'}`}
            >
                {/* Gradient top bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] rounded-t-2xl" />

                {/* Close button */}
                <button
                    onClick={resetAndClose}
                    className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 transition-colors"
                >
                    <X className="w-4 h-4 text-gray-500 dark:text-white/70" />
                </button>

                {/* ===== SUCCESS STATE ===== */}
                {status === 'success' ? (
                    <div className="px-8 py-16 text-center">
                        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#4f46e5]/20 to-[#7c3aed]/20 flex items-center justify-center animate-fade-in">
                            <CheckCircle2 className="w-10 h-10 text-[#4f46e5]" />
                        </div>
                        <h3 className="text-2xl font-semibold mb-3 font-Outfit dark:text-white animate-slide-up">
                            Request Submitted!
                        </h3>
                        <p className="text-gray-500 dark:text-white/60 mb-8 max-w-sm mx-auto animate-slide-up font-Outfit">
                            Thank you for your interest! I&apos;ll review your request and get back to you within 24 hours.
                        </p>
                        <button
                            onClick={resetAndClose}
                            className="px-8 py-3 rounded-full bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] text-white font-medium text-sm hover:shadow-lg hover:shadow-[#4f46e5]/25 transition-all duration-300 font-Outfit animate-slide-up"
                        >
                            Done
                        </button>
                    </div>
                ) : (
                    <>
                        {/* Header */}
                        <div className="px-8 pt-8 pb-4">
                            <div className="flex items-center gap-2 mb-1">
                                <Sparkles className="w-5 h-5 text-[#4f46e5]" />
                                <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#818cf8] dark:text-[#a5b4fc] font-Outfit">
                                    {step === 1 ? 'Step 1 of 2' : 'Step 2 of 2'}
                                </p>
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-Ovo dark:text-white">
                                {step === 1 ? (
                                    <>
                                        What do you{' '}
                                        <span className="relative inline-block px-3 py-0.5">
                                            <span className="absolute inset-0 bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] rounded-md" />
                                            <span className="relative text-white text-2xl sm:text-3xl font-Ovo">need</span>
                                        </span>
                                        ?
                                    </>
                                ) : (
                                    <>
                                        Tell me{' '}
                                        <span className="relative inline-block px-3 py-0.5">
                                            <span className="absolute inset-0 bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] rounded-md" />
                                            <span className="relative text-white text-2xl sm:text-3xl font-Ovo">more</span>
                                        </span>
                                    </>
                                )}
                            </h2>

                            {/* Trust points row */}
                            <div className="flex flex-wrap gap-4 mt-4">
                                {trustPoints.map((tp, i) => {
                                    const Icon = tp.icon;
                                    return (
                                        <div
                                            key={tp.text}
                                            className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-white/50 font-Outfit"
                                            style={{ animationDelay: `${i * 100}ms` }}
                                        >
                                            <Icon className="w-3.5 h-3.5 text-[#4f46e5] dark:text-[#818cf8]" />
                                            {tp.text}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Step indicator bar */}
                        <div className="mx-8 mb-6">
                            <div className="h-1 bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] rounded-full transition-all duration-700 ease-out"
                                    style={{ width: step === 1 ? '50%' : '100%' }}
                                />
                            </div>
                        </div>

                        {/* ===== STEP 1: Service Selection ===== */}
                        {step === 1 && (
                            <div className="px-8 pb-8">
                                <p className="text-sm text-gray-500 dark:text-white/50 mb-5 font-Outfit">
                                    Select the service you&apos;re interested in:
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {services.map((service, i) => (
                                        <button
                                            key={service.id}
                                            onClick={() => setSelectedService(service.label)}
                                            className={`group relative text-left p-4 rounded-xl border transition-all duration-300 overflow-hidden ${
                                                selectedService === service.label
                                                    ? 'border-[#4f46e5] bg-[#4f46e5]/5 dark:bg-[#4f46e5]/10 shadow-md shadow-[#4f46e5]/10'
                                                    : 'border-gray-200 dark:border-white/10 hover:border-[#4f46e5]/40 bg-white dark:bg-white/[0.02] hover:bg-[#4f46e5]/[0.02]'
                                            }`}
                                            style={{
                                                animation: `slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${i * 80}ms forwards`,
                                                opacity: 0,
                                            }}
                                        >
                                            {/* Selected indicator */}
                                            {selectedService === service.label && (
                                                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#4f46e5] to-[#7c3aed]" />
                                            )}

                                            <div className="flex items-center gap-3">
                                                <span className="text-xl">{service.emoji}</span>
                                                <span className={`text-sm font-medium font-Outfit ${
                                                    selectedService === service.label
                                                        ? 'text-[#4f46e5] dark:text-[#a5b4fc]'
                                                        : 'text-gray-700 dark:text-white/80'
                                                }`}>
                                                    {service.label}
                                                </span>
                                            </div>

                                            {selectedService === service.label && (
                                                <CheckCircle2 className="absolute top-3 right-3 w-5 h-5 text-[#4f46e5] dark:text-[#a5b4fc]" />
                                            )}
                                        </button>
                                    ))}
                                </div>

                                {/* Next button */}
                                <div className="mt-6 flex justify-end">
                                    <button
                                        onClick={() => selectedService && setStep(2)}
                                        disabled={!selectedService}
                                        className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium font-Outfit transition-all duration-300 ${
                                            selectedService
                                                ? 'bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] text-white hover:shadow-lg hover:shadow-[#4f46e5]/25 hover:-translate-y-0.5'
                                                : 'bg-gray-100 dark:bg-white/5 text-gray-400 dark:text-white/30 cursor-not-allowed'
                                        }`}
                                    >
                                        Continue
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* ===== STEP 2: Form ===== */}
                        {step === 2 && (
                            <form onSubmit={handleSubmit} className="px-8 pb-8">
                                {/* Selected service chip */}
                                <div className="flex items-center gap-2 mb-6">
                                    <span className="text-xs text-gray-400 dark:text-white/40 font-Outfit">Service:</span>
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#4f46e5]/10 dark:bg-[#4f46e5]/20 text-[#4f46e5] dark:text-[#a5b4fc] text-xs font-medium font-Outfit">
                                        {selectedService}
                                        <button
                                            type="button"
                                            onClick={() => setStep(1)}
                                            className="ml-1 hover:text-[#4f46e5] dark:hover:text-white transition-colors"
                                        >
                                            <X className="w-3 h-3" />
                                        </button>
                                    </span>
                                </div>

                                <div className="space-y-4">
                                    {/* Name & Email row */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div style={{ animation: 'slideUp 0.5s cubic-bezier(0.16,1,0.3,1) 0ms forwards', opacity: 0 }}>
                                            <label className="block text-xs font-medium text-gray-500 dark:text-white/50 mb-1.5 font-Outfit">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                placeholder="John Doe"
                                                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.03] text-sm font-Outfit focus:outline-none focus:border-[#4f46e5] focus:ring-1 focus:ring-[#4f46e5]/30 transition-colors dark:text-white placeholder:text-gray-300 dark:placeholder:text-white/20"
                                            />
                                        </div>
                                        <div style={{ animation: 'slideUp 0.5s cubic-bezier(0.16,1,0.3,1) 80ms forwards', opacity: 0 }}>
                                            <label className="block text-xs font-medium text-gray-500 dark:text-white/50 mb-1.5 font-Outfit">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                placeholder="john@example.com"
                                                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.03] text-sm font-Outfit focus:outline-none focus:border-[#4f46e5] focus:ring-1 focus:ring-[#4f46e5]/30 transition-colors dark:text-white placeholder:text-gray-300 dark:placeholder:text-white/20"
                                            />
                                        </div>
                                    </div>

                                    {/* Phone & Budget row */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div style={{ animation: 'slideUp 0.5s cubic-bezier(0.16,1,0.3,1) 160ms forwards', opacity: 0 }}>
                                            <label className="block text-xs font-medium text-gray-500 dark:text-white/50 mb-1.5 font-Outfit">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                placeholder="+91 98765 43210"
                                                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.03] text-sm font-Outfit focus:outline-none focus:border-[#4f46e5] focus:ring-1 focus:ring-[#4f46e5]/30 transition-colors dark:text-white placeholder:text-gray-300 dark:placeholder:text-white/20"
                                            />
                                        </div>
                                        <div style={{ animation: 'slideUp 0.5s cubic-bezier(0.16,1,0.3,1) 240ms forwards', opacity: 0 }}>
                                            <label className="block text-xs font-medium text-gray-500 dark:text-white/50 mb-1.5 font-Outfit">
                                                Budget Range
                                            </label>
                                            <select
                                                value={formData.budget}
                                                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                                                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.03] text-sm font-Outfit focus:outline-none focus:border-[#4f46e5] focus:ring-1 focus:ring-[#4f46e5]/30 transition-colors dark:text-white appearance-none"
                                            >
                                                <option value="">Select budget</option>
                                                <option value="< ₹25,000">Less than ₹25,000</option>
                                                <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</option>
                                                <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
                                                <option value="> ₹1,00,000">More than ₹1,00,000</option>
                                                <option value="Let's Discuss">Let&apos;s Discuss</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div style={{ animation: 'slideUp 0.5s cubic-bezier(0.16,1,0.3,1) 320ms forwards', opacity: 0 }}>
                                        <label className="block text-xs font-medium text-gray-500 dark:text-white/50 mb-1.5 font-Outfit">
                                            Project Details *
                                        </label>
                                        <textarea
                                            required
                                            rows={4}
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            placeholder="Tell me about your project, goals, and timeline..."
                                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.03] text-sm font-Outfit focus:outline-none focus:border-[#4f46e5] focus:ring-1 focus:ring-[#4f46e5]/30 transition-colors dark:text-white resize-none placeholder:text-gray-300 dark:placeholder:text-white/20"
                                        />
                                    </div>
                                </div>

                                {/* Error message */}
                                {status === 'error' && errorMsg && (
                                    <p className="mt-3 text-sm text-red-500 font-Outfit">{errorMsg}</p>
                                )}

                                {/* Actions */}
                                <div className="mt-6 flex items-center justify-between" style={{ animation: 'slideUp 0.5s cubic-bezier(0.16,1,0.3,1) 400ms forwards', opacity: 0 }}>
                                    <button
                                        type="button"
                                        onClick={() => setStep(1)}
                                        className="text-sm text-gray-400 dark:text-white/40 hover:text-gray-600 dark:hover:text-white/70 font-Outfit transition-colors"
                                    >
                                        ← Back
                                    </button>

                                    <button
                                        type="submit"
                                        disabled={status === 'sending'}
                                        className="flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] text-white text-sm font-medium font-Outfit hover:shadow-lg hover:shadow-[#4f46e5]/25 transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
                                    >
                                        {status === 'sending' ? (
                                            <>
                                                <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                                </svg>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Submit Request
                                                <Send className="w-4 h-4" />
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}
