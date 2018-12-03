import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Done from 'material-ui/svg-icons/action/done';
import IconButton from 'material-ui/IconButton';
import Snackbar from 'material-ui/Snackbar';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import Wink from '../images/tenor.gif';


type Props = {
    link: string,
    image: any,
    name: string,
    move: string,
    club: string
};

type State = {
    moveDone: boolean,
    open: boolean
}

const options = {
    title: 'Title',
    message: 'Message',
    buttons: [
        {
            label: 'Yes',
            onClick: () => alert('Click Yes')
        },
        {
            label: 'No',
            onClick: () => alert('Click No')
        }
    ],
    childrenElement: () => <div />,
    customUI: ({ title, message, onClose }) => <div>Custom UI</div>,
    willUnmount: () => {}
}



export default class PlayerCard extends Component<Props, State> {


    constructor(props: Props) {
        super(props);
        this.state = {
            moveDone: localStorage.getItem(this.props.move),
            open: false,
        };
    }

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };


    completeMove = () => {
        alert("Show select individual");
    };

    onClick = () => {
        window.location.href = this.props.link;
    };

    render() {

        let doIt = this.state.moveDone;
        let doitButton = <FlatButton className="normal-button" label="Click here to learn more about me" onClick={this.completeMove}/>;
        let buttons =   this.props.name ? <CardActions>
                {doitButton}
        </CardActions> : null;


       return (
       <div>
           <Card className="overall-card">
               <CardHeader
                   title={this.props.name}
                   subtitle={this.props.club}
                   titleStyle={{
                       fontSize: '30px',
                       color: 'coral'
                   }}
               />
               <CardMedia
               >
                   <img src={this.props.image} alt=""  className="cardImage" onClick={this.onClick}/>
               </CardMedia>
               <CardTitle title={this.props.move}/>
               {buttons}

           </Card>
           <Snackbar
               open={this.state.open}
               message="Well done you have complete the move. Now you have to show it in training. The next one will be available soon. Keep practicing !!"
               autoHideDuration={10000}
               onRequestClose={this.handleRequestClose}
           />
       </div>



        );
    }


}


