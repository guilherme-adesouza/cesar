SELECT 
  *
  , CASE 
	WHEN id IN (85, 86, 87, 88, 89, 90, 91, 139)
	THEN 'PlayStation (PS3/PS4) - INSERT INTO account_has_game VALUES (default, 7, '||id||', NOW(), TRUE, NULL, NULL);'
	WHEN id IN (77, 78, 79, 80, 123, 163)
	THEN 'Origin (PC) - INSERT INTO account_has_game VALUES (default, 4, '||id||', NOW(), TRUE, NULL, NULL);'
	WHEN id IN (46, 70, 72, 120, 127, 157, 161, 162, 165, 188, 189)
	THEN 'Genérico - INSERT INTO account_has_game VALUES (default, 11, '||id||', NOW(), TRUE, NULL, NULL);'
	WHEN id IN (81, 82, 83, 84, 190)
	THEN 'Xbox (PC/Xbox/Xbox 360/Xbox One) - (fagiordani) - INSERT INTO account_has_game VALUES (default, 5, '||id||', NOW(), TRUE, NULL, NULL);'
	WHEN id IN (74, 75, 76, 135)
	THEN 'uPlay (PC) - INSERT INTO account_has_game VALUES (default, 3, '||id||', NOW(), TRUE, NULL, NULL);'
	WHEN id IN (71, 73)
	THEN 'RetroAchievements - INSERT INTO account_has_game VALUES (default, 2, '||id||', NOW(), TRUE, NULL, NULL);'
	ELSE 'Steam (PC) - INSERT INTO account_has_game VALUES (default, 1, '||id||', NOW(), TRUE, NULL, NULL);'
  END AS insert_command

  , CASE 
	WHEN id IN (78, 79, 102, 123)
	THEN 'Mídia Física - INSERT INTO account_has_game VALUES (default, 10, '||id||', NOW(), TRUE, NULL, NULL);'
	WHEN id IN (5, 6, 67, 103, 119, 134)
	THEN 'uPlay (PC) - INSERT INTO account_has_game VALUES (default, 3, '||id||', NOW(), TRUE, NULL, NULL);'
	WHEN id IN (10)
	THEN 'Xbox (PC/Xbox/Xbox 360/Xbox One) - (fagiordani) - INSERT INTO account_has_game VALUES (default, 5, '||id||', NOW(), TRUE, NULL, NULL);'
	WHEN id IN (18, 66)
	THEN 'Xbox (PC/Xbox/Xbox 360/Xbox One) - (thedetonator92) - INSERT INTO account_has_game VALUES (default, 6, '||id||', NOW(), TRUE, NULL, NULL);'
	WHEN id IN (46)
	THEN 'Steam (PC) - INSERT INTO account_has_game VALUES (default, 1, '||id||', NOW(), TRUE, NULL, NULL);'
	WHEN id IN (183)
	THEN 'PlayStation (PS3/PS4) - INSERT INTO account_has_game VALUES (default, 7, '||id||', NOW(), TRUE, NULL, NULL);'
	WHEN id IN (70, 72)
	THEN 'RetroAchievements - INSERT INTO account_has_game VALUES (default, 2, '||id||', NOW(), TRUE, NULL, NULL);'
	WHEN id IN (201)
	THEN 'Gog.com (PC) - INSERT INTO account_has_game VALUES (default, 8, '||id||', NOW(), TRUE, NULL, NULL);'
	ELSE null
  END AS insert_command_extra_a

  , CASE 
	WHEN id IN (103)
	THEN 'Mídia Física - INSERT INTO account_has_game VALUES (default, 10, '||id||', NOW(), TRUE, NULL, NULL);'
	WHEN id IN (5)
	THEN 'In-Game - INSERT INTO account_has_game VALUES (default, 9, '||id||', NOW(), TRUE, NULL, NULL);'
	ELSE null
  END AS insert_command_extra_b
FROM game
ORDER BY name;