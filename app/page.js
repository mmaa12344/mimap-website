"use client";

import Link from "next/link";
import Head from "next/head";

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
              <p className="text-xs text-slate-500 -mt-1">Bookkeeping & Tax Services for US Small Businesses</p>
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

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-36 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white shadow-md border border-slate-100 rounded-full px-4 py-2 text-sm text-slate-700 mb-6">
              Trusted Remote Bookkeeping for U.S. Businesses
            </div>

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
              <span>✔ Xero</span>
              <span>✔ Zoho Books</span>
              <span>✔ Secure Cloud Systems</span>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-[32px] shadow-2xl border border-slate-100 p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-3xl p-6">
                  <p className="text-slate-500 text-sm">Monthly Reconciliations</p>
                  <h3 className="mt-2 text-3xl font-bold text-blue-700">100%</h3>
                </div>

                <div className="bg-emerald-50 rounded-3xl p-6">
                  <p className="text-slate-500 text-sm">Remote Support</p>
                  <h3 className="mt-2 text-3xl font-bold text-emerald-600">24/7</h3>
                </div>

                <div className="bg-slate-50 rounded-3xl p-6 col-span-2">
                  <p className="text-slate-500 text-sm">Professional Financial Reporting</p>
                  <div className="mt-4 h-3 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full w-[85%] bg-blue-700 rounded-full"></div>
                  </div>
                  <div className="mt-4 flex justify-between text-sm text-slate-500">
                    <span>Accuracy</span>
                    <span>85% Faster Workflow</span>
                  </div>
                </div>
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

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-5xl font-bold tracking-tight">Simple Monthly Pricing</h2>
            <p className="mt-6 text-xl text-slate-600">
              Transparent bookkeeping plans with no hidden fees.
            </p>
          </div>

          <div className="mt-16 grid lg:grid-cols-3 gap-8">
            {/* Starter */}
            <div className="bg-white rounded-[32px] border border-slate-100 p-10 shadow-sm hover:shadow-2xl transition">
              <p className="text-sm uppercase tracking-widest text-slate-500 font-semibold">Starter</p>
              <h3 className="mt-4 text-5xl font-bold">$249<span className="text-lg text-slate-500">/mo</span></h3>
              <p className="mt-6 text-slate-600">
                Ideal for freelancers and small businesses.
              </p>

              <ul className="mt-8 space-y-4 text-slate-700">
                <li>✔ Up to 2 bank accounts</li>
                <li>✔ Monthly reconciliations</li>
                <li>✔ Profit & Loss reports</li>
                <li>✔ Balance Sheet</li>
                <li>✔ Email support</li>
              </ul>

              <button className="mt-10 w-full bg-slate-900 hover:bg-black text-white py-4 rounded-2xl font-semibold transition">
                Get Started
              </button>
            </div>

            {/* Growth */}
            <div className="bg-blue-700 text-white rounded-[32px] p-10 shadow-2xl relative scale-105">
              <div className="absolute top-6 right-6 bg-white text-blue-700 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide">
                Most Popular
              </div>

              <p className="text-sm uppercase tracking-widest text-blue-100 font-semibold">Growth</p>
              <h3 className="mt-4 text-5xl font-bold">$449<span className="text-lg text-blue-100">/mo</span></h3>
              <p className="mt-6 text-blue-100">
                Perfect for growing companies needing ongoing support.
              </p>

              <ul className="mt-8 space-y-4 text-white">
                <li>✔ Everything in Starter</li>
                <li>✔ Up to 5 accounts</li>
                <li>✔ A/R & A/P tracking</li>
                <li>✔ Monthly review call</li>
                <li>✔ Full financial reports</li>
              </ul>

              <button className="mt-10 w-full bg-white hover:bg-slate-100 text-blue-700 py-4 rounded-2xl font-semibold transition">
                Choose Growth
              </button>
            </div>

            {/* Premium */}
            <div className="bg-white rounded-[32px] border border-slate-100 p-10 shadow-sm hover:shadow-2xl transition">
              <p className="text-sm uppercase tracking-widest text-slate-500 font-semibold">Premium</p>
              <h3 className="mt-4 text-5xl font-bold">$799<span className="text-lg text-slate-500">/mo</span></h3>
              <p className="mt-6 text-slate-600">
                Advanced bookkeeping support for scaling businesses.
              </p>

              <ul className="mt-8 space-y-4 text-slate-700">
                <li>✔ Weekly bookkeeping</li>
                <li>✔ Payroll reconciliation</li>
                <li>✔ KPI reporting</li>
                <li>✔ Priority support</li>
                <li>✔ Class & location tracking</li>
              </ul>

              <button className="mt-10 w-full bg-slate-900 hover:bg-black text-white py-4 rounded-2xl font-semibold transition">
                Contact Sales
              </button>
            </div>
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
      <section className="py-24 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-center mb-6">
      Bookkeeping & Tax Services
    </h2>

    <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
      TrueBooksHQ provides professional bookkeeping, QuickBooks support,
      financial reporting, and tax preparation services for small businesses
      across the United States.
    </p>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="bg-white p-8 rounded-2xl shadow-sm">
        <h3 className="text-2xl font-semibold mb-4">
          Monthly Bookkeeping
        </h3>
        <p className="text-gray-600">
          Accurate monthly bookkeeping services including transaction
          categorization, reconciliations, and financial reports for small businesses.
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-sm">
        <h3 className="text-2xl font-semibold mb-4">
          QuickBooks Online Support
        </h3>
        <p className="text-gray-600">
          Expert QuickBooks Online bookkeeping support to help businesses
          maintain clean and organized financial records.
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-sm">
        <h3 className="text-2xl font-semibold mb-4">
          Catch-Up Bookkeeping
        </h3>
        <p className="text-gray-600">
          Behind on your books? We help businesses organize and clean up
          overdue bookkeeping and financial records.
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-sm">
        <h3 className="text-2xl font-semibold mb-4">
          Tax Preparation
        </h3>
        <p className="text-gray-600">
          Reliable tax preparation services for small businesses and entrepreneurs
          across the United States.
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-sm">
        <h3 className="text-2xl font-semibold mb-4">
          Financial Reporting
        </h3>
        <p className="text-gray-600">
          Monthly financial statements and reporting to help business owners
          understand and manage their finances with confidence.
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-sm">
        <h3 className="text-2xl font-semibold mb-4">
          Remote Bookkeeping Services
        </h3>
        <p className="text-gray-600">
          Based in St. Petersburg, Florida, serving businesses remotely
          throughout the United States.
        </p>
      </div>

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
          Do you provide tax preparation services?
        </h3>
        <p className="text-gray-600 mt-2">
          Yes. We offer tax preparation support for small businesses and entrepreneurs across the United States.
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
            <p>© 2026 True Books HQ . All rights reserved.</p>
            <p className="mt-1">Remote Bookkeeping Services for U.S. Businesses</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
