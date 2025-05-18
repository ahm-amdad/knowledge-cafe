import profile_img from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className='flex justify-between 
        items-center max-w-7xl mx-auto py-3
         
         '>
            <h1 className='text-4xl'>knowledge cafe</h1>
            <img src={profile_img} alt="" />
            
        </header>
    );
};

export default Header;