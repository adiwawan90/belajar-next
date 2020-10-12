-- UP
CREATE TABLE Person (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT
);

CREATE TABLE Vehicle (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    brand TEXT,
    model TEXT,
    ownerId INTEGER REFERENCES Person(id)
);

INSERT INTO Person (name, email) VALUES ('adi', 'adi@gmail.com');
INSERT INTO Person (name, email) VALUES ('wawan', 'wawan@gmail.com');

INSERT INTO Vehicle (brand, model, ownerId) VALUES ('Toyota', 'Alphard', 1);
INSERT INTO Vehicle (brand, model, ownerId) VALUES ('Mitsubisi', 'Pajero Sport', 1);
INSERT INTO Vehicle (brand, model, ownerId) VALUES ('Honda', 'CR-V', 2);
INSERT INTO Vehicle (brand, model, ownerId) VALUES ('Toyota', 'Fortuner', 2);

-- DOWN
DROP TABLE Person;
DROP TABLE Vehicle;
