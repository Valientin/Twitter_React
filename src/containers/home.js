import { connect } from 'react-redux';
import Home from '../components/Home'


function mapDispatchToProps(dispatch){
    return {
       
    }
}

const mapStateToProps = (state) => {
    return{
        state: state
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);