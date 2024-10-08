CREATE TABLE `posts` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`description` text,
	`title` text,
	`published` boolean DEFAULT false,
	`createdAt` timestamp DEFAULT (now()),
	`user_id` int,
	CONSTRAINT `posts_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`email` text,
	`name` text,
	`password` text,
	CONSTRAINT `users_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `posts` ADD CONSTRAINT `posts_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE no action;