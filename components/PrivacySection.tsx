export default function PrivacyPolicy() {
    return (
      <section className="bg-white text-gray-800 px-6 py-16 mt-10">
        <div className="max-w-4xl mx-auto">
  
          {/* Header */}
          <h1 className="text-4xl font-bold text-gray-900">
            Privacy Policy
          </h1>
  
          <p className="mt-3 text-sm text-gray-500">
            Effective Date: [Insert Date] <br />
            Last Updated: [Insert Date]
          </p>
  
          <p className="mt-6 text-gray-600 leading-relaxed">
            This Privacy Policy ("Policy") is a legally binding document between you ("User", "Customer", "you")
            and <span className="font-semibold text-blue-600">Fastocron</span> ("Company", "we", "our", "us"),
            governing the collection, use, processing, storage, and protection of personal data and business data.
          </p>
  
          {/* Section */}
          <div className="mt-10 space-y-10">
  
            {/* Scope */}
            <Section title="1. Scope">
              <ul className="list-disc pl-5 space-y-1">
                <li>Users of the Fastocron platform</li>
                <li>Customer data processed through integrations</li>
                <li>Visitors to our website</li>
              </ul>
            </Section>
  
            {/* Definitions */}
            <Section title="2. Definitions">
              <p><b>Personal Data:</b> Information that identifies an individual</p>
              <p><b>Customer Data:</b> Business data from integrations</p>
              <p><b>Processing:</b> Any operation on data</p>
              <p><b>LLM:</b> AI models used for query interpretation</p>
            </Section>
  
            {/* Architecture */}
            <Section title="3. Core Privacy Architecture">
              <ul className="list-disc pl-5 space-y-1">
                <li>Raw customer data is not sent to AI models</li>
                <li>Processing occurs at query level</li>
                <li>Only filtered results may be used by AI</li>
              </ul>
            </Section>
  
            {/* Data Collected */}
            <Section title="4. Data Collected">
              <h4 className="font-semibold text-gray-900">Personal Data</h4>
              <ul className="list-disc pl-5">
                <li>Name, Email, Organization</li>
                <li>Secure account credentials</li>
              </ul>
  
              <h4 className="mt-4 font-semibold text-gray-900">Usage Data</h4>
              <ul className="list-disc pl-5">
                <li>Queries and logs</li>
                <li>Device and IP metadata</li>
              </ul>
  
              <h4 className="mt-4 font-semibold text-gray-900">Customer Data</h4>
              <p>Processed only on user instructions. No ownership claimed.</p>
            </Section>
  
            {/* Legal Basis */}
            <Section title="5. Legal Basis">
              <ul className="list-disc pl-5">
                <li>Contract performance</li>
                <li>Legitimate interests</li>
                <li>Legal compliance</li>
                <li>User consent</li>
              </ul>
            </Section>
  
            {/* Purpose */}
            <Section title="6. Purpose of Processing">
              <ul className="list-disc pl-5">
                <li>Platform functionality</li>
                <li>Analytics and dashboards</li>
                <li>Security and fraud prevention</li>
                <li>Product improvement</li>
              </ul>
            </Section>
  
            {/* AI */}
            <Section title="7. AI Processing">
              <p>AI is used for query interpretation, SQL generation, and summarization.</p>
              <p className="mt-2 text-blue-600 font-medium">
                Only minimal, necessary data is processed.
              </p>
            </Section>
  
            {/* Storage */}
            <Section title="8. Data Storage & Retention">
              <p>We store logs, metadata, and configurations.</p>
              <p>Data is retained only as long as necessary and can be deleted on request.</p>
            </Section>
  
            {/* Security */}
            <Section title="9. Data Security">
              <ul className="list-disc pl-5">
                <li>Encryption (TLS)</li>
                <li>Role-based access control</li>
                <li>Audit logs and monitoring</li>
              </ul>
            </Section>
  
            {/* Sharing */}
            <Section title="10. Data Sharing">
              <p>We do not sell data.</p>
              <ul className="list-disc pl-5">
                <li>Trusted service providers</li>
                <li>Legal obligations</li>
              </ul>
            </Section>
  
            {/* Rights */}
            <Section title="11. User Rights">
              <ul className="list-disc pl-5">
                <li>Access and correction</li>
                <li>Deletion requests</li>
                <li>Data portability</li>
                <li>Withdraw consent</li>
              </ul>
            </Section>
  
            {/* Cookies */}
            <Section title="12. Cookies">
              <p>Used only for authentication and analytics. No advertising tracking.</p>
            </Section>
  
            {/* Children */}
            <Section title="13. Children's Privacy">
              <p>Not intended for users under 18.</p>
            </Section>
  
            {/* Changes */}
            <Section title="14. Changes">
              <p>We may update this policy and notify users accordingly.</p>
            </Section>
  
            {/* Law */}
            <Section title="15. Governing Law">
              <p>Governed by the laws of India.</p>
            </Section>
  
            {/* Contact */}
            <Section title="16. Contact">
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

  function Section({ title, children }:SectionProps) {
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