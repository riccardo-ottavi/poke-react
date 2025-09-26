
let endPoint = "https://pokeapi.co/api/v2/pokemon/ditto"

function getDitto(){
    return(
        axios.get(endPoint)
            .then(response =>{
                const ditto = response.data
                console.log("siamo qua", ditto)
                console.log
            }).catch(error => 
                console.error(error)
            )
    )
}

export default function TeamCard(){
    getDitto()
    return(
            <div className="team-card">
                
            </div>
    )
}