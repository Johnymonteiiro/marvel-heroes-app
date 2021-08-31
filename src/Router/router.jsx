import { BrowserRouter,Switch,Route } from "react-router-dom"
import { Comics } from "../Pages/Comics"
import { Main } from "../Pages/Home"
import { Favorites } from "../Pages/Favorite"

export const Router = () =>{

    return(
        <BrowserRouter>
          <Switch>
              <Route path="/" exact component={Main} />
              <Route path="/comics" exact component={Comics} />
              <Route path="/favorite" exact component={Favorites} />
          </Switch>
        </BrowserRouter>
    )
}