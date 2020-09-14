// fill out this container
import {connect} from "react-redux"
import Import from "../components/Import"
import {importMakes} from "../redux/actions"
import {deleteMake} from "../redux/actions"


const mapStateToProps = (state)=>{
  return{
    makes : state.makes
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    importMakes: ()=>dispatch(importMakes()),
    deleteMake: (index)=> dispatch(deleteMake(index))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Import)