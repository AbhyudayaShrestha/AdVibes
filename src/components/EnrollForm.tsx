'use client';

import React, { useState } from 'react';
import { Loader2, Check } from 'lucide-react';

const coursesOptions = [
  { value: 'digital-marketing-training', label: 'Digital Marketing Training' },
  { value: 'ai-marketing-training', label: 'AI in Marketing Training' },
  { value: 'workshops-certifications', label: 'Workshops & Certifications' },
  { value: 'meta-ads-scale-blueprint', label: 'Meta Ads Scale Blueprint' }
];

const academicOptions = [
  { value: 'high-school', label: 'High School' },
  { value: 'undergraduate', label: 'Undergraduate' },
  { value: 'graduate', label: 'Graduate' },
  { value: 'postgraduate', label: 'Postgraduate' },
  { value: 'professional', label: 'Professional / Working' },
  { value: 'other', label: 'Other' }
];

interface EnrollFormProps {
  initialCourseSlug?: string;
}

export default function EnrollForm({ initialCourseSlug = '' }: EnrollFormProps) {
  const [course, setCourse] = useState(initialCourseSlug);
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

    try {
      // Mock submit latency
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSuccess(true);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    const selectedCourseLabel = coursesOptions.find(c => c.value === course)?.label || course;
    return (
      <div className="enroll-success-container">
        <div className="success-icon-badge">
          <Check size={32} />
        </div>
        <h3>Enquiry Submitted!</h3>
        <p>
          Thank you, <strong>{fullName}</strong>. Your application/enquiry for the <strong>{selectedCourseLabel}</strong> has been received successfully.
        </p>
        <p className="success-subtext">
          A representative will reach out to you at <strong>{mobile}</strong> or via email (<strong>{email}</strong>) shortly.
        </p>
        <button 
          className="btn btn-outline" 
          onClick={() => {
            setSuccess(false);
            setFullName('');
            setEmail('');
            setMobile('');
            setAddress('');
            setOtherCourse('');
            setAcademicLevel('');
          }}
          style={{ width: '100%', marginTop: '1.5rem', border: '2px solid var(--secondary)', color: 'var(--secondary)' }}
        >
          Submit Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <div className="enroll-form-card">
      <h3 className="enroll-form-title">SEND US YOUR ENQUIRY</h3>
      
      <form onSubmit={handleSubmit} className="enroll-form-element">
        {error && <div className="enroll-form-error">{error}</div>}
        
        <div className="form-group">
          <label htmlFor="course-select">Course *</label>
          <select
            id="course-select"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            required
            className="form-control"
          >
            <option value="">—Please choose an option—</option>
            {coursesOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="full-name">Full Name *</label>
          <input
            type="text"
            id="full-name"
            placeholder="Your Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="mobile">Mobile *</label>
          <input
            type="tel"
            id="mobile"
            placeholder="e.g. 9841002000"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address *</label>
          <input
            type="text"
            id="address"
            placeholder="Your Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="other-course">Other Course</label>
          <input
            type="text"
            id="other-course"
            placeholder="Mention the course name"
            value={otherCourse}
            onChange={(e) => setOtherCourse(e.target.value)}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="academic-level">Academic Level *</label>
          <select
            id="academic-level"
            value={academicLevel}
            onChange={(e) => setAcademicLevel(e.target.value)}
            required
            className="form-control"
          >
            <option value="">—Please choose an option—</option>
            {academicOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="enroll-submit-btn"
        >
          {loading ? (
            <>
              <Loader2 className="spinner" size={18} /> Submitting...
            </>
          ) : (
            'Submit'
          )}
        </button>
      </form>
    </div>
  );
}
