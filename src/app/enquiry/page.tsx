'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check, Loader2 } from 'lucide-react';

const courseOptions = [
  { value: 'digital-marketing-training', label: 'Digital Marketing Training' },
  { value: 'ai-marketing-training', label: 'AI in Marketing Training' },
  { value: 'workshops-certifications', label: 'Workshops & Certifications' },
  { value: 'meta-ads-scale-blueprint', label: 'Meta Ads Scale Blueprint' },
];

const academicOptions = [
  { value: 'high-school', label: 'High School' },
  { value: 'undergraduate', label: 'Undergraduate' },
  { value: 'graduate', label: 'Graduate' },
  { value: 'postgraduate', label: 'Postgraduate' },
  { value: 'professional', label: 'Professional / Working' },
  { value: 'other', label: 'Other' },
];

export default function EnquiryPage() {
  const [course, setCourse] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [otherCourse, setOtherCourse] = useState('');
  const [academicLevel, setAcademicLevel] = useState('');

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!course || !fullName || !email || !mobile || !address || !academicLevel) {
      setError('Please fill in all required fields.');
      return;
    }
    setError('');
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false);
    setSuccess(true);
  };

  const resetForm = () => {
    setCourse('');
    setFullName('');
    setEmail('');
    setMobile('');
    setAddress('');
    setOtherCourse('');
    setAcademicLevel('');
    setSuccess(false);
    setError('');
  };

  return (
    <main className="enquiry-page-wrapper">
      {/* Hero Header */}
      <section className="enquiry-hero">
        <h1>Enquiry</h1>
        <div className="enquiry-breadcrumbs">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Enquiry</span>
        </div>
      </section>

      {/* Form Section */}
      <section className="enquiry-form-section">
        <div className="container">
          <div className="enquiry-card">
            {success ? (
              <div className="enquiry-success">
                <div className="enquiry-success-icon">
                  <Check size={32} />
                </div>
                <h3>Enquiry Submitted!</h3>
                <p>
                  Thank you, <strong>{fullName}</strong>. Your enquiry has been received. A representative will reach out to you at <strong>{mobile}</strong> shortly.
                </p>
                <button
                  className="enquiry-submit-btn"
                  onClick={resetForm}
                  style={{ marginTop: '1.5rem' }}
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="enquiry-form-grid">
                  {error && <div className="enquiry-error">{error}</div>}

                  {/* Course — full row */}
                  <div className="enquiry-full-row">
                    <label htmlFor="enq-course" className="enquiry-label">
                      Course *
                    </label>
                    <select
                      id="enq-course"
                      className={`enquiry-select${course ? ' has-value' : ''}`}
                      value={course}
                      onChange={(e) => setCourse(e.target.value)}
                      required
                    >
                      <option value="">—Please choose an option—</option>
                      {courseOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Full Name */}
                  <div>
                    <label htmlFor="enq-name" className="enquiry-label">
                      Full Name *
                    </label>
                    <input
                      id="enq-name"
                      type="text"
                      className="enquiry-input"
                      placeholder="Your Name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="enq-email" className="enquiry-label">
                      Email *
                    </label>
                    <input
                      id="enq-email"
                      type="email"
                      className="enquiry-input"
                      placeholder="Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  {/* Mobile */}
                  <div>
                    <label htmlFor="enq-mobile" className="enquiry-label">
                      Mobile *
                    </label>
                    <input
                      id="enq-mobile"
                      type="tel"
                      className="enquiry-input"
                      placeholder="e.g. 9841002000"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      required
                    />
                  </div>

                  {/* Address */}
                  <div>
                    <label htmlFor="enq-address" className="enquiry-label">
                      Address *
                    </label>
                    <input
                      id="enq-address"
                      type="text"
                      className="enquiry-input"
                      placeholder="Your Address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      required
                    />
                  </div>

                  {/* Other Course */}
                  <div>
                    <label htmlFor="enq-other" className="enquiry-label">
                      Other Course
                    </label>
                    <input
                      id="enq-other"
                      type="text"
                      className="enquiry-input"
                      placeholder="Mention the course name"
                      value={otherCourse}
                      onChange={(e) => setOtherCourse(e.target.value)}
                    />
                  </div>

                  {/* Academic Level */}
                  <div>
                    <label htmlFor="enq-academic" className="enquiry-label">
                      Academic Level *
                    </label>
                    <select
                      id="enq-academic"
                      className={`enquiry-select${academicLevel ? ' has-value' : ''}`}
                      value={academicLevel}
                      onChange={(e) => setAcademicLevel(e.target.value)}
                      required
                    >
                      <option value="">—Please choose an option—</option>
                      {academicOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Submit — left-aligned, full row */}
                  <div className="enquiry-full-row">
                    <button
                      type="submit"
                      disabled={loading}
                      className="enquiry-submit-btn"
                    >
                      {loading ? (
                        <>
                          <Loader2 size={16} className="spin" /> Submitting...
                        </>
                      ) : (
                        'Submit'
                      )}
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
