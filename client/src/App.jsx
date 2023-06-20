import { useContext } from 'react';

import "./styles/App.scss";
import { SearchContext } from './context';
import { SearchBox } from './components/SearchBox';
import { SearchList } from './components/SearchList';

export const App = () => {
  const ctx = useContext(SearchContext);

  return (
    <div>
      <SearchBox />
      <SearchList />
    </div>
  )
}
