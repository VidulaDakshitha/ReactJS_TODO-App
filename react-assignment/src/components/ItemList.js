import React,{Component} from 'react'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import ListItemIcon from '@material-ui/core/ListItemIcon'

import bootstrap from 'bootstrap/dist/css/bootstrap.css'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

class ItemList extends Component{
    constructor(props){
        super(props);
        this.toggleLarge = this.toggleLarge.bind(this);
        this.state={
            large:false
        }
    }
    toggleLarge() {
        this.setState({
            large: !this.state.large,
        });
    }

    /*onClick={()=>this.props.compItem(this.props.id,this.props.name)}*/
    render(){
        return(
                <div >


                    <ul className="list-group">
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                           <a href='#' onClick={()=>this.props.compItem(this.props.id)} > {this.props.name}</a>
                            <span ><EditIcon onClick={(e)=>this.props.updateEvent(e,this.props.id,this.props.name)}/><DeleteIcon onClick={this.props.delEvent} /></span>
                        </li>

                    </ul>
                </div>


    );
    }
}
export default ItemList