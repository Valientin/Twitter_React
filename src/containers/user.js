import { connect } from 'react-redux';
import User from '../components/User';
import { compose, withState, withHandlers, withProps, lifecycle } from 'recompose';

function mapDispatchToProps(dispatch){
    return {
        
    }
}

const mapStateToProps = (state) => {
    return {
        log: state.log
	}
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    lifecycle({
        componentDidMount() {
            console.log(this.props);
        }
    }),
    withState('isVisible', 'toggleVis', false),
    withHandlers({
        toggleVisibility: ({ toggleVis, isVisible }) => {
            return (event) => {
                return toggleVis(!isVisible);
            };
        }
    }),
    withProps(({ isVisible }) => {
        return {
            title: isVisible ? 'This is the visible title' : 'This is the default title',
            message: isVisible ? 'Hello I am Visible' : 'I am not visible yet, click the button!',
        };
    })
)(User);