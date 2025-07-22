import { homeData } from './data';
import BaseTemplate from './components/templates/BaseTemplate';

export default function Home() {
  return <BaseTemplate pageData={homeData} />;
}
