# use the official Bun Docker Image
FROM oven/bun:latest

# install dependencies
RUN bun init
RUN bun install
RUN bun add express
RUN bun add body-parser

# copy application files to image
# COPY Source Dest
WORKDIR /home
COPY /backend .


# final configuration
EXPOSE 3000
CMD ["bun", "index.js"]