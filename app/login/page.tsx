"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Hexagon, Mail, Lock } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function LoginPage() {
  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-gray-950 text-white">
      {/* Left Side - Brand & Visuals */}
      <div className="relative hidden lg:flex flex-col justify-between p-12 bg-gray-900 border-r border-white/5 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-[-20%] left-[-20%] w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-20%] w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />
        
        {/* Brand */}
        <Link href="/" className="relative z-10 flex items-center gap-2 w-fit group">
            <Hexagon className="w-8 h-8 text-primary fill-primary/20 group-hover:rotate-90 transition-transform duration-500" />
            <span className="font-display font-bold text-2xl tracking-wider text-white">
            NEXUS<span className="text-primary">RPC</span>
            </span>
        </Link>
        
        {/* Abstract Dashboard Visual */}
        <div className="relative z-10 flex flex-col gap-6 items-center justify-center flex-grow">
            <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-md glass p-8 rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(139,92,246,0.1)] space-y-6"
            >
                {/* Mock Card 1 */}
                <div className="flex justify-between items-center pb-4 border-b border-white/5">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                            <div className="w-5 h-5 rounded-full bg-blue-500" />
                        </div>
                        <div>
                            <div className="h-4 w-24 bg-white/10 rounded animate-pulse mb-1.5" />
                            <div className="h-3 w-16 bg-white/5 rounded" />
                        </div>
                    </div>
                </div>
                 {/* Mock Card 2 */}
                <div className="space-y-3">
                    <div className="h-2 w-full bg-white/10 rounded" />
                    <div className="h-2 w-3/4 bg-white/10 rounded" />
                     <div className="h-2 w-5/6 bg-white/10 rounded" />
                </div>
                
                 {/* Mock Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-bold border border-green-500/20">
                     <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                     Systems Operational
                </div>
            </motion.div>
            
            <motion.div
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.5 }}
                 className="text-center space-y-2"
            >
                <h2 className="text-2xl font-bold font-display">Manage your infrastructure</h2>
                <p className="text-gray-400 max-w-xs mx-auto">Real-time analytics, API key management, and usage insights.</p>
            </motion.div>
        </div>

        <div className="relative z-10 text-sm text-gray-500">
            © 2024 NexusRPC Inc.
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex flex-col justify-center items-center p-6 sm:p-12 relative">
          <Link href="/" className="absolute top-8 left-8 lg:hidden text-gray-400 hover:text-white flex items-center gap-2 text-sm transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          
          <div className="w-full max-w-sm space-y-8">
            <div className="text-center space-y-2">
                <h1 className="text-3xl font-bold tracking-tight">Welcome back</h1>
                <p className="text-gray-400">Enter your credentials to access your account</p>
            </div>

            <div className="space-y-4">
                <Button variant="outline" className="w-full h-12 text-base font-normal rounded-xl border-white/10 hover:bg-white/5 hover:border-white/20 gap-3">
                    <svg className="h-5 w-5" aria-hidden="true" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                    Sign in with Google
                </Button>
                <Button variant="outline" className="w-full h-12 text-base font-normal rounded-xl border-white/10 hover:bg-white/5 hover:border-white/20 gap-3">
                     <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.525.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.655.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.285 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
                     Sign in with Github
                </Button>
            </div>

            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-white/10" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-gray-950 px-2 text-gray-500">Or continue with email</span>
                </div>
            </div>

            <form className="space-y-4">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Email</label>
                    <div className="relative">
                        <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                        <input 
                            type="email" 
                            placeholder="name@example.com" 
                            className="w-full h-11 pl-10 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 text-white placeholder:text-gray-600 transition-all font-medium"
                        />
                    </div>
                </div>
                <div className="space-y-2">
                     <div className="flex justify-between items-center">
                        <label className="text-sm font-medium text-gray-400">Password</label>
                        <Link href="#" className="text-xs text-primary hover:text-primary/80">Forgot password?</Link>
                     </div>
                    <div className="relative">
                        <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                        <input 
                            type="password" 
                            placeholder="••••••••" 
                            className="w-full h-11 pl-10 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 text-white placeholder:text-gray-600 transition-all font-medium"
                        />
                    </div>
                </div>

                <Button className="w-full h-11 text-base rounded-xl bg-primary hover:bg-primary/90 mt-2">
                    Sign In
                </Button>
            </form>

            <p className="text-center text-sm text-gray-500">
                Don&apos;t have an account?{" "}
                <Link href="/login" className="text-primary hover:underline">
                    Sign up
                </Link>
            </p>
          </div>
      </div>
    </div>
  );
}
