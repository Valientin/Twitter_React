import { connect } from 'react-redux';
import Login from '../components/Login';


function mapDispatchToProps(dispatch){
    return {
       
    }
}

const mapStateToProps = (state) => {
    return{
        state: state
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);