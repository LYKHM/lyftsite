import React from 'react'
import { Link } from 'react-router-dom';

const Policy = () => {
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
            <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-gray-600 mb-4">Last updated: Mars 27, 2025</p>
            
            <p className="mb-4">
                This Privacy Policy describes Our policies and procedures on the collection, use, and disclosure of Your
                information when You use the Service and tells You about Your privacy rights and how the law protects You.
            </p>

            <p className="mb-4">
                We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection
                and use of information in accordance with this Privacy Policy.
            </p>

            <h2 className="text-2xl font-semibold mt-6">Interpretation and Definitions</h2>
            <h3 className="text-xl font-semibold mt-4">Interpretation</h3>
            <p className="mb-4">
                The words of which the initial letter is capitalized have meanings defined under the following conditions. The
                following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
            </p>

            <h3 className="text-xl font-semibold mt-4">Definitions</h3>
            <p className="mb-4"><strong>Account:</strong> A unique account created for You to access our Service.</p>
            <p className="mb-4"><strong>Affiliate:</strong> An entity that controls, is controlled by, or is under common control with a party.</p>
            <p className="mb-4"><strong>Company:</strong> Refers to Lyft Developments, Österled 16B, Arboga, 731 46, Sweden.</p>
            <p className="mb-4"><strong>Cookies:</strong> Small files placed on Your computer to store browsing history and preferences.</p>
            <p className="mb-4"><strong>Country:</strong> Refers to Arboga, Sweden.</p>
            <p className="mb-4"><strong>Device:</strong> Any device that can access the Service.</p>
            <p className="mb-4"><strong>Personal Data:</strong> Any information that relates to an identified or identifiable individual.</p>
            <p className="mb-4"><strong>Service:</strong> Refers to the Website.</p>
            <p className="mb-4"><strong>Website:</strong> Refers to Lyft One AI, accessible from lyftoneai.app.</p>
            <p className="mb-4"><strong>You:</strong> The individual accessing or using the Service.</p>

            <h2 className="text-2xl font-semibold mt-6">Collecting and Using Your Personal Data</h2>
            <h3 className="text-xl font-semibold mt-4">Types of Data Collected</h3>
            <p className="mb-4"><strong>Personal Data:</strong> While using Our Service, We may ask You to provide Us with certain personally
                identifiable information, including:</p>
            <ul className="list-disc list-inside mb-4">
                <li>Email address</li>
                <li>First name and last name</li>
                <li>Phone number</li>
                <li>Images</li>
                <li>Usage Data</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-4">Usage Data</h3>
            <p className="mb-4">Usage Data is collected automatically and may include information such as your device's IP address, browser type,
                pages visited, and other diagnostic data.</p>
            
            <h3 className="text-xl font-semibold mt-4">Tracking Technologies and Cookies</h3>
            <p className="mb-4">We use Cookies and similar tracking technologies to track activity and store certain information.</p>
            <ul className="list-disc list-inside mb-4">
                <li><strong>Cookies or Browser Cookies:</strong> A small file placed on Your Device.</li>
                <li><strong>Web Beacons:</strong> Small electronic files used for statistics and tracking.</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-4">Use of Your Personal Data</h3>
            <p className="mb-4">The Company may use Personal Data for purposes such as providing and maintaining the Service, managing Your Account,
                and contacting You for updates.</p>
            
            <h3 className="text-xl font-semibold mt-4">Retention of Your Personal Data</h3>
            <p className="mb-4">We retain Your Personal Data only as long as necessary for the purposes set out in this Privacy Policy.</p>
            
            <h3 className="text-xl font-semibold mt-4">Security of Your Personal Data</h3>
            <p className="mb-4">We strive to use commercially acceptable means to protect Your Personal Data but cannot guarantee its absolute security.</p>
            
            <h3 className="text-xl font-semibold mt-4">Why We Collect Data</h3>
            <p className="mb-4">The data is collected to provide core app functionalities such as food recognition and tracking. Your email will be used for account creation.</p>
            
            <h3 className="text-xl font-semibold mt-4">Data Deletion</h3>
            <p className="mb-4">If you wish to delete your collected data you need to contact us at: lyftone@gmail.com</p>
            

            <h3 className="text-xl font-semibold mt-4">Third-party</h3>
            <p className="mb-4">Our app integrates serveral third-party services to provide authentication, data storage, and enhanced functionality. By using out app, you concent to the collection and use of your data as described below.</p>

            <p className="mb-4">
            We use Clerk to manage user accounts, which collects your email address, name, and other necessary information for authentication.
            Supabase is used to store and manage user data required for our app's services.
            The Expo SDK may collect usage analytics and telemetry data to help us improve the app.
            If you grant permission, modules such as expo-camera allow the app to capture images for features within the app.</p>
            
            <h3 className="text-xl font-semibold mt-4">Data Sharing</h3>
            <p className="mb-4">We do not sell your data. However, your data may be processed by our third-party service providers as outlined in their respective privacy policies:</p>
            <p className="mb-4">https://clerk.dev/privacy</p>
            <p className="mb-4">https://supabase.com/privacy</p>

            <h3 className="text-xl font-semibold mt-4">Children’s Privacy</h3>
            <p className="mb-4">Our Service does not address anyone under the age of 13. If we discover Personal Data from children under 13, we remove it.</p>
            
            <h3 className="text-xl font-semibold mt-4">Changes to this Privacy Policy</h3>
            <p className="mb-4">We may update Our Privacy Policy from time to time. Changes will be posted on this page.</p>
            
            <h3 className="text-xl font-semibold mt-4">Contact Us</h3>
            <p className="mb-4">If you have any questions about this Privacy Policy, you can contact us by email: <a href="mailto:lyftoneai@gmail.com" className="text-blue-500">lyftoneai@gmai.com</a></p>
            </div>
          <p className='text-center text-xs text-slate-500 mt-1 mb-2'>Made with Love ❤️</p>
        </div>
      </div>
  )
}

export default Policy