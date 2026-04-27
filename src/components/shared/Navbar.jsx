import logoImg from '../../assets/images/logo.png'


const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
  <div className="container mx-auto">
    <div className='flex justify-between'>
      <img src={logoImg} alt="logo" />
    <ul className="flex justify-around gap-4">
     <li>Home</li>
     <li>Timeline</li>
     <li>Stats</li>
    </ul>

    </div>
  
  </div>
</div>
  );
};

export default Navbar;