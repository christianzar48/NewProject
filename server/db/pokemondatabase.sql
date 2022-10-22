-- Crear tabla sin datos

CREATE TABLE pokemones (name varchar, id varchar, type1 varchar, type2 varchar, weight varchar, height varchar, move1 varchar, move2 varchar, info varchar,hp varchar,atk varchar,def varchar,satk varchar,sdef varchar,spd varchar,color varchar,color2 varchar,color3 varchar, trainer_id int4)

-- Insertar datos en la tabla (Ignorar si se quiere iniciar la Pokédex sin ningún Pokémon registrado)

INSERT INTO pokemones
(name, id, type1, type2, weight, height, move1, move2, info, hp, atk, def, satk, sdef, spd, color, color2, color3, img, trainer_id)
VALUES('Bulbasaur', '001', 'Grass', 'Poison', '6,9', '0.7', 'Chlorophyll', 'Overgrow', 'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.', '045', '049', '049', '065', '065', '045', '#74CB48', '#A43E9E', '#EAF7E3', 'http://localhost:3001/Imagenes/Bulbasaur.png', NULL);
INSERT INTO pokemones
(name, id, type1, type2, weight, height, move1, move2, info, hp, atk, def, satk, sdef, spd, color, color2, color3, img, trainer_id)
VALUES('Ivysaur', '002', 'Grass', 'Poison', '13,0', '1.0', 'Overgrow', 'Chlorophyll', 'Its blossom on its back grows larger in the sunlight. As the blossom grows, Ivysaur loses the ability to stand on its hind legs. The blossom produces a pleasant smell when it is ready to bloom, it means Ivysaur is ready to evolve into Venusaur.', '60', '62', '63', '80', '80', '60', '#2bd11f', '#bf33e6', '#88d987', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png', NULL);
INSERT INTO pokemones
(name, id, type1, type2, weight, height, move1, move2, info, hp, atk, def, satk, sdef, spd, color, color2, color3, img, trainer_id)
VALUES('Venusaur', '003', 'Grass', 'Poison', '100,0', '2.0', 'Mega Drain', 'Solar Beam', ' The plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.', '80', '82', '83', '100', '100', '80', '#74CB48', '#A43E9E', '#EAF7E3', 'https://images.wikidexcdn.net/mwuploads/wikidex/b/be/latest/20160309230456/Venusaur.png', NULL);
INSERT INTO pokemones
(name, id, type1, type2, weight, height, move1, move2, info, hp, atk, def, satk, sdef, spd, color, color2, color3, img, trainer_id)
VALUES('Charmander', '004', 'Fire', NULL, '8,5', '0.6', 'Mega-Punch', 'Fire-Punch', 'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.', '039', '052', '043', '060', '050', '065', '#F57D31', NULL, '#FDE5D6', 'http://localhost:3001/Imagenes/Charmander.png', NULL);
INSERT INTO pokemones
(name, id, type1, type2, weight, height, move1, move2, info, hp, atk, def, satk, sdef, spd, color, color2, color3, img, trainer_id)
VALUES('Charmeleon', '005', 'Fire', '', '19,0', '1.1', 'Blaze', 'Solar Power', '', '58', '64', '58', '80', '65', '80', '#e97516', '#d4aa11', '#e8a64a', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png', NULL);
INSERT INTO pokemones
(name, id, type1, type2, weight, height, move1, move2, info, hp, atk, def, satk, sdef, spd, color, color2, color3, img, trainer_id)
VALUES('Charizard', '006', 'Fire', 'Flying', '90,5', '1.7', 'Blaze', 'Solar Power', 'Spits fire that is hot enough to melt boulders. Known to cause forest fires unintentionally.', '78', '84', '78', '109', '85', '100', '#ff7300', '#bb8ad6', '#FDE5D6', 'https://archives.bulbagarden.net/media/upload/7/7e/006Charizard.png', NULL);
INSERT INTO pokemones
(name, id, type1, type2, weight, height, move1, move2, info, hp, atk, def, satk, sdef, spd, color, color2, color3, img, trainer_id)
VALUES('Squirtle', '007', 'Water', NULL, '9,0', '0.5', 'Torrent', 'Rain-Dish', 'When it retracts its long neck into its shell, it squirts out water with vigorous force.', '044', '048', '065', '050', '064', '043', '#6493EB', NULL, '#E0E9FB', 'http://localhost:3001/Imagenes/Squirtle.png', NULL);
INSERT INTO pokemones
(name, id, type1, type2, weight, height, move1, move2, info, hp, atk, def, satk, sdef, spd, color, color2, color3, img, trainer_id)
VALUES('Wartortle', '008', 'Water', '', '22,5', '1.0', 'Torrent', 'Rain Dish', 'Often hides in water to stalk unwary prey. For swimming fast, it moves its ears to maintain balance.', '59', '63', '80', '65', '80', '58', '#01a3f4', '#42b9c2', '#67bfcb', 'https://archives.bulbagarden.net/media/upload/0/0c/008Wartortle.png', NULL);
INSERT INTO pokemones
(name, id, type1, type2, weight, height, move1, move2, info, hp, atk, def, satk, sdef, spd, color, color2, color3, img, trainer_id)
VALUES('Blastoise', '009', 'Water', '', '85,5', '1.6', 'Torrent', 'Rain Dish', 'A brutal Pokémon with pressurized water jets on its shell. They are used for high speed tackles.', '79', '83', '100', '85', '105', '78', '#02c6ed', '#3a9896', '#8ad2db', 'https://archives.bulbagarden.net/media/upload/thumb/0/02/009Blastoise.png/250px-009Blastoise.png', NULL);
INSERT INTO pokemones
(name, id, type1, type2, weight, height, move1, move2, info, hp, atk, def, satk, sdef, spd, color, color2, color3, img, trainer_id)
VALUES('Caterpie', '010', 'Bug', '', '2,9', '0.3', 'Shield Dust', 'Run Away', 'Its short feet are tipped with suction pads that enable it to tirelessly climb slopes and walls.', '45', '30', '35', '20', '20', '45', '#A7B723', '#A891EC', '#EDF1D3', 'https://archives.bulbagarden.net/media/upload/thumb/5/5d/010Caterpie.png/250px-010Caterpie.png', NULL);
INSERT INTO pokemones
(name, id, type1, type2, weight, height, move1, move2, info, hp, atk, def, satk, sdef, spd, color, color2, color3, img, trainer_id)
VALUES('Metapod', '011', 'Bug', '', '9,9', '0.7', 'Harden', '', 'This Pokémon is vulnerable to attack while its shell is soft, exposing its weak and tender body.', '50', '20', '55', '25', '25', '30', '#a0ce22', '#44b215', '#b1d991', 'https://archives.bulbagarden.net/media/upload/thumb/c/cd/011Metapod.png/250px-011Metapod.png', NULL);
INSERT INTO pokemones
(name, id, type1, type2, weight, height, move1, move2, info, hp, atk, def, satk, sdef, spd, color, color2, color3, img, trainer_id)
VALUES('Butterfree', '012', 'Bug', 'Flying', '32,0', '1.1', 'Compound-Eyes', 'Tinted-Lens', 'In battle, it flaps its wings at great speed to release highly toxic dust into the air.', '060', '045', '050', '090', '080', '070', '#A7B723', '#A891EC', '#EDF1D3', 'http://localhost:3001/Imagenes/Butterfree.png', NULL);
INSERT INTO pokemones
(name, id, type1, type2, weight, height, move1, move2, info, hp, atk, def, satk, sdef, spd, color, color2, color3, img, trainer_id)
VALUES('Weedle', '013', 'Bug', 'Poison', '3,2', '0.3', 'Shield Dust', 'Run Away', 'Often found in forests, eating leaves. It has a sharp venomous stinger on its head.', '40', '35', '30', '20', '20', '50', '#85b135', '#b625b1', '#c6f9b8', 'https://archives.bulbagarden.net/media/upload/thumb/d/df/013Weedle.png/250px-013Weedle.png', NULL);
INSERT INTO pokemones
(name, id, type1, type2, weight, height, move1, move2, info, hp, atk, def, satk, sdef, spd, color, color2, color3, img, trainer_id)
VALUES('Kakuna', '014', 'Bug', 'Poison', '10,0', '0.6', 'Shed Skin', '', 'Almost incapable of moving, this Pokémon can only harden its shell to protect itself from predators.', '45', '25', '50', '25', '25', '35', '#9bd322', '#bb48db', '#b3d4a1', 'https://archives.bulbagarden.net/media/upload/thumb/f/f0/014Kakuna.png/250px-014Kakuna.png', NULL);
INSERT INTO pokemones
(name, id, type1, type2, weight, height, move1, move2, info, hp, atk, def, satk, sdef, spd, color, color2, color3, img, trainer_id)
VALUES('Beedrill', '015', 'Bug', 'Poison', '29,5', '1.0', 'Swarm', 'Sniper', 'Flies at high speed and attacks using its large venomous stingers on its forelegs and tail.', '65', '80', '40', '45', '80', '75', '#92c011', '#ac45e3', '#dfe585', 'https://archives.bulbagarden.net/media/upload/thumb/6/61/015Beedrill.png/250px-015Beedrill.png', NULL);
INSERT INTO pokemones
(name, id, type1, type2, weight, height, move1, move2, info, hp, atk, def, satk, sdef, spd, color, color2, color3, img, trainer_id)
VALUES('Pidgey', '016', 'Normal', 'Flying', '1,8', '0.3', 'Keen Eye', 'Big Pecks', 'A common sight in forests and woods. It flaps its wings at ground level to kick up blinding sand.', '40', '45', '40', '35', '35', '56', '#a8b569', '#ad74b4', '#c19fc1', 'https://archives.bulbagarden.net/media/upload/thumb/5/55/016Pidgey.png/250px-016Pidgey.png', NULL);
INSERT INTO pokemones
(name, id, type1, type2, weight, height, move1, move2, info, hp, atk, def, satk, sdef, spd, color, color2, color3, img, trainer_id)
VALUES('Pidgeotto', '017', 'Normal', 'Flying', '30,0', '1.1', 'Tangled Feet', 'Big Pecks', 'Very protective of its sprawling territorial area, this Pokémon will fiercely peck at any intruder.', '63', '60', '55', '50', '50', '71', '#a9c153', '#d789d4', '#ced2a3', 'https://archives.bulbagarden.net/media/upload/thumb/7/7a/017Pidgeotto.png/250px-017Pidgeotto.png', NULL);
INSERT INTO pokemones
(name, id, type1, type2, weight, height, move1, move2, info, hp, atk, def, satk, sdef, spd, color, color2, color3, img, trainer_id)
VALUES('Pidgeot', '018', 'Normal', 'Flying', '39,5', '1.5', 'Tangled Feet', 'No Guard', '	When hunting, it skims the surface of water at high speed to pick off unwary prey such as Magikarp.', '83', '80', '75', '70', '70', '91', '#a3ce2c', '#b568df', '#dbe995', 'https://archives.bulbagarden.net/media/upload/thumb/5/57/018Pidgeot.png/250px-018Pidgeot.png', NULL);
INSERT INTO pokemones
(name, id, type1, type2, weight, height, move1, move2, info, hp, atk, def, satk, sdef, spd, color, color2, color3, img, trainer_id)
VALUES('Rattata', '019', 'Normal', '', '3,5', '0.3', 'Guts', 'Hustle', '	Bites anything when it attacks. Small and very quick, it is a common sight in many places.', '30', '56', '35', '25', '35', '72', '#a0a82e', '#322525', '#dcea95', 'https://archives.bulbagarden.net/media/upload/thumb/4/46/019Rattata.png/250px-019Rattata.png', NULL);
INSERT INTO pokemones
(name, id, type1, type2, weight, height, move1, move2, info, hp, atk, def, satk, sdef, spd, color, color2, color3, img, trainer_id)
VALUES('Rattata (Alola)', '019.2', 'Dark', 'Normal', '3,8', '0.3', 'Gluttony', 'Thick Fat', 'In Alola, Rattata has a dual-type Dark/Normal regional form. In Pokémon Sun, Moon, Ultra Sun, and Ultra Moon, it evolves into Alolan Raticate when leveled up at night starting at level 20.', '30', '56', '35', '25', '35', '72', '#6d432c', '#879b22', '#daac5d', 'https://archives.bulbagarden.net/media/upload/thumb/9/91/019Rattata-Alola.png/600px-019Rattata-Alola.png', NULL);
INSERT INTO pokemones
(name, id, type1, type2, weight, height, move1, move2, info, hp, atk, def, satk, sdef, spd, color, color2, color3, img, trainer_id)
VALUES('Raticate', '020', 'Normal', '', '18,5', '0.7', 'Guts', 'Hustle', 'It uses its whiskers to maintain its balance. It apparently slows down if they are cut off.', '55', '81', '60', '50', '70', '97', '#86a027', '#b4418f', '#c3db80', 'https://archives.bulbagarden.net/media/upload/thumb/f/f4/020Raticate.png/250px-020Raticate.png', NULL);
INSERT INTO pokemones
(name, id, type1, type2, weight, height, move1, move2, info, hp, atk, def, satk, sdef, spd, color, color2, color3, img, trainer_id)
VALUES('Raticate (Alola)', '020.2', 'Dark', 'Normal', '25,5', '0.7', 'Gluttony', 'Thick Fat', 'In Alola, Raticate has a dual-type Dark/Normal regional form. In Pokémon Sun, Moon, Ultra Sun, and Ultra Moon, it evolves from Alolan Rattata when leveled up at night starting at level 20.', '75', '71', '70', '40', '80', '77', '#6a4b16', '#99c328', '#e5ce7b', 'https://archives.bulbagarden.net/media/upload/thumb/7/71/020Raticate-Alola.png/600px-020Raticate-Alola.png', NULL);
INSERT INTO pokemones
(name, id, type1, type2, weight, height, move1, move2, info, hp, atk, def, satk, sdef, spd, color, color2, color3, img, trainer_id)
VALUES('Spearow', '021', 'Normal', 'Flying', '2,0', '0.3', 'Keen Eye', 'Sniper', 'Eats bugs in grassy areas. It has to flap its short wings at high speed to stay airborne.', '40', '60', '30', '31', '31', '70', '#b4d025', '#e57be1', '#c7e6a8', 'https://archives.bulbagarden.net/media/upload/thumb/8/8b/021Spearow.png/250px-021Spearow.png', NULL);
INSERT INTO pokemones
(name, id, type1, type2, weight, height, move1, move2, info, hp, atk, def, satk, sdef, spd, color, color2, color3, img, trainer_id)
VALUES('Fearow', '022', 'Normal', 'Flying', '38,0', '1.2', 'Keen Eye', 'Sniper', 'With its huge and magnificent wings, it can keep aloft without ever having to land for rest.', '65', '90', '65', '61', '61', '100', '#9fc125', '#cb5fd3', '#bad28e', 'https://archives.bulbagarden.net/media/upload/thumb/a/a0/022Fearow.png/250px-022Fearow.png', NULL);
INSERT INTO pokemones
(name, id, type1, type2, weight, height, move1, move2, info, hp, atk, def, satk, sdef, spd, color, color2, color3, img, trainer_id)
VALUES('Ekans', '023', 'Poison', '', '6,9', '2.0', 'Intimidate', 'Unnerve', 'Moves silently and stealthily. Eats the eggs of birds, such as Pidgey and Spearow, whole.', '35', '60', '44', '40', '54', '55', '#a514c2', '#934848', '#e996e6', 'https://archives.bulbagarden.net/media/upload/thumb/f/fa/023Ekans.png/250px-023Ekans.png', NULL);
INSERT INTO pokemones
(name, id, type1, type2, weight, height, move1, move2, info, hp, atk, def, satk, sdef, spd, color, color2, color3, img, trainer_id)
VALUES('Arbok', '024', 'Poison', '', '65,0', '3.5', 'Shed Skin', 'Unnerve', 'It is rumored that the ferocious warning markings on its belly differ from area to area.', '60', '85', '69', '65', '79', '80', '#a92ec2', '#a256bd', '#d592e3', 'https://archives.bulbagarden.net/media/upload/thumb/c/cd/024Arbok.png/250px-024Arbok.png', NULL);
INSERT INTO pokemones
(name, id, type1, type2, weight, height, move1, move2, info, hp, atk, def, satk, sdef, spd, color, color2, color3, img, trainer_id)
VALUES('Pikachu', '025', 'Electric', '', '6,0', '0.4', 'Mega-Punch', 'Pay-Day', 'Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.', '035', '055', '040', '050', '050', '090', '#F9Cf30', NULL, '#FEF5D6', 'http://localhost:3001/Imagenes/Pikachu.png', NULL);
INSERT INTO pokemones
(name, id, type1, type2, weight, height, move1, move2, info, hp, atk, def, satk, sdef, spd, color, color2, color3, img, trainer_id)
VALUES('Raichu', '026', 'Electric', '', '30,0', '0.8', 'Static', 'Lightning Rod', 'Its long tail serves as a ground to protect itself from its own high voltage power.', '60', '90', '55', '90', '80', '100', '#e8e111', '#68c08a', '#d9dd97', 'https://archives.bulbagarden.net/media/upload/thumb/8/88/026Raichu.png/250px-026Raichu.png', NULL);
INSERT INTO pokemones
(name, id, type1, type2, weight, height, move1, move2, info, hp, atk, def, satk, sdef, spd, color, color2, color3, img, trainer_id)
VALUES('Raichu (Alola)', '026.2', 'Electric', 'Psychic', '21,0', '0.7', 'Surge Surfer', '', 'In Alola, Raichu has a dual-type Electric/Psychic regional form. It evolves from Pikachu when exposed to a Thunder Stone.', '60', '85', '50', '95', '85', '110', '#e4e708', '#e566db', '#c8d298', 'https://archives.bulbagarden.net/media/upload/3/3a/026Raichu-Alola.png', NULL);
INSERT INTO pokemones
(name, id, type1, type2, weight, height, move1, move2, info, hp, atk, def, satk, sdef, spd, color, color2, color3, img, trainer_id)
VALUES('Growlithe', '058', 'Fire', '', '19,0', '0.7', 'Intimidation', 'Flash Fire', 'Growlithe, a Puppy Pokémon of pleasant demeanor and great diligence. It drives enemies away with barks and bites.', '55', '70', '45', '70', '50', '60', '#f49510', '', '#FDE5D6', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/058.png', NULL);
INSERT INTO pokemones
(name, id, type1, type2, weight, height, move1, move2, info, hp, atk, def, satk, sdef, spd, color, color2, color3, img, trainer_id)
VALUES('Arcanine', '059', 'Fire', '', '155,0', '1.9', 'Flash Fire', 'Fire Blast', 'Arcanine, a Legendary Pokémon. The evolved form of Growlithe. Arcanine is known for its bravery and fierce loyalty. Growlithe evolves into Arcanine through its use of a Fire Stone.', '384', '350', '284', '328', '284', '317', '#ff7300', '#af8141', '#efc44e', 'https://archives.bulbagarden.net/media/upload/thumb/b/b8/059Arcanine.png/250px-059Arcanine.png', NULL);
INSERT INTO pokemones
(name, id, type1, type2, weight, height, move1, move2, info, hp, atk, def, satk, sdef, spd, color, color2, color3, img, trainer_id)
VALUES('Gastly', '092', 'Ghost', 'Poison', '0,1', '1.3', 'Levitate', NULL, 'Born from gases, anyone would faint if engulfed by its gaseous body, which contains poison.', '030', '035', '030', '100', '035', '080', '#70559B', '#A43E9E', '#E2DDEB', 'http://localhost:3001/Imagenes/Gastly.png', NULL);
INSERT INTO pokemones
(name, id, type1, type2, weight, height, move1, move2, info, hp, atk, def, satk, sdef, spd, color, color2, color3, img, trainer_id)
VALUES('Ditto', '132', 'Normal', NULL, '4,0', '0.3', 'Limber', 'Imposter', 'It can reconstitute its entire cellular structure to change into what it sees, but it returns to normal when it relaxes.', '048', '048', '048', '048', '048', '048', '#AAA67F', NULL, '#EEEDE5', 'http://localhost:3001/Imagenes/Ditto.png', NULL);
INSERT INTO pokemones
(name, id, type1, type2, weight, height, move1, move2, info, hp, atk, def, satk, sdef, spd, color, color2, color3, img, trainer_id)
VALUES('Eevee', '133', 'Normal', '', '6,5', '0.3', 'Adaptability', 'Anticipation', 'Its genetic code is irregular. It may mutate if it is exposed to radiation from Evolution stones.', '55', '55', '50', '45', '65', '55', '#ceae3b', '#963131', '#e2c99c', 'https://archives.bulbagarden.net/media/upload/thumb/e/e2/133Eevee.png/250px-133Eevee.png', NULL);
INSERT INTO pokemones
(name, id, type1, type2, weight, height, move1, move2, info, hp, atk, def, satk, sdef, spd, color, color2, color3, img, trainer_id)
VALUES('Vaporeon', '134', 'Water', '', '29,0', '1.0', 'Water Absorb', 'Hydration', 'Lives close to water. Its long tail is ridged with a fin which is often mistaken for a mermaid''s.', '130', '65', '60', '110', '95', '65', '#00a1e6', '#873131', '#82d4e8', 'https://archives.bulbagarden.net/media/upload/thumb/f/fd/134Vaporeon.png/250px-134Vaporeon.png', NULL);
INSERT INTO pokemones
(name, id, type1, type2, weight, height, move1, move2, info, hp, atk, def, satk, sdef, spd, color, color2, color3, img, trainer_id)
VALUES('Jolteon', '135', 'Electric', '', '24,5', '0.8', 'Volt Absorb', 'Quick Feet', 'It accumulates negative ions in the atmosphere to blast out 10000-volt lightning bolts.', '65', '65', '60', '110', '95', '130', '#ffdd00', '#456352', '#e0d985', 'https://archives.bulbagarden.net/media/upload/thumb/b/bb/135Jolteon.png/250px-135Jolteon.png', NULL);
INSERT INTO pokemones
(name, id, type1, type2, weight, height, move1, move2, info, hp, atk, def, satk, sdef, spd, color, color2, color3, img, trainer_id)
VALUES('Flareon', '136', 'Fire', '', '25,0', '0.9', 'Flash Fire', 'Guts', 'When storing thermal energy in its body, its temperature could soar to over 1600 degrees.', '65', '130', '60', '95', '110', '65', '#ff7300', '', '#f4ce7c', 'https://archives.bulbagarden.net/media/upload/thumb/d/dd/136Flareon.png/250px-136Flareon.png', NULL);
INSERT INTO pokemones
(name, id, type1, type2, weight, height, move1, move2, info, hp, atk, def, satk, sdef, spd, color, color2, color3, img, trainer_id)
VALUES('Articuno', '144', 'Ice', 'Flying', '55,4', '1.7', 'Pressure', 'Competitive', '	A legendary bird Pokémon that is said to appear to doomed people who are lost in icy mountains.', '90', '85', '100', '95', '125', '85', '#1ddfed', '#ca65e6', '#98d5e1', 'https://archives.bulbagarden.net/media/upload/thumb/4/4e/144Articuno.png/250px-144Articuno.png', NULL);
INSERT INTO pokemones
(name, id, type1, type2, weight, height, move1, move2, info, hp, atk, def, satk, sdef, spd, color, color2, color3, img, trainer_id)
VALUES('Zapdos', '145', 'Electric', 'Flying', '52,6', '1.6', 'Static', 'Defiant', 'A legendary bird Pokémon that is said to appear from clouds while dropping enormous lightning bolts.', '90', '90', '85', '125', '90', '100', '#ffea00', '#d457e5', '#d7d475', 'https://archives.bulbagarden.net/media/upload/thumb/e/e3/145Zapdos.png/250px-145Zapdos.png', NULL);
INSERT INTO pokemones
(name, id, type1, type2, weight, height, move1, move2, info, hp, atk, def, satk, sdef, spd, color, color2, color3, img, trainer_id)
VALUES('Moltres', '146', 'Fire', 'Flying', '60,0', '2.0', 'Flame Body', 'Berserk', 'Known as the legendary bird of fire. Every flap of its wings creates a dazzling flash of flames.', '90', '100', '90', '125', '85', '90', '#ff7b00', '#d756c0', '#eea663', 'https://archives.bulbagarden.net/media/upload/thumb/1/1b/146Moltres.png/250px-146Moltres.png', NULL);
INSERT INTO pokemones
(name, id, type1, type2, weight, height, move1, move2, info, hp, atk, def, satk, sdef, spd, color, color2, color3, img, trainer_id)
VALUES('Mewtwo', '150', 'Psychic', '', '122,0', '2.0', 'Unnerve', 'Steadfast', 'It was created by a scientist after years of horrific gene splicing and DNA engineering experiments.', '106', '110', '90', '154', '90', '130', '#e14cb9', '#5e2121', '#e5aee3', 'https://archives.bulbagarden.net/media/upload/thumb/7/78/150Mewtwo.png/250px-150Mewtwo.png', NULL);
INSERT INTO pokemones
(name, id, type1, type2, weight, height, move1, move2, info, hp, atk, def, satk, sdef, spd, color, color2, color3, img, trainer_id)
VALUES('Mew', '151', 'Psychic', NULL, '4,0', '0.4', 'Synchronize', NULL, 'When viewed through a microscope, this Pokémon’s short, fine, delicate hair can be seen.', '100', '100', '100', '100', '100', '100', '#FB5584', NULL, '#FEDDE6', 'http://localhost:3001/Imagenes/Mew.png', NULL);
INSERT INTO pokemones
(name, id, type1, type2, weight, height, move1, move2, info, hp, atk, def, satk, sdef, spd, color, color2, color3, img, trainer_id)
VALUES('Espeon', '196', 'Psychic', '', '26,5', '0.9', 'Synchronize', 'Magic Bounce', '	It uses the fine hair that covers its body to sense air currents and predict its enemy''s actions.', '65', '65', '60', '130', '95', '110', '#f64cc0', '#4e2727', '#e094e5', 'https://archives.bulbagarden.net/media/upload/thumb/a/a7/196Espeon.png/250px-196Espeon.png', NULL);
INSERT INTO pokemones
(name, id, type1, type2, weight, height, move1, move2, info, hp, atk, def, satk, sdef, spd, color, color2, color3, img, trainer_id)
VALUES('Umbreon', '197', 'Dark', '', '27,0', '1.0', 'Synchronize', 'Inner Focus', 'When darkness falls, the rings on the body begin to glow, striking fear in the hearts of anyone nearby.', '95', '65', '110', '60', '130', '65', '#000', '', '#b2aeae', 'https://archives.bulbagarden.net/media/upload/thumb/3/3d/197Umbreon.png/250px-197Umbreon.png', NULL);
INSERT INTO pokemones
(name, id, type1, type2, weight, height, move1, move2, info, hp, atk, def, satk, sdef, spd, color, color2, color3, img, trainer_id)
VALUES('Aron', '304', 'Steel', 'Rock', '60,0', '0.4', 'Sturdy', 'Rock-Head', 'It eats iron ore - and sometimes railroad tracks - to build up the steel armor that protects its body.', '050', '070', '100', '040', '040', '030', '#B7B9D0', '#B69E31', '#F1F1F6', 'http://localhost:3001/Imagenes/Aron.png', NULL);
