import { Hero } from "@components/hero/hero";
import { Seo } from "@components/seo/seo";
import { Breadcrumb } from "@components/shared";
import { BreadcrumbItem } from "@components/shared/breadcrumb/breadcrumb.types";
import { routes } from "@utils/constants/routes.constants";
import { PageTemplateWrapper } from "@utils/template/template.styles";

import * as Styled from "./privacy-policy.styles";

const breadcrumbItems: BreadcrumbItem[] = [
  { label: "Home", href: routes.home },
  { label: "Privacy policy" },
];

export const PrivacyPolicy = () => {
  return (
    <PageTemplateWrapper>
      <Seo
        title="Privacy Policy"
        description="Privacy policy for the Wrobit website and contact with Wrobit - Piotr Wrobel."
        path={routes.privacyPolicy}
      />

      <Breadcrumb items={breadcrumbItems} />
      <Hero
        title="Privacy policy"
        description="The essential information about what data I process, why I process it, and what rights you have."
        showScrollToExplore={false}
        compactSpacing
      />

      <Styled.Content>
        <Styled.Updated>Last updated: September 1, 2026</Styled.Updated>

        <Styled.Section>
          <Styled.Heading>1. Data controller</Styled.Heading>
          <Styled.Paragraph>
            The controller of your personal data is Wrobit - Piotr Wrobel, Stanisława Moniuszki 15,
            41-902 Bytom, Poland, tax identification number (NIP) 6263066755 (referred to as
            “Wrobit”). For privacy-related matters, contact me at{" "}
            <Styled.Link href="mailto:piotrwrobel.ajiiz@gmail.com">
              piotrwrobel.ajiiz@gmail.com
            </Styled.Link>
            .
          </Styled.Paragraph>
        </Styled.Section>

        <Styled.Section>
          <Styled.Heading>2. What data I process and why</Styled.Heading>
          <Styled.TableWrapper>
            <Styled.Table>
              <thead>
                <tr>
                  <th>Data</th>
                  <th>Purpose</th>
                  <th>Legal basis</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>IP address and basic technical visit data</td>
                  <td>Website operation, security, and diagnostics</td>
                  <td>Wrobit’s legitimate interest (Article 6(1)(f) GDPR)</td>
                </tr>
                <tr>
                  <td>Analytics data, such as visited pages, traffic source, and device type</td>
                  <td>Measuring website usage with Google Analytics 4</td>
                  <td>Your consent (Article 6(1)(a) GDPR)</td>
                </tr>
                <tr>
                  <td>Your name, email address, phone number, and message</td>
                  <td>
                    Responding to an enquiry, arranging an introductory call, or preparing an offer
                    or agreement
                  </td>
                  <td>
                    Taking steps at your request before entering into a contract (Article 6(1)(b)
                    GDPR)
                  </td>
                </tr>
                <tr>
                  <td>Selected correspondence concerning our cooperation</td>
                  <td>Establishing, pursuing, or defending legal claims</td>
                  <td>Wrobit’s legitimate interest (Article 6(1)(f) GDPR)</td>
                </tr>
              </tbody>
            </Styled.Table>
          </Styled.TableWrapper>
          <Styled.Paragraph>
            Providing data in an enquiry is voluntary, but I cannot respond without your contact
            details. I do not use enquiry data for newsletters or unrelated marketing campaigns.
          </Styled.Paragraph>
        </Styled.Section>

        <Styled.Section>
          <Styled.Heading>3. Advertising forms and contact</Styled.Heading>
          <Styled.Paragraph>
            If you submit a contact form in a Meta ad on Facebook or Instagram, I receive the data
            entered in the form and information about the campaign that generated the enquiry. I use
            this data only to respond, contact you through your chosen channel, and discuss possible
            cooperation. Meta also processes data as an independent controller under its{" "}
            <Styled.Link
              href="https://www.facebook.com/privacy/policy/"
              target="_blank"
              rel="noreferrer"
            >
              privacy policy
            </Styled.Link>
            .
          </Styled.Paragraph>
          <Styled.Paragraph>
            Email or telephone contact relating to your enquiry takes place at your request and,
            where required, on the basis of consent provided in the form under Article 398 of the
            Polish Electronic Communications Law. You can withdraw your consent at any time.
          </Styled.Paragraph>
        </Styled.Section>

        <Styled.Section>
          <Styled.Heading>4. Cookies and Google Analytics</Styled.Heading>
          <Styled.Paragraph>
            The website stores the essential <code>pw-cookie-consent</code> cookie, which remembers
            your choice for 180 days. Google Analytics 4 starts only after you accept analytics
            cookies. It may then store the <code>_ga</code> and <code>_ga_*</code> cookies for up to
            180 days.
          </Styled.Paragraph>
          <Styled.Paragraph>
            You can reject analytics without losing access to the website. You can change your
            choice later using “Cookie settings” in the footer. Withdrawing consent does not affect
            the lawfulness of processing carried out before the withdrawal.
          </Styled.Paragraph>
        </Styled.Section>

        <Styled.Section>
          <Styled.Heading>5. Who may process the data</Styled.Heading>
          <Styled.Paragraph>
            The following providers may process data where necessary to provide their services:
          </Styled.Paragraph>
          <Styled.List>
            <li>Vercel Inc. - website hosting and technical logs,</li>
            <li>Google Ireland Limited - Google Analytics 4 and email services,</li>
            <li>Meta Platforms Ireland Limited - advertising contact forms, if you use one,</li>
            <li>Apple Distribution International Limited - calendar used to arrange calls.</li>
          </Styled.List>
          <Styled.Paragraph>
            I do not sell your data. Providers may process data outside the European Economic Area.
            In such cases, transfers rely on a European Commission adequacy decision or appropriate
            safeguards, such as standard contractual clauses. You can request information about the
            safeguards using the contact details in section 1.
          </Styled.Paragraph>
        </Styled.Section>

        <Styled.Section>
          <Styled.Heading>6. How long I retain the data</Styled.Heading>
          <Styled.List>
            <li>enquiry data - up to 12 months after the last meaningful contact,</li>
            <li>contract and billing data - for the period required by tax and accounting laws,</li>
            <li>data needed for legal claims - until the applicable limitation period expires,</li>
            <li>user-level and event data in Google Analytics 4 - up to 14 months,</li>
            <li>
              technical logs - for the period set in the hosting configuration and no longer than
              necessary for security and diagnostics.
            </li>
          </Styled.List>
        </Styled.Section>

        <Styled.Section>
          <Styled.Heading>7. Your rights</Styled.Heading>
          <Styled.Paragraph>
            You may request access to, correction, deletion, or restriction of your data and, where
            applicable, data portability. You may object to processing based on a legitimate
            interest and withdraw any consent you have provided.
          </Styled.Paragraph>
          <Styled.Paragraph>
            You may also lodge a complaint with the President of the Polish Personal Data Protection
            Office. More information is available at{" "}
            <Styled.Link href="https://uodo.gov.pl" target="_blank" rel="noreferrer">
              uodo.gov.pl
            </Styled.Link>
            .
          </Styled.Paragraph>
        </Styled.Section>

        <Styled.Section>
          <Styled.Heading>8. Automated decisions and policy changes</Styled.Heading>
          <Styled.Paragraph>
            Wrobit does not make decisions about you that produce legal effects solely through
            automated processing. This policy may be updated if the way data is processed or the
            services used change. The current version will always be available on this page.
          </Styled.Paragraph>
        </Styled.Section>
      </Styled.Content>
    </PageTemplateWrapper>
  );
};
