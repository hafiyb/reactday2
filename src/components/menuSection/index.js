import react from 'react'

export default class MenuSection extends react.Component{
    constructor(props){
        super(props)
    }
    render(){   
        return(
            <div style={{margin:'20px 0'}}>
                <h1>{this.props.sectionTitle}</h1>
                {this.props.children}
            </div>
            
            
        )
    }
}