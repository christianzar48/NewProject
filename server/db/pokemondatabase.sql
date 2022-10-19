-- public.pokemones2 definition

-- Drop table

-- crear tabla sin datos

CREATE TABLE pokemones (name varchar, id varchar, type1 varchar, type2 varchar, weight varchar, height varchar, move1 varchar, move2 varchar, info varchar,hp varchar,atk varchar,def varchar,satk varchar,sdef varchar,spd varchar,color varchar,color2 varchar,color3 varchar,trainer varchar)


-- insertar datos en la tabla
INSERT INTO pokemones
("name", id, type1, type2, weight, height, move1, move2, info, hp, atk, def, satk, sdef, spd, color, color2, color3, trainer)
VALUES('Bulbasaur','001','Grass','Poison','6,9','0.7','Chlorophyll','Overgrow','There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.','045','049','049','065','065','045','#74CB48','#A43E9E','#EAF7E3','Mathi'), 
     ('Charmander','004','Fire',NULL,'8,5','0.6','Mega-Punch','Fire-Punch','It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.','039','052','043','060','050','065','#F57D31',NULL,'#FDE5D6','Tadeo'),
     ('Squirtle','007','Water',NULL,'9,0','0.5','Torrent','Rain-Dish','When it retracts its long neck into its shell, it squirts out water with vigorous force.','044','048','065','050','064','043','#6493EB',NULL,'#E0E9FB','Mathi'),
('Butterfree','012','Bug','Flying','32,0','1.1','Compound-Eyes','Tinted-Lens','In battle, it flaps its wings at great speed to release highly toxic dust into the air.','060','045','050','090','080','070','#A7B723','#A891EC','#EDF1D3','Sergio'),
     ('Pikachu','025','Electric',NULL,'6,0','0.4','Mega-Punch','Pay-Day','Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.','035','055','040','050','050','090','#F9Cf30',NULL,'#FEF5D6','Mathi'),
     ('Gastly','092','Ghost','Poison','0,1','1.3','Levitate',NULL,'Born from gases, anyone would faint if engulfed by its gaseous body, which contains poison.','030','035','030','100','035','080','#70559B','#A43E9E','#E2DDEB','Tadeo'),
     ('Ditto','132','Normal',NULL,'4,0','0.3','Limber','Imposter','It can reconstitute its entire cellular structure to change into what it sees, but it returns to normal when it relaxes.','048','048','048','048','048','048','#AAA67F',NULL,'#EEEDE5','Tadeo'),
     ('Mew','152','Psychic',NULL,'4,0','0.4','Synchronize',NULL,'When viewed through a microscope, this Pokémon’s short, fine, delicate hair can be seen.','100','100','100','100','100','100','#FB5584',NULL,'#FEDDE6','Sergio'),
     ('Aron','304','Steel','Rock','60,0','0.4','Sturdy','Rock-Head','It eats iron ore - and sometimes railroad tracks - to build up the steel armor that protects its body.','050','070','100','040','040','030','#B7B9D0','#B69E31','#F1F1F6','Sergio');