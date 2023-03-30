import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, NavLink, Switch, Route, Link } from "react-router-dom";
import '../../styles/styles.scss'

const Header = () => {
    return (
        <div>
            <h1>Portfolio</h1>
            <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
            <NavLink to="/portfolio" activeClassName="is-active" exact={true}>Portfolio</NavLink>
            <NavLink to="/contact" activeClassName="is-active" exact={true}>Contact</NavLink>
        </div>
    )
}

const PortfolioPage = () => {
    return (
        <div>
            <h1>My Work</h1>
            <p>Check out the following things I've done:</p>
            <NavLink to="/portfolio/item-one">Item one</NavLink>
            <NavLink to="/portfolio/item-two">Item two</NavLink>
        </div>
    )
}

const HomePage = () => {
    return (
        <div>
            <p>This is the homepage of the site</p>
        </div>
    )
}

const ContactPage = () => {
    return (
        <div>
            <p>You can reach me at:</p>
        </div>
    )
}

const ErrorPage = () => {
    return (
        <div>
            404 ERRORAS NOT FOUNDAS <Link to="/">GRĮŽK Į PRADŽIĄ</Link>
        </div>
    )
}

const PortfolioPageItem = (props) => {
    console.log(props)
    return (
        <div>
            <h1>A thing i've done</h1>
            <p>This is the {props.match.params.id} you were looking for.</p>
        </div>
    )
}

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path="/" component={HomePage} exact={true}/>
                    <Route path="/portfolio" component={PortfolioPage} exact={true}/>
                    <Route path="/portfolio/:id" component={PortfolioPageItem}/>
                    <Route path="/contact" component={ContactPage}/>
                    <Route component={ErrorPage}/>
                </Switch>
            </div>    
        </BrowserRouter>
    )
}

ReactDOM.render(<AppRouter />, document.getElementById("app"));