import Footer from "../components/Footer";
import Header from "../components/Header";
import { useRouter } from "next/dist/client/router";
import { useContext, useEffect } from "react";
import { AuthContext } from "../lib/store/AuthStore";
const Terms = () => {
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
      <main className="mt-20 p-10 leading-relaxed">
        <h1 className="text-xl font-semibold text-textDark mb-4">
          Terms & Conditions
        </h1>
        <p className="font-normal text-gray-900 text-opacity-95">
          The Terms and Conditions (or TOS) is an electronic record that is
          binding between the user of this website and GrowwTen
          (www.growwten.com).
          <br />
          <br />
          The company deals with Advertising and marketing of various things on
          social media and provides an opportunity for its members to earn
          income through affiliation.
          <br />
          By using the website or availing any services from the website, You
          agree to abide by the terms and conditions as set forth and any/all
          terms and conditions, privacy policy for the time being in force or in
          future. Do not use the website or avail services from the website, if
          You don’t wish to abide by the terms and conditions as set forth.
          <br />
          Please read the following terms and conditions carefully before using
          this website and/or availing any service from the website.
          <h2 className="text-lg font-medium text-textDark mt-4 mb-1">
            Definitions and Interpretation
          </h2>
          In this Terms and Conditions the following terms shall have the
          following meanings
          <h2 className="text-lg font-medium text-textDark mt-4 mb-1">
            Account
          </h2>
          It means collectively the personal information, payment information
          and credentials used by You to access Content and/or any
          communications system on the Website{" "}
          <h2 className="text-lg font-medium text-textDark mt-4 mb-1">
            Content
          </h2>{" "}
          It means any text, graphics, images, audio, video, software, data
          compilations and any other form of information capable of being stored
          in a computer that appears on or forms part of this Website.
          <h2 className="text-lg font-medium text-textDark mt-4 mb-1">
            Facilities
          </h2>
          means collectively any online facilities, tools, services or
          information that the Company makes available through the Website
          either now or in the future
          <h2 className="text-lg font-medium text-textDark mt-4 mb-1">
            {" "}
            Services
          </h2>{" "}
          It means the services available to you through this Website.
          <h2 className="text-lg font-medium text-textDark mt-4 mb-1">
            Payment
          </h2>{" "}
          It means any details required for the purchase of Services from this
          Website. This includes, but is not limited to, credit/ debit card
          numbers, bank account numbers and source codes
          <h2 className="text-lg font-medium text-textDark mt-4 mb-1">
            System
          </h2>{" "}
          It means any online communications infrastructure that the Company
          makes available through the Website either now or in the future. This
          includes, but is not limited to, web-based email, message boards, live
          chat facilities and email links.
          <h2 className="text-lg font-medium text-textDark mt-4 mb-1">
            {" "}
            Website
          </h2>{" "}
          It means the website that you are currently using www.growwten.com and
          any sub-domains of this site unless expressly excluded by their own
          terms and conditions{" "}
          <h2 className="text-lg font-medium text-textDark mt-4 mb-1">
            Age Restrictions
          </h2>{" "}
          Persons under the age of 18 (Eighteen) should use this Website only
          with the supervision of an adult. Payment Information must be provided
          by or with the permission of an adult. Use of the Website is available
          only to persons who can form legally binding contracts under
          applicable laws. Persons who are “incompetent to contract” within the
          meaning of the Indian Contract Act, 1872 (as amended from time to time
          including its re-enactment thereof) are not eligible to use this
          Website. The Website is not available to persons whose membership has
          been suspended or terminated by the Company for any reason whatsoever.
          <h2 className="text-lg font-medium text-textDark mt-4 mb-1">
            Intellectual Property
          </h2>{" "}
          All Content including copyright/ trademark/ Geographical Indication/
          Designs/ Patents of the Company included on the Website, including,
          but not limited to, text, graphics, logos, icons, images, sound clips,
          video clips, data compilations, page layout, underlying code and
          software other than for Your own personal information is the property
          of the Company or its 3rd party concerns. By continuing to use this
          Website you acknowledge that such material is protected by applicable
          laws.
          <br />
          <br />
          You shall not reproduce, copy, distribute, store or in any other
          manner re-use material from the Website unless otherwise indicated on
          the Website.
          <br />
          <h2 className="text-lg font-medium text-textDark mt-4 mb-1">
            Account and Registration Obligations
          </h2>{" "}
          Your Information is defined as any information provided by You to the
          Company in the registration, in the feedback area or through any
          e-mail feature or a written letter or form mailed or submitted to any
          of our office/s. The Company shall protect your Information in
          accordance with Companies Privacy Policy.
          <br />
          <br />
          If You use the Website, You are responsible for maintaining the
          confidentiality of Your password and account and any activities that
          occur under Your account. The Company shall not be liable to any
          person for any loss or damage which may arise as a result of any
          failure by You to protect Your password or account. If You know or
          suspect that someone else knows Your password or suspect any
          unauthorized use of Your password, You should reset it or notify the
          Company by contacting the Company immediately through the address
          provided.
          <br />
          <br />
          If the Company has reason to believe that there is likely to be a
          breach of security or misuse of the Website, Company may require You
          to change Your password or Company may suspend Your account without
          any liability to the Company.
          <br />
          <br />
          Company does not want to receive confidential, proprietary or trade
          secret information through this Website (excluding information related
          to any service). Please note that any information, materials,
          suggestions, ideas or comments sent to the Company will be deemed
          non-confidential.
          <br />
          <br />
          By submitting any such information, you are granting Company an
          irrevocable and unrestricted license to use, modify, reproduce,
          transmit, display and distribute such materials, information,
          suggestions, ideas or comments for any purpose whatsoever. However,
          the Company may not use Your name in connection with any such
          materials, information, suggestions, and ideas or comments unless the
          Company first obtain Your permission or otherwise are required by law
          to do so.{" "}
          <h2 className="text-lg font-medium text-textDark mt-4 mb-1">
            {" "}
            You hereby also agree and confirm:
          </h2>{" "}
          To provide true, accurate, current and complete information about
          yourself as prompted by Company Registration Form or Guest details
          Form (such information being the “Registration Data”).
          <br />
          <br />
          To maintain and promptly update the Registration Data to keep it true,
          accurate, current and complete. If You provide any information that is
          untrue, inaccurate, incomplete, or not current or if Company has
          reasonable grounds to suspect that such information is untrue,
          inaccurate, and not current or not in accordance with the Terms and
          Conditions, Company has the right to indefinitely suspend or terminate
          Your membership and refuse to provide You with access to the Website.
          <br />
          <br />
          That You will use the services provided by the Company, its
          affiliates, consultants and contracted companies, for lawful purposes
          only and comply with all applicable laws and regulations while using
          the Website and transacting on the Website.
          <br />
          <br />
          You will provide authentic and true information in all instances where
          such information is requested from you. The Company reserves the right
          to confirm and validate the information and other details provided by
          You at any point of time. If upon confirmation Your details are found
          not to be true (wholly or partly), the Company has the right in its
          sole discretion to reject the registration and debar you from using
          the Services of the Company and or other affiliated websites without
          prior intimation whatsoever.
          <br />
          <h2 className="text-lg font-medium text-textDark mt-4 mb-1">
            Links to Other Websites
          </h2>{" "}
          This Website may contain links to other websites. Unless expressly
          stated, these websites are not under the control of the Company or its
          affiliates. The Company assume no responsibility for the content of
          such websites and disclaim liability for any and all forms of loss or
          damage arising out of the use of them.
          <br />
          The inclusion of a link to another Website on this Website does not
          imply any endorsement of the Websites themselves or f those in control
          of them. Use of Communications Facilities
          <br />
          <br />
          <strong className="font-medium italic mb-1">
            •When using any system on the Website You should do so in accordance
            with the following rules. Failure to comply with these rules may
            result in Your Account being suspended or closed.{" "}
          </strong>
          <br />
          <strong className="font-medium italic mb-1">
            •You must not use obscene or vulgar language
          </strong>{" "}
          <br />
          <strong className="font-medium italic mb-1">
            •You must not submit Content that is unlawful or otherwise
            objectionable. This includes, but is not limited to, Content that is
            abusive, threatening, harassing, defamatory, ageist, sexist or
            racist
          </strong>
          <br />
          <strong className="font-medium italic mb-1">
            •You must not submit Content that is intended to promote or incite
            violence{" "}
          </strong>
          <br />
          <strong className="font-medium italic mb-1">
            •The means by which You identify yourself must not violate these
            Terms and Conditions or any applicable laws;
          </strong>
          <br />
          <strong className="font-medium italic mb-1">
            •You must not impersonate other people, particularly employees and
            representatives of the Company and/or its affiliates; and •You must
            not use the Company system for unauthorized mass-communication such
            as “spam” or “junk mail”.
          </strong>
          <br />
          <strong className="font-medium italic mb-1">
            •You acknowledge that the Company reserves the right to monitor any
            and all communications made to the Company or using the Company
            System.
          </strong>{" "}
          <br />
          <strong className="font-medium italic mb-1">
            •You acknowledge that the Company may retain copies of any and all
            communications made to the Company or using the Company System.
          </strong>
          <br />
          <strong className="font-medium italic mb-1">
            •You acknowledge that any information You send to the Company
            through the Company System may be modified by the Company in any way
            and You hereby waive Your moral right to be identified as the author
            of such information. Any restrictions You may wish to place upon the
            Company use of such information must be communicated to the Company
            in advance and the Company reserve the right to reject such terms
            and associated information.
          </strong>
          <h2 className="text-lg font-medium text-textDark mt-4 mb-1">
            {" "}
            Indemnity
          </h2>
          You agree to defend, indemnify and hold harmless the Company, its
          employees, directors, officers, agents and their successors and
          assigns from and against any and all claims, liabilities, damages,
          losses, costs and expenses, including attorney’s fees, caused by or
          arising out of claims based upon Your actions or inaction, which may
          result in any loss or liability to the Company or any third party
          including but not limited to breach of any warranties, representations
          or undertakings or in relation to the non-fulfillment of any of Your
          obligations under this Terms and Conditions or arising out of Your
          violation of any applicable laws, regulations including but not
          limited to intellectual property rights, payment of statutory dues and
          taxes, claim of libel, defamation, violation of rights of privacy or
          publicity, loss of service by other subscribers and infringement of
          intellectual property or other rights. This clause shall survive the
          expiry or termination of this Terms and Conditions.
          <h2 className="text-lg font-medium text-textDark mt-4 mb-1">
            {" "}
            Termination and Cancellation of Accounts
          </h2>{" "}
          Either the Company or You may terminate Your Account. If the Company
          terminate your Account, You will be notified by email and an
          explanation for the termination will be provided. Notwithstanding, the
          foregoing, the Company reserve the right to terminate without giving
          reasons whatsoever.
          <br />
          <br />
          If the Company terminates Your Account, any payments on Your Account
          due shall be paid to You immediately and provision of Services shall
          be stopped.
          <h2 className="text-lg font-medium text-textDark mt-4 mb-1">
            {" "}
            Services, Pricing and Availability
          </h2>{" "}
          Whilst every effort has been made to ensure that all general
          descriptions of Services available from the Company correspond to the
          actual Services that will be provided to You, the Company is not
          responsible for any variations from these descriptions as the exact
          nature of the Services may vary depending on Your individual
          requirements and circumstances.
          <br />
          <br />
          This does not exclude Companies liability for mistakes due to
          negligence on the Companies part and refers only to variations of the
          correct Services, not different Services altogether.
          <br />
          <br />
          Where appropriate, You may be required to select the required package
          of Services.{" "}
          <h2 className="text-lg font-medium text-textDark mt-4 mb-1">
            {" "}
            Privacy{" "}
          </h2>
          Use of the Website is also governed by the Company Privacy Policy
          which is incorporated into these Terms and Conditions by this
          reference.{" "}
          <h2 className="text-lg font-medium text-textDark mt-4 mb-1">
            How the Company Uses Your Personal Information (Data Protection)
          </h2>{" "}
          All personal information that the Company may collect (including, but
          not limited to, your name and address) will be collected, used and
          held in accordance with the provisions of the applicable laws
          <h2 className="text-lg font-medium text-textDark mt-4 mb-1">
            {" "}
            The Company shall use Your personal information to:
          </h2>
          <br />
          <strong className="font-medium italic mb-1">
            •Provide the Company Services to you
          </strong>{" "}
          <br />
          <strong className="font-medium italic mb-1">
            •Process Your payment for the Services and
          </strong>
          <br />
          <strong className="font-medium italic mb-1">
            •The Company shall not pass on Your personal information to any
            other third parties.
          </strong>
          <br />
        </p>

        <h2 className="text-lg font-medium text-textDark mt-4 mb-1">
          DISCLAIMER IF YOU ARE DISSATISFIED WITH ANY PORTION OF THE WEBSITE, OR
          WITH ANY OF THESE TERMS AND CONDITIONS, YOUR SOLE AND EXCLUSIVE REMEDY
          IS TO DISCONTINUE USING THE WEBSITE.
        </h2>
        <p className="font-normal text-gray-900 text-opacity-95">
          Changes to the Facilities and these Terms and Conditions The Company
          reserve the right to change the Website, its Content or these Terms
          and Conditions at any time. You will be bound by any changes to the
          Terms and Conditions from the first time You use the Website following
          the changes. If the Company is required to make any changes to these
          Terms and Conditions by law, these changes will apply automatically to
          any services currently pending in the future.
          <h2 className="text-lg font-medium text-textDark mt-4 mb-1">
            Availability of the
          </h2>
          Website The Website is provided “as is” and on an “as available”
          basis. The Company gives no warranty that the Website or Facilities
          will be free of defects and/ or faults. To the maximum extent
          permitted by law, the Company provide no warranties (express or
          implied) of fitness for a particular purpose, accuracy of information,
          compatibility and satisfactory quality.
          <br />
          <br />
          The Company accept no liability for any disruption or non-availability
          of the Website resulting from external causes including, but not
          limited to, internet service provider equipment failure, host
          equipment failure, communications network failure, power failure,
          natural events, acts of war or legal restrictions and censorship.
          <h2 className="text-lg font-medium text-textDark mt-4 mb-1">
            {" "}
            Limited Liability
          </h2>{" "}
          Nothing in these Terms and Conditions excludes or restricts the
          Company’s liability for any direct or indirect loss or damage arising
          out of the incorrect provision of Services or out of reliance on
          incorrect information included on the Website.
          <br />
          <br /> Nothing in these Terms and Conditions shall confer any rights
          upon any third party. The arrangement created by these Terms and
          Conditions is between You and the Company.
        </p>
      </main>
      <Footer />
    </>
  );
};

export default Terms;
