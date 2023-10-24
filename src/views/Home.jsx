import { Card } from "../components/Card"
import { PizzasContext } from "../context/PizzasContext";
import { useContext } from "react";

export const Home = () => {
    const { pizzas, setPizzas } = useContext(PizzasContext);

    return (
        <>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                {
                    pizzas.map((pizza, i) => (
                        <div className="col" key={i}>
                            <Card pizza={pizza}></Card>
                        </div>
                    ))
                }
            </div>
        </>
    )
}