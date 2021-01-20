INSERT INTO users (firstName, lastName, email, password, is_admin, user_since)
VALUES ('Marcel', 'Mueller', 'mail.marcelm@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',  FALSE, CLOCK_TIMESTAMP()),
('Guest', 'Guest', 'guest@guest.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',  FALSE, CLOCK_TIMESTAMP());

INSERT INTO posts (user_id, title, content, category, posted_date)
VALUES (1, 'First Post', 'Testing post layouts', '#firstpost', CLOCK_TIMESTAMP()),
(1, 'Second Post', 'Testing post layouts', '#secondpost', CLOCK_TIMESTAMP());

INSERT INTO code_files (user_id, name, extension, content, shared) 
VALUES (1, 'test', 'js', 'let moveUp = string', true);


