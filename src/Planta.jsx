import styled from "styled-components";
import {useState} from "react";

const Plantando = styled.div`
  display: block;
  font-size: 40px;
  font-family:arial;
`

const GirassolButton = styled.button`
  background: thistle;
  cursor: pointer;
border-radius: 10%;
`;


const PlantaComponente = (props) => {
    const [direçãoPlanta, setPlantaDir] = useState("sul");

    return (
        <>
            <Plantando>
                {props.tiposPlanta} esta virado para o  {direçãoPlanta}
            </Plantando>
            <GirassolButton onClick={() => setPlantaDir("norte") }>
                clique aqui
            </GirassolButton>
        </>
    )
};

export default PlantaComponente;
