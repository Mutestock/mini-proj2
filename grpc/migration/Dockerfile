FROM python:3.9.4-slim

WORKDIR /usr/src/app


# install dependencies
RUN apt-get update && apt-get install -y --no-install-recommends netcat
RUN apt-get install libpq-dev sqlite3 -y

# Cython and psycopg2
ENV DEBIAN_FRONTEND noninteractive
RUN apt-get update && \
    apt-get -y install gcc mono-mcs && \
    rm -rf /var/lib/apt/lists/*


COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY . .


ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
RUN sqlite3 data/rest.db ".backup main backup:Sqlite"

# RUN nose2 -v

CMD ["python", "src/main.py"]
