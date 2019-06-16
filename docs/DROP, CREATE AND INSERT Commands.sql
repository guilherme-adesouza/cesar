DROP TABLE IF EXISTS account CASCADE;
DROP TABLE IF EXISTS game_has_type CASCADE;
DROP TABLE IF EXISTS account_has_game CASCADE;
DROP TABLE IF EXISTS achievements CASCADE;
DROP TABLE IF EXISTS player CASCADE;
DROP TABLE IF EXISTS platform CASCADE;
DROP TABLE IF EXISTS status CASCADE;
DROP TABLE IF EXISTS type CASCADE;
DROP TABLE IF EXISTS game CASCADE;

CREATE TABLE player (
id SERIAL
, name TEXT NOT NULL
, password TEXT NOT NULL
, nickname TEXT NOT NULL
, email TEXT
, avatar TEXT
, PRIMARY KEY (id)
);

CREATE TABLE platform (
id SERIAL
, platform TEXT NOT NULL
, img TEXT
, PRIMARY KEY (id)
);

CREATE TABLE status (
id SERIAL
, status TEXT NOT NULL
, blocked BOOLEAN NOT NULL DEFAULT 'TRUE'
, PRIMARY KEY (id)
);

CREATE TABLE type (
id SERIAL
, description TEXT NOT NULL
, PRIMARY KEY (id)
);

CREATE TABLE account (
id SERIAL
, player_id INTEGER NOT NULL
, platform_id INTEGER NOT NULL
, account TEXT NOT NULL
, nickname TEXT NOT NULL
, link TEXT
, points INTEGER
, PRIMARY KEY (id)
, FOREIGN KEY (player_id) REFERENCES player(id)
, FOREIGN KEY (platform_id) REFERENCES platform(id)
);

CREATE TABLE game (
id SERIAL
, name TEXT NOT NULL
, price NUMERIC
, PRIMARY KEY (id)
);

CREATE TABLE game_has_type (
id SERIAL
, game_id INTEGER NOT NULL
, type_id INTEGER NOT NULL
, PRIMARY KEY (id)
, FOREIGN KEY (game_id) REFERENCES game(id)
, FOREIGN KEY (type_id) REFERENCES type(id)
);

CREATE TABLE account_has_game (
id SERIAL
, account_id INTEGER NOT NULL
, game_id INTEGER NOT NULL
, started_date TIMESTAMP NOT NULL
, installed BOOLEAN NOT NULL DEFAULT 'TRUE'
, date_conclusion TIMESTAMP
, date_prev_conclusion TIMESTAMP
, PRIMARY KEY (id)
, FOREIGN KEY (account_id) REFERENCES account(id)
, FOREIGN KEY (game_id) REFERENCES game(id)
);

CREATE TABLE achievements (
id SERIAL
, game_has_player_id INTEGER NOT NULL
, status_id INTEGER NOT NULL
, description TEXT NOT NULL
, date_conclusion TIMESTAMP
, PRIMARY KEY (id)
, FOREIGN KEY (game_has_player_id) REFERENCES account_has_game(id)
, FOREIGN KEY (status_id) REFERENCES status(id)
);

/* -------------------------------- PLAYER */
INSERT INTO player VALUES (default, 'Fernando Augusto Giordani', 'esquizofrenia-acrumbática-maluco...nao-é-brinquedo-não', 'GORDAN', true, true, 'fernando.a.giordani@gmail.com', 'link-avatar');
SELECT * FROM player;

/* -------------------------------- platform */
INSERT INTO platform VALUES (default, 'Steam (PC)', 'logo-steam');
INSERT INTO platform VALUES (default, 'RetroAchievements', 'logo-retroachievements');
INSERT INTO platform VALUES (default, 'uPlay (PC)', 'logo-uplay');
INSERT INTO platform VALUES (default, 'Origin (PC)', 'logo-origin');
INSERT INTO platform VALUES (default, 'Xbox (PC/Xbox/Xbox 360/Xbox One)', 'logo-xbox');
INSERT INTO platform VALUES (default, 'PlayStation (PS3/PS4)', 'logo-playstation');
INSERT INTO platform VALUES (default, 'Gog.com (PC)', 'logo-gog.com');
INSERT INTO platform VALUES (default, 'In-Game', 'logo-ingame');
INSERT INTO platform VALUES (default, 'Mídia Física', 'logo-midiafisica');
INSERT INTO platform VALUES (default, 'Genérico', 'logo-generico');
SELECT * FROM platform;

/* -------------------------------- TYPE */
INSERT INTO type VALUES (default, 'Action');
INSERT INTO type VALUES (default, 'Adventure');
INSERT INTO type VALUES (default, 'Atmospheric');
INSERT INTO type VALUES (default, 'Beat em up');
INSERT INTO type VALUES (default, 'Co-op Offline');
INSERT INTO type VALUES (default, 'Co-op Online');
INSERT INTO type VALUES (default, 'Destruction');
INSERT INTO type VALUES (default, 'Female Protagonist');
INSERT INTO type VALUES (default, 'Fightning');
INSERT INTO type VALUES (default, 'FPS (First Person Shooter)');
INSERT INTO type VALUES (default, 'Gore');
INSERT INTO type VALUES (default, 'Hack and slash');
INSERT INTO type VALUES (default, 'Horror');
INSERT INTO type VALUES (default, 'Indie');
INSERT INTO type VALUES (default, 'Mature');
INSERT INTO type VALUES (default, 'Multiplayer');
INSERT INTO type VALUES (default, 'Open World');
INSERT INTO type VALUES (default, 'platform');
INSERT INTO type VALUES (default, 'Psychological');
INSERT INTO type VALUES (default, 'Puzzle');
INSERT INTO type VALUES (default, 'Racing');
INSERT INTO type VALUES (default, 'Realistic');
INSERT INTO type VALUES (default, 'RPG');
INSERT INTO type VALUES (default, 'Simulator');
INSERT INTO type VALUES (default, 'Singleplayer');
INSERT INTO type VALUES (default, 'Sports');
INSERT INTO type VALUES (default, 'Stealth');
INSERT INTO type VALUES (default, 'Survival');
INSERT INTO type VALUES (default, 'Tactical');
INSERT INTO type VALUES (default, 'TPS (Third Person Shooter)');
INSERT INTO type VALUES (default, 'Violent');
SELECT * FROM type;

