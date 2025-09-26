import TeamCard from "./TeamCard";

let team = [{},{},{},{},{},{}];

export default function SideDisplay(){
    console.log(team.length);
    return(
        <div className="side-display">
        {team.map(() => (
            <TeamCard
                
            />
        ))}
        </div>

    )
}