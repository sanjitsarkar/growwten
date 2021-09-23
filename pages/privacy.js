import Footer from "../components/Footer";
import Header from "../components/Header";
import { useRouter } from "next/dist/client/router";
import { useContext, useEffect } from "react";
import { AuthContext } from "../lib/store/AuthStore";
const privacy = () => {
  const { loading, user, userInfo } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!loading && user && userInfo) {
      router.push("/");
    }
  }, [userInfo, user, loading]);
  return (
    <>
      <Header />
      <main className="mt-20 p-10 leading-relaxed ">
        <h1 className="text-xl font-semibold text-textDark">PRIVACY POLICY</h1>
        <h2 className="text-lg font-medium text-textDark mt-4 mb-1">
          1. INTRODUCTION{" "}
        </h2>
        <p className="font-normal text-gray-900 text-opacity-95 mt-3">
          In this policy, we, us, our and GrowwTen refer to GrowwTen.For more
          information about us and how to contact us, see all the section.
          <br />
          <br /> We respect your privacy and are committed to protecting it
          through our compliance with this Policy.
          <br />
          <br /> This privacy policy (Policy) applies when we are acting as a
          data controller with respect to the personal data of our users. This
          Policy describes how we collect, use and share personal data of
          consumer users across our websites, including www.growwten.com (the
          Website), GrowwTen's mobile and desktop application (the App) and
          services offered to users (collectively with the Website and the App,
          the Services), and from our partners and other third parties. When
          using any of our Services you consent to the collection, transfer,
          storage, disclosure, and use of your personal data as described in
          this Policy. This Policy does not apply to anonymised data, as it
          cannot be used to identify you. <br />
          <br />
          Please read this Policy carefully to understand our policies and
          practices regarding your personal data and how we will treat it. By
          accessing or using the Services, you agree to this Policy. Our
          Services also incorporate privacy controls which affect how we will
          process your personal data. Please refer to Section 5 for a list of
          rights with regard to your personal data and how to exercise them.
          <br />
          <br />
          This Policy may change from time to time. Your continued use of the
          Services after we make changes is deemed to be acceptance of those
          changes, so please check the Policy periodically for updates.
        </p>
        <h2 className="text-lg font-medium text-textDark mt-4 mb-1">
          2.PERSONAL DATA WE COLLECT ABOUT YOU AND HOW WE COLLECT IT
        </h2>
        <p className="font-normal text-gray-900 text-opacity-95 mt-3">
          {" "}
          There are three general categories of personal data we collect.
        </p>
        <p className="font-normal text-gray-900 text-opacity-95 mt-3">
          <h2 className="text-lg font-medium text-textDark mt-4 mb-1">
            2.1 INFORMATION YOU GIVE TO US.
          </h2>
          (a) We collect your account data, which may include personal
          identification information such as your name, date of birth, age,
          nationality, gender, signature, utility bills, photographs, phone
          number, home address, and/or email address, and formal identification
          information such as Tax ID number, passport number, drivers license
          details, national identity card details, photograph identification
          cards, and/or visa information (collectively, Account Data). The
          Account Data may be processed for the purposes of providing to you our
          Services, satisfying anti-money laundering and know-your-customer
          obligations, and ensuring the security of the Services, maintaining
          back-ups of our databases and communicating with you. This information
          is necessary for the adequate performance of the contract between you
          and us and to allow us to comply with our legal obligations. Without
          it, we may not be able to provide you with all the requested Services.
          <br />
          <br />
          (b) We process financial information such as bank account, credit card
          or PayPal information when you order Services in order to facilitate
          the processing of payments (Payment Information). The legal basis for
          this processing is the performance of a contract between you and us
          and/or taking steps, at your request, to enter into such a contract
          and our legitimate interests, namely our interest in the proper
          administration of our website and business. <br />
          <br />
          (c) We may process information contained in or relating to any
          communication that you send to us (Correspondence Data). The
          Correspondence Data may include the communication content and metadata
          associated with the communication. The correspondence data may be
          processed for the purposes of communicating with you and
          record-keeping. The legal basis for this processing is our legitimate
          interests, namely the proper administration of our website and
          business and communications with users. <br />
          <br />
          (d) We may process information included in your personal profile,
          which may include your location, time zone and website (Profile Data).
          The Profile Data may be processed for the purposes of providing you a
          better user experience when using the Services. The legal basis for
          this processing is your consent.
        </p>
        <p className="font-normal text-gray-900 text-opacity-95 mt-3">
          <h2 className="text-lg font-medium text-textDark mt-4 mb-1">
            {" "}
            2.2 INFORMATION WE AUTOMATICALLY COLLECT FROM YOUR USE OF THE
          </h2>
          SERVICES. When you use the Services, we may automatically process
          information about your computer and internet connection (including
          your IP address, operating system and browser type), your mobile
          carrier, device information (including device and application IDs),
          search terms, cookie information, as well as information about the
          timing, frequency and pattern of your service use, and information
          about to the transactions you make on our Services, such as the name
          of the recipient, your name, the amount and type of cryptocurrency and
          timestamp (Service Data). The Service Data is processed for the
          purpose of providing our Services. The legal basis for this processing
          is the adequate performance of the contract between you and us, to
          enable us to comply with legal obligations and our legitimate interest
          in being able to provide and improve the functionalities of the
          Services.
        </p>
        <h2 className="text-lg font-medium text-textDark mt-4 mb-1">
          2.3 INFORMATION WE COLLECT FROM THIRD PARTIES.
        </h2>
        <p className="font-normal text-gray-900 text-opacity-95 mt-3">
          From time to time, we may obtain information about you from third
          party sources as required or permitted by applicable law, such as
          public databases, credit bureaus, ID verification partners, resellers
          and channel partners, joint marketing partners, and social media
          platforms. ID verification partners use a combination of government
          records and publicly available information about you to verify your
          identity. Such information includes your name, address, job role,
          public employment profile, credit history, status on any sanctions
          lists maintained by public authorities, and other relevant data. We
          obtain such information to comply with our legal obligations, such as
          anti-money laundering laws. The legal basis for the processing such
          data is compliance with legal obligations.
        </p>
        <h2 className="text-lg font-medium text-textDark mt-4 mb-1">
          3. DISCLOSURE OF PERSONAL DATA
        </h2>
        <p className="font-normal text-gray-900 text-opacity-95 mt-3">
          3.1 We may disclose your personal data to any member of our group of
          companies (this means our subsidiaries, our ultimate holding company
          and all its subsidiaries) insofar as reasonably necessary for the
          purposes, and on the legal bases, set out in this policy.
        </p>
        <p className="font-normal text-gray-900 text-opacity-95 mt-3">
          3.2 We may disclose Service Data to a variety of third party service
          providers insofar as reasonably necessary to improve the
          functionalities of the Services. For example, we may disclose Service
          Data to obtain useful analytics, provide in-app support to mobile app
          users, determine location data and provide search engine functionality
          to our users.
        </p>
        <p className="font-normal text-gray-900 text-opacity-95 mt-3">
          3.3 We may share aggregated data (information about our users that we
          combine together so that it no longer identifies or references an
          individual user) and other anonymized information for regulatory
          compliance, industry and market analysis, demographic profiling,
          marketing and advertising, and other business purposes.
        </p>
        <p className="font-normal text-gray-900 text-opacity-95 mt-3">
          3.4 In the event of a dispute in P2P transaction, we may disclose some
          of your Personal Data with the counterparty to such transaction to the
          extent we deem required, in our discretion, to resolve the dispute.
        </p>
        <p className="font-normal text-gray-900 text-opacity-95 mt-3">
          3.5 In addition to the specific disclosures of personal data set out
          in this Section 3, we may disclose your personal data if we believe
          that it is reasonably necessary to comply with a law, regulation,
          legal process, or governmental request; or in order to protect your
          vital interests or the vital interests of another natural person; to
          protect the safety or integrity of the Services, or to explain why we
          have removed content or accounts from the Services; or to address
          fraud, security, or technical issues; or to protect our rights or
          property or the rights or property of those who use the Services.
        </p>
        <p className="font-normal text-gray-900 text-opacity-95 mt-3">
          3.6 We offer individuals the opportunity to choose (opt out) whether
          their personal information is
          <br />
          (i) to be disclosed to a third party or
          <br />
          (ii) to be used for a purpose that is materially different from the
          purpose(s) for which it was originally collected or subsequently
          authorized by the individuals. In order to opt out from disclosure of
          your personal information, please write to us at growwten@gmail.com
        </p>
        <h2 className="text-lg font-medium text-textDark mt-4 mb-1">
          4. INTERNATIONAL TRANSFERS OF YOUR PERSONAL
        </h2>
        <p className="font-normal text-gray-900 text-opacity-95 mt-3">
          DATA To facilitate our operations we may transfer, store, and process
          your information within those countries or with service providers
          based in India. Laws in these countries may differ from the laws
          applicable to your Country of Residence. For example, information
          collected within the INDIA may be transferred, stored, and processed
          outside of the INDIA for the purposes described in this Privacy
          Policy. Where we transfer store, and process your personal information
          outside of the INDIA we have ensured that appropriate safeguards are
          in place to ensure an adequate level of data protection. Transfers to
          our affiliated entities, to our service providers and other third
          parties will be protected by appropriate safeguards, namely the use of
          standard data protection clauses adopted or approved by the Indian
          Commission or applicable certification schemes.
        </p>
        <h2 className="text-lg font-medium text-textDark mt-4 mb-1">
          5. YOUR RIGHTS WITH REGARD TO PERSONAL DATA
        </h2>
        <p className="font-normal text-gray-900 text-opacity-95 mt-3">
          In this Section 5, we have summarized the rights that you have under
          data protection law based on whether you are a INDIAN resident or you
          are not a resident of the INDIA(a Non- INDIAN Resident). Some of the
          rights are complex, and not all of the details have been included in
          our summaries. Accordingly, you should read the relevant laws and
          guidance from the regulatory authorities for a full explanation of
          these rights.
        </p>
        <h2 className="text-lg font-medium text-textDark mt-4 mb-1">
          5.1 Non-INDIAN Residents.
        </h2>
        <p className="font-normal text-gray-900 text-opacity-95 mt-3">
          If you are a Non- INDIAN Resident, you may access and verify your
          Personal Information held by GROWWTEN by submitting a written request
          to us at growwten@gmail.com
        </p>
        <h2 className="text-lg font-medium text-textDark mt-4 mb-1">
          5.2 Indian Residents.
        </h2>
        <p className="font-normal text-gray-900 text-opacity-95 mt-3">
          If you are a Indian Resident, your principal rights under data
          protection law are:
          <br /> (a) the right to access;
          <br /> (b) the right to rectification;
          <br />
          (c) the right to erasure;
          <br />
          (d) the right to restrict processing; <br />
          (e) the right to object to processing;
          <br /> (f) the right to data portability; <br />
          (g) the right to complain to a supervisory authority; and <br />
          (h)the right to withdraw consent.
        </p>
        <h2 className="text-lg font-medium text-textDark mt-4 mb-2">
          5.3 As a Indian Resident,
        </h2>
        <p className="font-normal text-gray-900 text-opacity-95 mt-3">
          you have the right to confirmation as to whether or not we process
          your personal data and, where we do, access to the personal data,
          together with certain additional information. That additional
          information includes details of the purposes of the processing, the
          categories of personal data concerned and the recipients of the
          personal data. Providing the rights and freedoms of others are not
          affected, we will supply to you a copy of your personal data. The
          first copy will be provided free of charge, but additional copies may
          be subject to a reasonable fee. You can access your personal data by
          writing to us at : growwten@gmail.com
          <h2 className="text-lg font-medium text-textDark mt-4 mb-1">
            5.4 As a Indian Resident,
          </h2>
          you have the right to have any inaccurate personal data about you
          rectified and, taking into account the purposes of the processing, to
          have any incomplete personal data about you completed. You can request
          correction or modification of your personal data by writing to us at :
          growwten@gmail.com
        </p>
        <h2 className="text-lg font-medium text-textDark mt-4 mb-1">
          6. RETAINING AND DELETING PERSONAL DATA
        </h2>
        <p className="font-normal text-gray-900 text-opacity-95 mt-3">
          6.1 This Section 6 sets out our data retention policies and procedure,
          which are designed to help ensure that we comply with our legal
          obligations in relation to the retention and deletion of personal
          data.
        </p>
        <p className="font-normal text-gray-900 text-opacity-95 mt-3">
          6.2 Personal data that we process for any purpose or purposes shall
          not be kept for longer than is necessary for that purpose or those
          purposes.
        </p>
        <p className="font-normal text-gray-900 text-opacity-95 mt-3">
          6.3 We generally retain your personal information for as long as is
          necessary for the performance of the contract between you and us and
          to comply with our legal obligations. If you no longer want us to use
          your information to provide the Services to you, you can request that
          we erase your personal information and close your account.
        </p>
        <p className="font-normal text-gray-900 text-opacity-95 mt-3">
          6.4 Notwithstanding the other provisions of this Section 6, we may
          retain your personal data where such retention is necessary for
          compliance with a legal obligation to which we are subject, or in
          order to protect your vital interests or the vital interests of
          another natural person.
        </p>
        <h2 className="text-lg font-medium text-textDark mt-4 mb-1">
          7. CHILDREN
        </h2>
        <p className="font-normal text-gray-900 text-opacity-95 mt-3">
          Our Services are not intended for children. You must also be old
          enough to consent to the processing of your personal data in your
          country without parental consent. No one under age 18 may provide any
          personal data through the Services. If you are under 18, do not use or
          provide any information through the Services or on or through any of
          their features or register an account, make any purchases through the
          Services, use any of the interactive features of the Services or
          provide any information about yourself to us, including your name,
          address, telephone number, e-mail address or any screen name or user
          name you may use.
        </p>
        <h2 className="text-lg font-medium text-textDark mt-4 mb-1">
          8. COOKIES
        </h2>
        <p className="font-normal text-gray-900 text-opacity-95 mt-3">
          8.1 About cookies
          <br />
          <br />
          (a) A cookie is a file containing an identifier (a string of letters
          and numbers) that is sent by a web server to a web browser and is
          stored by the browser. The identifier is then sent back to the server
          each time the browser requests a page from the server.
          <br />
          <br />
          (b) Cookies may be either persistent cookies or session cookies: a
          persistent cookie will be stored by a web browser and will remain
          valid until its set expiry date, unless deleted by the user before the
          expiry date; a session cookie, on the other hand, will expire at the
          end of the user session, when the web browser is closed.
          <br />
          <br /> (c) Cookies do not typically contain any information that
          personally identifies a user, but personal information that we store
          about you may be linked to the information stored in and obtained from
          cookies.
          <br />
          <br />
          (d) We also use other technologies with similar functionality to
          cookies, such as web beacons, web storage, and unique advertising
          identifiers, to collect information about your activity, browser, and
          device.
        </p>
        <p className="font-normal text-gray-900 text-opacity-95 mt-3">
          8.2 We use these technologies for the following purposes:
          <br />
          <br />
          (a) to identify you and log you into the Services; <br />
          <br />
          (b) to store information about your preferences and to personalise the
          Services for you; <br />
          <br />
          (c) as an element of the security measures used to protect user
          accounts, including preventing fraudulent use of login credentials,
          and to protect our website and services generally; <br />
          <br /> (d) to help us display content that will be relevant to you;
          <br />
          <br />
          (e) to help us analyse the use and performance of the Services ; and
          <br />
          <br /> (f) to store your preferences in relation to the use of cookies
          more generally.
        </p>
        <p className="font-normal text-gray-900 text-opacity-95 mt-3">
          8.3 Cookies used by our service providers <br />
          <br />
          (a) We use the following service providers to analyse the use of the
          Services. Each service provider gathers information about the Services
          by means of cookies and this information is used to create reports
          about with usage information. You can find information about the
          service providers privacy policies and practices at the URLs set forth
          below: Service Provider - Analytics Privacy Policy Google Analytics /
          Firebase /gmail growwten@gmail.com
        </p>
        <p className="font-normal text-gray-900 text-opacity-95 mt-3">
          8.4 Managing cookies <br />
          <br />
          (a) Most browsers allow you to refuse to accept cookies and to delete
          cookies. The methods for doing so vary from browser to browser, and
          from version to version. <br />
          <br />
          (b) Your mobile device may allow you to control cookies through its
          settings function. Refer to your device manufacturers instructions for
          more information. <br />
          <br /> (c) If you choose to decline cookies, some parts of the
          Services may not work as intended or may not work at all.
        </p>
        <h2 className="text-lg font-medium text-textDark mt-4 mb-1">
          9. DATA SECURITY
        </h2>
        <p className="font-normal text-gray-900 text-opacity-95 mt-3">
          9.1 We have implemented measures designed to secure your personal data
          from accidental loss and from unauthorized access, use, alteration and
          disclosure. The safety and security of your information also depends
          on you. Where we have given you (or where you have chosen) a password
          for access to certain parts of the Services, you are responsible for
          keeping this password confidential. We ask you not to share your
          password with anyone.
        </p>
        <p className="font-normal text-gray-900 text-opacity-95 mt-3">
          <h2 className="text-lg font-medium text-textDark mt-4 mb-2">
            9.2 Steps taken to ensure data security:
          </h2>{" "}
          (a) All the user information can only be accessed by authorized users;
          <br />
          <br />
          (b) Users need to authenticate themselves with a username-password
          combination; and
          <br />
          <br />
          (c) All data is hosted on growwten firebase.
        </p>
        <p className="font-normal text-gray-900 text-opacity-95 mt-3">
          9.3 Unfortunately, the transmission of information via public networks
          such as the internet is not completely secure. Although we do our best
          to protect your personal data, we cannot guarantee the security of
          your personal data transmitted through the Services. Any transmission
          of personal data is at your own risk. We are not responsible for the
          circumvention of any privacy settings or security measures contained
          on the Services.
        </p>
        <h2 className="text-lg font-medium text-textDark mt-4 mb-1">
          10. CHANGES TO OUR PRIVACY POLICY
        </h2>
        <p className="font-normal text-gray-900 text-opacity-95 mt-3">
          (a) It is our policy to post any changes we make to our Policy on this
          page. If we make material changes to how we treat our users' personal
          data, we will notify you by e-mail to the primary e-mail address
          specified in your account. The date the Policy was last revised is
          identified at the top of the page. You are responsible for ensuring we
          have an up-to-date active and deliverable e-mail address for you, and
          for periodically visiting our Website and this Policy to check for any
          changes.
        </p>
        <h2 className="text-lg font-medium text-textDark mt-4 mb-1">
          11. CONTACT INFORMATION
        </h2>
        <p className="font-normal text-gray-900 text-opacity-95 mt-3">
          The data controller responsible for your personal data is
          GrowwTen.Please write to us at growwten@gmail.com
        </p>
      </main>
      <Footer />
    </>
  );
};

export default privacy;
