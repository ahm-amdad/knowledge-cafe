import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    console.log();
    return (
        <div>
            <h3>blog: here</h3>
            
        </div>
    );
};
Blog.propTypes ={
    blog:PropTypes.object.isRequired,
    
}
export default Blog;