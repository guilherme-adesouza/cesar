UPDATE player SET achievements_control = false;
ALTER TABLE player ALTER COLUMN achievements_control SET DEFAULT false,
                   ALTER COLUMN achievements_control SET NOT NULL;
ALTER TABLE player ALTER COLUMN active SET NOT NULL;
