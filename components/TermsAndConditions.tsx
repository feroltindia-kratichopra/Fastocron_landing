export default function TermsAndConditions() {
    return (
      <section className="bg-white text-gray-800 px-6 py-16 mt-10">
        <div className="max-w-4xl mx-auto">
  
          {/* Header */}
          <h1 className="text-4xl font-bold text-gray-900">
            Terms & Conditions
          </h1>
  
          <p className="mt-3 text-sm text-gray-500">
            Effective Date: [Insert Date] <br />
            Last Updated: [Insert Date]
          </p>
  
          <p className="mt-6 text-gray-600 leading-relaxed">
            These Terms and Conditions ("Terms") govern your access to and use of{" "}
            <span className="font-semibold text-blue-600">Fastocron</span> ("Service").
            By using the Service, you agree to be bound by these Terms.
          </p>
  
          {/* Sections */}
          <div className="mt-10 space-y-10">
  
            <Section title="1. Eligibility">
              <p>You must be at least 18 years old and capable of entering into a legally binding agreement.</p>
            </Section>
  
            <Section title="2. Account Registration">
              <ul className="list-disc pl-5 space-y-1">
                <li>Provide accurate and complete information</li>
                <li>Maintain confidentiality of credentials</li>
                <li>Responsible for all account activity</li>
              </ul>
              <p className="mt-2">We may suspend accounts that violate these terms.</p>
            </Section>
  
            <Section title="3. Use of the Service">
              <p>You agree to use the Service only for lawful purposes.</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>No illegal or fraudulent use</li>
                <li>No unauthorized system access</li>
                <li>No disruption of services</li>
                <li>No reverse engineering</li>
              </ul>
            </Section>
  
            <Section title="4. Customer Data">
              <p>You retain full ownership of your data.</p>
              <p>We process it only to provide the Service.</p>
              <ul className="list-disc pl-5 mt-2">
                <li>You must have rights to use the data</li>
                <li>You must comply with data laws</li>
              </ul>
            </Section>
  
            <Section title="5. AI-Generated Outputs">
              <p>Outputs may not always be accurate or complete.</p>
              <p className="text-blue-600 font-medium">
                You are responsible for verifying results before use.
              </p>
            </Section>
  
            <Section title="6. Intellectual Property">
              <p>All platform rights belong to the Company.</p>
              <p>You may not copy, modify, or distribute without permission.</p>
            </Section>
  
            <Section title="7. Service Availability">
              <ul className="list-disc pl-5">
                <li>Service may not always be uninterrupted</li>
                <li>We may update or remove features</li>
                <li>Maintenance may occur</li>
              </ul>
            </Section>
  
            <Section title="8. Fees and Payments">
              <ul className="list-disc pl-5">
                <li>Fees will be clearly communicated</li>
                <li>Payments are non-refundable unless stated</li>
                <li>Non-payment may result in suspension</li>
              </ul>
            </Section>
  
            <Section title="9. Termination">
              <p>We may suspend access for:</p>
              <ul className="list-disc pl-5">
                <li>Violation of terms</li>
                <li>Security risks</li>
              </ul>
              <p>You may stop using the Service anytime.</p>
            </Section>
  
            <Section title="10. Limitation of Liability">
              <ul className="list-disc pl-5">
                <li>Service provided "as is"</li>
                <li>No liability for indirect damages</li>
                <li>Liability limited to amount paid</li>
              </ul>
            </Section>
  
            <Section title="11. Indemnification">
              <p>You agree to indemnify the Company against claims arising from:</p>
              <ul className="list-disc pl-5">
                <li>Your use of the Service</li>
                <li>Violation of Terms</li>
                <li>Misuse of data</li>
              </ul>
            </Section>
  
            <Section title="12. Data Privacy">
              <p>Your use is also governed by our Privacy Policy.</p>
            </Section>
  
            <Section title="13. Third-Party Services">
              <p>We are not responsible for third-party platforms or policies.</p>
            </Section>
  
            <Section title="14. Changes to Terms">
              <p>We may update these Terms anytime.</p>
              <p>Continued use means acceptance of changes.</p>
            </Section>
  
            <Section title="15. Governing Law">
              <p>These Terms are governed by the laws of India.</p>
            </Section>
  
            <Section title="16. Contact Information">
              <p>Email: [Insert Email]</p>
              <p>Address: [Insert Address]</p>
            </Section>
  
          </div>
        </div>
      </section>
    );
  }
  

  type SectionProps = {
    title: string;
    children: React.ReactNode;
  };
  
  function Section({ title, children }: SectionProps) {
    return (
      <div>
        <h3 className="text-xl font-semibold text-gray-900 border-l-4 border-blue-600 pl-3">
          {title}
        </h3>
        <div className="mt-3 text-gray-600 leading-relaxed space-y-2">
          {children}
        </div>
      </div>
    );
  }