import '../styles/globals.css'
import Layout from '../Components/Layout';
import { AuthContextProvider } from '../Context/AuthContext';

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
    <Layout>
    <Component {...pageProps} />
    </Layout>
     </AuthContextProvider>
  );
}

export default MyApp
