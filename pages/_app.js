import '../styles/globals.css'
import Layout from '../Components/Layout';
import { AuthContextProvider } from '../Context/AuthContext';
import { UserContextProvider } from '../Context/UserContext';

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
    <UserContextProvider>
    <Layout>
    <Component {...pageProps} />
    </Layout>
    </UserContextProvider>
    
    </AuthContextProvider>
  );
}

export default MyApp
