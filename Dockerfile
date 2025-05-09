# syntax=docker/dockerfile:1.7-labs
# 1.7-labs enable usage of COPY --parents

# This Dockerfile is designed to build and serve an Astro application.
# Building context is located at the root of the repository.
# Build with npm run docker:site or command:
# docker build -t astro-theme-kokomi/site -f packages/site/Dockerfile .

# Stage 1: Build the Astro application
# This stage installs dependencies and builds your Astro project.
FROM oven/bun:slim AS builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and lock file
COPY package.json  ./
COPY --parents packages/site/package.json ./

# Install dependencies using npm ci for a clean and reproducible install
RUN bun install --frozen-lockfile --registry=https://registry.npmmirror.com

# Copy the rest of your Astro project code into the /app directory
# Ensure you have a .dockerignore file to exclude node_modules, .git, etc.
COPY --parents packages/* ./

# Build the Astro application
# This command should correspond to the build script in your package.json,
# which typically executes 'astro build'.
RUN bun --cwd=packages/site run build
# The build output will be in /app/dist by default (or your configured outDir).

# Stage 2: Serve the built application for preview
# This stage takes the built assets and serves them using 'astro preview'.
FROM oven/bun:slim as deploy

# Set the working directory
WORKDIR /app

# Copy the built static assets from the 'builder' stage.
COPY --from=builder /app/packages/site/dist ./

# Expose the port that 'serve' will run on.
# 'vercel/serve' defaults to port 3000.
# If you need to use a different port, update this EXPOSE instruction
# and the port in the CMD instruction, as well as your 'docker run' port mapping.
EXPOSE 3000

# Command to run 'vercel/serve' to preview the site.
CMD ["bunx", "serve", "-l", "3000"]
