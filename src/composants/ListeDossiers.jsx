import dossTab from '../data/liste-dossiers.json';
import Dossier from './Dossier';
import './ListeDossiers.scss';

export default function ListeDossiers() {
  return (
    <ul className="ListeDossiers">
      {
        dossTab.map( 
          dossier =>  <li key={dossier.id}><Dossier {...dossier} /></li>
        )
      }
    </ul>
  );
}