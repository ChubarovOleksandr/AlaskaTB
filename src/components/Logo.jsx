import '../styles/components/Logo.scss'

const Logo = ({fs}) => {

   const fontSize = {
      fontSize: fs
   }

   return ( 
      <div className='title' style={fontSize}>Alaska<span style={fontSize}>TB</span></div>
    );
}
 
export default Logo;