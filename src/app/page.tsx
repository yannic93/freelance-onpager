import { homeData } from './data';
import BaseTemplate from './components/templates/BaseTemplate';

// Test deployment trigger - build should work now
export default function Home() {
  return <BaseTemplate pageData={homeData} />;
}
