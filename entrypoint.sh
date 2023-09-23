#!/bin/sh

# Prisma commands
yarn prisma generate
yarn prisma migrate dev

# Start your application
yarn dev
