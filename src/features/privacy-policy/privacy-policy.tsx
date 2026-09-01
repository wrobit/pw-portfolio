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
        title="Polityka prywatności"
        description="Najważniejsze informacje o tym, jakie dane przetwarzam, po co to robię i jakie prawa Ci przysługują."
        showScrollToExplore={false}
        compactSpacing
      />

      <Styled.Content>
        <Styled.Updated>Ostatnia aktualizacja: 1 września 2026 r.</Styled.Updated>

        <Styled.Section>
          <Styled.Heading>1. Administrator danych</Styled.Heading>
          <Styled.Paragraph>
            Administratorem Twoich danych osobowych jest Wrobit - Piotr Wrobel, ul. Stanisława
            Moniuszki 15/11A, 41-902 Bytom, NIP 6263066755 (dalej: „Wrobit”). W sprawach dotyczących
            prywatności możesz napisać na adres{" "}
            <Styled.Link href="mailto:piotrwrobel.ajiiz@gmail.com">
              piotrwrobel.ajiiz@gmail.com
            </Styled.Link>
            .
          </Styled.Paragraph>
        </Styled.Section>

        <Styled.Section>
          <Styled.Heading>2. Jakie dane przetwarzam i dlaczego</Styled.Heading>
          <Styled.TableWrapper>
            <Styled.Table>
              <thead>
                <tr>
                  <th>Zakres danych</th>
                  <th>Cel</th>
                  <th>Podstawa</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Adres IP i podstawowe dane techniczne wizyty</td>
                  <td>Działanie, bezpieczeństwo i diagnostyka strony</td>
                  <td>Uzasadniony interes Wrobit (art. 6 ust. 1 lit. f RODO)</td>
                </tr>
                <tr>
                  <td>
                    Dane analityczne, np. odwiedzone podstrony, źródło wizyty i rodzaj urządzenia
                  </td>
                  <td>Pomiar korzystania ze strony w Google Analytics 4</td>
                  <td>Twoja zgoda (art. 6 ust. 1 lit. a RODO)</td>
                </tr>
                <tr>
                  <td>Imię, nazwisko, e-mail, numer telefonu i treść wiadomości</td>
                  <td>Odpowiedź na zapytanie, rozmowa wstępna, przygotowanie oferty lub umowy</td>
                  <td>
                    Działania na Twoje żądanie przed zawarciem umowy (art. 6 ust. 1 lit. b RODO)
                  </td>
                </tr>
                <tr>
                  <td>Wybrana korespondencja dotycząca współpracy</td>
                  <td>Ustalenie, dochodzenie lub obrona przed roszczeniami</td>
                  <td>Uzasadniony interes Wrobit (art. 6 ust. 1 lit. f RODO)</td>
                </tr>
              </tbody>
            </Styled.Table>
          </Styled.TableWrapper>
          <Styled.Paragraph>
            Podanie danych w zapytaniu jest dobrowolne, ale bez danych kontaktowych nie będę mógł
            odpowiedzieć. Nie wykorzystuję danych z zapytań do newslettera ani niezwiązanych z nimi
            kampanii marketingowych.
          </Styled.Paragraph>
        </Styled.Section>

        <Styled.Section>
          <Styled.Heading>3. Formularze reklamowe i kontakt</Styled.Heading>
          <Styled.Paragraph>
            Jeżeli wyślesz formularz kontaktowy w reklamie Meta (Facebook lub Instagram), otrzymam
            dane wpisane w formularzu oraz informację o kampanii, z której pochodzi zapytanie. Dane
            wykorzystam wyłącznie do odpowiedzi, kontaktu wybranym przez Ciebie kanałem i omówienia
            możliwej współpracy. Meta przetwarza również dane jako niezależny administrator na
            zasadach opisanych w swojej{" "}
            <Styled.Link
              href="https://www.facebook.com/privacy/policy/"
              target="_blank"
              rel="noreferrer"
            >
              polityce prywatności
            </Styled.Link>
            .
          </Styled.Paragraph>
          <Styled.Paragraph>
            Kontakt e-mailowy lub telefoniczny związany z zapytaniem następuje na Twoje żądanie i,
            gdy jest to wymagane, na podstawie zgody udzielonej w formularzu zgodnie z art. 398
            Prawa komunikacji elektronicznej. Zgodę możesz wycofać w dowolnym momencie.
          </Styled.Paragraph>
        </Styled.Section>

        <Styled.Section>
          <Styled.Heading>4. Pliki cookie i Google Analytics</Styled.Heading>
          <Styled.Paragraph>
            Strona zapisuje niezbędny plik cookie <code>pw-cookie-consent</code>, który pamięta Twój
            wybór przez 180 dni. Google Analytics 4 uruchamia się dopiero po zaakceptowaniu
            analitycznych plików cookie. Może wtedy zapisać pliki <code>_ga</code> i{" "}
            <code>_ga_*</code> na okres do 180 dni.
          </Styled.Paragraph>
          <Styled.Paragraph>
            Możesz odrzucić analitykę bez utraty dostępu do strony. Swój wybór możesz później
            zmienić przez przycisk „Cookie settings” w stopce. Wycofanie zgody nie wpływa na
            zgodność z prawem przetwarzania dokonanego przed jej wycofaniem.
          </Styled.Paragraph>
        </Styled.Section>

        <Styled.Section>
          <Styled.Heading>5. Komu dane mogą być przekazywane</Styled.Heading>
          <Styled.Paragraph>
            Dane mogą być przetwarzane przez dostawców potrzebnych do obsługi:
          </Styled.Paragraph>
          <Styled.List>
            <li>Vercel Inc. - hosting strony i logi techniczne,</li>
            <li>Google Ireland Limited - Google Analytics 4 i obsługa poczty,</li>
            <li>
              Meta Platforms Ireland Limited - formularz kontaktowy w reklamie, jeżeli z niego
              korzystasz,
            </li>
            <li>
              Apple Distribution International Limited - kalendarz używany do umawiania rozmów.
            </li>
          </Styled.List>
          <Styled.Paragraph>
            Nie sprzedaję Twoich danych. Dostawcy mogą przetwarzać dane poza Europejskim Obszarem
            Gospodarczym. W takim przypadku przekazanie odbywa się na podstawie decyzji Komisji
            Europejskiej stwierdzającej odpowiedni poziom ochrony albo odpowiednich zabezpieczeń,
            takich jak standardowe klauzule umowne. Informacje o zastosowanych zabezpieczeniach
            możesz uzyskać, pisząc na adres podany w punkcie 1.
          </Styled.Paragraph>
        </Styled.Section>

        <Styled.Section>
          <Styled.Heading>6. Jak długo przechowuję dane</Styled.Heading>
          <Styled.List>
            <li>dane z zapytań - do 12 miesięcy od ostatniego istotnego kontaktu,</li>
            <li>
              dane związane z umową i rozliczeniami - przez okres wymagany prawem podatkowym i
              rachunkowym,
            </li>
            <li>dane potrzebne do obsługi roszczeń - do upływu właściwego okresu przedawnienia,</li>
            <li>dane użytkownika i zdarzeń w Google Analytics 4 - maksymalnie 14 miesięcy,</li>
            <li>
              logi techniczne - przez okres wynikający z konfiguracji hostingu, nie dłużej niż jest
              to potrzebne do bezpieczeństwa i diagnostyki.
            </li>
          </Styled.List>
        </Styled.Section>

        <Styled.Section>
          <Styled.Heading>7. Twoje prawa</Styled.Heading>
          <Styled.Paragraph>
            Masz prawo żądać dostępu do danych, ich sprostowania, usunięcia lub ograniczenia
            przetwarzania, a w odpowiednich przypadkach także przeniesienia danych. Możesz
            sprzeciwić się przetwarzaniu opartemu na uzasadnionym interesie oraz wycofać udzieloną
            zgodę.
          </Styled.Paragraph>
          <Styled.Paragraph>
            Możesz również złożyć skargę do Prezesa Urzędu Ochrony Danych Osobowych. Więcej
            informacji znajdziesz na stronie{" "}
            <Styled.Link href="https://uodo.gov.pl" target="_blank" rel="noreferrer">
              uodo.gov.pl
            </Styled.Link>
            .
          </Styled.Paragraph>
        </Styled.Section>

        <Styled.Section>
          <Styled.Heading>8. Zautomatyzowane decyzje i zmiany polityki</Styled.Heading>
          <Styled.Paragraph>
            Wrobit nie podejmuje wobec Ciebie decyzji wywołujących skutki prawne wyłącznie w sposób
            zautomatyzowany. Polityka może zostać zaktualizowana, jeżeli zmieni się sposób
            przetwarzania danych lub wykorzystywane usługi. Aktualna wersja zawsze będzie dostępna
            na tej stronie.
          </Styled.Paragraph>
        </Styled.Section>
      </Styled.Content>
    </PageTemplateWrapper>
  );
};
