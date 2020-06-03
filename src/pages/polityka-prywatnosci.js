import React from 'react'
import Layout from '../layout/layout'
import styled from 'styled-components';

const Wrapper = styled.div`
	display:flex;
	flex-direction: column;
	justify-content: center;
	text-align: left;
	padding: 120px 20px;
	width: 40%;
	 @media (max-width: 1000px) {
		 	padding: 120px 10px;
			width: 90%;
    }
`
const P = styled.p`
	font-size: 1rem;
	font-weight: ${({ theme }) => theme.font.regular};
	line-height: 1.7;
`


const politykaPrywatnosci = () => {
	return (
		<Layout>
			<Wrapper>
				<h1>Polityka prywatności</h1>
				<P>Niniejsza polityka prywatności i plików cookies opisuje zasady postępowania z danymi osobowymi
				oraz wykorzystywania plików cookies i innych technologii w ramach strony internetowej **********
				Administratorem strony jest Kamil Adamowski, Kontakt z administratorem możliwy pod pod adresem e-mail ka.adamowski@gmail.com
			</P>
				<P>
					<strong>§1 Definicjee</strong>
					<br />1.Na potrzeby niniejszej polityki prywatności, przyjmuje się następujące znaczenie poniższych pojęć:
				<br />a) Administrator – Kamil Adamowski, prowadzący działalność gospodarczą pod firmą Kamil Adamowski
				<br />b) Strona – strona internetowa dostępna pod adresem **********
				<br />c) Użytkownik – każdy podmiot, który korzysta ze Strony.
			</P>
			<P>
					<strong>§2 Dane osobowe</strong>
					<br />1. Użytkownik może przekazywać swoje dane osobowe Administratorowi za pomocą formularzy dostępnych na Stronie, takich jak newsletter.
				<br />2. Administratorem danych osobowych Użytkownika jest Administrator.
				<br />3. Dane przekazane Administratorowi w ramach formularza newsletter przetwarzane są w celu informacji o nowościach, promocjach i produktach pochodzących od Kamil Adamowski
				<br />4. Administrator gwarantuje poufność wszelkich przekazanych mu danych osobowych.
				<br />5. Podanie danych jest zawsze dobrowolne, ale niezbędne do podjęcia przez Użytkownika akcji, do której przeznaczony jest dany formularz.
				<br />6. Administrator nie udostępnia przekazanych mu danych jakimkolwiek podmiotom trzecim.
				<br />7. Dane osobowe są gromadzone z należytą starannością i odpowiednio chronione przed dostępem do nich przez osoby do tego nieupoważnione.
				<br />8. Użytkownikowi przysługują następujące uprawnienia: a) prawo do żądania dostępu do danych osobowych dotyczących osoby, której dane dotyczą, ich sprostowania,
				usunięcia lub ograniczenia przetwarzania, b) prawo do wniesienia sprzeciwu wobec przetwarzania, c) prawo do przenoszenia danych, d) prawo do cofnięcia zgody
				na przetwarzanie danych osobowych w określonym celu, jeżeli Użytkownik uprzednio taką zgodę wyraził,
				e) prawo do wniesienia skargi do organu nadzorczego w związku z przetwarzaniem danych osobowych przez Administratora
			</P>
				<P>
					<strong>§3 Pliki cookies</strong>
					<br />1. Administrator wykorzystuje pliki cookies (ciasteczka), czyli niewielkie informacje tekstowe, przechowywane na urządzeniu końcowym Użytkownika (np. komputerze, tablecie, smartfonie). Cookies mogą być odczytywane przez system teleinformatyczny Administratora.
				<br />2. Administrator przechowuje pliki cookies na urządzeniu końcowym Użytkownika, a następnie uzyskuje dostęp do informacji w nich zawartych w celach statystycznych, w celach marketingowych (remarketing, odzyskiwanie porzuconych koszyków) oraz w celu zapewnienia prawidłowego działania Strony.
				<br />3. Administrator informuje niniejszym Użytkownika, że istnieje możliwość takiej konfiguracji przeglądarki internetowej, która uniemożliwia przechowywanie plików cookies na urządzeniu końcowym Użytkownika. W takiej sytuacji, korzystanie ze Strony przez Użytkownika może być utrudnione.
				<br />4. Administrator wskazuje niniejszym, że pliki cookies mogą być przez Użytkownika usunięte po ich zapisaniu przez Administratora, poprzez odpowiednie funkcje przeglądarki internetowej, programy służące w tym celu lub skorzystanie z odpowiednich narzędzi dostępnych w ramach systemu operacyjnego, z którego korzysta Użytkownik.
			</P>
				<P>
					<strong>§4 Logi serwera</strong>
					<br />1. Korzystanie ze Strony wiąże się z przesyłaniem zapytań do serwera, na którym przechowywana jest Strona.
				<br />2. Każde zapytanie skierowane do serwera zapisywane jest w logach serwera. Logi obejmują m.in. adres IP Użytkownika, datę i czas serwera, informacje o przeglądarce internetowej i systemie operacyjnym, z jakiego korzysta Użytkownik.
				<br />3. Logi zapisywane i przechowywane są na serwerze.
				<br />4. Dane zapisane w logach serwera nie są kojarzone z konkretnymi osobami korzystającymi ze Strony i nie są wykorzystywane przez Administratora w celu identyfikacji Użytkownika.
				<br />5. Logi serwera stanowią wyłącznie materiał pomocniczy służący do administrowania Stroną, a ich zawartość nie jest ujawniana nikomu poza osobami upoważnionymi do administrowania serwerem.
			</P>
			</Wrapper>
		</Layout>
	)
}

export default politykaPrywatnosci
