INSERT INTO student(name) VALUES ('A00404948');
INSERT INTO student(name) VALUES ('A00403919');
INSERT INTO student(name) VALUES ('A00405130');
INSERT INTO student(name) VALUES ('A00401177');
INSERT INTO student(name) VALUES ('A00403805');
INSERT INTO student(name) VALUES ('A00403991');
INSERT INTO student(name) VALUES ('A00403824');
INSERT INTO student(name) VALUES ('A00165988');
INSERT INTO student(name) VALUES ('A00404859');
INSERT INTO student(name) VALUES ('A00403759');
INSERT INTO student(name) VALUES ('A00405233');
INSERT INTO student(name) VALUES ('A00404007');
INSERT INTO student(name) VALUES ('A00399398');
INSERT INTO student(name) VALUES ('A00404974');
INSERT INTO student(name) VALUES ('A00382970');
INSERT INTO student(name) VALUES ('A00404761');
INSERT INTO student(name) VALUES ('A00405459');
INSERT INTO student(name) VALUES ('A00381237');
INSERT INTO student(name) VALUES ('A00405663');
INSERT INTO student(name) VALUES ('A00354231');
INSERT INTO student(name) VALUES ('A00395262');
INSERT INTO student(name) VALUES ('A00399998');
INSERT INTO student(name) VALUES ('A00404647');
INSERT INTO student(name) VALUES ('A00404448');
INSERT INTO student(name) VALUES ('A00398845');
INSERT INTO student(name) VALUES ('A00401942');
INSERT INTO student(name) VALUES ('A00405514');
INSERT INTO student(name) VALUES ('A00402766');
INSERT INTO student(name) VALUES ('A00372826');
INSERT INTO student(name) VALUES ('A00403848');
INSERT INTO student(name) VALUES ('A00405079');
INSERT INTO student(name) VALUES ('A00403573');
INSERT INTO student(name) VALUES ('A00398838');
INSERT INTO student(name) VALUES ('A00399533');
INSERT INTO student(name) VALUES ('A00404665');

-- Insert the same 3 products for each new student
INSERT INTO products(product, description, price, quantity, image, student_id)
SELECT 'Notebook', 'Standard notebook', 5, 10, 'https://picsum.photos/300/300', id FROM student WHERE name IN (
    'A00404948', 'A00403919', 'A00405130', 'A00401177', 'A00403805', 'A00403991', 'A00403824', 'A00165988',
    'A00404859', 'A00403759', 'A00405233', 'A00404007', 'A00399398', 'A00404974', 'A00382970', 'A00404761',
    'A00405459', 'A00381237', 'A00405663', 'A00354231', 'A00395262', 'A00399998', 'A00404647', 'A00404448',
    'A00398845', 'A00401942', 'A00405514', 'A00402766', 'A00372826', 'A00403848', 'A00405079', 'A00403573',
    'A00398838', 'A00399533', 'A00404665'
);

INSERT INTO products(product, description, price, quantity, image, student_id)
SELECT 'Pen', 'Ballpoint pen', 1, 20, 'https://picsum.photos/300/300', id FROM student WHERE name IN (
    'A00404948', 'A00403919', 'A00405130', 'A00401177', 'A00403805', 'A00403991', 'A00403824', 'A00165988',
    'A00404859', 'A00403759', 'A00405233', 'A00404007', 'A00399398', 'A00404974', 'A00382970', 'A00404761',
    'A00405459', 'A00381237', 'A00405663', 'A00354231', 'A00395262', 'A00399998', 'A00404647', 'A00404448',
    'A00398845', 'A00401942', 'A00405514', 'A00402766', 'A00372826', 'A00403848', 'A00405079', 'A00403573',
    'A00398838', 'A00399533', 'A00404665'
);

INSERT INTO products(product, description, price, quantity, image, student_id)
SELECT 'Backpack', 'Durable backpack', 30, 5, 'https://picsum.photos/300/300', id FROM student WHERE name IN (
    'A00404948', 'A00403919', 'A00405130', 'A00401177', 'A00403805', 'A00403991', 'A00403824', 'A00165988',
    'A00404859', 'A00403759', 'A00405233', 'A00404007', 'A00399398', 'A00404974', 'A00382970', 'A00404761',
    'A00405459', 'A00381237', 'A00405663', 'A00354231', 'A00395262', 'A00399998', 'A00404647', 'A00404448',
    'A00398845', 'A00401942', 'A00405514', 'A00402766', 'A00372826', 'A00403848', 'A00405079', 'A00403573',
    'A00398838', 'A00399533', 'A00404665'
);


-- Insert 3 types of products
INSERT INTO types(type, description) VALUES ('Stationery', 'Products related to writing and office supplies');
INSERT INTO types(type, description) VALUES ('Bags', 'Various types of bags and backpacks');
INSERT INTO types(type, description) VALUES ('Accessories', 'Additional items for daily use');
INSERT INTO types(type, description) VALUES ('Home', 'Products for household use and decoration');
INSERT INTO types(type, description) VALUES ('Technology', 'Electronic devices and gadgets');
INSERT INTO types(type, description) VALUES ('Audio', 'Audio equipment and accessories');


-- Relationship between products and types
INSERT INTO products_type(products_id, type_id)
SELECT p.id, t.id
FROM products p
JOIN types t ON 
    (p.product = 'Notebook' AND t.type = 'Stationery') OR
    (p.product = 'Pen' AND t.type = 'Stationery') OR
    (p.product = 'Backpack' AND t.type = 'Bags');