import SessionForm from './session_form'
import { connect } from 'react-redux';
import { loginUser } from '../actions/session_actions'

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors,
  formType: 'login'
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: dispatch(loginUser)
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)