/* -------------------------------- GAME */
/* STEAM - GAMES INSTALLED - IN PROGRESS */
INSERT INTO game VALUES (default, 'A Story About My Uncle', 0);
INSERT INTO game VALUES (default, 'Age of Empires II: HD Edition', 0);
INSERT INTO game VALUES (default, 'Alan Wake', 0);
INSERT INTO game VALUES (default, 'Alan Wake’s American Nightmare', 0);
INSERT INTO game VALUES (default, 'Assassin''s Creed Brotherhood', 0);
INSERT INTO game VALUES (default, 'Assassin''s Creed Origins', 0);
INSERT INTO game VALUES (default, 'Borderlands', 0);
INSERT INTO game VALUES (default, 'Bridge Constructor Portal', 0);
INSERT INTO game VALUES (default, 'Brütal Legend', 0);
INSERT INTO game VALUES (default, 'Bulletstorm', 0);
INSERT INTO game VALUES (default, 'Carmageddon Reincarnation', 0);
INSERT INTO game VALUES (default, 'Clicker Heroes', 0);
INSERT INTO game VALUES (default, 'Counter Strike: Global Offensive', 0);
INSERT INTO game VALUES (default, 'Cubetractor', 0);
INSERT INTO game VALUES (default, 'Darksiders', 0);
INSERT INTO game VALUES (default, 'Dead Rising 2', 0);
INSERT INTO game VALUES (default, 'Deadpool', 0);
INSERT INTO game VALUES (default, 'DiRT 2', 0);
INSERT INTO game VALUES (default, 'DiRT Rally', 0);
INSERT INTO game VALUES (default, 'Dishonored', 0);
INSERT INTO game VALUES (default, 'DOOM', 0);
INSERT INTO game VALUES (default, 'FOTONICA', 0);
INSERT INTO game VALUES (default, 'Goat Simulator', 0);
INSERT INTO game VALUES (default, 'God Mode', 0);
INSERT INTO game VALUES (default, 'Grand Theft Auto V', 0);
INSERT INTO game VALUES (default, 'Halo: Spartan Assault', 0);
INSERT INTO game VALUES (default, 'Hatred', 0);
INSERT INTO game VALUES (default, 'Hellbound: Survival Mode', 0);
INSERT INTO game VALUES (default, 'Heroes of Might & Magic III - HD Edition', 0);
INSERT INTO game VALUES (default, 'HITMAN 2', 0);
INSERT INTO game VALUES (default, 'Jotun: Valhalla Edition', 0);
INSERT INTO game VALUES (default, 'Just Cause', 0);
INSERT INTO game VALUES (default, 'Lead and Gold - Gangs of the Wild West', 0);
INSERT INTO game VALUES (default, 'Left 4 Dead 2', 0);
INSERT INTO game VALUES (default, 'Lords of the Fallen', 0);
INSERT INTO game VALUES (default, 'LYNE', 0);
INSERT INTO game VALUES (default, 'Mad Max', 0);
INSERT INTO game VALUES (default, 'Metro 2033', 0);
INSERT INTO game VALUES (default, 'Mortal Kombat X', 0);
INSERT INTO game VALUES (default, 'OLDTV', 0);
INSERT INTO game VALUES (default, 'Orcs Must Die', 0);
INSERT INTO game VALUES (default, 'OutDrive', 0);
INSERT INTO game VALUES (default, 'PAYDAY: The Heist', 0);
INSERT INTO game VALUES (default, 'PAYDAY 2', 0);
INSERT INTO game VALUES (default, 'Pixel Puzzles Ultimate', 0);
INSERT INTO game VALUES (default, 'POSTAL 2', 0);
INSERT INTO game VALUES (default, 'POSTAL Redux', 0);
INSERT INTO game VALUES (default, 'Praey for the Gods', 0);
INSERT INTO game VALUES (default, 'Quake Champions', 0);
INSERT INTO game VALUES (default, 'Red Orchestra 2: Heroes of Stalingrad', 0);
INSERT INTO game VALUES (default, 'Rise of the Tomb Raider', 0);
INSERT INTO game VALUES (default, 'Rogue Legacy', 0);
INSERT INTO game VALUES (default, 'Sanctum', 0);
INSERT INTO game VALUES (default, 'Shadow Warrior', 0);
INSERT INTO game VALUES (default, 'STAR WARS Jedi Knight II: Jedi Outcast', 0);
INSERT INTO game VALUES (default, 'SUPERHOT', 0);
INSERT INTO game VALUES (default, 'Team Fortress 2', 0);
INSERT INTO game VALUES (default, 'Teenage Mutant Ninja Turtles: Out of the Shadows', 0);
INSERT INTO game VALUES (default, 'The First Tree', 0);
INSERT INTO game VALUES (default, 'Torchlight II', 0);
INSERT INTO game VALUES (default, 'Trackmania² Stadium', 0);
INSERT INTO game VALUES (default, 'Turbo Pug DX', 0);
INSERT INTO game VALUES (default, 'Warframe', 0);
INSERT INTO game VALUES (default, 'Who''s Your Daddy', 0);
INSERT INTO game VALUES (default, 'World of Guns: Gun Disassembly', 0);

/* STEAM - GAMES NOT INSTALLED - IN PROGRESS */
INSERT INTO game VALUES (default, 'Grand Theft Auto IV', 0);
INSERT INTO game VALUES (default, 'Tom Clancy''s Ghost Recon Future Soldier', 0);

/* STEAM - GAMES THAT HAVE NO MORE TO GET THE ACHIEVEMENTS */
INSERT INTO game VALUES (default, 'Dead Island Epidemic', 0);
INSERT INTO game VALUES (default, 'Nosgoth', 0);


