FROM mcr.microsoft.com/devcontainers/base:ubuntu

RUN apt-get update && apt-get install -y \
    curl git htop jq python3-pip docker.io docker-compose \
    && rm -rf /var/lib/apt/lists/*
