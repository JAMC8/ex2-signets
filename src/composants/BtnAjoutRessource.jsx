import './BtnAjoutRessource.scss';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

export default function BtnAjoutRessource() {
  return (
    <div className="BtnAjoutRessource">
      <Fab size="small"  aria-label="add" className="fab" >
          <AddIcon/>
        </Fab>
    </div>
  );
}