/* RETROACHIEVEMENTS - GAMES - IN PROGRESS */
INSERT INTO game VALUES (default, 'Shadow Dancer: The Secret of Shinobi', 0);
INSERT INTO game VALUES (default, 'Shinobi III: Return of the Ninja Master', 0);
INSERT INTO game VALUES (default, 'Streets of Rage 3', 0);
INSERT INTO game VALUES (default, 'Teenage Mutant Ninja Turtles - The Hyperstone Heist', 0);


/* UPLAY - GAMES INSTALLED - IN PROGRESS */
--INSERT INTO game VALUES (default, 'Assassin''s Creed Brotherhood', 0);
--INSERT INTO game VALUES (default, 'Assassin''s Creed Origins', 0);
INSERT INTO game VALUES (default, 'Rayman Origins', 0);
INSERT INTO game VALUES (default, 'Trackmania² Lagoon', 0);
INSERT INTO game VALUES (default, 'Watch Dogs', 0);

/* UPLAY - GAMES NOT INSTALLED - IN PROGRESS */
--INSERT INTO game VALUES (default, 'Tom Clancy''s Ghost Recon Future Soldier', 0);


/* ORIGIN - GAMES INSTALLED - IN PROGRESS */
INSERT INTO game VALUES (default, 'Apex Legends', 0);
INSERT INTO game VALUES (default, 'Dead Space 2', 0);

/* ORIGIN - GAMES NOT INSTALLED - IN PROGRESS */
INSERT INTO game VALUES (default, 'Dead Space 3', 0);
INSERT INTO game VALUES (default, 'Star Wars Battlefront', 0);


/* XBOX - GAMES INSTALLED - IN PROGRESS */
--INSERT INTO game VALUES (default, 'Bulletstorm', 0);
--INSERT INTO game VALUES (default, 'DiRT 2', 0);

/* XBOX - GAMES NOT INSTALLED - IN PROGRESS */
INSERT INTO game VALUES (default, 'Microsoft Solitaire Collection', 0);
--INSERT INTO game VALUES (default, 'Grand Theft Auto IV', 0);
INSERT INTO game VALUES (default, 'Modern Combat 5: Blackout', 0);
INSERT INTO game VALUES (default, 'Recore', 0);
INSERT INTO game VALUES (default, 'Ruiner', 0);


/* PLAYSTATION - GAMES INSTALLED - IN PROGRESS */
INSERT INTO game VALUES (default, '99 Vidas', 0);
INSERT INTO game VALUES (default, 'Disc Jam', 0);
INSERT INTO game VALUES (default, 'Injustice 2', 0);
INSERT INTO game VALUES (default, 'LEGO Marvel Super Heroes', 0);
--INSERT INTO game VALUES (default, 'Rocket League', 0);
INSERT INTO game VALUES (default, 'Shadow of the Colossus', 0);
INSERT INTO game VALUES (default, 'Uncharted: Drake''s Fortune', 0);
INSERT INTO game VALUES (default, 'Uncharted 3: Drake''s Deception', 0);


/* IN-GAME - GAMES INSTALLED - IN PROGRESS */
--INSERT INTO game VALUES (default, 'Assassin''s Creed Brotherhood', 0);


