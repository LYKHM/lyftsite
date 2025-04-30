import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <div className='bg-white-900'>
      <div className='max-w-screen-xl mx-auto px-5'>
        <div className='flex items-center justify-between py-4'>
          <a href='/'>
            <img src="/thelogo.png" alt="logo" className='w-10 h-10' />
          </a>
          <div className='flex-grow flex justify-center space-x-6'>
            <Link to="/terms" className="hover:text-gray-300">Terms of Service</Link>
            <Link to="/policy" className="hover:text-gray-300">Privacy Policy</Link>
          </div>
        </div>
      </div>

      <div className='max-w-screen-xl mx-auto px-5 '>
      <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <main className='place-items-center py-4 md:py-12'>
          <h1 className='text-5xl mb-8 font-bold'>Terms and Conditions</h1>
          <p>Last updated: Mars 27, 2025</p>

          <h2 className="text-2xl mt-6 font-semibold">Interpretation and Definitions</h2>
          <p className="mt-4">
            The words of which the initial letter is capitalized have meanings defined under the following conditions. 
            The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
          </p>

          <h3 className="text-xl mt-4 font-semibold">Definitions</h3>
          <p>For the purposes of these Terms and Conditions:</p>
          <ul className="list-disc ml-6 mt-2">
            <li><strong>Affiliate</strong>: An entity that controls, is controlled by, or is under common control with a party.</li>
            <li><strong>Country</strong>: Refers to Arboga, Sweden.</li>
            <li><strong>Company</strong>: Refers to Lyft Developments, located at Österled 16B, Arboga, 731 46, Sweden.</li>
            <li><strong>Service</strong>: Refers to the Website (Lyft One AI, accessible from lyftoneai.app).</li>
            <li><strong>Device </strong>: Means any device that can access the Service such as a computer, a cellphone or a digital tablet.</li>
            <li><strong>Third-party Social Media Service</strong>: Means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.</li>
            <li><strong>Website</strong>:  refers to Lyft One AI, accessible from lyftoneai.app</li>
            <li><strong>You</strong>: The individual accessing or using the Service.</li>
          </ul>

          <h2 className="text-2xl mt-6 font-semibold">Acknowledgment</h2>
          <p className="mt-4">
          These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
          Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.
          By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.
          You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.
          Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service. 
          </p>

          <h2 className="text-2xl mt-6 font-semibold">Free Trial and Subscription</h2>
          <p className="mt-4">
          Free Trial: Upon creating an account, you will be granted a 3-day free trial. The free trial starts immediately after registration and the paywall.
          Subscription: After the free trial ends, you will be required to start paying a subscription. The subscription fees will be charged on a monthly basis.
          </p>  

          <h2 className="text-2xl mt-6 font-semibold">Refund Policy</h2>
          <p className="mt-4">
          Free Trial: Upon creating an account, you will be granted a 3-day free trial. The free trial starts immediately after registration and the paywall.
          Subscription: After the free trial ends, you will be required to start paying a subscription. The subscription fees will be charged on a monthly basis.
          </p>

          <h2 className="text-2xl mt-6 font-semibold">Links to Other Websites</h2>
          <p className="mt-4">
            Our Service may contain links to third-party websites or services that are not owned or controlled by the Company.
            The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services.
            You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to
            be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services. 
            We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit. 
          </p>

          <h2 className="text-2xl mt-6 font-semibold">Termination</h2>
          <p className="mt-4">
            We may terminate or suspend Your access immediately, without prior notice or liability, for any reason, including if You breach these Terms.
            Upon termination, Your right to use the Service will cease immediately.
          </p>

          <h2 className="text-2xl mt-6 font-semibold">Limitation of Liability</h2>
          <p className="mt-4">
          Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service.
          To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose. 
          Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party's liability will be limited to the greatest extent permitted by law. 
          </p>

          <h2 className="text-2xl mt-6 font-semibold">"AS IS" and "AS AVAILABLE" Disclaimer</h2>
          <p className="mt-4">
          The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.
          Without limiting the foregoing, neither the Company nor any of the company's provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components. 
          Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law. 
          </p>

          <h2 className="text-2xl mt-6 font-semibold">Governing Law</h2>
          <p className="mt-4">
          The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws. 
          </p>

          <h2 className="text-2xl mt-6 font-semibold">Disputes Resolution</h2>
          <p className="mt-4">
          If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.
          </p>

          <h2 className="text-2xl mt-6 font-semibold">For European Union (EU) Users</h2>
          <p className="mt-4">
          If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which You are resident. 
          </p>

          <h2 className="text-2xl mt-6 font-semibold">United States Legal Compliance</h2>
          <p className="mt-4">
          You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, or that has been designated by the United States government as a "terrorist supporting" country, and (ii) You are not listed on any United States government list of prohibited or restricted parties. 
          </p>

          <h2 className="text-2xl mt-6 font-semibold">Severability and Waiver</h2>

          <h3 className="text-2xl mt-6 font-semibold">Severability</h3>
          <p className="mt-4">
          If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.
          </p>

          <h3 className="text-2xl mt-6 font-semibold">Waiver</h3>
          <p className="mt-4">
          Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not affect a party's ability to exercise such right or require such performance at any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach.
          </p>

          <h2 className="text-2xl mt-6 font-semibold">Translation Interpretation</h2>
          <p className="mt-4">
          These Terms and Conditions may have been translated if We have made them available to You on our Service. You agree that the original English text shall prevail in the case of a dispute. 
          </p>

          <h2 className="text-2xl mt-6 font-semibold">Changes to These Terms and Conditions</h2>
          <p className="mt-4">
          We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.
          By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service.  
          </p>

          <h2 className="text-2xl mt-6 font-semibold">Contact Us</h2>
          <p className="mt-4">If you have any questions about these Terms and Conditions, You can contact us at: <a href="mailto:lyftoneai@gmail.com" className="text-blue-600">lyftoneai@gmail.com</a></p>
        </main>

        <p className='text-center text-xs text-slate-500 mt-1 mb-2'>Made with Love ❤️</p>
      </div>
      </div>
    </div>
  );
}

export default Terms;