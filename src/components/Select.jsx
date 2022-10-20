import React from "react";
import SelectCard from "./SelectCard";
import bulbasaur from "../images/bulbasaur.png";
import charizard from "../images/charizard.png";
import dragapult from "../images/dragapult.png";
import garchomp from "../images/garchomp.png";
import gardevoir from "../images/gardevoir.png";
import gengar from "../images/gengar.png";
import greninja from "../images/greninja.png";
import lucario from "../images/lucario.png";
import lugia from "../images/lugia.png";
import mimikyu from "../images/mimikyu.png";
import rayquaza from "../images/rayquaza.png";
import sylveon from "../images/sylveon.png";
import toxtricity from "../images/toxtricity.png";
import tyranitar from "../images/tyranitar.png";
import umbreon from "../images/umbreon.png";

const Select = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-4 grid sm:grid-cols-3 lg:grid-cols-5 gap-4">
      <SelectCard
        bg={bulbasaur}
        alt="bulbasaur"
        text="Bulbasaur"
        value="bulbasaur"
      />
      <SelectCard
        bg={charizard}
        alt="charizard"
        text="Charizard"
        value="charizard"
      />
      <SelectCard
        bg={dragapult}
        alt="dragapult"
        text="Dragapult"
        value="dragapult"
      />
      <SelectCard
        bg={garchomp}
        alt="garchomp"
        text="Garchomp"
        value="garchomp"
      />
      <SelectCard
        bg={gardevoir}
        alt="gardevoir"
        text="Gardevoir"
        value="gardevoir"
      />

      <SelectCard bg={gengar} alt="gengar" text="Gengar" value="gengar" />
      <SelectCard
        bg={greninja}
        alt="greninja"
        text="Greninja"
        value="greninja"
      />
      <SelectCard bg={lucario} alt="lucario" text="Lucario" value="lucario" />
      <SelectCard bg={lugia} alt="lugia" text="Lugia" value="lugia" />
      <SelectCard bg={mimikyu} alt="mimikyu" text="Mimikyu" value="mimikyu" />

      <SelectCard
        bg={rayquaza}
        alt="rayquaza"
        text="Rayquaza"
        value="rayquaza"
      />
      <SelectCard bg={sylveon} alt="sylveon" text="Sylveon" value="sylveon" />
      <SelectCard
        bg={toxtricity}
        alt="toxtricity"
        text="Toxtricity"
        value="toxtricity"
      />
      <SelectCard
        bg={tyranitar}
        alt="tyranitar"
        text="Tyranitar"
        value="tyranitar"
      />
      <SelectCard bg={umbreon} alt="umbreon" text="Umbreon" value="umbreon" />
    </div>
  );
};

export default Select;
