import youtubeicon from '../../assets/youtubeicon.jpg';
import spotify from '../../assets/SpotifyLogo.png';
import facebook from '../../assets/FacebookLogo.png';
import classes from './Footer.module.css';
const Footer = () =>{
return(
<footer className={classes.footer}>
  <h1>The Generics</h1>  
  <div>
  <img src={youtubeicon}></img> 
  <img src={spotify}></img>
  <img src={facebook}></img>
  </div>
</footer>
);
};
export default Footer;