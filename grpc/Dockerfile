FROM rust:1.55-buster

# Postgres

RUN apt-get update
RUN apt-get install libpq-dev -y
RUN apt-get install -y clang libclang-dev

WORKDIR /usr/src/backend
COPY . .

#EXPOSE 13000
#RUN cargo install --path .
RUN rustup component add rustfmt

RUN cargo b

CMD ["cargo","r","--bin","mini-proj-server"]
