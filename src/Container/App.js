import React,{Component} from 'react';
import { connect } from 'react-redux';
import Cardlist from '../Component/Cardlist';
//import Robot from './Robot';
import Searchbox from '../Component/Searchbox';
//import { robo } from './formrobo';
import Scroll from '../Component/Scroll'
import { setSerachfield,requestRobots } from '../Action';

const mapStateToProps = state =>{
    return {
        searchfield : state.serachRobots.searchfield,
        robo : state.requestRobot.robo,
        isPending : state.requestRobot.isPending,
        error : state.requestRobot.error
    }
   }
   const mapDispatchToProps = dispatch =>{
    return {
       
            onserachchange:(event)=>dispatch(setSerachfield(event.target.value)),
            onrequestChange:()=>dispatch(requestRobots())

    }
   }
class App extends Component{


   

   componentDidMount(){
 this.props.onrequestChange();
   }

    render(){
       // alert("hai");
       //const {robo }=this.state;
       const { searchfield,onserachchange,robo,isPending} =this.props;
        const filterrobo=robo.filter(robots=>{
            return robots.name.toLowerCase().includes(searchfield.toLowerCase());
           })
           return isPending ?
                 <h1>Loading</h1>  :           //ternery oprator
          
                <div className='tc'>
                    <h1>ROBOFRIENDS</h1>
                    <Searchbox searchchange={onserachchange}/>
                    <Scroll>
                    <Cardlist robo={ filterrobo }/>
                    </Scroll>
                    
                    
                </div>
            
           
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);