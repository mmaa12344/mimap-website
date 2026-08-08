"use client";

import Link from "next/link";
import Head from "next/head";
import Script from "next/script";

export default function MimapWebsite() {

  async function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');

    const formData = new FormData(form);

    formData.append(
      "access_key",
      "a184610b-db5b-420c-ac6f-74490d9f72f1"
    );

    const originalText = submitBtn.textContent;

    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Message sent successfully!");
        form.reset();
      } else {
        alert(data.message);
      }

    } catch (error) {
      alert("Something went wrong.");
    } finally {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }
  }

  return (

    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* SEO Meta Tags */}
      <Head>
        <title>True Books HQ | Professional Bookkeeping Services for U.S. Businesses</title>
        <meta
          name="description"
          content="helping small businesses across the United States stay organized, compliant, and financially confident. QuickBooks experts, monthly reports, reconciliations, and stress-free accounting support."
        />
        <meta
          name="keywords"
          content="bookkeeping services USA, QuickBooks bookkeeper, online bookkeeping, bookkeeping agency, remote bookkeeping"
        />
      </Head>

      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-700 to-emerald-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
              T
            </div>
            <div>
              <h1 className="font-bold text-2xl tracking-tight">True Books HQ </h1>
              <p className="text-xs text-slate-500 -mt-1">Bookkeeping Services for US Small Businesses</p>
            </div>

          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#services" className="hover:text-blue-700 transition">Services</a>
            <a href="#pricing" className="hover:text-blue-700 transition">Pricing</a>
            <a href="#about" className="hover:text-blue-700 transition">About</a>
            <a href="#contact" className="hover:text-blue-700 transition">Contact</a>
            <Link href="/blog">Blog</Link>
          </nav>

          <a
            href="#contact"
            className="bg-blue-700 hover:bg-blue-800 transition text-white px-5 py-3 rounded-2xl text-sm font-semibold shadow-lg"
          >
            Free Consultation
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-emerald-50 opacity-70"></div>

        <div className="relative max-w-7xl mx-auto px-6 pt-10 lg:pt-14 pb-12 lg:pb-16 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
              Modern <span className="text-blue-700">Bookkeeping</span> for Growing Businesses
            </h2>

            <p className="mt-8 text-xl text-slate-600 leading-relaxed max-w-xl">
              Accurate books, monthly reports, reconciliations, and stress‑free finances — Based in St. Petersburg, Florida — serving businesses across the United States remotely..
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#pricing"
                className="bg-blue-700 hover:bg-blue-800 text-white px-7 py-4 rounded-2xl font-semibold shadow-xl transition"
              >
                View Pricing
              </a>

              <a
                href="#contact"
                className="border border-slate-300 hover:border-blue-700 hover:text-blue-700 px-7 py-4 rounded-2xl font-semibold transition"
              >
                Book Consultation
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-500">
              <span>✔ QuickBooks Online</span>
              <span>✔ QuickBooks Desktop</span>
              <span>✔ Xero</span>
              <span>✔ Zoho Books</span>
              <span>✔ Secure Cloud Systems</span>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="bg-white rounded-[32px] shadow-2xl border border-slate-100 p-8 max-w-md w-full">
              <p className="text-sm font-bold tracking-widest text-blue-700 uppercase text-center">
                What You Get Every Month
              </p>
              <div className="mt-6 space-y-5">
                {[
                  {
                    title: 'Bank & Credit Card Reconciliation',
                    desc: 'Every transaction matched and categorized',
                  },
                  {
                    title: 'Monthly Financial Statements',
                    desc: 'P&L, balance sheet, and cash flow report',
                  },
                  {
                    title: 'Dedicated Bookkeeper',
                    desc: 'A real person who knows your business',
                  },
                  {
                    title: 'QuickBooks Certified Team',
                    desc: 'Intuit & QuickBooks ProAdvisor certified',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-blue-700">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">{item.title}</p>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <p className="text-center text-xs font-bold tracking-widest text-slate-400 uppercase mb-6">
            Certified &amp; Trusted
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              'Intuit Bookkeeping',
              'QuickBooks Level 1',
              'QuickBooks Payroll',
              'QuickBooks Level 2',
            ].map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-2xl px-4 py-4 justify-center text-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-blue-700 shrink-0">
                  <path d="M12 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
                  <path d="M8.5 14.5 7 22l5-3 5 3-1.5-7.5" />
                </svg>
                <span className="text-sm font-semibold text-slate-700">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="pt-8 pb-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto">
            <p className="text-sm font-bold tracking-widest text-blue-700 uppercase">
              Pricing Plans
            </p>
            <h2 className="mt-3 text-5xl font-bold tracking-tight text-slate-900">
              Simple, Transparent &amp; Scalable Pricing
            </h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Choose the plan that fits your business needs. All plans include everything you need
              to keep your books accurate and your business on track.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3 items-stretch">

            {/* Starter */}
            <div className="bg-white rounded-[28px] border border-slate-100 p-10 shadow-sm hover:shadow-xl transition flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-blue-700">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                  <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                  <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                </svg>
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">Starter</h3>
              <p className="mt-2 text-slate-500">Perfect for freelancers and small businesses</p>

              <div className="mt-8 flex items-end justify-center gap-1">
                <span className="text-2xl font-bold text-blue-700">$</span>
                <span className="text-5xl font-bold text-slate-900">40</span>
                <span className="text-slate-500 mb-1">/mo</span>
              </div>
              <p className="mt-2 text-slate-600">
                Up to <span className="font-semibold text-slate-900">100</span> transactions/month
              </p>

              <div className="mt-6 w-full border-t border-slate-100 pt-6">
                <p className="text-sm font-medium text-emerald-600">Annual Price (Save 12.5%)</p>
                <p className="mt-1 text-2xl font-bold text-emerald-600">$35/mo</p>
              </div>

              <button className="mt-8 w-full border border-blue-700 text-blue-700 hover:bg-blue-50 py-4 rounded-2xl font-semibold transition">
                Get Started
              </button>
            </div>

            {/* Growth */}
            <div className="bg-white rounded-[28px] border-2 border-blue-700 shadow-2xl relative flex flex-col items-center text-center overflow-hidden">
              <div className="w-full bg-blue-700 text-white text-center py-2.5 text-xs font-bold uppercase tracking-wide">
                Most Popular
              </div>

              <div className="p-10 pt-8 flex flex-col items-center text-center flex-1 w-full">
                <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-blue-700">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                    <polyline points="17 6 23 6 23 12" />
                  </svg>
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">Growth</h3>
                <p className="mt-2 text-slate-500">Ideal for growing businesses</p>

                <div className="mt-8 flex items-end justify-center gap-1">
                  <span className="text-2xl font-bold text-blue-700">$</span>
                  <span className="text-5xl font-bold text-slate-900">70</span>
                  <span className="text-slate-500 mb-1">/mo</span>
                </div>
                <p className="mt-2 text-slate-600">
                  Up to <span className="font-semibold text-slate-900">200</span> transactions/month
                </p>

                <div className="mt-6 w-full border-t border-slate-100 pt-6">
                  <p className="text-sm font-medium text-emerald-600">Annual Price (Save 14.3%)</p>
                  <p className="mt-1 text-2xl font-bold text-emerald-600">$60/mo</p>
                </div>

                <button className="mt-8 w-full bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-2xl font-semibold shadow-lg transition">
                  Get Started
                </button>
              </div>
            </div>

            {/* Professional */}
            <div className="bg-white rounded-[28px] border border-slate-100 p-10 shadow-sm hover:shadow-xl transition flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-blue-700">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">Professional</h3>
              <p className="mt-2 text-slate-500">Designed for established businesses</p>

              <div className="mt-8 flex items-end justify-center gap-1">
                <span className="text-2xl font-bold text-blue-700">$</span>
                <span className="text-5xl font-bold text-slate-900">120</span>
                <span className="text-slate-500 mb-1">/mo</span>
              </div>
              <p className="mt-2 text-slate-600">
                Up to <span className="font-semibold text-slate-900">400</span> transactions/month
              </p>

              <div className="mt-6 w-full border-t border-slate-100 pt-6">
                <p className="text-sm font-medium text-emerald-600">Annual Price (Save 16.7%)</p>
                <p className="mt-1 text-2xl font-bold text-emerald-600">$100/mo</p>
              </div>

              <button className="mt-8 w-full border border-blue-700 text-blue-700 hover:bg-blue-50 py-4 rounded-2xl font-semibold transition">
                Get Started
              </button>
            </div>

          </div>

          {/* All Plans Include */}
          <div className="mt-8 bg-white rounded-[28px] border border-slate-100 p-8 shadow-sm grid md:grid-cols-[auto_1fr] gap-6 md:gap-12 items-center">
            <p className="text-lg font-bold text-slate-900 whitespace-nowrap">All Plans Include:</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
              {[
                'Daily Bookkeeping',
                'Accounts Receivable (A/R)',
                'Monthly Financial Reports',
                'Accounts Payable (A/P)',
                'Expense Tracking',
                'Year-End Prep for Your CPA',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-slate-700">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-blue-700 shrink-0">
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Flexible Pricing + Additional Rates */}
          <div className="mt-8 grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-[28px] border border-slate-100 p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 shrink-0 rounded-full bg-blue-50 flex items-center justify-center text-blue-700">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <path d="M9 18h6" />
                    <path d="M10 22h4" />
                    <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5.76.76 1.23 1.52 1.41 2.5" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Flexible Pricing</h3>
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    Business activity can vary from month to month. If you exceed the number of transactions included
                    in your plan, we&apos;ll simply bill the additional transactions at your plan&apos;s discounted rate.
                  </p>
                </div>
              </div>

              <div className="mt-8 grid sm:grid-cols-3 gap-6">
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-blue-700 shrink-0">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  <span className="text-slate-700">No surprises.</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-blue-700 shrink-0">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                    <polyline points="17 6 23 6 23 12" />
                  </svg>
                  <span className="text-slate-700">No forced upgrades.</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-blue-700 shrink-0">
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                  <span className="text-slate-700">Transparent pricing that grows with your business.</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[28px] border border-slate-100 p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 text-center">Additional Transaction Rates</h3>
              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-100">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-slate-50">
                      <th className="px-5 py-3 text-sm font-semibold text-slate-700">Plan</th>
                      <th className="px-5 py-3 text-sm font-semibold text-slate-700">Additional Transaction Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Starter', '$0.40'],
                      ['Growth', '$0.35'],
                      ['Professional', '$0.30'],
                    ].map(([plan, rate], i) => (
                      <tr key={plan} className={i !== 2 ? 'border-t border-slate-100' : ''}>
                        <td className="px-5 py-4 font-semibold text-slate-900">{plan}</td>
                        <td className="px-5 py-4 text-slate-600">
                          <span className="font-bold text-blue-700">{rate}</span> per additional transaction
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-slate-500 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-blue-700 shrink-0">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
            <span>
              Rates are in USD. Additional transactions are billed at the rate of your selected plan.
            </span>
          </div>

          {/* Additional Services */}
          <div className="mt-8 bg-white rounded-[28px] border border-slate-100 p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 text-center">Additional Services</h3>

            <div className="mt-8 grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
              {/* Payroll */}
              <div className="pb-6 sm:pb-0 sm:px-8 first:pl-0">
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-blue-700 shrink-0">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  <span className="font-semibold text-slate-900">Payroll</span>
                </div>
                <p className="mt-4 text-2xl font-bold text-slate-900">$25<span className="text-base font-medium text-slate-500">/mo</span></p>
                <p className="mt-1 text-slate-500">Includes 1 employee — payroll recording & reconciliation</p>
                <p className="mt-2 text-sm text-slate-500">+$5/mo per additional employee reviewed for recording & reconciliation</p>
              </div>

              {/* Sales Tax */}
              <div className="pt-6 sm:pt-0 sm:px-8">
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-slate-400 shrink-0">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                  </svg>
                  <span className="font-semibold text-slate-900">Sales Tax</span>
                </div>
                <p className="mt-4 text-2xl font-bold text-slate-900">From $25<span className="text-base font-medium text-slate-500">/state</span></p>
                <p className="mt-1 text-slate-500">Sales tax filing</p>
              </div>

              {/* Catch-Up & Cleanup */}
              <div className="pt-6 sm:pt-0 sm:px-8">
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-blue-700 shrink-0">
                    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                    <path d="M3 3v5h5" />
                  </svg>
                  <span className="font-semibold text-slate-900">Catch-Up & Cleanup</span>
                </div>
                <p className="mt-4 text-2xl font-bold text-slate-900">Custom</p>
                <p className="mt-1 text-slate-500">Cleanup of overdue or backlogged books</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-5xl font-bold tracking-tight">Bookkeeping Services Designed for Small Businesses</h2>
            <p className="mt-6 text-xl text-slate-600">
              Flexible bookkeeping support tailored for startups, contractors, ecommerce brands, and growing companies across the United States.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Monthly Bookkeeping',
              'Bank Reconciliation',
              'Accounts Payable & Receivable',
              'QuickBooks Online Management',
              'Catch-Up Bookkeeping',
              'Financial Reporting'
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white border border-slate-100 rounded-[28px] p-8 shadow-sm hover:shadow-xl transition duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-700 font-bold text-xl">
                  {index + 1}
                </div>
                <h3 className="mt-6 text-2xl font-semibold">{service}</h3>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  Reliable and organized bookkeeping processes designed to keep your finances clean, compliant, and ready for growth.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-bold tracking-tight">
              A Modern Remote Bookkeeping Partner
            </h2>

            <p className="mt-8 text-xl text-slate-600 leading-relaxed">
              True Books HQ  helps U.S. businesses simplify bookkeeping with organized financial systems, monthly reporting, and cloud-based accounting tools.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="bg-slate-50 rounded-3xl p-6">
                <h3 className="text-4xl font-bold text-blue-700">99%</h3>
                <p className="mt-2 text-slate-600">Client Satisfaction</p>
              </div>

              <div className="bg-slate-50 rounded-3xl p-6">
                <h3 className="text-4xl font-bold text-emerald-600">100+</h3>
                <p className="mt-2 text-slate-600">Monthly Reports Delivered</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-700 to-emerald-500 rounded-[40px] p-12 text-white shadow-2xl">
            <h3 className="text-4xl font-bold">Why Businesses Choose True Books HQ </h3>

            <ul className="mt-10 space-y-6 text-lg text-blue-50 leading-relaxed">
              <li>✔ Dedicated bookkeeping support</li>
              <li>✔ Secure cloud accounting systems</li>
              <li>✔ Monthly financial visibility</li>
              <li>✔ Fast communication & support</li>
              <li>✔ QuickBooks Online expertise</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white">
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-4xl font-bold mb-12 text-center">
      Latest Articles
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      <Link
        href="/blog/what-does-a-bookkeeper-do"
        className="border rounded-2xl p-8 hover:shadow-lg transition"
      >
        <h3 className="text-2xl font-semibold mb-4">
          What Does a Bookkeeper Do?
        </h3>

        <p className="text-gray-600">
          Learn how bookkeeping helps businesses stay organized and financially healthy.
        </p>
      </Link>

      <Link
        href="/blog/quickbooks-online-tips"
        className="border rounded-2xl p-8 hover:shadow-lg transition"
      >
        <h3 className="text-2xl font-semibold mb-4">
          QuickBooks Online Tips
        </h3>

        <p className="text-gray-600">
          Helpful QuickBooks Online tips for small business owners.
        </p>
      </Link>

      <Link
        href="/blog/catch-up-bookkeeping-guide"
        className="border rounded-2xl p-8 hover:shadow-lg transition"
      >
        <h3 className="text-2xl font-semibold mb-4">
          Catch-Up Bookkeeping Guide
        </h3>

        <p className="text-gray-600">
          Learn how catch-up bookkeeping helps businesses clean up overdue records.
        </p>
      </Link>

    </div>
  </div>
</section>
<section className="py-24">
  <div className="max-w-4xl mx-auto px-6">
    <h2 className="text-4xl font-bold text-center mb-12">
      Frequently Asked Questions
    </h2>

    <div className="space-y-8">

      <div>
        <h3 className="text-xl font-semibold">
          Do you work with QuickBooks Online?
        </h3>
        <p className="text-gray-600 mt-2">
          Yes. We specialize in QuickBooks Online bookkeeping and monthly financial management for small businesses.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold">
          Do you offer monthly bookkeeping services?
        </h3>
        <p className="text-gray-600 mt-2">
          Yes. We provide ongoing monthly bookkeeping, reconciliations, and financial reporting.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold">
          Can you help with catch-up bookkeeping?
        </h3>
        <p className="text-gray-600 mt-2">
          Absolutely. We help businesses organize and clean up overdue bookkeeping records.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold">
          Where is TrueBooksHQ located?
        </h3>
        <p className="text-gray-600 mt-2">
          TrueBooksHQ is based in St. Petersburg, Florida and serves clients remotely across the United States.
        </p>
      </div>

    </div>
  </div>
</section>
      {/* Contact */}
      <section id="contact" className="py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold tracking-tight">
            Ready to Simplify Your Bookkeeping?
          </h2>

          <p className="mt-6 text-xl text-slate-300 leading-relaxed">
            Schedule a free consultation and discover how True Books HQ  can help your business stay financially organized.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-slate-300">
            <a href="mailto:info@truebookshq.com" className="flex items-center gap-2 hover:text-white transition">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 shrink-0">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-10 5L2 7" />
              </svg>
              <span>info@truebookshq.com</span>
            </a>
            <span className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 shrink-0">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>7901 4th St N # 24304, St. Petersburg, FL</span>
            </span>
          </div>

          <form
  onSubmit={handleSubmit}
  className="mt-14 grid gap-6"
>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="bg-white text-slate-900 rounded-2xl px-6 py-4 outline-none"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Business Email"
              className="bg-white text-slate-900 rounded-2xl px-6 py-4 outline-none"
              required
            />

            <textarea
  name="message"
  required
              placeholder="Tell us about your business"
              rows="5"
              className="bg-white text-slate-900 rounded-2xl px-6 py-4 outline-none"
            ></textarea>
            <input
  type="checkbox"
  name="botcheck"
  className="hidden"
  style={{ display: "none" }}
/>
            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-800 transition py-4 rounded-2xl font-semibold text-lg"
            >
              Schedule Free Consultation
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-slate-400 py-10 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-700 to-emerald-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
              M
            </div>
            <div>
              <h3 className="font-bold text-white text-xl">True Books HQ </h3>
              <p className="text-sm text-slate-500">Professional Bookkeeping Agency</p>
            </div>
          </div>

          <div className="text-sm text-center md:text-right">
            <p>© 2026 True Books HQ , a Mimap Inc. company. All rights reserved.</p>
            <p className="mt-1">Remote Bookkeeping Services for U.S. Businesses</p>
            <p className="mt-2">
              <a href="mailto:info@truebookshq.com" className="hover:text-white transition">info@truebookshq.com</a>
              {' '}·{' '}
              <span>7901 4th St N # 24304, St. Petersburg, FL</span>
            </p>
            <p className="mt-3 flex items-center justify-center md:justify-end gap-4">
              <Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
              <Link href="/terms-of-service" className="hover:text-white transition">Terms of Service</Link>
            </p>
          </div>
        </div>
      </footer>

      {/* Tidio Live Chat */}
      <Script
        src="//code.tidio.co/jom4dk4pzhbmbug8stdhhelqcuk419oz.js"
        strategy="lazyOnload"
      />
    </div>
  )
}
