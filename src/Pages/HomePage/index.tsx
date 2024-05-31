import SearchResults from '../../components/SearchResults';
import './index.scss';

interface HomePageProps {
  query: string;
}

const HomePage: React.FC<HomePageProps> = ({ query }) => {
  return (
    <section className='lumx-spacing-padding-horizontal-huge'>
      {!query && (
        <h3 className='query'>Type your favorit character ↗️</h3>
      )}
      <SearchResults query={query} />
    </section>
  );
};

export default HomePage;