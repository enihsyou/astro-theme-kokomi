# syntax=docker/dockerfile:1.7-labs
# 1.7-labs enable usage of COPY --parents

# This Dockerfile is designed to build and serve an Astro application.
# Building context is located at the root of the repository.
# Build with bun run build:docker or command:
# docker build -t astro-theme-kokomi .

# Stage 1: Build the Astro application
# This stage installs dependencies and builds your Astro project.
FROM oven/bun:slim AS builder

# Copy package.json and lock file
COPY package.json bun.lock  ./

# Install dependencies using npm ci for a clean and reproducible install
RUN bun install --frozen-lockfile --registry=https://registry.npmmirror.com

# Copy the rest of your Astro project code into the working directory
# Ensure you have a .dockerignore file to exclude node_modules, .git, etc.
# packages/* is not copied to make sure we are using published version.
COPY --parents src public ./

# Build the Astro application
RUN bun run build

# Stage 2: Serve the built application for deployment
FROM nginx:alpine AS deploy

# Copy the built static assets from the 'builder' stage.
COPY --from=builder /home/bun/app/dist /usr/share/nginx/html

# Expose the port that 'serve' will run on.
EXPOSE 80
