-- Add a category column to store the type of cybersecurity tip.

ALTER TABLE items
ADD COLUMN category TEXT NOT NULL DEFAULT 'General';