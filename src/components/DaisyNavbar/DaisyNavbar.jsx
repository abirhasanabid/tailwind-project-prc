import PropTypes from 'prop-types';



const DaisyNavbar = ({ data }) => {
    const { label, link } = data;

    return (
        <div className=''>
            <li className='hover:bg-orange-900 text-white p-2 rounded-md'> <a href={link}>{label}</a></li>
        </div>
    );
};

DaisyNavbar.propTypes = {
    data: PropTypes.object
}

export default DaisyNavbar;