/* GAMES - ALL platformS - 100% ACHIEVEMENTS */
INSERT INTO game VALUES (default, '#Have a Sticker', 0);
INSERT INTO game VALUES (default, 'Absconding Zatwor', 0);
INSERT INTO game VALUES (default, 'Ace of Words', 0);
INSERT INTO game VALUES (default, 'Achievement Clicker', 0);
INSERT INTO game VALUES (default, 'Achievement Clicker 2018', 0);
INSERT INTO game VALUES (default, 'Achievement Clicker 2019', 0);
INSERT INTO game VALUES (default, 'Alter World', 0);
INSERT INTO game VALUES (default, 'Ampu-Tea', 0);
INSERT INTO game VALUES (default, 'Antenna', 0);
INSERT INTO game VALUES (default, 'Approaching Blocks', 0);
INSERT INTO game VALUES (default, 'Assassin''s Creed', 0);
INSERT INTO game VALUES (default, 'Assassin''s Creed 2', 0);
INSERT INTO game VALUES (default, 'Bad Day', 0);
INSERT INTO game VALUES (default, 'Bell Ringer', 0);
INSERT INTO game VALUES (default, 'BitRay', 0);
INSERT INTO game VALUES (default, 'Blood and Bacon', 0);
INSERT INTO game VALUES (default, 'Bloody Walls', 0);
INSERT INTO game VALUES (default, 'Break Into Zatwor', 0);
--INSERT INTO game VALUES (default, 'Bulletstorm', 0);
INSERT INTO game VALUES (default, 'Burnout Paradise The Ultimate Box', 0);
INSERT INTO game VALUES (default, 'Call of Juarez Gunslinger', 0);
INSERT INTO game VALUES (default, 'Carmageddon', 0);
INSERT INTO game VALUES (default, 'Carmageddon 2: Carpocalypse Now', 0);
INSERT INTO game VALUES (default, 'Carmageddon Splat Pack', 0);
INSERT INTO game VALUES (default, 'Carmageddon TDR 2000', 0);
INSERT INTO game VALUES (default, 'Castle Crashers', 0);
INSERT INTO game VALUES (default, 'Chaos Domain', 0);
INSERT INTO game VALUES (default, 'Chicken Shoot 2', 0);
INSERT INTO game VALUES (default, 'Child of Light', 0);
INSERT INTO game VALUES (default, 'Comix Zone', 0);
INSERT INTO game VALUES (default, 'Dead Bits', 0);
INSERT INTO game VALUES (default, 'Dead Island', 0);
INSERT INTO game VALUES (default, 'Dead Space', 0);
INSERT INTO game VALUES (default, 'Deadlight', 0);
--INSERT INTO game VALUES (default, 'DiRT 2', 0);
INSERT INTO game VALUES (default, 'DiRT 3', 0);
INSERT INTO game VALUES (default, 'DiRT Showdown', 0);
INSERT INTO game VALUES (default, 'Doom 3', 0);
INSERT INTO game VALUES (default, 'Dr. Langeskov, The Tiger, and The Terribly Cursed Emerald: A Whirlwind Heist', 0);
INSERT INTO game VALUES (default, 'Drunk Wizards', 0);
INSERT INTO game VALUES (default, 'Emily is away', 0);
INSERT INTO game VALUES (default, 'Enigma Prison Beta', 0);
INSERT INTO game VALUES (default, 'Escape This', 0);
INSERT INTO game VALUES (default, 'Fall', 0);
INSERT INTO game VALUES (default, 'Far Cry 3', 0);
INSERT INTO game VALUES (default, 'Far Cry 3 Blood Dragon', 0);
INSERT INTO game VALUES (default, 'Fiends of Imprisonment', 0);
INSERT INTO game VALUES (default, 'Five Nights at Freddy''s', 0);
INSERT INTO game VALUES (default, 'Free to Play', 0);
INSERT INTO game VALUES (default, 'God of War', 0);
INSERT INTO game VALUES (default, 'Half-Life', 0);
INSERT INTO game VALUES (default, 'Half-Life: Blue Shift', 0);
INSERT INTO game VALUES (default, 'Half-Life: Opposing Force', 0);
INSERT INTO game VALUES (default, 'Hell Quest', 0);
INSERT INTO game VALUES (default, 'High Hell', 0);
INSERT INTO game VALUES (default, 'HIS (Heroes In the Sky)', 0);
INSERT INTO game VALUES (default, 'Inside', 0);
INSERT INTO game VALUES (default, 'JDM Tuner Racing', 0);
INSERT INTO game VALUES (default, 'LIMBO', 0);
INSERT INTO game VALUES (default, 'Lines by Nestor Yavorskyy', 0);
INSERT INTO game VALUES (default, 'Lines Free by Nestor Yavorskyy', 0);
INSERT INTO game VALUES (default, 'Lines Infinite by Nestor Yavorskyy', 0);
INSERT INTO game VALUES (default, 'Loading Screen Simulator', 0);
INSERT INTO game VALUES (default, 'Make it Indie!', 0);
INSERT INTO game VALUES (default, 'Mandagon', 0);
INSERT INTO game VALUES (default, 'Mark of the Ninja', 0);
INSERT INTO game VALUES (default, 'Mark of the Ninja: Remastered', 0);
INSERT INTO game VALUES (default, 'Mega Man X', 0);
INSERT INTO game VALUES (default, 'Missing Translation', 0);
INSERT INTO game VALUES (default, 'Mr.President', 0);
INSERT INTO game VALUES (default, 'Nail''d', 0);
INSERT INTO game VALUES (default, 'Need for Speed Carbon', 0);
INSERT INTO game VALUES (default, 'Need for Speed Most Wanted (2005)', 0);
INSERT INTO game VALUES (default, 'Need for Speed Most Wanted (2012)', 0);
INSERT INTO game VALUES (default, 'Need for Speed Undercover', 0);
INSERT INTO game VALUES (default, 'Need for Speed Underground 2', 0);
--INSERT INTO game VALUES (default, 'OutDrive', 0);
INSERT INTO game VALUES (default, 'Pointless', 0);
INSERT INTO game VALUES (default, 'Port of Call', 0);
INSERT INTO game VALUES (default, 'Portal', 0);
--INSERT INTO game VALUES (default, 'POSTAL 2', 0);
--INSERT INTO game VALUES (default, 'POSTAL 2', 0); /* GENÉRICO */
INSERT INTO game VALUES (default, 'Q.U.B.E: Director`s Cut', 0);
INSERT INTO game VALUES (default, 'Quake', 0);
INSERT INTO game VALUES (default, 'Quake 2', 0);
INSERT INTO game VALUES (default, 'Quake 2 Mission Pack 1: The Reckoning', 0);
INSERT INTO game VALUES (default, 'Quake 2 Mission Pack 2: Ground Zero', 0);
INSERT INTO game VALUES (default, 'Quake 3 Arena', 0);
INSERT INTO game VALUES (default, 'Quake 3: Team Arena', 0);
INSERT INTO game VALUES (default, 'Quake Mission Pack 1: Scourge of Armagon', 0);
INSERT INTO game VALUES (default, 'Quake Mission Pack 2: Dissolution of Eternity', 0);
INSERT INTO game VALUES (default, 'Rage Parking Simulator 2016', 0);
INSERT INTO game VALUES (default, 'Refunct', 0);
INSERT INTO game VALUES (default, 'RESIDENT EVIL 2 / BIOHAZARD RE:2 "1-Shot Demo"', 0);
INSERT INTO game VALUES (default, 'Retention', 0);
INSERT INTO game VALUES (default, 'Rochard', 0);
INSERT INTO game VALUES (default, 'Rocket League', 0);
--INSERT INTO game VALUES (default, 'Shadow Dancer: The Secret of Shinobi', 0);
--INSERT INTO game VALUES (default, 'Shadow of the Colossus', 0);
INSERT INTO game VALUES (default, 'Shank', 0);
INSERT INTO game VALUES (default, 'Shank 2', 0);
INSERT INTO game VALUES (default, 'Skyreach', 0);
INSERT INTO game VALUES (default, 'Squares', 0);
INSERT INTO game VALUES (default, 'Streets of Rage', 0);
INSERT INTO game VALUES (default, 'Streets of Rage 2', 0);
--INSERT INTO game VALUES (default, 'Streets of Rage 3', 0);
INSERT INTO game VALUES (default, 'Super Lucky''s Tale', 0);
--INSERT INTO game VALUES (default, 'SUPERHOT', 0);
INSERT INTO game VALUES (default, 'SWARMRIDERS', 0);
INSERT INTO game VALUES (default, 'The Culling of the Cows', 0);
INSERT INTO game VALUES (default, 'The Deer', 0);
INSERT INTO game VALUES (default, 'The Orb Chambers', 0);
INSERT INTO game VALUES (default, 'The Plan', 0);
INSERT INTO game VALUES (default, 'The Swapper', 0);
INSERT INTO game VALUES (default, 'The Tape', 0);
INSERT INTO game VALUES (default, 'Tomb Raider (2013)', 0);
INSERT INTO game VALUES (default, 'Tony Hawk''s Pro Skater HD', 0);
INSERT INTO game VALUES (default, 'Transmissions: Element 120', 0);
INSERT INTO game VALUES (default, 'Trine', 0);
INSERT INTO game VALUES (default, 'Turbo Pug', 0);
INSERT INTO game VALUES (default, 'Typoman', 0);
INSERT INTO game VALUES (default, 'Vault of Honor', 0);
INSERT INTO game VALUES (default, 'Viscera Cleanup Detail: Shadow Warrior', 0);
INSERT INTO game VALUES (default, 'Voxelized', 0);
INSERT INTO game VALUES (default, 'WayOut', 0);
INSERT INTO game VALUES (default, 'Yellow: The Yellow Artifact', 0);
INSERT INTO game VALUES (default, 'Zombie Boom', 0);
INSERT INTO game VALUES (default, 'Zup!', 0);
INSERT INTO game VALUES (default, 'Zup! 2', 0);
INSERT INTO game VALUES (default, 'Zup! 3', 0);
INSERT INTO game VALUES (default, 'Zup! 4', 0);
INSERT INTO game VALUES (default, 'Zup! 5', 0);
INSERT INTO game VALUES (default, 'Zup! 6', 0);
INSERT INTO game VALUES (default, 'Zup! 7', 0);
INSERT INTO game VALUES (default, 'Zup! 8', 0);
INSERT INTO game VALUES (default, 'Zup! S', 0);
INSERT INTO game VALUES (default, 'Zup! X', 0);
INSERT INTO game VALUES (default, 'Zup! Zero', 0);
SELECT * FROM game ORDER BY name;

