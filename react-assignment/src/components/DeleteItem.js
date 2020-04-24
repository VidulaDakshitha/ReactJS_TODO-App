import React,{Component} from 'react'
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import DoneAll from  "@material-ui/icons/DoneAll"

class DeleteItem extends Component{
    constructor(props) {
        super(props);
    }


    render(){

        return(<div>


            <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center" style={{color:'red'}}>
                <DoneAll/><del>{this.props.name}</del>
                    <span ><DeleteIcon onClick={this.props.delCompEvent} /></span>
                </li>

            </ul>
        </div>);
    }
}
export default DeleteItem