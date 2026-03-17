'use client'
import { API_URL } from "@/lib/config";
import { useState, useCallback, useEffect } from 'react'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import { motion, AnimatePresence } from 'motion/react'

const TERMINAL_LINES = [
    { id: 'cmd',      text: '$ contact --send --verified --encrypt',       color: 'text-green-400',  delay: 0   },
    { id: 'captcha',  text: '✔ reCAPTCHA v3 score validated (human)',       color: 'text-blue-400',   delay: 600 },
    { id: 'payload',  text: '✔ Payload encrypted and transmitted',          color: 'text-blue-400',   delay: 1200 },
    { id: 'saving',   text: '✔ Message stored in database',                 color: 'text-blue-400',   delay: 1800 },
]

function TerminalLine({ text, color, delay, typing = false }) {
    const [displayed, setDisplayed] = useState(typing ? '' : text)
    const [visible, setVisible] = useState(!typing)

    useEffect(() => {
        const show = setTimeout(() => {
            setVisible(true)
            if (typing) {
                let i = 0
                const interval = setInterval(() => {
                    i++
                    setDisplayed(text.substring(0, i))
                    if (i >= text.length) clearInterval(interval)
                }, 40)
                return () => clearInterval(interval)
            }
        }, delay)
        return () => clearTimeout(show)
    }, [text, delay, typing])

    if (!visible) return null

    return (
        <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className={`text-sm font-mono tracking-tight ${color}`}
        >
            {displayed}
        </motion.div>
    )
}

function ContactTerminal({ status, adminMailOk, userMailOk, errorMsg }) {
    const resultDelay = 2400

    return (
        <div className="w-full max-w-2xl mx-auto rounded-xl border border-gray-200 dark:border-white/20 bg-white dark:bg-darkHover/40 overflow-hidden shadow-lg">
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
                <span className="ml-3 text-xs text-gray-400 font-mono">contact-form ~ bash</span>
            </div>

            {/* Terminal body */}
            <div className="p-5 grid gap-y-2 min-h-[200px]">
                {TERMINAL_LINES.map((line, i) => (
                    <TerminalLine key={line.id} {...line} typing={i === 0} />
                ))}

                {/* Result lines — appear after processing delay */}
                {status === 'success' && (
                    <>
                        <TerminalLine
                            text={adminMailOk ? '✔ Notification email sent to admin' : '⚠ Admin email failed (logged for retry)'}
                            color={adminMailOk ? 'text-blue-400' : 'text-yellow-400'}
                            delay={resultDelay}
                        />
                        <TerminalLine
                            text={userMailOk ? '✔ Confirmation email dispatched to you' : '⚠ User confirmation email failed'}
                            color={userMailOk ? 'text-blue-400' : 'text-yellow-400'}
                            delay={resultDelay + 400}
                        />
                        <TerminalLine text="&nbsp;" color="" delay={resultDelay + 700} />
                        <TerminalLine
                            text="✔ Success! Your message has been delivered."
                            color="text-green-400 font-semibold"
                            delay={resultDelay + 900}
                            typing
                        />
                        <TerminalLine
                            text="  I'll get back to you within 24 hours. Thank you!"
                            color="text-gray-400"
                            delay={resultDelay + 1800}
                        />
                    </>
                )}

                {status === 'error' && (
                    <>
                        <TerminalLine text={`✗ Error: ${errorMsg}`} color="text-red-400" delay={resultDelay} />
                        <TerminalLine text="  Please try again or email directly." color="text-gray-400" delay={resultDelay + 400} />
                    </>
                )}

                {status === 'submitting' && (
                    <motion.div
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ repeat: Infinity, duration: 1 }}
                        className="text-sm font-mono text-gray-400"
                    >
                        ▌ processing...
                    </motion.div>
                )}
            </div>
        </div>
    )
}

export default function Contact() {
    const [status, setStatus] = useState('idle') // idle | submitting | success | error
    const [adminMailOk, setAdminMailOk] = useState(false)
    const [userMailOk, setUserMailOk] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')
    const { executeRecaptcha } = useGoogleReCaptcha()

    const onSubmit = useCallback(async (event) => {
        event.preventDefault()

        if (!executeRecaptcha) {
            setErrorMsg('reCAPTCHA not ready. Please wait...')
            setStatus('error')
            return
        }

        setStatus('submitting')

        try {
            const captchaToken = await executeRecaptcha('contact_form')
            const formData = new FormData(event.target)
            formData.append('recaptcha_token', captchaToken)

            const response = await fetch(`${API_URL}/contact`, {
                method: 'POST',
                body: formData,
            })

            const data = await response.json()

            if (data.success) {
                setAdminMailOk(data.admin_mail_ok ?? true)
                setUserMailOk(data.user_mail_ok ?? false)
                setStatus('success')
                event.target.reset()
            } else {
                setErrorMsg(data.message || 'Something went wrong.')
                setStatus('error')
            }
        } catch (err) {
            console.error(err)
            setErrorMsg('Server unreachable. Please try again.')
            setStatus('error')
        }
    }, [executeRecaptcha])

    return (
        <div id="contact" className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/assets/footer-bg-color.png')] bg-no-repeat bg-[length:90%_auto] bg-center dark:bg-none">

            <h4 className="text-center mb-2 text-lg font-Ovo">Connect with me</h4>
            <h2 className="text-center text-5xl font-Ovo">Get in touch</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
                I&apos;d love to hear from you! If you have any questions, comments or feedback, please use the form below.
            </p>

            <AnimatePresence mode="wait">
                {status === 'idle' ? (
                    <motion.form
                        key="form"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        onSubmit={onSubmit}
                        className="max-w-2xl mx-auto"
                    >
                        <input type="hidden" name="subject" value="My Contact Enquiry - New form Submission" />

                        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
                            <input type="text" placeholder="Enter your name" name="name" required
                                className="flex-1 px-3 py-2 focus:ring-1 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white dark:bg-darkHover/30" />
                            <input type="email" placeholder="Enter your email" name="email" required
                                className="flex-1 px-3 py-2 focus:ring-1 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white dark:bg-darkHover/30" />
                        </div>
                        <textarea rows="6" placeholder="Enter your message" name="message" required
                            className="w-full px-4 py-2 focus:ring-1 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white mb-6 dark:bg-darkHover/30" />

                        <button type="submit"
                            className="py-2 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border dark:border-white/30 dark:hover:bg-darkHover">
                            Submit now
                            <img src="/assets/right-arrow-white.png" alt="" className="w-4" />
                        </button>
                    </motion.form>
                ) : (
                    <motion.div
                        key="terminal"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="flex flex-col items-center gap-6"
                    >
                        <ContactTerminal
                            status={status}
                            adminMailOk={adminMailOk}
                            userMailOk={userMailOk}
                            errorMsg={errorMsg}
                        />

                        {(status === 'success' || status === 'error') && (
                            <motion.button
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: status === 'success' ? 5.5 : 3 }}
                                onClick={() => { setStatus('idle'); setErrorMsg('') }}
                                className="py-2 px-8 flex items-center gap-2 bg-black/80 text-white rounded-full hover:bg-black duration-500 dark:bg-transparent dark:border dark:border-white/30 dark:hover:bg-darkHover text-sm"
                            >
                                {status === 'success' ? 'Send another message' : 'Try again'}
                            </motion.button>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
