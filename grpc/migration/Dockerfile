FROM python:3.9.4-slim

WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y --no-install-recommends netcat
RUN apt-get install sqlite3 -y

ENV DEBIAN_FRONTEND noninteractive
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
COPY . .

RUN sqlite3 data/rest.db ".backup main backup:Sqlite"

CMD ["python", "src/main.py"]
