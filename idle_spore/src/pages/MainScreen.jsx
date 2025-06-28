import Button from "@mui/material/Button";

function MainScreen({EvolutionPoints})
{
    return(
        <div>
            <h3>Welcome to Idle Spore</h3>
            <p>Current save : {EvolutionPoints}</p>
            <Button variant = "outlined">Launch Game</Button>
        </div>
    );
}
export default MainScreen;