INSERT INTO account VALUES (default, 1, 1, 'gordan92', 'GORDAN', 'link-account', 0);
INSERT INTO account VALUES (default, 1, 2, 'fagiordani', 'fagiordani', 'link-account', 233);
INSERT INTO account VALUES (default, 1, 3, 'theDetonator92', 'theDetonator92', 'link-account', 45100);
INSERT INTO account VALUES (default, 1, 4, 'fefeag', 'fefeag', 'link-account', 75);
INSERT INTO account VALUES (default, 1, 5, 'fagiordani', 'fagiordani', 'link-account', 3470);
INSERT INTO account VALUES (default, 1, 5, 'thedetonator92', 'thedetonator92', 'link-account', 865);
INSERT INTO account VALUES (default, 1, 6, 'fagiordani', 'fagiordani', 'link-account', 0);
INSERT INTO account VALUES (default, 1, 7, 'fagiordani', 'fagiordani', 'link-account', 0);
INSERT INTO account VALUES (default, 1, 8, 'fagiordani', 'fagiordani', 'link-account', 0);
INSERT INTO account VALUES (default, 1, 9, 'gordan92-media-fisica', 'GORDAN - Medias Físicas', 'link-account', 0);
INSERT INTO account VALUES (default, 1, 10, 'gordan92-genericos', 'GORDAN - Genéricos', 'link-account', 0);
SELECT * FROM account;

SELECT
  a.id
  , a.platform_id
  , p.platform
  , a.nickname
  , CASE
	WHEN platform_id = 5
	THEN p.platform||' - ('||a.nickname||') - INSERT INTO account_has_game VALUES (default, '||a.id||', <game_id>, NOW(), TRUE, NULL, NULL);'
	ELSE p.platform||' - INSERT INTO account_has_game VALUES (default, '||a.id||', <game_id>, NOW(), TRUE, NULL, NULL);'
  END AS insert_ahg
FROM account a
INNER JOIN platform p ON (a.platform_id = p.id);

