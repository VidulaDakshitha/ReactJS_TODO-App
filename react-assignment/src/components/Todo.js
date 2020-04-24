import React,{Component} from 'react';


import bootstrap from 'bootstrap/dist/css/bootstrap.css'
import ItemList from './ItemList'
import DeleteItem from "./DeleteItem";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import '../App.css'

class Todo extends Component {
    constructor(props){
        super(props);
        this.state={
            data:"", // to save the input value
            data2:[], // to save the list
            data3:[],
            data4:[],
            count:0, // to add a id
            btnValve:false,
            index:" ", // to save index
            user:[]


        }
        this.UpdateValue=this.UpdateValue.bind(this);
       this.listSubmit=this.listSubmit.bind(this);
       this.completeItem=this.completeItem.bind(this);

    }

    //button on change event
  changeEvent=(e)=>{
        if(e.target.value===" ")
        {
            alert("Please provive valid input");
        }else{
        this.setState({

           data:e.target.value,

        });
        console.log(this.state.data)
        }
    };

    // to add or change the list
    listSubmit=(e)=>{

        e.preventDefault();
        // only when button is false (not updating)
        if(this.state.btnValve===false)
        {
        this.setState({
            count:this.state.count+1
        })
        let events={
            name:this.state.data,
                id:this.state.count
                }
                this.state.data=" "
       this.setState({

            data2:[events,...this.state.data2]

    });

        console.log(this.state.data2);
        //when the value is updating
        }else{
            this.state.user=Object.assign([],this.state.data2[this.state.index]);
            console.log("user's name"+this.state.user.name)

            this.setState({
                    data:this.state.user.name
                },()=>console.log("hello2"+this.state.data)
            );



            this.state.user.name=this.state.data;

            this.state.data3=Object.assign([],this.state.data2)

            this.state.data3[this.state.index]=this.state.user


            console.log("hello"+this.state.user.name)

                this.setState({
                    data2:this.state.data3,
                    btnValve:false
                })

        }
    }


// For deleting
    DeleteEvent=(index)=>
    {
    const copy=Object.assign([],this.state.data2);
        copy.splice(index,1);
        this.setState({
            data2:copy
        },()=>console.log("del"+this.state.data2))

        return copy;

    }

    //for updating
    UpdateValue=(e,id,name)=>
    {
        //button value is set to true
        this.setState({
            btnValve:true,
            data:name
        })
        this.state.index=this.state.data2.findIndex((res)=>{
            return res.id===id
        });
        console.log("index"+this.state.index)
    }


    completeItem=(id,index)=>{
console.log("id val"+index)

        const index1=this.state.data2.findIndex((res)=>{
            return res.id===index
        });

        const val=Object.assign([],this.state.data2[index1]);
        console.log("id name"+val.name)
       let eventCom={
            id1:index1,
            name:val.name
        }
        this.setState({
            data4:[eventCom,...this.state.data4]
        })

     const copy1=Object.assign([],this.state.data2);
        console.log("copy1 before splice"+copy1)
        copy1.splice(id,1);
        console.log("copy1 after splice"+copy1)
        this.setState({
            data2:copy1
        },()=>console.log(this.state.data2))


      /*  const index1=this.state.data2.findIndex((res)=>{
            return res.id===id
        });*/




    }

    DeleteEventComp=(index)=>
    {
        const copy=Object.assign([],this.state.data4);
        copy.splice(index,1);
        this.setState({
            data4:copy
        },()=>console.log("del"+this.state.data4))



    }


  render(){
      return(<div className="container container1" style={{position:"absolute",padding:10,marginTop:15}}>
          <div className="d-flex justify-content-center">
          <div style={{backgroundColor:"white",padding:10,marginTop:25,borderRadius:20,fontSize:'small'}} className="col-md-8 text-center">
              <h3>Todo App</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt massa nec mattis aliquam. Vestibulum faucibus suscipit molestie. Mauris vel scelerisque arcu. Nunc at mi nisi. Nullam in lorem nisl. Fusce consequat tortor vel ante semper tempus.</p>


              <p><EditIcon/> Used to edit an event</p>
              <p><DeleteIcon/> Used to delete in-completed event</p>
              <p>**Click on event name to complete**</p>
              <p><DeleteIcon style={{color:'red'}}/> Used to delete completed event</p>

          </div>
          </div>

          <div className="row" >
        <div className="container-fluid col-4" style={{marginTop:40}}>

          <form onSubmit={this.listSubmit}>
              <div className="form-group">
                  <label style={{color:"white"}} htmlFor="exampleInputEmail1"><b>Add Event</b></label>
                  <input type="text" className="form-control" id="exampleInputEmail1"
                         placeholder="Enter Event" onChange={this.changeEvent} value={this.state.data} />

              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
              </form>
        </div>
    <div className="container-fluid col-4" style={{ marginTop:40}}>
        <p style={{color:"white"}} className="text-center"><b>Items List</b></p>
              {this.state.data2.map((res,index)=>
                  <ItemList key={res.id}
                            delEvent={this.DeleteEvent.bind(this,index)} name={res.name} id={res.id}
                            compItem={this.completeItem.bind(this,index)}
                            updateEvent={this.UpdateValue}
                  >
                  </ItemList>
              )}

              {this.state.data4.reverse().map((res,index)=>
                  <DeleteItem key={res.id}
                              delCompEvent={this.DeleteEventComp.bind(this,index)} name={res.name} id={res.id}

                  >
                  </DeleteItem>
              )}
    </div>
          </div>





      </div>);
  }

}
export default Todo;