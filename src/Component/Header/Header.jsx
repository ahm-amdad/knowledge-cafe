import profile_img from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className='flex justify-between 
        items-center mx-auto py-10
         bg-blue-700
         
         '>
            <h1 className='text-4xl'>knowledge cafe</h1>
            <img src={profile_img} alt="" />
        </header>
    );
};

export default Header;