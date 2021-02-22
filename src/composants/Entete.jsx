import avatar from '../images/avatar.png';
import './Entete.scss';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({ small: {width: theme.spacing(3), height: theme.spacing(3)}}));

export default function Entete() {

  const classes = useStyles();

  return (
    <header className="Entete">
      <div className="logo">Signets</div>
      <div className="avatar">Camille Semaan <Avatar src={avatar} alt="Camille Semaan" className={classes.small} /></div>
    </header>
  );
}