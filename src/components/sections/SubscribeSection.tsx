'use client';

import { useState } from 'react';
import { Mail, Send } from 'lucide-react';

export default function SubscribeSection() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);
    setEmail('');

    // Reset success message after 3 seconds
    setTimeout(() => setIsSuccess(false), 3000);
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-[hsl(var(--card))] to-[hsl(var(--background))] rounded-2xl p-8 md:p-12 shadow-card-hover border-2 border-[hsl(var(--secondary))]/20 animate-fadeIn">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--secondary))] rounded-full mb-4">
              <Mail className="w-8 h-8 text-white" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              STAY CONNECTED
            </h2>
            <p className="text-[hsl(var(--muted))] text-lg max-w-xl mx-auto">
              Subscribe to receive exclusive updates, new product launches, and special offers directly to your inbox.
            </p>
          </div>

          {/* Subscribe Form */}
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full px-6 py-4 bg-[hsl(var(--background))] border-2 border-[hsl(var(--primary))]/30 rounded-lg text-white placeholder-[hsl(var(--muted))] focus:border-[hsl(var(--primary))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]/20 transition-all duration-300"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className={`px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center space-x-2 ${
                  isSuccess
                    ? 'bg-[hsl(var(--accent))]'
                    : 'bg-[hsl(var(--primary))] hover:bg-[hsl(var(--secondary))] hover:scale-105'
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Subscribing...</span>
                  </>
                ) : isSuccess ? (
                  <>
                    <span>✓</span>
                    <span>Subscribed!</span>
                  </>
                ) : (
                  <>
                    <span>Subscribe</span>
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>

            <p className="text-[hsl(var(--muted))] text-sm text-center mt-4">
              By subscribing, you agree to receive marketing emails. Unsubscribe at any time.
            </p>
          </form>

          {/* Success Message */}
          {isSuccess && (
            <div className="mt-6 p-4 bg-[hsl(var(--accent))]/10 border border-[hsl(var(--accent))]/30 rounded-lg animate-slideUp">
              <p className="text-[hsl(var(--accent))] text-center font-semibold">
                🎉 Thank you for subscribing! Check your inbox for confirmation.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
