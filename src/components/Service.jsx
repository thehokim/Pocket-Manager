import React from 'react';

const Service = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center">Terms & Conditions</h1>

      <p className="mb-4">
        These terms and conditions apply to the <strong>Pocket Manager: Budget Tracker</strong> app (hereinafter referred to as "Application") for mobile devices created by <strong>hrhelperg s.r.o.</strong> ("Service Provider") as a Commercial service.
      </p>

      <p className="mb-4">
        By downloading or using the Application, you agree to these terms. Please read them carefully before use. Unauthorized copying, modifying, translating, reverse engineering, or creating derivatives of the Application or its components is prohibited. All intellectual property remains with the Service Provider.
      </p>

      <p className="mb-4">
        The Service Provider may modify the Application or its services at any time. You will be notified of any charges or major changes clearly.
      </p>

      <p className="mb-4">
        The Application may store personal data. You are responsible for your phone’s security. Jailbreaking or rooting is strongly discouraged as it compromises security and may affect the app’s functionality.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Third-Party Services</h2>
      <p className="mb-2">This Application uses third-party services, each of which has its own Terms and Conditions. See below:</p>

      <ul className="list-disc list-inside mb-4 columns-2 text-sm gap-4">
        <li className='hover:underline hover:text-blue-500'><a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">Google Play Services</a></li>
        <li className='hover:underline hover:text-blue-500'><a href="https://support.google.com/admob/answer/6128543?hl=en" target="_blank" rel="noopener noreferrer">AdMob</a></li>
        <li className='hover:underline hover:text-blue-500'><a href="https://firebase.google.com/terms" target="_blank" rel="noopener noreferrer">Google Analytics for Firebase</a></li>
        <li className='hover:underline hover:text-blue-500'><a href="https://firebase.google.com/terms/crashlytics" target="_blank" rel="noopener noreferrer">Firebase Crashlytics</a></li>
        <li className='hover:underline hover:text-blue-500'><a href="https://www.facebook.com/terms.php" target="_blank" rel="noopener noreferrer">Facebook</a></li>
        <li className='hover:underline hover:text-blue-500'><a href="https://fabric.io/terms" target="_blank" rel="noopener noreferrer">Fabric</a></li>
        <li className='hover:underline hover:text-blue-500'><a href="https://matomo.org/terms/" target="_blank" rel="noopener noreferrer">Matomo</a></li>
        <li className='hover:underline hover:text-blue-500'><a href="https://clicky.com/terms" target="_blank" rel="noopener noreferrer">Clicky</a></li>
        <li className='hover:underline hover:text-blue-500'><a href="https://developer.yahoo.com/flurry/legal-privacy/terms.html" target="_blank" rel="noopener noreferrer">Flurry Analytics</a></li>
        <li className='hover:underline hover:text-blue-500'><a href="https://www.appodeal.com/home/terms-of-service/" target="_blank" rel="noopener noreferrer">Appodeal</a></li>
        <li className='hover:underline hover:text-blue-500'><a href="https://usefathom.com/terms" target="_blank" rel="noopener noreferrer">Fathom Analytics</a></li>
        <li className='hover:underline hover:text-blue-500'><a href="https://unity.com/legal/terms-of-service" target="_blank" rel="noopener noreferrer">Unity</a></li>
        <li className='hover:underline hover:text-blue-500'><a href="https://sdkbox.com/terms" target="_blank" rel="noopener noreferrer">SDKBOX</a></li>
        <li className='hover:underline hover:text-blue-500'><a href="https://gameanalytics.com/terms" target="_blank" rel="noopener noreferrer">GameAnalytics</a></li>
        <li className='hover:underline hover:text-blue-500'><a href="https://onesignal.com/tos" target="_blank" rel="noopener noreferrer">One Signal</a></li>
        <li className='hover:underline hover:text-blue-500'><a href="https://expo.dev/terms" target="_blank" rel="noopener noreferrer">Expo</a></li>
        <li className='hover:underline hover:text-blue-500'><a href="https://sentry.io/terms/" target="_blank" rel="noopener noreferrer">Sentry</a></li>
        <li className='hover:underline hover:text-blue-500'><a href="https://www.applovin.com/terms/" target="_blank" rel="noopener noreferrer">AppLovin</a></li>
        <li className='hover:underline hover:text-blue-500'><a href="https://www.start.io/policy/terms-of-service/" target="_blank" rel="noopener noreferrer">StartApp</a></li>
        <li className='hover:underline hover:text-blue-500'><a href="https://amplitude.com/terms" target="_blank" rel="noopener noreferrer">Amplitude</a></li>
        <li className='hover:underline hover:text-blue-500'><a href="https://www.adjust.com/terms/" target="_blank" rel="noopener noreferrer">Adjust</a></li>
        <li className='hover:underline hover:text-blue-500'><a href="https://www.mapbox.com/legal/tos" target="_blank" rel="noopener noreferrer">Mapbox</a></li>
        <li className='hover:underline hover:text-blue-500'><a href="https://godotengine.org/license" target="_blank" rel="noopener noreferrer">Godot</a></li>
        <li className='hover:underline hover:text-blue-500'><a href="https://segment.com/legal/terms/" target="_blank" rel="noopener noreferrer">Segment</a></li>
        <li className='hover:underline hover:text-blue-500'><a href="https://mixpanel.com/legal/terms-of-use/" target="_blank" rel="noopener noreferrer">Mixpanel</a></li>
        <li className='hover:underline hover:text-blue-500'><a href="https://www.revenuecat.com/terms" target="_blank" rel="noopener noreferrer">RevenueCat</a></li>
        <li className='hover:underline hover:text-blue-500'><a href="https://clerk.dev/legal/terms" target="_blank" rel="noopener noreferrer">Clerk</a></li>
        <li className='hover:underline hover:text-blue-500'><a href="https://docs.adapty.io/docs/terms-of-use" target="_blank" rel="noopener noreferrer">Adapty</a></li>
        <li className='hover:underline hover:text-blue-500'><a href="https://configcat.com/terms/" target="_blank" rel="noopener noreferrer">ConfigCat</a></li>
        <li className='hover:underline hover:text-blue-500'><a href="https://www.instabug.com/terms" target="_blank" rel="noopener noreferrer">Instabug</a></li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">Limitations of Liability</h2>
      <p className="mb-4">
        Some features require an internet connection. The Service Provider is not liable if the app doesn’t function fully due to connectivity or data limitations.
      </p>
      <p className="mb-4">
        The Service Provider is also not responsible for any mobile data costs, roaming charges, or permissions issues related to billing if the device is not yours.
      </p>
      <p className="mb-4">
        It’s your responsibility to keep your device charged and updated. The Service Provider is not responsible if the app fails due to a dead battery or unsupported OS.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">App Updates and Termination</h2>
      <p className="mb-4">
        The Service Provider may update or discontinue the app at any time. Updates may be required to continue use. Termination ends your rights to use the app, and you must delete it from your device.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Changes to These Terms</h2>
      <p className="mb-4">
        Terms may be updated periodically. Please check this page for changes. Continued use signifies your acceptance.
      </p>

      <p className="italic mb-4">Effective Date: March 20, 2025</p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Contact Us</h2>
      <p>
        If you have any questions about these Terms and Conditions, please contact: <a href="mailto:info@hrhelperg.com" className="text-blue-600 underline">info@hrhelperg.com</a>
      </p>

      <p className="text-sm text-gray-500 mt-6">This Terms and Conditions page was generated by App Privacy Policy Generator</p>
    </div>
  );
};

export default Service;