INSERT INTO account_has_game VALUES (default, 1, 92, '2018-11-15', FALSE, '2018-11-15', NULL);
INSERT INTO account_has_game VALUES (default, 7, 85, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 1, 1, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 1, 93, '2019-01-01', FALSE, '2019-01-01', NULL);
INSERT INTO account_has_game VALUES (default, 1, 94, '2016-12-11', FALSE, '2016-12-11', NULL);
INSERT INTO account_has_game VALUES (default, 1, 95, '2018-02-01', FALSE, '2018-02-01', NULL);
INSERT INTO account_has_game VALUES (default, 1, 96, '2018-05-18', FALSE, '2018-05-18', NULL);
INSERT INTO account_has_game VALUES (default, 1, 97, '2018-11-11', FALSE, '2018-11-11', NULL);
INSERT INTO account_has_game VALUES (default, 1, 2, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 1, 3, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 1, 4, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 1, 98, '2017-04-08', FALSE, '2017-04-08', NULL);
INSERT INTO account_has_game VALUES (default, 1, 99, '2017-06-18', FALSE, '2017-06-18', NULL);
INSERT INTO account_has_game VALUES (default, 1, 100, '2018-02-12', FALSE, '2018-02-12', NULL);
INSERT INTO account_has_game VALUES (default, 4, 77, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 1, 101, '2017-04-25', FALSE, '2017-04-25', NULL);
INSERT INTO account_has_game VALUES (default, 1, 102, '2017-02-14', FALSE, '2017-02-14', NULL);
INSERT INTO account_has_game VALUES (default, 1, 103, '2018-05-20', FALSE, '2018-05-20', NULL);
INSERT INTO account_has_game VALUES (default, 1, 5, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 1, 6, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 1, 104, '2018-07-17', FALSE, '2018-07-17', NULL);
INSERT INTO account_has_game VALUES (default, 1, 105, '2019-01-20', FALSE, '2019-02-01', NULL);
INSERT INTO account_has_game VALUES (default, 1, 106, '2017-04-23', FALSE, '2017-04-23', NULL);
INSERT INTO account_has_game VALUES (default, 1, 107, '2016-04-23', FALSE, '2016-09-17', NULL);
INSERT INTO account_has_game VALUES (default, 1, 108, '2018-07-18', FALSE, '2018-07-18', NULL);
INSERT INTO account_has_game VALUES (default, 1, 7, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 1, 109, '2016-12-28', FALSE, '2017-11-16', NULL);
INSERT INTO account_has_game VALUES (default, 1, 8, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 1, 9, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 1, 10, '2016-11-02', TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 1, 110, '2014-06-18', FALSE, '2014-06-18', NULL);
INSERT INTO account_has_game VALUES (default, 1, 111, '2016-09-25', FALSE, '2016-10-09', NULL);
INSERT INTO account_has_game VALUES (default, 1, 112, '2015-02-22', FALSE, '2015-02-22', NULL);
INSERT INTO account_has_game VALUES (default, 1, 113, '2015-02-28', FALSE, '2015-02-28', NULL);
INSERT INTO account_has_game VALUES (default, 1, 11, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 1, 114, '2015-02-22', FALSE, '2015-02-22', NULL);
INSERT INTO account_has_game VALUES (default, 1, 115, '2015-03-29', FALSE, '2015-03-29', NULL);
INSERT INTO account_has_game VALUES (default, 1, 116, '2016-01-30', FALSE, '2016-02-29', NULL);
INSERT INTO account_has_game VALUES (default, 1, 117, '2016-10-15', FALSE, '2016-10-15', NULL);
INSERT INTO account_has_game VALUES (default, 1, 118, '2019-02-04', FALSE, '2019-02-04', NULL);
INSERT INTO account_has_game VALUES (default, 1, 119, '2018-12-20', FALSE, '2018-12-22', NULL);
INSERT INTO account_has_game VALUES (default, 1, 12, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 11, 120, '2015-06-07', FALSE, '2015-06-07', NULL);
INSERT INTO account_has_game VALUES (default, 1, 13, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 1, 14, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 1, 15, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 1, 121, '2016-05-29', FALSE, '2016-05-29', NULL);
INSERT INTO account_has_game VALUES (default, 1, 122, '2017-08-12', FALSE, '2017-12-25', NULL);
INSERT INTO account_has_game VALUES (default, 1, 68, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 1, 16, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 4, 123, '2016-07-31', FALSE, '2016-10-29', NULL);
INSERT INTO account_has_game VALUES (default, 4, 78, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 4, 79, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 1, 124, '2015-11-29', FALSE, '2015-11-29', NULL);
INSERT INTO account_has_game VALUES (default, 1, 17, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 1, 18, '2019-01-08', TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 1, 125, '2018-11-19', FALSE, '2018-12-10', NULL);
INSERT INTO account_has_game VALUES (default, 1, 19, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 1, 126, '2018-12-16', FALSE, '2019-02-10', NULL);
INSERT INTO account_has_game VALUES (default, 7, 86, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 1, 20, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 1, 21, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 11, 127, '2014-07-29', FALSE, '2014-07-29', NULL);
INSERT INTO account_has_game VALUES (default, 1, 128, '2018-02-03', FALSE, '2018-02-03', NULL);
INSERT INTO account_has_game VALUES (default, 1, 129, '2019-01-20', FALSE, '2019-01-20', NULL);
INSERT INTO account_has_game VALUES (default, 1, 130, '2018-02-03', FALSE, '2018-02-03', NULL);
INSERT INTO account_has_game VALUES (default, 1, 131, '2018-06-30', FALSE, '2018-06-30', NULL);
INSERT INTO account_has_game VALUES (default, 1, 132, '2016-05-28', FALSE, '2016-05-28', NULL);
INSERT INTO account_has_game VALUES (default, 1, 133, '2016-02-21', FALSE, '2016-02-21', NULL);
INSERT INTO account_has_game VALUES (default, 1, 134, '2016-03-06', FALSE, '2016-03-06', NULL);
INSERT INTO account_has_game VALUES (default, 3, 135, '2016-11-23', FALSE, '2016-11-23', NULL);
INSERT INTO account_has_game VALUES (default, 1, 136, '2018-12-30', FALSE, '2018-12-31', NULL);
INSERT INTO account_has_game VALUES (default, 1, 137, '2016-05-22', FALSE, '2016-05-22', NULL);
INSERT INTO account_has_game VALUES (default, 1, 22, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 1, 138, '2016-11-26', FALSE, '2016-11-26', NULL);
INSERT INTO account_has_game VALUES (default, 1, 23, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 1, 24, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 7, 139, '2018-04-28', FALSE, '2018-05-05', NULL);
INSERT INTO account_has_game VALUES (default, 1, 66, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 1, 25, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 1, 140, '2014-10-11', FALSE, '2014-10-11', NULL);
INSERT INTO account_has_game VALUES (default, 1, 141, '2014-12-06', FALSE, '2014-12-06', NULL);
INSERT INTO account_has_game VALUES (default, 1, 142, '2014-10-12', FALSE, '2014-10-12', NULL);
INSERT INTO account_has_game VALUES (default, 1, 26, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 1, 27, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 1, 143, '2017-12-09', FALSE, '2017-12-09', NULL);
INSERT INTO account_has_game VALUES (default, 1, 28, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 1, 29, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 1, 144, '2017-12-31', FALSE, '2019-02-15', NULL);
INSERT INTO account_has_game VALUES (default, 1, 145, '2018-07-15', FALSE, '2018-07-15', NULL);
INSERT INTO account_has_game VALUES (default, 1, 30, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 7, 87, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 1, 146, '2016-07-09', FALSE, '2016-07-09', NULL);
INSERT INTO account_has_game VALUES (default, 1, 147, '2017-01-06', FALSE, '2017-01-06', NULL);
INSERT INTO account_has_game VALUES (default, 1, 31, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 1, 32, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 1, 33, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 1, 34, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 7, 88, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 1, 148, '2016-07-02', FALSE, '2016-07-02', NULL);
INSERT INTO account_has_game VALUES (default, 1, 149, '2019-02-04', FALSE, '2019-02-04', NULL);
INSERT INTO account_has_game VALUES (default, 1, 150, '2018-01-01', FALSE, '2018-01-01', NULL);
INSERT INTO account_has_game VALUES (default, 1, 151, '2019-02-05', FALSE, '2019-02-05', NULL);
INSERT INTO account_has_game VALUES (default, 1, 152, '2018-03-04', FALSE, '2018-03-04', NULL);
INSERT INTO account_has_game VALUES (default, 1, 35, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 1, 36, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 1, 37, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 1, 153, '2016-12-30', FALSE, '2016-12-30', NULL);
INSERT INTO account_has_game VALUES (default, 1, 154, '2018-07-15', FALSE, '2018-07-15', NULL);
INSERT INTO account_has_game VALUES (default, 1, 155, '2017-06-15', FALSE, '2017-06-15', NULL);
INSERT INTO account_has_game VALUES (default, 1, 156, '2019-02-17', FALSE, '2019-02-18', NULL);
INSERT INTO account_has_game VALUES (default, 11, 157, '2016-07-02', FALSE, '2016-07-02', NULL);
INSERT INTO account_has_game VALUES (default, 1, 38, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 5, 81, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 1, 158, '2018-02-03', FALSE, '2018-02-03', NULL);
INSERT INTO account_has_game VALUES (default, 5, 82, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 1, 39, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 1, 159, '2017-06-29', FALSE, '2017-06-29', NULL);
INSERT INTO account_has_game VALUES (default, 1, 160, '2014-05-02', FALSE, '2014-05-02', NULL);
INSERT INTO account_has_game VALUES (default, 11, 161, '2017-04-02', FALSE, '2017-04-02', NULL);
INSERT INTO account_has_game VALUES (default, 11, 162, '2014-07-12', FALSE, '2014-07-12', NULL);
INSERT INTO account_has_game VALUES (default, 4, 163, '2016-05-18', FALSE, '2016-05-18', NULL);
INSERT INTO account_has_game VALUES (default, 1, 164, '2015-04-11', FALSE, '2015-04-11', NULL);
INSERT INTO account_has_game VALUES (default, 11, 165, '2015-10-18', FALSE, '2015-10-18', NULL);
INSERT INTO account_has_game VALUES (default, 1, 69, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 1, 40, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 1, 41, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 1, 42, '2016-05-21', TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 1, 44, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 1, 43, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 1, 45, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 1, 166, '2018-07-15', FALSE, '2018-07-15', NULL);
INSERT INTO account_has_game VALUES (default, 1, 167, '2018-02-03', FALSE, '2018-02-03', NULL);
INSERT INTO account_has_game VALUES (default, 1, 168, '2013-07-17', FALSE, '2015-10-25', NULL);
INSERT INTO account_has_game VALUES (default, 11, 46, '2014-07-17', FALSE, '2014-07-17', NULL);
INSERT INTO account_has_game VALUES (default, 1, 47, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 1, 48, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 1, 169, '2016-09-07', FALSE, '2016-09-07', NULL);
INSERT INTO account_has_game VALUES (default, 1, 170, '2015-12-12', FALSE, '2015-12-12', NULL);
INSERT INTO account_has_game VALUES (default, 1, 171, '2015-12-28', FALSE, '2015-12-28', NULL);
INSERT INTO account_has_game VALUES (default, 1, 172, '2016-01-07', FALSE, '2016-01-07', NULL);
INSERT INTO account_has_game VALUES (default, 1, 173, '2016-06-27', FALSE, '2016-06-27', NULL);
INSERT INTO account_has_game VALUES (default, 1, 174, '2016-10-31', FALSE, '2016-10-31', NULL);
INSERT INTO account_has_game VALUES (default, 1, 175, '2016-10-31', FALSE, '2016-10-31', NULL);
INSERT INTO account_has_game VALUES (default, 1, 49, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 1, 176, '2015-12-22', FALSE, '2015-12-22', NULL);
INSERT INTO account_has_game VALUES (default, 1, 177, '2015-12-23', FALSE, '2015-12-23', NULL);
INSERT INTO account_has_game VALUES (default, 1, 178, '2017-01-13', FALSE, '2017-06-16', NULL);
INSERT INTO account_has_game VALUES (default, 3, 74, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 5, 83, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 1, 50, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 1, 179, '2019-02-05', FALSE, '2019-02-06', NULL);
INSERT INTO account_has_game VALUES (default, 1, 180, '2019-01-11', FALSE, '2019-01-11', NULL);
INSERT INTO account_has_game VALUES (default, 1, 181, '2019-01-20', FALSE, '2019-01-20', NULL);
INSERT INTO account_has_game VALUES (default, 1, 51, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 1, 182, '2015-01-07', FALSE, '2015-01-07', NULL);
INSERT INTO account_has_game VALUES (default, 1, 183, '2018-12-29', FALSE, '2018-12-29', NULL);
INSERT INTO account_has_game VALUES (default, 1, 52, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 5, 84, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 1, 53, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 11, 70, '2019-01-27', FALSE, '2019-01-27', NULL);
INSERT INTO account_has_game VALUES (default, 7, 89, '2018-02-25', TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 1, 54, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 1, 184, '2018-01-17', FALSE, '2018-01-17', NULL);
INSERT INTO account_has_game VALUES (default, 1, 185, '2015-02-16', FALSE, '2015-02-16', NULL);
INSERT INTO account_has_game VALUES (default, 2, 71, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 1, 186, '2018-02-13', FALSE, '2018-02-13', NULL);
INSERT INTO account_has_game VALUES (default, 1, 187, '2018-02-04', FALSE, '2018-02-04', NULL);
INSERT INTO account_has_game VALUES (default, 4, 80, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 1, 55, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 11, 188, '2017-10-07', FALSE, '2017-10-07', NULL);
INSERT INTO account_has_game VALUES (default, 11, 189, '2017-10-09', FALSE, '2017-10-09', NULL);
INSERT INTO account_has_game VALUES (default, 11, 72, '2017-10-20', FALSE, '2017-10-20', NULL);
INSERT INTO account_has_game VALUES (default, 5, 190, '2018-11-04', FALSE, '2018-11-08', NULL);
INSERT INTO account_has_game VALUES (default, 1, 56, '2019-02-19', TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 1, 191, '2019-01-01', FALSE, '2019-01-01', NULL);
INSERT INTO account_has_game VALUES (default, 1, 57, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 2, 73, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 1, 58, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 1, 192, '2018-11-17', FALSE, '2018-11-17', NULL);
INSERT INTO account_has_game VALUES (default, 1, 193, '2019-01-20', FALSE, '2019-01-20', NULL);
INSERT INTO account_has_game VALUES (default, 1, 59, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 1, 194, '2016-06-29', FALSE, '2016-06-29', NULL);
INSERT INTO account_has_game VALUES (default, 1, 195, '2018-02-03', FALSE, '2018-02-03', NULL);
INSERT INTO account_has_game VALUES (default, 1, 196, '2017-04-20', FALSE, '2017-04-20', NULL);
INSERT INTO account_has_game VALUES (default, 1, 197, '2016-11-27', FALSE, '2016-11-27', NULL);
INSERT INTO account_has_game VALUES (default, 1, 67, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 1, 198, '2016-02-28', FALSE, '2016-03-27', NULL);
INSERT INTO account_has_game VALUES (default, 1, 199, '2017-08-19', FALSE, '2019-02-15', NULL);
INSERT INTO account_has_game VALUES (default, 1, 60, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 3, 75, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 1, 61, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 1, 200, '2016-06-26', FALSE, '2016-06-26', NULL);
INSERT INTO account_has_game VALUES (default, 1, 201, '2015-03-01', FALSE, '2015-03-01', NULL);
INSERT INTO account_has_game VALUES (default, 1, 202, '2017-02-20', FALSE, '2017-02-20', NULL);
INSERT INTO account_has_game VALUES (default, 1, 62, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 1, 203, '2018-07-25', FALSE, '2018-08-19', NULL);
INSERT INTO account_has_game VALUES (default, 7, 91, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 7, 90, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 1, 204, '2018-06-25', FALSE, '2018-06-25', NULL);
INSERT INTO account_has_game VALUES (default, 1, 205, '2016-02-17', FALSE, '2016-02-17', NULL);
INSERT INTO account_has_game VALUES (default, 1, 206, '2016-12-19', FALSE, '2016-12-19', NULL);
INSERT INTO account_has_game VALUES (default, 1, 63, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 3, 76, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 1, 207, '2018-09-09', FALSE, '2018-09-09', NULL);
INSERT INTO account_has_game VALUES (default, 1, 64, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 1, 65, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 1, 208, '2019-02-03', FALSE, '2019-02-03', NULL);
INSERT INTO account_has_game VALUES (default, 1, 209, '2017-04-17', FALSE, '2017-11-30', NULL);
INSERT INTO account_has_game VALUES (default, 1, 210, '2018-08-05', FALSE, '2018-08-05', NULL);
INSERT INTO account_has_game VALUES (default, 1, 211, '2018-08-05', FALSE, '2018-08-05', NULL);
INSERT INTO account_has_game VALUES (default, 1, 212, '2018-08-09', FALSE, '2018-08-09', NULL);
INSERT INTO account_has_game VALUES (default, 1, 213, '2018-08-10', FALSE, '2018-08-10', NULL);
INSERT INTO account_has_game VALUES (default, 1, 214, '2018-08-20', FALSE, '2018-08-20', NULL);
INSERT INTO account_has_game VALUES (default, 1, 215, '2018-08-25', FALSE, '2018-08-25', NULL);
INSERT INTO account_has_game VALUES (default, 1, 216, '2019-01-03', FALSE, '2019-01-03', NULL);
INSERT INTO account_has_game VALUES (default, 1, 217, '2019-01-03', FALSE, '2019-01-03', NULL);
INSERT INTO account_has_game VALUES (default, 1, 218, '2019-01-05', FALSE, '2019-01-05', NULL);
INSERT INTO account_has_game VALUES (default, 1, 219, '2019-01-10', FALSE, '2019-01-10', NULL);
INSERT INTO account_has_game VALUES (default, 1, 220, '2019-01-11', FALSE, '2019-01-11', NULL);
INSERT INTO account_has_game VALUES (default, 10, 102, '2017-02-14', FALSE, '2017-02-14', NULL);
INSERT INTO account_has_game VALUES (default, 3, 103, NOW(), FALSE, '2018-05-20', NULL);
INSERT INTO account_has_game VALUES (default, 3, 5, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 3, 6, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 5, 10, '2016-11-02', TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 3, 119, NOW(), FALSE, '2018-12-22', NULL);
INSERT INTO account_has_game VALUES (default, 10, 123, NOW(), FALSE, '2016-10-29', NULL);
INSERT INTO account_has_game VALUES (default, 10, 78, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 10, 79, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 6, 18, '2019-01-08', TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 1, 127, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 3, 134, NOW(), FALSE, '2016-03-06', NULL);
INSERT INTO account_has_game VALUES (default, 6, 66, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 1, 46, '2016-01-10', TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 7, 183, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 2, 70, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 2, 72, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 3, 67, NOW(), TRUE, NULL, NULL);
INSERT INTO account_has_game VALUES (default, 8, 201, NOW(), FALSE, '2015-03-01', NULL);
INSERT INTO account_has_game VALUES (default, 10, 103, NOW(), FALSE, '2018-05-20', NULL);
INSERT INTO account_has_game VALUES (default, 9, 5, NOW(), TRUE, NULL, NULL);
SELECT * FROM account_has_game;

ALTER TABLE game ADD COLUMN name_visualization TEXT;
SELECT * FROM game ORDER BY name;

UPDATE game SET name_visualization = 'Carmageddon Max Pack' WHERE id IN (112, 114);
UPDATE game SET name_visualization = 'The Fall' WHERE id IN (133);
UPDATE game SET name_visualization = 'Lines X Free' WHERE id IN (150);
UPDATE game SET name_visualization = 'Lines X' WHERE id IN (149);
UPDATE game SET name_visualization = 'Lines Infinite' WHERE id IN (151);
