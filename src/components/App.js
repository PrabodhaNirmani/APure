import React from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';

import data from '../testData';

class App extends React.Component {
 
    state = {
        pageheader : 'Naming Contests',
        contests : []
    }

    componentDidMount(){
        //register timers, listeners
        this.setState({
            contests : data.contests
        });
    }

    componentWillUnmount(){
        //unregister timers, listeners
        
    }

    render(){
        return (
            <div className="App">
                <Header message= {this.state.pageheader}/>
                <div>

                    {this.state.contests.map(contest => 
                        
                        <ContestPreview {...contest} key={contest.id}/>
                    
                    
    
                    )}
                </div>
            </div>
        );
    }
};

export default App;

