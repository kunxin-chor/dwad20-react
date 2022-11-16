import React from 'react'

import AddRecipe from './pages/AddRecipe'
import AllRecipes from './pages/AllRecipes'

export default class RecipeBook extends React.Component {
    state = {
        page: 'list'
    }

    renderPage = () => {
        if (this.state.page === "list") {
            return <AllRecipes/>
        } else {
            return <AddRecipe switchPage={this.switchPage}/>
        }
    }

    switchPage = (newPage) => {
        this.setState({
            page: newPage
        })
    }

    render() {
        return (<React.Fragment>
            <nav className="navbar navbar-expand-sm bg-light">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" 
                               href="#"
                               onClick={()=>{
                                this.switchPage("list")
                               }}
                            >List All</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" 
                               href="#"
                               onClick={()=>{
                                  this.switchPage("add")
                               }}
                            >Add</a>
                        </li>
                    </ul>
                </div>
            </nav>
            {this.renderPage()}
        </React.Fragment>)

    }
}