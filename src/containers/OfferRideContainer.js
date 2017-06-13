import {connect} from 'react-redux'; 
import OfferRide from './../components/OfferRide';
import {addTrip} from './../actions/actions';

const OfferContainer = () => {

}

const mapStateToProps = (state) => {
    console.log('mapping state to props');
    console.log(state);
    return {
        username:state.username
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addTrip:(details) => {
            dispatch(addTrip(details));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(OfferRide)