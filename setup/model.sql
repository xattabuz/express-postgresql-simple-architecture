-- Initialization (just copy and paste)

-- connect to another database 
\c postgres;

-- drop database if exists 
DROP DATABASE IF EXISTS test_db;

-- create database 
CREATE DATABASE test_db;

-- connect to databse look
\c test_db;

-------------------------------------------------------------------------------------------
-- Clean Architecture app model

-- Extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- user_roles table 
DROP TABLE IF EXISTS user_roles cascade;
CREATE TABLE user_roles(
	user_role_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
	user_role_name VARCHAR(50) DEFAULT 'user' UNIQUE,
  user_role_created_at TIMESTAMP DEFAULT current_timestamp,
	user_role_updated_at TIMESTAMP NULL,
  user_role_deleted_at TIMESTAMP NULL
);

-- users table 
DROP TABLE IF EXISTS users cascade;
CREATE TABLE users(
	user_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
	user_first_name VARCHAR(50) NOT NULL,
	user_last_name VARCHAR(20),
	user_phone_number VARCHAR(20) NOT NULL UNIQUE,
  user_password VARCHAR(50) NOT NULL,
	user_role_id UUID references user_roles(user_role_id),
	user_profile_image VARCHAR(30),
  user_created_at TIMESTAMP DEFAULT current_timestamp,
	user_updated_at TIMESTAMP NULL,
  user_deleted_at TIMESTAMP NULL
);